'use client';

import React from 'react';
import { useWallet } from '../context/WalletContext';

export function ConnectWallet() {
  const { connect, connecting, error } = useWallet();

  return (
    <div className="landing-container">
      {/* ── Left: Hero copy ── */}
      <div className="landing-left animate-slide-in-left">
        <span className="landing-eyebrow">
          ⚡ Midnight Preprod · ZK Privacy DApp
        </span>

        <h1 className="landing-title">
          Prove the deal.<br />
          <span className="text-gradient">Never the price.</span>
        </h1>

        <p className="landing-description">
          Nocturn uses zero-knowledge proofs on the Midnight blockchain to
          verify whether a buyer's ceiling meets a seller's floor — without
          revealing either number to the chain, the platform, or each other.
        </p>

        <div className="landing-actions">
          <button
            id="connect-lace-btn"
            className="btn btn-primary btn-large connect-wallet-btn"
            onClick={connect}
            disabled={connecting}
          >
            {connecting ? (
              <>
                <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', marginRight: 4 }}>⟳</span>
                Connecting…
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Connect Lace Wallet
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="error-banner animate-fade-in">
            <strong>Connection failed:</strong>{' '}
            {error}
            {(error.toLowerCase().includes('not found') ||
              error.toLowerCase().includes('install') ||
              error.toLowerCase().includes('10 seconds')) && (
              <>
                {' '}—{' '}
                <a
                  href="https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Lace ↗
                </a>
              </>
            )}
          </div>
        )}
      </div>

      {/* ── Right: Feature cards ── */}
      <div className="landing-right">
        <div className="feature-card animate-slide-in-right">
          <div className="feature-card-inner">
            <div className="feature-icon feature-icon-violet">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="feature-content">
              <h4>Private Witnesses</h4>
              <p>
                Your price limits live only in your browser as ZK witnesses.
                They are used to generate a proof — never written to the ledger.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-card animate-slide-in-right delay-100">
          <div className="feature-card-inner">
            <div className="feature-icon feature-icon-cyan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="feature-content">
              <h4>Zero-Knowledge Proof</h4>
              <p>
                The Compact circuit proves <code style={{ color: 'var(--text-code)', fontSize: '0.8em' }}>buyerMax &ge; sellerMin</code> without
                revealing either value — mathematically guaranteed.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-card animate-slide-in-right delay-200">
          <div className="feature-card-inner">
            <div className="feature-icon feature-icon-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12h4l2-9 5 18 3-9h6" />
              </svg>
            </div>
            <div className="feature-content">
              <h4>Public Outcome Only</h4>
              <p>
                The on-chain ledger records only the outcome: <strong>Matched</strong> or
                <strong> Failed</strong> — and the agreed price if matched. The gap stays hidden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
