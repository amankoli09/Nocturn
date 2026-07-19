import React, { useState } from 'react';

interface CircuitCallProps {
  connected: boolean;
  status: number;
  agreedPrice: number | null;
  onMatchOffer: (role: 'buyer' | 'seller', price: number) => Promise<void>;
  onOpenNegotiation: () => Promise<void>;
}

export const CircuitCall: React.FC<CircuitCallProps> = ({
  connected,
  status,
  agreedPrice,
  onMatchOffer,
  onOpenNegotiation
}) => {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [price, setPrice] = useState<string>('');
  const [isProving, setIsProving] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleMatchOffer = async () => {
    if (!price || isNaN(Number(price))) return;
    setIsProving(true);
    try {
      await onMatchOffer(role, Number(price));
    } finally {
      setIsProving(false);
      setPrice(''); // Clear private input immediately after proof generation
    }
  };

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await onOpenNegotiation();
    } finally {
      setIsResetting(false);
    }
  };

  if (!connected) {
    return (
      <div className="card" style={{ opacity: 0.5, pointerEvents: 'none' }}>
        <h2>Zero-Knowledge Circuit</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Connect wallet to interact with the circuit.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Zero-Knowledge Circuit</h2>
      
      <div className="status-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          On-Chain State
        </h3>
        {status === 0 && <div className="status-badge neutral">Status: Open</div>}
        {status === 1 && (
          <div>
            <div className="status-badge success">Status: Matched ✓</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Agreed Price: {agreedPrice}</div>
          </div>
        )}
        {status === 2 && <div className="status-badge danger">Status: No Deal ✗</div>}
        
        {status !== 0 && (
          <button 
            className="btn btn-outline" 
            style={{ marginTop: '1rem', width: '100%' }}
            onClick={handleReset}
            disabled={isResetting || isProving}
          >
            {isResetting ? <div className="loader"></div> : 'Open New Negotiation'}
          </button>
        )}
      </div>

      <div style={{ opacity: status !== 0 ? 0.5 : 1, pointerEvents: status !== 0 ? 'none' : 'auto' }}>
        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'buyer' ? 'active' : ''}`}
            onClick={() => setRole('buyer')}
          >
            I am the Buyer
          </button>
          <button 
            className={`role-btn ${role === 'seller' ? 'active' : ''}`}
            onClick={() => setRole('seller')}
          >
            I am the Seller
          </button>
        </div>

        <div className="input-group">
          <label>Your Private {role === 'buyer' ? 'Maximum' : 'Minimum'} Price</label>
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter amount..."
            disabled={isProving}
          />
        </div>

        <button 
          className="btn" 
          style={{ width: '100%' }}
          onClick={handleMatchOffer}
          disabled={!price || isProving}
        >
          {isProving ? (
            <>
              <div className="loader"></div>
              Generating ZK Proof...
            </>
          ) : (
            'Call Circuit'
          )}
        </button>

        <div className="privacy-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          Proved without revealing your input
        </div>
      </div>
    </div>
  );
};
