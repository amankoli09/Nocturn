import React from 'react';
import { useWallet } from './context/WalletContext';
import { NegotiationProvider } from './context/NegotiationContext';
import { ConnectWallet } from './components/ConnectWallet';
import { NegotiationPanel } from './components/NegotiationPanel';

/* ── Wallet pill shown in the header when connected ── */
function truncate(s: string, n = 8) {
  if (!s || s.length <= n * 2 + 3) return s;
  return `${s.slice(0, n)}...${s.slice(-n)}`;
}

function Header() {
  const { connected, walletAddress, disconnect } = useWallet();
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <span className="logo-moon">🌒</span>
        <strong>Nocturn</strong>
      </div>

      <nav className="app-header-nav">
        <a href="#">Home</a>
        <a href="#privacy">Privacy</a>
        <a href="https://github.com/amankoli09/Nocturn" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>

      <div className="app-header-action">
        {connected ? (
          <>
            <div className="wallet-pill">
              <span className="wallet-dot-live" />
              <span className="font-mono text-xs">{truncate(walletAddress ?? '', 7)}</span>
            </div>
            <button className="header-btn header-btn-ghost" onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Midnight Preprod
          </span>
        )}
      </div>
    </header>
  );
}

/* ── Main content — switches between landing and panel ── */
function AppContent() {
  const {
    connected,
    connectedApi,
    serviceConfig,
    shieldedCoinPublicKey,
    shieldedEncryptionPublicKey,
  } = useWallet();

  if (connected) {
    return (
      <NegotiationProvider
        connectedApi={connectedApi}
        serviceConfig={serviceConfig}
        shieldedCoinPublicKey={shieldedCoinPublicKey}
        shieldedEncryptionPublicKey={shieldedEncryptionPublicKey}
      >
        <div className="app-main animate-fade-in">
          <NegotiationPanel />
        </div>
      </NegotiationProvider>
    );
  }

  return (
    <main className="app-main">
      <ConnectWallet />
    </main>
  );
}

export function App() {
  return (
    <div className="app-container">
      <Header />
      <AppContent />
      <footer className="app-footer">
        <div className="footer-brand">🌒 Nocturn · Level 2</div>
        <div className="footer-links">
          <span>Midnight Preprod</span>
          <span>Zero-Knowledge Negotiation</span>
          <a
            href="https://github.com/amankoli09/Nocturn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
