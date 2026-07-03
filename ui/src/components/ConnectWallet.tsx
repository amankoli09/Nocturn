import React from 'react';
import { useWallet } from '../context/WalletContext';

interface ConnectWalletProps {
  onConnect: () => void;
}

export function ConnectWallet({ onConnect }: ConnectWalletProps) {
  const { connect, connecting, error } = useWallet();

  const handleConnect = async () => {
    await connect();
    onConnect();
  };

  return (
    <div className="connect-screen glass-card animate-fade-in">
      <div className="connect-screen__logo">
        <div className="crescent-icon">🌒</div>
        <div>
          <h1 className="connect-screen__title text-gradient">Nocturn</h1>
          <p className="connect-screen__tagline">
            Prove the deal.<br />Never the price.
          </p>
        </div>
      </div>

      <div className="connect-screen__features">
        <div className="feature-row animate-slide-up">
          <span className="feature-icon">🔒</span>
          <span>Your price limits stay in your browser — never on-chain</span>
        </div>
        <div className="feature-row animate-slide-up">
          <span className="feature-icon">⚡</span>
          <span>ZK proof verifies the match without revealing your ceiling</span>
        </div>
        <div className="feature-row animate-slide-up">
          <span className="feature-icon">🌑</span>
          <span>Only the outcome is public — Matched or Failed, nothing more</span>
        </div>
        <div className="feature-row animate-slide-up">
          <span className="feature-icon">🌐</span>
          <span>Running on Midnight Preprod — real ZK proofs, no real money</span>
        </div>
      </div>

      <div className="connect-screen__action animate-slide-up">
        <button
          id="connect-lace-btn"
          className="btn btn-primary connect-wallet-btn"
          onClick={handleConnect}
          disabled={connecting}
        >
          {connecting ? (
            <>
              <span
                style={{
                  width: 16,
                  height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#fff',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              Connecting to Lace...
            </>
          ) : (
            <>🌙 Connect Lace Wallet</>
          )}
        </button>

        {error && (
          <div className="error-banner animate-fade-in">
            <strong>Connection failed:</strong> {error}
            {error.toLowerCase().includes('not found') && (
              <>
                {' '}—{' '}
                <a
                  href="https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fca5a5', textDecoration: 'underline' }}
                >
                  Install Lace
                </a>
              </>
            )}
          </div>
        )}

        <p className="connect-screen__hint">
          Requires Lace wallet extension set to <strong>Preprod</strong> network
          with a local proof server at{' '}
          <code style={{ fontSize: '0.75rem' }}>localhost:6300</code>
        </p>
      </div>
    </div>
  );
}
