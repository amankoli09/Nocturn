# Nocturn
> Confidential price negotiation on the Midnight blockchain.

## Live Demo
[PASTE LIVE URL AFTER DEPLOYING FRONTEND]

## Contract Address
| Network  | Address                          |
|----------|----------------------------------|
| Preprod  | [PASTE CONTRACT ADDRESS HERE]    |

## What This Does
Nocturn is a private negotiation protocol for prices that should stay hidden until a mutual agreement is reached. It enables two parties to cryptographically prove whether a buyer's maximum and a seller's minimum overlap — without revealing either limit to the chain, the platform, or each other.

## Privacy Model
- **What is PUBLIC:** The unique Negotiation ID, the status of the negotiation (Pending, Matched, or Failed), and the agreed-upon settlement price if a match occurs.
- **What is PRIVATE:** The buyer's absolute maximum ceiling price and the seller's absolute minimum floor price.
- **What the user PROVES without revealing:** "I possess a buyerMax and sellerMin such that buyerMax >= sellerMin."

## Privacy Claim
An on-chain observer can see that two parties engaged in a negotiation and whether it succeeded or failed (with the final price if matched). However, the observer cannot see the actual thresholds of either party, nor can they deduce the unfulfilled gap if the negotiation fails.

## Tech Stack
Midnight network, Compact, Midnight.js SDK, React/Vite, Lace wallet

## Prerequisites
- Lace wallet installed (configured for Midnight Preprod)
- Node.js v22
- Docker Desktop (for local ZK proof server)

## Run Locally
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Nocturn
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Compile the contract:**
   ```bash
   npm run compile
   ```
4. **Build the API:**
   ```bash
   npm run build
   ```
5. **Start the local ZK Proof Server (Docker required):**
   ```bash
   npm run proof:up
   ```
6. **Run the local frontend:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Demo Video
[PLACEHOLDER — I will add the link after recording]
