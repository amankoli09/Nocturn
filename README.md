# Nocturn
> Confidential price negotiation on the Midnight blockchain.

## Live Demo
<!-- PASTE LIVE URL HERE AFTER DEPLOYING TO VERCEL -->
[https://nocturn.vercel.app](https://nocturn.vercel.app)

## Contract Address

| Network | Address |
|---------|---------|
| Preprod | *Deploy via the UI and paste address here* |

## What This Does

Nocturn is a private negotiation protocol built on the Midnight blockchain. It enables two parties to cryptographically prove whether a buyer's maximum price and a seller's minimum price overlap — **without revealing either number** to the chain, the platform, or each other.

A buyer enters their ceiling price. A seller enters their floor price. The Compact ZK circuit proves `buyerMax >= sellerMin` without disclosing either value. The ledger only records the boolean outcome (Matched / Failed) and — only if Matched — the agreed settlement price.

## Privacy Claim

**What is PUBLIC on-chain:**
- The contract address on Midnight Preprod
- The negotiation status: `Pending`, `Matched`, or `Failed`
- The agreed settlement price (only if Matched — this is `sellerMin`)

**What is PRIVATE (ZK witnesses, never on-chain):**
- The buyer's absolute maximum ceiling price
- The seller's absolute minimum floor price
- The gap between them (if the negotiation fails)

**What is PROVED without revealing:**
> "I possess a `buyerMax` and `sellerMin` such that `buyerMax >= sellerMin`."

The witness values live only in the browser's memory for the duration of the proof generation. After `matchOffer()` resolves, they are discarded. An on-chain observer sees only the status and — at most — the agreed price; they cannot determine either party's private limit.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Contract | Compact language (Midnight) |
| Contract runtime | `@midnight-ntwrk/compact-runtime` |
| SDK | Midnight.js SDK v4.1.1 |
| DApp connector | Lace Wallet DApp Connector API v4 |
| Frontend | Next.js 14 (App Router, static export) |
| Styling | Vanilla CSS (glassmorphism) |
| Deployment | Vercel (static export) |
| Network | Midnight Preprod |

## Architecture

```
contract/negotiation.compact      ← Compact source
managed/negotiation/contract/     ← Compiled artifacts (committed)
api/src/
  ├── index.ts    ← deployNegotiation / joinNegotiation
  ├── types.ts    ← NegotiationState, NocturnConfig
  └── witnesses.ts← ZK witness callbacks (private values)
ui/src/
  ├── context/WalletContext.tsx   ← Lace DApp Connector
  ├── context/NegotiationContext.tsx ← SDK provider wiring
  └── components/ ← ConnectWallet, NegotiationPanel, PrivacyReceipt
```

## Prerequisites

- [Lace wallet](https://www.lace.io/) installed and set to **Preprod** network
- Node.js v22 (`nvm use`)
- Docker Desktop (for local ZK proof server)

## Run Locally

```bash
# 1. Clone
git clone https://github.com/amankoli09/Nocturn.git
cd Nocturn

# 2. Install dependencies
npm install

# 3. Build the API
npm run build --workspace=api

# 4. Start the local ZK proof server (Docker required)
npm run proof:up

# 5. Run the frontend dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser with the Lace extension installed.

## Deploy to Vercel

```bash
# Build static output locally first (optional)
npm run build

# Then push to GitHub and connect the repo to Vercel.
# Vercel will automatically run the build command from vercel.json.
```

## Demo Video
<!-- Add link after recording -->
[Demo video link — wallet connect + circuit call]

## Commits

This repository has 8+ meaningful commits documenting the Level 1 and Level 2 progress.

---

*Nocturn — Level 2 Waxing Crescent Submission*  
*New Moon to Full: $8,000 Prize Pool — Midnight Blockchain*
