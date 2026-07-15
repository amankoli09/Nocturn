'use client';

/**
 * NegotiationContext — manages Midnight contract state.
 *
 * Handles:
 *   - deploy a fresh negotiation contract on Preprod
 *   - join an existing contract by address
 *   - call openNegotiation() circuit
 *   - call matchOffer(buyerMax, sellerMin) circuit with ZK witnesses
 *   - subscribe to the contract's ledger state observable
 *
 * Privacy model:
 *   buyerMax and sellerMin are passed directly to the witness callbacks
 *   inside matchOffer(). They are used only to produce the ZK proof,
 *   then immediately discarded. They never appear in the signed transaction
 *   body, the indexer, or anywhere on the public ledger.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { Subscription } from 'rxjs';
import type { DeployedNocturnAPI, NegotiationState } from '@nocturn/api';
import type { ConnectedWalletAPI, ServiceConfig } from './WalletContext';

/* ── Context shape ── */

type TxPhase = 'idle' | 'proving' | 'submitting' | 'confirmed' | 'error';

interface NegotiationContextValue {
  contractAddress: string | null;
  negotiationState: NegotiationState | null;
  txPhase: TxPhase;
  txError: string | null;
  deploying: boolean;
  deployFresh: () => Promise<void>;
  joinExisting: (address: string) => Promise<void>;
  openNegotiation: () => Promise<void>;
  matchOffer: (buyerMax: bigint, sellerMin: bigint) => Promise<void>;
  resetTxState: () => void;
}

const NegotiationContext = createContext<NegotiationContextValue | null>(null);

/* ── Build providers from Lace ConnectedAPI ── */

async function buildMidnightProviders(
  connectedApi: ConnectedWalletAPI,
  serviceConfig: ServiceConfig,
  coinPublicKey: string,
  encryptionPublicKey: string,
) {
  // All imports are lazy (browser-only modules)
  const [
    { indexerPublicDataProvider },
    { FetchZkConfigProvider },
    { httpClientProofProvider },
    { levelPrivateStateProvider },
  ] = await Promise.all([
    import('@midnight-ntwrk/midnight-js-indexer-public-data-provider'),
    import('@midnight-ntwrk/midnight-js-fetch-zk-config-provider'),
    import('@midnight-ntwrk/midnight-js-http-client-proof-provider'),
    import('@midnight-ntwrk/midnight-js-level-private-state-provider'),
  ]);

  const indexerUri =
    serviceConfig.indexerUri ||
    'https://indexer.preprod.midnight.network/api/v4/graphql';
  const indexerWsUri =
    serviceConfig.indexerWsUri ||
    'wss://indexer.preprod.midnight.network/api/v4/graphql/ws';
  const proverServerUri =
    serviceConfig.proverServerUri || 'http://127.0.0.1:6300';

  /* 1. Public data provider — streams contract state */
  const publicDataProvider = indexerPublicDataProvider(indexerUri, indexerWsUri);

  /* 2. ZK config provider — fetches proving keys */
  const zkConfigProvider = new FetchZkConfigProvider<string>(proverServerUri);

  /* 3. Proof provider — generates ZK proofs */
  const proofProvider = httpClientProofProvider(proverServerUri, zkConfigProvider);

  /* 4. Private state provider — IndexedDB-backed, scoped per wallet */
  const rawPwd = coinPublicKey.replace(/[^a-zA-Z0-9]/g, '').slice(0, 28);
  const derivedPassword = rawPwd.length >= 16 ? rawPwd + 'Aa1!' : 'NocturnPrivacy1!Aa';

  const privateStateProvider = levelPrivateStateProvider({
    accountId: coinPublicKey,
    privateStoragePasswordProvider: async () => derivedPassword,
  });

  /* 5. Wallet provider — bridges Lace to the SDK */
  const walletProvider = {
    coinPublicKey,
    encryptionPublicKey,

    /**
     * balanceTx: receives the proven (unbound) transaction from the proof server,
     * serializes it to hex, asks Lace to balance/fee it, returns the balanced tx.
     */
    balanceTx: async (unboundTx: unknown): Promise<unknown> => {
      // Try multiple serialization strategies defensively
      let serialized: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tx = unboundTx as any;

      if (typeof tx === 'string') {
        // Already a hex string
        serialized = tx;
      } else if (typeof tx?.to_hex === 'function') {
        serialized = tx.to_hex();
      } else if (typeof tx?.toHex === 'function') {
        serialized = tx.toHex();
      } else if (typeof tx?.serialize === 'function') {
        const bytes: Uint8Array = tx.serialize();
        serialized = Array.from(bytes)
          .map((b) => (b as number).toString(16).padStart(2, '0'))
          .join('');
      } else if (tx?.transaction && typeof tx.transaction.serialize === 'function') {
        const bytes: Uint8Array = tx.transaction.serialize();
        serialized = Array.from(bytes)
          .map((b) => (b as number).toString(16).padStart(2, '0'))
          .join('');
      } else {
        throw new Error(
          'Cannot serialize transaction: no known serialization method found. ' +
            'Make sure the local proof server (Docker) is running: npm run proof:up',
        );
      }

      const { tx: balanced } = await connectedApi.balanceUnsealedTransaction(serialized, {
        payFees: true,
      });
      return balanced;
    },
  };

  /* 6. Midnight provider — submits balanced tx via Lace */
  const midnightProvider = {
    submitTx: async (finalizedTx: unknown): Promise<string> => {
      const txString = typeof finalizedTx === 'string' ? finalizedTx : String(finalizedTx);
      await connectedApi.submitTransaction(txString);
      return txString.slice(0, 64);
    },
  };

  return {
    publicDataProvider,
    privateStateProvider,
    zkConfigProvider,
    proofProvider,
    walletProvider,
    midnightProvider,
  };
}

