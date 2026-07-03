/**
 * Witness callbacks for the Nocturn negotiation contract.
 *
 * In Midnight's privacy model, witnesses are values the prover knows privately.
 * They are used inside circuits to produce a ZK proof, but they are NEVER
 * written to the public ledger. This module holds them in JS closure scope —
 * they exist only in the browser's memory for the lifetime of the call.
 *
 * Privacy claim:
 *   The ZK circuit proves `buyerMax >= sellerMin` without revealing either
 *   value on-chain. The ledger receives only the boolean outcome (status) and,
 *   if Matched, the agreed price (sellerMin). The gap between the two limits
 *   and the buyer's ceiling are never disclosed.
 */

export interface NegotiationWitnesses {
  /**
   * Returns the buyer's maximum price.
   * This value stays in witness space; it never appears in the transaction body.
   */
  buyerMaxPrice: () => bigint;

  /**
   * Returns the seller's minimum price.
   * This value stays in witness space; it never appears in the transaction body.
   */
  sellerMinPrice: () => bigint;
}

/**
 * Creates witness callbacks from UI-provided values.
 * Call this immediately before invoking `matchOffer` so the closures are
 * as short-lived as possible.
 */
export function createWitnesses(buyerMax: bigint, sellerMin: bigint): NegotiationWitnesses {
  return {
    buyerMaxPrice: () => buyerMax,
    sellerMinPrice: () => sellerMin,
  };
}

/**
 * Stub witnesses used when only `openNegotiation` is called.
 * The open circuit does not invoke either witness, so these are safe placeholders.
 */
export function createStubWitnesses(): NegotiationWitnesses {
  return {
    buyerMaxPrice: () => 0n,
    sellerMinPrice: () => 0n,
  };
}
