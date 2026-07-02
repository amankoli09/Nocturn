# Nocturn

> Confidential price negotiation on Midnight.

[![Built for Midnight](https://img.shields.io/badge/Built%20for-Midnight-111827?style=for-the-badge)](https://midnight.network/)
[![Compact](https://img.shields.io/badge/Contract-Compact-0f766e?style=for-the-badge)](https://docs.midnight.network/)
[![Zero Knowledge](https://img.shields.io/badge/Privacy-ZK%20Proofs-7c3aed?style=for-the-badge)](https://midnight.network/)
[![Level 1](https://img.shields.io/badge/Hackathon-Level%201-f59e0b?style=for-the-badge)](https://midnight.network/)

Nocturn is a private negotiation protocol for prices that should stay hidden until a deal actually exists.
It lets two parties prove whether a buyer's maximum and a seller's minimum overlap without revealing either limit to the chain, the platform, or the other party.

This is not an escrow app with a privacy layer.
It is a selective-disclosure contract for information asymmetry itself.

## Why Nocturn Exists

Negotiation breaks the moment one side is forced to reveal their real number.
If the buyer shows their ceiling, the seller anchors higher.
If the seller shows their floor, the buyer pressures lower.
Traditional on-chain tools cannot solve that because public ledgers make private limits visible by default.

Nocturn uses Midnight's selective disclosure model so the contract can decide exactly what becomes public:

- the negotiation exists
- its status is public
- the final agreed price is public only if the match succeeds
- the private limits never leave witness space

## Core Idea

Each party submits a private limit as a witness to a Compact contract:

- the buyer provides a maximum price
- the seller provides a minimum price
- the contract checks whether the values overlap
- if they do, it discloses one deal price and marks the negotiation as `Matched`
- if they do not, it marks the negotiation as `Failed` and reveals nothing about the gap

For this Level 1 build, the seller's minimum becomes the public deal price when a match exists.

The contract only reveals the outcome, never the inputs that produced it.

## How It Works

1. The seller opens a negotiation and publishes a `Pending` entry on-chain.
2. The buyer joins with a private maximum price.
3. A relayer, participant, or frontend action triggers the matching circuit.
4. The circuit verifies `buyerMax >= sellerMin`.
5. If the check passes, the agreed price is disclosed and status becomes `Matched`.
6. If the check fails, status becomes `Failed` with no leakage of the private numbers.

## Public vs Private Data

| Data | Visibility | Why |
| --- | --- | --- |
| Negotiation ID | Public | Lets both sides and observers reference the deal |
| Status | Public | Shows whether the negotiation is `Pending`, `Matched`, or `Failed` |
| Buyer maximum price | Private witness | This is the buyer's real leverage |
| Seller minimum price | Private witness | This is the seller's real leverage |
| Final agreed price | Public only on match | Required for settlement and transparency |
| Gap between offers | Never public | Would leak both private limits |

## Why Midnight Fits

Nocturn is a strong fit for Midnight because the protocol needs three things at once:

- private witness inputs for both negotiation limits
- public ledger state for status tracking and settlement
- deliberate disclosure of only the derived result

That combination is exactly what Midnight is designed to express.

## Architecture

```mermaid
flowchart LR
  B[Buyer wallet] --> C[negotiation.compact]
  S[Seller wallet] --> C
  C --> L[Public ledger state\nStatus + deal price]
  C --> W[Private witnesses\nbuyerMax + sellerMin]
  C --> D[disclose()\nOnly if overlap exists]
  F[Frontend] --> P[midnight-js providers]
  P --> N[Preprod node / indexer / proof server]
```

### Project Layout

- `contract/negotiation.compact` - Compact contract for private price matching
- `test/negotiation.test.ts` - Unit tests using `--skip-zk`
- `scripts/compile.sh` - Wrapper around `compact compile`
- `scripts/deploy.ts` - Deploy flow for Preview or Preprod
- `src/providers.ts` - Wallet, proof server, indexer, and node configuration
- `managed/negotiation/` - Generated compiler outputs and contract artifacts
- `docs/` - Screenshots and deployment artifacts

## Hackathon Roadmap

### Level 1: New Moon

- compile `negotiation.compact`
- prove match / no-match behavior with unit tests
- deploy to Preprod with a visible contract address
- document the concept clearly in this README

### Level 2

- add a minimal frontend for offer submission
- support configurable deal-price rules such as midpoint or seller-ask

### Level 3+

- connect settlement or shielded token transfer on match
- support counter-offers and multiple negotiation rounds
- add negotiation history or reputation without exposing past limits

## Risks and Tradeoffs

- **Price rule choice**: midpoint is fair, but it reveals more than a seller-ask rule.
- **Spam and probing**: repeated negotiations could be used to infer patterns over time.
- **Settlement scope**: this repository focuses on the decision layer first; payment flow can come later.

## Getting Started

This repository is organized for a Compact and Midnight workflow:

1. Install Node 22, Docker, and the Compact CLI.
2. Put the contract in `contract/negotiation.compact`.
3. Compile it with `scripts/compile.sh`.
4. Add tests in `test/negotiation.test.ts`.
5. Configure providers in `src/providers.ts`.
6. Deploy with `scripts/deploy.ts`.

### Local Commands

- `npm install`
- `npm test`
- `npm run typecheck`
- `bash scripts/compile.sh`

## Vision

Nocturn generalizes beyond price negotiation.
The same private-input, disclosed-only-if-matched pattern can be reused for:

- freelance rate negotiation
- B2B contracting
- real estate offers
- salary negotiation
- future matching workflows where only the outcome should be public

## Status

This is a Level 1 prototype scaffold for Midnight:

- contract logic first
- private negotiation inputs
- public outcome only when a match exists
- Preprod deployment path

---

If you want, I can also turn this into a more visual README with a tighter hero section, a demo section, and screenshot callouts once you add the contract output and deployment images.