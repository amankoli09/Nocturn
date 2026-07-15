/**
 * Shared types for the Nocturn negotiation DApp.
 *
 * These types define the ledger-visible (public) state and the provider
 * configuration for interacting with Midnight.
 */
const STATUS_MAP = {
    0: 'Pending',
    1: 'Matched',
    2: 'Failed',
};
export function decodeStatus(raw) {
    return STATUS_MAP[Number(raw)] ?? 'Pending';
}
export const PREPROD_CONFIG = {
    proofServerUrl: 'http://127.0.0.1:6300',
    indexerUri: 'https://indexer.preprod.midnight.network/api/v4/graphql',
    indexerWsUri: 'wss://indexer.preprod.midnight.network/api/v4/graphql/ws',
    nodeUri: 'https://rpc.preprod.midnight.network',
    networkId: 'preprod',
};
