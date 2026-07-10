import React, { useState } from 'react';
import { WalletProvider, useWallet } from './context/WalletContext';
import { NegotiationProvider } from './context/NegotiationContext';
import { ConnectWallet } from './components/ConnectWallet';
import { NegotiationPanel } from './components/NegotiationPanel';

function AppInner() {
  const { connected, enabledApi } = useWallet();

  if (connected) {
    return (
      <NegotiationProvider enabledWalletApi={enabledApi}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <NegotiationPanel />
        </div>
      </NegotiationProvider>
    );
  }

  return <ConnectWallet onConnect={() => {}} />;
}

function Header() {
  const { connected, disconnect } = useWallet();

  return (
    <header className="app-header">
      <div className="app-header-logo">
        <strong style={{ fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Nocturn.</strong>
      </div>
      <nav className="app-header-nav">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Pricing</a>
      </nav>
      <div className="app-header-action">
        {connected ? (
          <button className="header-btn" onClick={disconnect}>Disconnect Wallet</button>
        ) : (
          <button className="header-btn">Book a Demo</button>
        )}
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <WalletProvider>
        <div className="app-container">
          <Header />
          
          <main className="app-main">
            <AppInner />
          </main>

          <footer className="app-footer">
            <div className="footer-title">Trust the Experts</div>
            <div className="footer-links">
              <span>Midnight Preprod</span>
              <span>Nocturn · Level 2</span>
              <a href="https://github.com/amankoli09/Nocturn" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </footer>
        </div>
      </WalletProvider>
    </div>
  );
}
