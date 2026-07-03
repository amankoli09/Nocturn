import React, { useState } from 'react';
import { WalletProvider, useWallet } from './context/WalletContext';
import { NegotiationProvider } from './context/NegotiationContext';
import { ConnectWallet } from './components/ConnectWallet';
import { NegotiationPanel } from './components/NegotiationPanel';

function AppInner() {
  const { connected, enabledApi } = useWallet();
  const [showPanel, setShowPanel] = useState(false);

  // Once connected, show the panel
  const handleConnected = () => setShowPanel(true);

  if (connected || showPanel) {
    return (
      <NegotiationProvider enabledWalletApi={enabledApi}>
        <NegotiationPanel />
      </NegotiationProvider>
    );
  }

  return <ConnectWallet onConnect={handleConnected} />;
}

export default function App() {
  return (
    <div className="app-root">
      <WalletProvider>
        <AppInner />
      </WalletProvider>

      {/* Footer */}
      <footer
        style={{
          position: 'fixed',
          bottom: 16,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          pointerEvents: 'none',
        }}
      >
        <span>🌒 Nocturn · Level 2</span>
        <span>·</span>
        <span>Midnight Preprod</span>
        <span>·</span>
        <a
          href="https://github.com/amankoli09/Nocturn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', textDecoration: 'none', pointerEvents: 'all' }}
        >
          GitHub ↗
        </a>
      </footer>
    </div>
  );
}
