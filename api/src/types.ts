/**
 * Shared types for the Nocturn negotiation DApp.
 *
 * These types define the ledger-visible (public) state and the provider
 * configuration for interacting with Midnight.
 */

import type { ContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
import type { Observable } from 'rxjs';

// ---------------------------------------------------------------------------
// Negotiation status mirrors the Compact ledger values:
//   0 = Pending  (openNegotiation called, no match yet)
//   1 = Matched  (buyerMax >= sellerMin — deal exists)
//   2 = Failed   (buyerMax < sellerMin — no deal)
// ---------------------------------------------------------------------------

export type NegotiationStatus = 'Pending' | 'Matched' | 'Failed';

const STATUS_MAP: Record<number, NegotiationStatus> = {
  0: 'Pending',
  1: 'Matched',
  2: 'Failed',
};

export function decodeStatus(raw: bigint | number): NegotiationStatus {
  return STATUS_MAP[Number(raw)] ?? 'Pending';
}

// ---------------------------------------------------------------------------
// The derived state exposed to the UI via an RxJS observable.
// agreedPrice is non-zero only when status === 'Matched'.
// ---------------------------------------------------------------------------

export interface NegotiationState {
  status: NegotiationStatus;
  agreedPrice: bigint;
  contractAddress: ContractAddress;
}

// ---------------------------------------------------------------------------
// Provider configuration.
// The proof server is always local (http://localhost:6300).
// Network endpoints are for Midnight Preprod.
// ---------------------------------------------------------------------------

export interface NocturnConfig {
  proofServerUrl: string;
  indexerUri: string;
  indexerWsUri: string;
  nodeUri: string;
  networkId: 'preprod' | 'preview' | 'local';
}

export const PREPROD_CONFIG: NocturnConfig = {
  proofServerUrl: 'http://127.0.0.1:6300',
  indexerUri: 'https://indexer.preprod.midnight.network/api/v4/graphql',
  indexerWsUri: 'wss://indexer.preprod.midnight.network/api/v4/graphql/ws',
  nodeUri: 'https://rpc.preprod.midnight.network',
  networkId: 'preprod',
};

// ---------------------------------------------------------------------------
// The deployed contract API surface exposed to the UI
// ---------------------------------------------------------------------------

export interface DeployedNocturnAPI {
  readonly contractAddress: ContractAddress;
  readonly state$: Observable<NegotiationState>;
  openNegotiation: () => Promise<void>;
  matchOffer: (buyerMax: bigint, sellerMin: bigint) => Promise<void>;
}
