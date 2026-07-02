export type NetworkProviders = {
  walletRpcUrl: string;
  proofServerUrl: string;
  indexerUrl: string;
  nodeUrl: string;
};

export const providers: NetworkProviders = {
  walletRpcUrl: process.env.NOCTURN_WALLET_RPC_URL ?? 'http://localhost:9944',
  proofServerUrl: process.env.NOCTURN_PROOF_SERVER_URL ?? 'http://localhost:3000',
  indexerUrl: process.env.NOCTURN_INDEXER_URL ?? 'http://localhost:8080',
  nodeUrl: process.env.NOCTURN_NODE_URL ?? 'http://localhost:7000'
};