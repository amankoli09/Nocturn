# Nocturn

> Privacy-Preserving Over-the-Counter Trading on Midnight.

## Live Demo
🚀 **[View on Vercel](https://nocturn.vercel.app)**
*(Note: If Vercel assigns a different URL during deployment, update this link!)*

## Contract Address
| Network  | Address                          |
|----------|----------------------------------|
| Preprod  | 0277bd22bba6c761922c091932375cdcfc5ec7cc52fccce89cfbd5d0d8bb6361a2  |

## What This Does
Nocturn allows a buyer and a seller to negotiate an asset price on-chain without revealing their limits to the public or to each other. The buyer sets a maximum price, and the seller sets a minimum price. The smart contract utilizes a Zero-Knowledge circuit to mathematically prove whether the buyer's maximum is greater than or equal to the seller's minimum, automatically settling the trade if they overlap.

## Privacy Model
- **What is PUBLIC:** The negotiation status (Open, Matched, No Deal) and the final agreed price (only if a match occurs).
- **What is PRIVATE:** The buyer's maximum price and the seller's minimum price.
- **What the user PROVES without revealing:** They prove that their hidden price satisfies the overlap condition (`buyerMax >= sellerMin`) without ever exposing the actual numerical value of their limits.

## Privacy Claim
An on-chain observer can see when a negotiation starts and whether it resulted in a match or not. If a match occurs, the observer sees the final agreed settlement price. The observer **cannot see** what the buyer was actually willing to pay or what the seller was actually willing to accept, ensuring optimal trading execution without leaking market intelligence.

## Tech Stack
Midnight network, Compact, Midnight.js SDK, React/Vite, Lace wallet

## Prerequisites
- Lace wallet installed (Midnight edition)
- Node.js v22

## Run Locally
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the local URL in a browser with the Lace extension installed.

## Demo Video
[PLACEHOLDER]
