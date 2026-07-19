/**
 * Nocturn Deploy Script
 * Deploys the negotiation contract to Midnight preview or preprod.
 *
 * Usage:
 *   npm run deploy                    # preview (default)
 *   npm run deploy -- --network preprod
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Args ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const netFlag = args.indexOf('--network');
const networkName: string = netFlag !== -1 ? args[netFlag + 1] : 'preview';

const NETWORKS: Record<string, {
  rpc: string; indexer: string; indexerWS: string;
  proofServer: string; faucet: string; networkId: string;
}> = {
  preview: {
    rpc: 'https://rpc.preview.midnight.network',
    indexer: 'https://indexer.preview.midnight.network/api/v1/graphql',
    indexerWS: 'wss://indexer.preview.midnight.network/api/v1/graphql/ws',
    proofServer: 'http://localhost:6300',
    faucet: 'https://faucet.preview.midnight.network',
    networkId: 'preview',
  },
  preprod: {
    rpc: 'https://rpc.preprod.midnight.network',
    indexer: 'https://indexer.preprod.midnight.network/api/v1/graphql',
    indexerWS: 'wss://indexer.preprod.midnight.network/api/v1/graphql/ws',
    proofServer: 'http://localhost:6300',
    faucet: 'https://faucet.preprod.midnight.network',
    networkId: 'preprod',
  },
};

const net = NETWORKS[networkName];
if (!net) { console.error(`Unknown network: ${networkName}`); process.exit(1); }

const STATE_FILE = path.join(ROOT, `.midnight-deploy-${networkName}.json`);
const CONTRACT_FILE = path.join(ROOT, `.midnight-contract-${networkName}.json`);
const MANAGED_PATH = path.join(ROOT, 'managed', 'negotiation', 'contract');

// ── Banner ──────────────────────────────────────────────────────────────────
console.log('');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log(`║  🌒 Nocturn — Deploy to ${networkName.padEnd(37)}║`);
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

// ── Verify compiled contract ────────────────────────────────────────────────
if (!fs.existsSync(path.join(MANAGED_PATH, 'index.js'))) {
  console.error('❌  Compiled contract not found. Run: npm run compile');
  process.exit(1);
}

// ── Dynamic SDK imports ─────────────────────────────────────────────────────
const { NetworkId } = await import('@midnight-ntwrk/wallet-sdk');
const { setNetworkId } = await import('@midnight-ntwrk/midnight-js-network-id');
const { FluentWalletBuilder } = await import('@midnight-ntwrk/testkit-js');
const { indexerPublicDataProvider } = await import('@midnight-ntwrk/midnight-js-indexer-public-data-provider');
const { httpClientProofProvider } = await import('@midnight-ntwrk/midnight-js-http-client-proof-provider');
const { levelPrivateStateProvider } = await import('@midnight-ntwrk/midnight-js-level-private-state-provider');
const { deployContract, Contract } = await import('@midnight-ntwrk/midnight-js-contracts');
const { NodeZkConfigProvider } = await import('@midnight-ntwrk/midnight-js-node-zk-config-provider');

// Set network
const networkIdEnum = (NetworkId.NetworkId as any)[networkName === 'preprod' ? 'PreProd' : 'Preview'];
setNetworkId(networkIdEnum);

// ── Load compiled contract module ───────────────────────────────────────────
const contractModule = await import(path.join(MANAGED_PATH, 'index.js'));
const witnesses = contractModule.witnesses ?? contractModule.NegotiationContract?.witnesses ?? {};

// ── Wallet ──────────────────────────────────────────────────────────────────
console.log('─── Wallet setup ───────────────────────────────────────────────');
console.log('');

let seed: string;
if (fs.existsSync(STATE_FILE)) {
  const saved = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
  seed = saved.seed;
  console.log(`  ♻  Reusing seed from ${STATE_FILE}`);
} else {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  seed = Buffer.from(bytes).toString('hex');
}

const envConfig = {
    walletNetworkId: networkIdEnum,
    networkId: net.networkId,
    indexer: net.indexer,
    indexerWS: net.indexerWS,
    node: net.rpc,
    nodeWS: net.rpc.replace('https://', 'wss://').replace('http://', 'ws://'),
    proofServer: net.proofServer,
    faucet: net.faucet,
};

const walletBuilder = FluentWalletBuilder.forEnvironment(envConfig).withSeed(seed);
const wallet = await walletBuilder.build();

console.log('  Starting wallet sync with network...');
await wallet.start();

const walletState = await wallet.state();
const address = walletState.address ?? walletState.unshieldedAddress ?? 'unknown';
const balance = walletState.totalCoinBalance ?? walletState.balanceSummary?.totalCoinBalance ?? BigInt(0);

if (!fs.existsSync(STATE_FILE)) {
  fs.writeFileSync(STATE_FILE, JSON.stringify({ seed, address, network: networkName }, null, 2));
  console.log(`  ✓  Wallet created. Seed saved to ${STATE_FILE}`);
}

console.log('');
console.log(`  Wallet Address: ${address}`);
console.log(`  Balance:        ${balance} tNight`);
console.log('');

// ── Fund check ──────────────────────────────────────────────────────────────
if (balance === BigInt(0)) {
  console.log('─── Fund Wallet ────────────────────────────────────────────────');
  console.log('');
  console.log(`  Wallet address: ${address}`);
  console.log(`  Faucet:         ${net.faucet}`);
  console.log('');
  console.log('  Waiting for tNIGHT to arrive (poll every 10s)...');

  const deadline = Date.now() + 10 * 60 * 1000;
  let funded = false;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 10_000));
    // wallet syncs automatically in the background after start()
    const s = await wallet.state();
    const b = s.totalCoinBalance ?? s.balanceSummary?.totalCoinBalance ?? BigInt(0);
    if (b > BigInt(0)) {
      funded = true;
      console.log(`\n  ✓  Funded with ${b} tNight — deploying...\n`);
      break;
    }
    const elapsed = Math.round((Date.now() - (deadline - 600_000)) / 1000);
    process.stdout.write(`\r  ...still waiting (${elapsed}s elapsed)   `);
  }

  if (!funded) {
    console.log('\n  ❌ Funding not received within 10 min.');
    console.log(`  Address: ${address}`);
    console.log(`  Re-run: npm run deploy — your seed is preserved.\n`);
    process.exit(1);
  }
}

// ── Deploy ──────────────────────────────────────────────────────────────────
console.log('─── Deploying contract ─────────────────────────────────────────');
console.log('');
console.log('  Generating ZK proof for deployment (may take 1–2 min)...');

const providers = {
  privateStateProvider: levelPrivateStateProvider({
    dbPath: path.join(ROOT, `.midnight-private-${networkName}`)
  }),
  zkConfigProvider: new NodeZkConfigProvider(MANAGED_PATH),
  proofProvider: httpClientProofProvider(net.proofServer),
  publicDataProvider: indexerPublicDataProvider(net.indexer, net.indexerWS),
  walletProvider: wallet,
  midnightProvider: wallet,
};

const contract = new Contract(witnesses);
const deployed = await deployContract(providers, {
  contract,
  privateStateKey: 'nocturn',
  initialPrivateState: {},
});

const contractAddress = deployed.deployTxData.public.contractAddress;

console.log('');
console.log('  ✅  Contract deployed!');
console.log('');
console.log('  ┌─────────────────────────────────────────────────────────┐');
console.log(`  │  CONTRACT ADDRESS:                                       │`);
console.log(`  │  ${contractAddress.padEnd(57)}│`);
console.log('  └─────────────────────────────────────────────────────────┘');
console.log('');
console.log(`  Network: ${networkName}`);
console.log('  → Paste the address above into README.md');
console.log('  → Add to .env: VITE_CONTRACT_ADDRESS=' + contractAddress);
console.log('');

fs.writeFileSync(CONTRACT_FILE, JSON.stringify({
  contractAddress, network: networkName,
  deployedAt: new Date().toISOString()
}, null, 2));
console.log(`  Saved to ${CONTRACT_FILE}`);

await wallet.close?.();
