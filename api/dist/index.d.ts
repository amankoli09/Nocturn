/**
 * Nocturn API — main entry point.
 *
 * Exposes `deployNegotiation` and `joinNegotiation` which return a
 * `DeployedNocturnAPI` instance. The API wraps the Compact-generated
 * contract bindings from `managed/negotiation/contract/index.js`.
 *
 * This module is consumed by:
 *   - The React UI (ui/) via WalletContext / NegotiationContext
 *   - The deploy script (scripts/deploy.ts)
 */
import type { ContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
import { type DeployedNocturnAPI } from './types.js';
export { PREPROD_CONFIG } from './types.js';
export type { DeployedNocturnAPI, NegotiationState, NocturnConfig } from './types.js';
export type { NegotiationWitnesses } from './witnesses.js';
export { createWitnesses, createStubWitnesses } from './witnesses.js';
export { decodeStatus } from './types.js';
/**
 * Deploys a fresh Nocturn negotiation contract and returns the API.
 * Outputs the contract address to the console for inclusion in the README.
 */
export declare function deployNegotiation(providers: any): Promise<DeployedNocturnAPI>;
/**
 * Connects to an existing Nocturn negotiation contract by address.
 */
export declare function joinNegotiation(providers: any, contractAddress: ContractAddress): Promise<DeployedNocturnAPI>;
export * from './types.js';
//# sourceMappingURL=index.d.ts.map