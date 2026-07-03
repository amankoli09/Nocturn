/**
 * NegotiationContext — manages Midnight contract state.
 *
 * Handles:
 *   - deploy a fresh negotiation contract
 *   - join an existing contract by address
 *   - call openNegotiation() circuit
 *   - call matchOffer(buyerMax, sellerMin) circuit
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
import { PREPROD_CONFIG } from '@nocturn/api';

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Helper: build lightweight providers from the enabled Lace wallet API
// We adapt the wallet API to the shape expected by midnight-js-contracts.
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildProviders(enabledApi: any) {
  return {
    walletProvider: {
      submitTx: enabledApi.submitTx.bind(enabledApi),
      coinPublicKey: enabledApi.coinPublicKey,
    },
    publicDataProvider: {
      // Indexer calls go to Preprod — these are resolved inside the contract layer
      indexerUri: PREPROD_CONFIG.indexerUri,
      indexerWsUri: PREPROD_CONFIG.indexerWsUri,
    },
    proofProvider: {
      proofServerUrl: PREPROD_CONFIG.proofServerUrl,
    },
    zkConfigProvider: {
      proofServerUrl: PREPROD_CONFIG.proofServerUrl,
    },
    midnightCoinPublicKey: enabledApi.coinPublicKey,
  };
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface NegotiationProviderProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  enabledWalletApi: any | null;
}

export function NegotiationProvider({
  children,
  enabledWalletApi,
}: NegotiationProviderProps) {
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [negotiationState, setNegotiationState] = useState<NegotiationState | null>(null);
  const [txPhase, setTxPhase] = useState<TxPhase>('idle');
  const [txError, setTxError] = useState<string | null>(null);
  const [deploying, setDeploying] = useState(false);

  const apiRef = useRef<DeployedNocturnAPI | null>(null);
  const subscriptionRef = useRef<Subscription | null>(null);

  // Subscribe to state$ observable when a contract is loaded
  const attachContract = useCallback((api: DeployedNocturnAPI) => {
    subscriptionRef.current?.unsubscribe();
    apiRef.current = api;
    setContractAddress(api.contractAddress);

    subscriptionRef.current = api.state$.subscribe({
      next: (state) => setNegotiationState(state),
      error: (err) => {
        console.error('[negotiation] state$ error:', err);
        setTxError('State subscription error: ' + String(err));
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      subscriptionRef.current?.unsubscribe();
    };
  }, []);

  const deployFresh = useCallback(async () => {
    if (!enabledWalletApi) return;
    setDeploying(true);
    setTxError(null);
    try {
      const { deployNegotiation } = await import('@nocturn/api');
      const providers = buildProviders(enabledWalletApi);
      const api = await deployNegotiation(providers as Parameters<typeof deployNegotiation>[0]);
      attachContract(api);
    } catch (err: unknown) {
      setTxError(err instanceof Error ? err.message : String(err));
    } finally {
      setDeploying(false);
    }
  }, [enabledWalletApi, attachContract]);

  const joinExisting = useCallback(async (address: string) => {
    if (!enabledWalletApi) return;
    setDeploying(true);
    setTxError(null);
    try {
      const { joinNegotiation } = await import('@nocturn/api');
      const providers = buildProviders(enabledWalletApi);
      const api = await joinNegotiation(
        providers as Parameters<typeof joinNegotiation>[0],
        address,
      );
      attachContract(api);
    } catch (err: unknown) {
      setTxError(err instanceof Error ? err.message : String(err));
    } finally {
      setDeploying(false);
    }
  }, [enabledWalletApi, attachContract]);

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

  const matchOffer = useCallback(async (buyerMax: bigint, sellerMin: bigint) => {
    if (!apiRef.current) return;
    setTxPhase('proving');
    setTxError(null);
    try {
      // buyerMax and sellerMin are passed into the ZK witness here.
      // After matchOffer() resolves, they are not stored anywhere.
      setTxPhase('submitting');
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

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useNegotiation(): NegotiationContextValue {
  const ctx = useContext(NegotiationContext);
  if (!ctx) throw new Error('useNegotiation must be used within NegotiationProvider');
  return ctx;
}
