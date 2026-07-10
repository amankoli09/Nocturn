import React from 'react';
import { useWallet } from '../context/WalletContext';

interface ConnectWalletProps {
  onConnect?: () => void;
}

export function ConnectWallet({ onConnect }: ConnectWalletProps) {
  const { connect, connecting, error } = useWallet();

  const handleConnect = async () => {
    await connect();
    if (onConnect) onConnect();
  };

  return (
    <div className="landing-container animate-fade-in">
      <div className="landing-left">
        <h1 className="landing-title">
          Nocturn<br />
          Prove the deal.<br />
          <span className="text-gradient">Never the price.</span>
        </h1>
        <p className="landing-description">
          We understand the importance of trust, security, and privacy when it comes to matching prices. Nocturn leverages zero-knowledge proofs to securely verify your limits without revealing them.
        </p>
        
        <div className="landing-actions">
          <button
            className="btn-primary connect-wallet-btn"
            onClick={handleConnect}
            disabled={connecting}
          >
            {connecting ? 'Connecting...' : 'Connect Lace Wallet'}
          </button>
        </div>

        {error && (
          <div className="error-banner animate-fade-in" style={{ marginTop: '16px' }}>
            <strong>Connection failed:</strong> {error}
            {error.toLowerCase().includes('not found') && (
              <>
                {' '}—{' '}
                <a
                  href="https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--status-failed)', textDecoration: 'underline' }}
                >
                  Install Lace
                </a>
              </>
            )}
          </div>
        )}
      </div>

      <div className="landing-right">
        <div className="feature-cards-container">
          <div className="feature-card animate-slide-up">
            <div className="feature-card-header">
              <div className="feature-icon-placeholder" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Browser Privacy</h4>
            </div>
            <p>Your price limits stay in your browser — never on-chain.</p>
          </div>

          <div className="feature-card animate-slide-up" style={{ animationDelay: '100ms' }}>
             <div className="feature-card-header">
              <div className="feature-icon-placeholder" style={{ background: '#ede9fe', color: '#7c3aed' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h4>Zero Knowledge</h4>
            </div>
            <p>ZK proof verifies the match without revealing your ceiling.</p>
          </div>

          <div className="feature-card animate-slide-up" style={{ animationDelay: '200ms' }}>
             <div className="feature-card-header">
              <div className="feature-icon-placeholder" style={{ background: '#ecfccb', color: '#65a30d' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 5 18 3-9h6"/></svg>
              </div>
              <h4>Public Outcome</h4>
            </div>
            <p>Only the outcome is public — Matched or Failed, nothing more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
