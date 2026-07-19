import React from 'react';

interface WalletConnectProps {
  connected: boolean;
  address: string;
  error: string;
  onConnect: () => void;
  onDisconnect: () => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ 
  connected, 
  address, 
  error, 
  onConnect, 
  onDisconnect 
}) => {
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.substring(0, 12)}...${addr.substring(addr.length - 8)}`;
  };

  return (
    <div className="card">
      <h2>Wallet Connection</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Connect your Lace wallet to interact with the Nocturn negotiation contract on the Preprod network.
      </p>

      {error && (
        <div className="privacy-notice" style={{ backgroundColor: 'rgba(251,113,133,0.1)', color: 'var(--danger)', border: 'none', boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.3)' }}>
          <span style={{ fontSize: '1.2rem' }}>⚠️</span>
          <div>
            <div style={{ marginBottom: '0.25rem' }}>{error}</div>
            <a 
              href="https://www.lace.io/" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--accent-light)', textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              Get Lace Wallet for Midnight
            </a>
          </div>
        </div>
      )}

      {!connected ? (
        <button className="btn" onClick={onConnect}>
          Connect Lace Wallet
        </button>
      ) : (
        <div>
          <div className="wallet-badge" style={{ marginBottom: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }}></div>
            {formatAddress(address)}
          </div>
          <button className="btn btn-outline" onClick={onDisconnect}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};