/* ── Provider ── */

interface NegotiationProviderProps {
  children: ReactNode;
  connectedApi: ConnectedWalletAPI | null;
  serviceConfig: ServiceConfig | null;
  shieldedCoinPublicKey: string | null;
  shieldedEncryptionPublicKey: string | null;
}

export function NegotiationProvider({
  children,
  connectedApi,
  serviceConfig,
  shieldedCoinPublicKey,
  shieldedEncryptionPublicKey,
}: NegotiationProviderProps) {
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [negotiationState, setNegotiationState] = useState<NegotiationState | null>(null);
  const [txPhase, setTxPhase] = useState<TxPhase>('idle');
  const [txError, setTxError] = useState<string | null>(null);
  const [deploying, setDeploying] = useState(false);

  const apiRef = useRef<DeployedNocturnAPI | null>(null);
  const subscriptionRef = useRef<Subscription | null>(null);

  /* Attach contract and subscribe to state$ */
  const attachContract = useCallback((api: DeployedNocturnAPI) => {
    subscriptionRef.current?.unsubscribe();
    apiRef.current = api;
    setContractAddress(api.contractAddress);

    subscriptionRef.current = api.state$.subscribe({
      next: (state: unknown) => setNegotiationState(state as Parameters<typeof setNegotiationState>[0]),
      error: (err: unknown) => {
        console.error('[nocturn] state$ error:', err);
        setTxError('State subscription error: ' + String(err));
      },
    });
  }, []);

  /* Clean up subscription on unmount */
  useEffect(() => {
    return () => {
      subscriptionRef.current?.unsubscribe();
    };
  }, []);

  /* Build providers (throws if wallet not ready) */
  const getProviders = useCallback(async () => {
    if (!connectedApi || !serviceConfig || !shieldedCoinPublicKey || !shieldedEncryptionPublicKey) {
      throw new Error('Wallet not connected. Please connect your Lace wallet first.');
    }
    return buildMidnightProviders(
      connectedApi,
      serviceConfig,
      shieldedCoinPublicKey,
      shieldedEncryptionPublicKey,
    );
  }, [connectedApi, serviceConfig, shieldedCoinPublicKey, shieldedEncryptionPublicKey]);

  /* Deploy a fresh contract */
  const deployFresh = useCallback(async () => {
    setDeploying(true);
    setTxError(null);
    try {
      const providers = await getProviders();
      const { deployNegotiation } = await import('@nocturn/api');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const api = await deployNegotiation(providers as any);
      attachContract(api);
    } catch (err: unknown) {
      setTxError(err instanceof Error ? err.message : String(err));
    } finally {
      setDeploying(false);
    }
  }, [getProviders, attachContract]);

  /* Join an existing contract */
  const joinExisting = useCallback(async (address: string) => {
    setDeploying(true);
    setTxError(null);
    try {
      const providers = await getProviders();
      const { joinNegotiation } = await import('@nocturn/api');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const api = await joinNegotiation(providers as any, address);
      attachContract(api);
    } catch (err: unknown) {
      setTxError(err instanceof Error ? err.message : String(err));
    } finally {
      setDeploying(false);
    }
  }, [getProviders, attachContract]);

  /* Call openNegotiation circuit */
  const openNegotiation = useCallback(async () => {
    if (!apiRef.current) return;
    setTxPhase('proving');
    setTxError(null);
    try {
      setTxPhase('submitting');
      await apiRef.current.openNegotiation();
      setTxPhase('confirmed');
    } catch (err: unknown) {
      setTxPhase('error');
      setTxError(err instanceof Error ? err.message : String(err));
    }
  }, []);

  /* Call matchOffer circuit with private witnesses */
  const matchOffer = useCallback(async (buyerMax: bigint, sellerMin: bigint) => {
    if (!apiRef.current) return;
    setTxPhase('proving');
    setTxError(null);
    try {
      setTxPhase('submitting');
      // buyerMax and sellerMin enter the ZK witness here — never stored
      await apiRef.current.matchOffer(buyerMax, sellerMin);
      setTxPhase('confirmed');
    } catch (err: unknown) {
      setTxPhase('error');
      setTxError(err instanceof Error ? err.message : String(err));
    }
  }, []);

  const resetTxState = useCallback(() => {
    setTxPhase('idle');
    setTxError(null);
  }, []);

  const value = useMemo(
    () => ({
      contractAddress,
      negotiationState,
      txPhase,
      txError,
      deploying,
      deployFresh,
      joinExisting,
      openNegotiation,
      matchOffer,
      resetTxState,
    }),
    [
      contractAddress, negotiationState, txPhase, txError, deploying,
      deployFresh, joinExisting, openNegotiation, matchOffer, resetTxState,
    ],
  );

  return (
    <NegotiationContext.Provider value={value}>
      {children}
    </NegotiationContext.Provider>
  );
}

/* ── Hook ── */

export function useNegotiation(): NegotiationContextValue {
  const ctx = useContext(NegotiationContext);
  if (!ctx) throw new Error('useNegotiation must be used within NegotiationProvider');
  return ctx;
}
