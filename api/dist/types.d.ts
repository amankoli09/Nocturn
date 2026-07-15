/**
 * Shared types for the Nocturn negotiation DApp.
 *
 * These types define the ledger-visible (public) state and the provider
 * configuration for interacting with Midnight.
 */
import type { ContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
import type { Observable } from 'rxjs';
export type NegotiationStatus = 'Pending' | 'Matched' | 'Failed';
export declare function decodeStatus(raw: bigint | number): NegotiationStatus;
export interface NegotiationState {
    status: NegotiationStatus;
    agreedPrice: bigint;
    contractAddress: ContractAddress;
}
export interface NocturnConfig {
    proofServerUrl: string;
    indexerUri: string;
    indexerWsUri: string;
    nodeUri: string;
    networkId: 'preprod' | 'preview' | 'local';
}
export declare const PREPROD_CONFIG: NocturnConfig;
export interface DeployedNocturnAPI {
    readonly contractAddress: ContractAddress;
    readonly state$: Observable<NegotiationState>;
    openNegotiation: () => Promise<void>;
    matchOffer: (buyerMax: bigint, sellerMin: bigint) => Promise<void>;
}
//# sourceMappingURL=types.d.ts.map