import { WalletConnect } from './components/WalletConnect';
import { CircuitCall } from './components/CircuitCall';
import { useMidnight } from './hooks/useMidnight';

function App() {
  const midnight = useMidnight();

  return (
    <div className="container">
      <header>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            Nocturn
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0' }}>
            Privacy-Preserving Over-the-Counter Trading
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Network</div>
          <div className="wallet-badge" style={{ margin: 0, padding: '0.25rem 0.75rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
            Preprod
          </div>
        </div>
      </header>

      <div className="main-grid">
        <div>
          <WalletConnect 
            connected={midnight.connected}
            address={midnight.address}
            error={midnight.error}
            onConnect={midnight.connect}
            onDisconnect={midnight.disconnect}
          />
        </div>
        
        <div>
          <CircuitCall 
            connected={midnight.connected}
            status={midnight.status}
            agreedPrice={midnight.agreedPrice}
            onMatchOffer={midnight.callMatchOffer}
            onOpenNegotiation={midnight.callOpenNegotiation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
