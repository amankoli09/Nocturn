'use client';
import React from 'react';
import type { NegotiationStatus } from '@nocturn/api';

interface PrivacyReceiptProps {
  status: NegotiationStatus;
  agreedPrice: bigint;
  contractAddress: string;
}

export function PrivacyReceipt({ status, agreedPrice, contractAddress }: PrivacyReceiptProps) {
  const isMatched = status === 'Matched';

  function truncate(s: string, n = 12) {
    if (!s || s.length <= n * 2 + 3) return s;
    return `${s.slice(0, n)}…${s.slice(-n)}`;
  }

  return (
    <div className={`receipt-card animate-slide-up ${isMatched ? 'receipt-matched' : 'receipt-failed'}`}
      style={{
        borderColor: isMatched
          ? 'rgba(16,185,129,0.2)'
          : 'rgba(239,68,68,0.2)',
        background: isMatched
          ? 'rgba(16,185,129,0.04)'
          : 'rgba(239,68,68,0.04)',
      }}
    >
      {/* Header */}
      <div className="receipt-header">
        <span className="receipt-title">
          {isMatched ? '✅ Privacy Receipt' : '❌ Negotiation Failed'}
        </span>
        <div className="receipt-proof-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          ZK Proved
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div className="receipt-row">
          <span className="receipt-row-label">Outcome</span>
          <span
            className="receipt-row-value"
            style={{ color: isMatched ? 'var(--status-matched)' : 'var(--status-failed)', fontFamily: 'inherit', fontWeight: 600 }}
          >
            {status}
          </span>
        </div>

        {isMatched && (
          <div className="receipt-row">
            <span className="receipt-row-label">Agreed Price</span>
            <span className="receipt-row-value" style={{ color: 'var(--status-matched)' }}>
              {agreedPrice.toString()}
            </span>
          </div>
        )}

        <div className="receipt-row">
          <span className="receipt-row-label">Buyer Max Revealed?</span>
          <span className="receipt-row-value" style={{ color: 'var(--cyan-400)' }}>🔒 No — witness only</span>
        </div>

        <div className="receipt-row">
          <span className="receipt-row-label">Seller Min Revealed?</span>
          <span className="receipt-row-value" style={{ color: 'var(--cyan-400)' }}>🔒 No — witness only</span>
        </div>

        <div className="receipt-row">
          <span className="receipt-row-label">Contract</span>
          <span className="receipt-row-value" title={contractAddress}>
            {truncate(contractAddress, 10)}
          </span>
        </div>

        <div className="receipt-row" style={{ borderBottom: 'none' }}>
          <span className="receipt-row-label">Network</span>
          <span className="receipt-row-value">Midnight Preprod</span>
        </div>
      </div>

      {/* Privacy note */}
      <div className="privacy-hint" style={{ marginTop: 4 }}>
        <span className="privacy-hint-icon">🔍</span>
        <span className="privacy-hint-text">
          <strong>What the chain sees:</strong>{' '}
          {isMatched
            ? `Status = Matched, agreed price = ${agreedPrice.toString()}. Your ceiling and the seller's floor are permanently hidden.`
            : 'Status = Failed. No price data was revealed. The gap between your limits is unknown to the chain.'}
        </span>
      </div>
    </div>
  );
}
