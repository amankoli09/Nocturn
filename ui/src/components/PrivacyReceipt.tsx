/**
 * PrivacyReceipt — documents what the ZK proof revealed and concealed.
 *
 * This is the "observable privacy behaviour" required by Level 2.
 * It makes the privacy claim explicit and auditable in the UI.
 */

import React from 'react';
import type { NegotiationStatus } from '@nocturn/api';

interface PrivacyReceiptProps {
  status: NegotiationStatus;
  agreedPrice: bigint;
  contractAddress: string;
  buyerMaxWasSet: boolean;
  sellerMinWasSet: boolean;
}

export function PrivacyReceipt({
  status,
  agreedPrice,
  contractAddress,
  buyerMaxWasSet,
  sellerMinWasSet,
}: PrivacyReceiptProps) {
  return (
    <div className="privacy-receipt animate-slide-up">
      <div className="receipt-header">
        <span>🧾</span>
        <span>ZK Privacy Receipt</span>
      </div>

      {/* Outcome */}
      {status === 'Matched' && (
        <div className="price-reveal animate-fade-in">
          <p className="price-reveal__label">✅ Deal Agreed — Disclosed On-Chain</p>
          <p className="price-reveal__value">{agreedPrice.toString()}</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--status-matched)', opacity: 0.7 }}>
            (seller's minimum — the agreed settlement price)
          </p>
        </div>
      )}

      {status === 'Failed' && (
        <div className="failed-notice animate-fade-in">
          <strong>No Deal.</strong>
          <br />
          The ZK proof confirmed <em>buyerMax &lt; sellerMin</em> without revealing either number.
          <br />
          The gap, the buyer's ceiling, and the seller's floor remain private.
        </div>
      )}

      {/* Disclosure table */}
      <div className="receipt-proof-line">
        <strong>Proof statement:</strong> The circuit verified{' '}
        <code>buyerMax {'≥'} sellerMin</code> is{' '}
        <strong>{status === 'Matched' ? 'TRUE' : 'FALSE'}</strong>.
        Neither value appeared in the transaction body or on the ledger.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div className="receipt-row">
          <span className="receipt-key">Negotiation ID (contract)</span>
          <span className="receipt-val-public" style={{ fontSize: '0.72rem', maxWidth: '60%', textAlign: 'right', wordBreak: 'break-all' }}>
            {contractAddress.slice(0, 20)}…
          </span>
        </div>

        <div className="receipt-row">
          <span className="receipt-key">Outcome status</span>
          <span className="receipt-val-public">{status} — public</span>
        </div>

        <div className="receipt-row">
          <span className="receipt-key">Agreed price</span>
          {status === 'Matched' ? (
            <span className="receipt-val-public">{agreedPrice.toString()} — public</span>
          ) : (
            <span className="receipt-val-private">not applicable — no deal</span>
          )}
        </div>

        <div className="receipt-row">
          <span className="receipt-key">Buyer's maximum price</span>
          <span className="receipt-val-hidden">
            {buyerMaxWasSet ? '🔒 ZK witness — never disclosed' : '—'}
          </span>
        </div>

        <div className="receipt-row">
          <span className="receipt-key">Seller's minimum price</span>
          <span className="receipt-val-hidden">
            {sellerMinWasSet ? '🔒 ZK witness — never disclosed' : '—'}
          </span>
        </div>

        <div className="receipt-row">
          <span className="receipt-key">Gap between offers</span>
          <span className="receipt-val-hidden">🔒 mathematically unreachable</span>
        </div>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
        Proof generated locally by your proof server at{' '}
        <code style={{ fontSize: '0.72rem' }}>localhost:6300</code>.
        Only the serialised SNARK was submitted — not the inputs.
      </p>
    </div>
  );
}
