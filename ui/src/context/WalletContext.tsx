/**
 * WalletContext — manages Lace wallet connection state.
 *
 * Uses the Midnight DApp Connector API:
 *   window.midnight.mnLace.connect('preprod')
 *
 * Privacy note: this context holds NO private negotiation data.
 * It only manages the wallet connection lifecycle and exposes the
 * providers needed by NegotiationContext to submit transactions.
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

// ---------------------------------------------------------------------------
// Types from the DApp Connector API
// We declare the minimal shape we need; the full types come from
// @midnight-ntwrk/dapp-connector-api but we keep this lightweight for the UI.
// ---------------------------------------------------------------------------

type NetworkId = 'preprod' | 'preview' | 'undeployed';

interface MidnightWalletAPI {
  connect: (networkId: NetworkId) => Promise<EnabledWalletAPI>;
  isEnabled: () => Promise<boolean>;
  apiVersion: string;
  name: string;
  icon: string;
}

interface EnabledWalletAPI {
  state: () => Promise<WalletState>;
  submitTx: (tx: unknown) => Promise<string>;
  coinPublicKey: () => Promise<string>;
  encryptionPublicKey: () => Promise<string>;
}

interface WalletState {
  address: string;
}

declare global {
  interface Window {
    midnight?: {
      mnLace?: MidnightWalletAPI;
    };
  }
}

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface WalletContextValue {
  /** Whether Lace wallet is connected */
  connected: boolean;
  /** Wallet address (unshielded), or null if not connected */
  walletAddress: string | null;
  /** The enabled wallet API, or null if not connected */
  enabledApi: EnabledWalletAPI | null;
  /** Connection in progress */
  connecting: boolean;
  /** Last connection error message */
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [enabledApi, setEnabledApi] = useState<EnabledWalletAPI | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Re-check on mount in case the user previously approved the DApp
  useEffect(() => {
    const lace = window.midnight?.mnLace;
    if (!lace) return;
    lace.isEnabled().then((enabled) => {
      if (enabled) {
        // Auto-reconnect silently
        lace.connect('preprod').then(async (api) => {
          const state = await api.state();
          setEnabledApi(api);
          setWalletAddress(state.address);
          setConnected(true);
        }).catch(() => {/* silent — user may need to re-approve */});
      }
    }).catch(() => {/* wallet may not be injected yet */});
  }, []);

  const connect = useCallback(async () => {
    setError(null);
    setConnecting(true);

    try {
      const lace = window.midnight?.mnLace;
      if (!lace) {
        throw new Error(
          'Lace wallet not found. Install the Lace extension and set it to Preprod network.',
        );
      }

      const api = await lace.connect('preprod');
      const state = await api.state();

      setEnabledApi(api);
      setWalletAddress(state.address);
      setConnected(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setWalletAddress(null);
    setEnabledApi(null);
    setError(null);
  }, []);

  const value = useMemo(
    () => ({ connected, walletAddress, enabledApi, connecting, error, connect, disconnect }),
    [connected, walletAddress, enabledApi, connecting, error, connect, disconnect],
  );

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useWallet(): WalletContextValue {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}
