'use client';

/**
 * WalletContext — Lace wallet connection for Midnight Preprod.
 *
 * DApp Connector API v4:
 *   window.midnight.mnLace.connect('preprod')  →  ConnectedAPI
 *
 * Privacy note: this context holds NO private negotiation data.
 * It only manages the wallet connection lifecycle and exposes
 * the providers needed by NegotiationContext.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

/* ── DApp Connector API v4 types ── */

export interface ServiceConfig {
  indexerUri: string;
  indexerWsUri: string;
  proverServerUri: string;
  substrateNodeUri: string;
  networkId?: string;
}

export interface ShieldedAddresses {
  coinPublicKey: string;
  encryptionPublicKey: string;
  address: string;
}

export interface ConnectedWalletAPI {
  getShieldedAddresses(): Promise<ShieldedAddresses>;
  getUnshieldedAddress(): Promise<{ unshieldedAddress: string }>;
  getConfiguration(): Promise<ServiceConfig>;
  balanceUnsealedTransaction(tx: string, options?: { payFees?: boolean }): Promise<{ tx: string }>;
  submitTransaction(tx: string): Promise<void>;
  getConnectionStatus(): Promise<
    { status: 'connected'; networkId: string } | { status: 'disconnected' }
  >;
}

interface InitialWalletAPI {
  connect(networkId: string): Promise<ConnectedWalletAPI>;
  apiVersion: string;
  name: string;
  icon: string;
}

declare global {
  interface Window {
    midnight?: Record<string, InitialWalletAPI | undefined>;
  }
}

/* ── Context shape ── */

export interface WalletContextValue {
  connected: boolean;
  walletAddress: string | null;
  shieldedCoinPublicKey: string | null;
  shieldedEncryptionPublicKey: string | null;
  connectedApi: ConnectedWalletAPI | null;
  serviceConfig: ServiceConfig | null;
  connecting: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

/* ── Helper: poll for Lace injection ── */

async function waitForLace(timeoutMs = 10_000): Promise<InitialWalletAPI> {
  const interval = 200;
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const lace = window.midnight?.mnLace;
    if (lace) return lace;
    await new Promise((r) => setTimeout(r, interval));
  }
  throw new Error(
    'Lace wallet not found after 10 seconds. ' +
      'Please install the Lace extension and switch it to Preprod network.',
  );
}

/* ── Provider ── */

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [shieldedCoinPublicKey, setShieldedCoinPublicKey] = useState<string | null>(null);
  const [shieldedEncryptionPublicKey, setShieldedEncryptionPublicKey] = useState<string | null>(null);
  const [connectedApi, setConnectedApi] = useState<ConnectedWalletAPI | null>(null);
  const [serviceConfig, setServiceConfig] = useState<ServiceConfig | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* Try silent reconnect on mount if Lace is already approved */
  useEffect(() => {
    const lace = window.midnight?.mnLace;
    if (!lace) return;

    (async () => {
      try {
        const api = await lace.connect('preprod');
        const status = await api.getConnectionStatus();
        if (status.status !== 'connected') return;

        const [addrs, cfg] = await Promise.all([
          api.getShieldedAddresses(),
          api.getConfiguration(),
        ]);

        setConnectedApi(api);
        setServiceConfig(cfg);
        setWalletAddress(addrs.address);
        setShieldedCoinPublicKey(addrs.coinPublicKey);
        setShieldedEncryptionPublicKey(addrs.encryptionPublicKey);
        setConnected(true);
      } catch {
        /* silent — user hasn't approved yet */
      }
    })();
  }, []);

  const connect = useCallback(async () => {
    setError(null);
    setConnecting(true);

    try {
      const lace = await waitForLace();
      const api = await lace.connect('preprod');

      const status = await api.getConnectionStatus();
      if (status.status !== 'connected') {
        throw new Error('Wallet connected but returned disconnected status. Please try again.');
      }
      if (status.networkId && status.networkId !== 'preprod') {
        throw new Error(
          `Lace is connected to "${status.networkId}" network. ` +
            'Please switch Lace to Preprod and try again.',
        );
      }

      const [addrs, cfg] = await Promise.all([
        api.getShieldedAddresses(),
        api.getConfiguration(),
      ]);

      setConnectedApi(api);
      setServiceConfig(cfg);
      setWalletAddress(addrs.address);
      setShieldedCoinPublicKey(addrs.coinPublicKey);
      setShieldedEncryptionPublicKey(addrs.encryptionPublicKey);
      setConnected(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setWalletAddress(null);
    setShieldedCoinPublicKey(null);
    setShieldedEncryptionPublicKey(null);
    setConnectedApi(null);
    setServiceConfig(null);
    setError(null);
  }, []);

  const value = useMemo(
    () => ({
      connected,
      walletAddress,
      shieldedCoinPublicKey,
      shieldedEncryptionPublicKey,
      connectedApi,
      serviceConfig,
      connecting,
      error,
      connect,
      disconnect,
    }),
    [
      connected, walletAddress, shieldedCoinPublicKey, shieldedEncryptionPublicKey,
      connectedApi, serviceConfig, connecting, error, connect, disconnect,
    ],
  );

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

/* ── Hook ── */

export function useWallet(): WalletContextValue {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}
