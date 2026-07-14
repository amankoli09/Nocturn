'use client';
import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { useNegotiation } from '../context/NegotiationContext';
import { PrivacyReceipt } from './PrivacyReceipt';
import { ZkSpinner } from './ZkSpinner';

function truncate(s: string, n = 10) {
  if (!s || s.length <= n * 2 + 3) return s;
  return `${s.slice(0, n)}…${s.slice(-n)}`;
}

export function NegotiationPanel() {
  const { walletAddress } = useWallet();
  const {
    contractAddress,
    negotiationState,
    txPhase,
    txError,
    deploying,
    deployFresh,
    joinExisting,
    openNegotiation,
    matchOffer,
    resetTxState,
  } = useNegotiation();

  const [joinAddr, setJoinAddr] = useState('');
  const [showJoin, setShowJoin] = useState(false);
  const [buyerMax, setBuyerMax] = useState('');
  const [sellerMin, setSellerMin] = useState('');

  const isProving = txPhase === 'proving' || txPhase === 'submitting';
  const status = negotiationState?.status ?? null;

  const handleDeploy = async () => { resetTxState(); await deployFresh(); };
  const handleJoin = async () => {
    if (!joinAddr.trim()) return;
    resetTxState();
    await joinExisting(joinAddr.trim());
    setShowJoin(false);
    setJoinAddr('');
  };
  const handleOpen = async () => { resetTxState(); await openNegotiation(); };
  const handleMatch = async () => {
    const bMax = BigInt(buyerMax || '0');
    const sMin = BigInt(sellerMin || '0');
    if (bMax === 0n && sMin === 0n) return;
    resetTxState();
    await matchOffer(bMax, sMin);
    setBuyerMax('');
    setSellerMin('');
  };

  function StatusBadge() {
    if (!status) return null;
    const cls = status === 'Pending' ? 'badge-pending'
              : status === 'Matched' ? 'badge-matched'
              : 'badge-failed';
    return (
      <span className={`badge ${cls}`}>
        <span className="badge-dot" />
        {status}
      </span>
    );
  }

  return (
    <div className="glass-card negotiation-panel animate-slide-up">
      {/* ── Panel Header ── */}
      <div className="panel-header">
        <div className="panel-title">
          <span style={{ filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.7))' }}>🌒</span>
          <span className="text-gradient">Nocturn</span>
        </div>
        <div className="wallet-info-pill">
          <span className="wallet-dot" />
          <span className="wallet-addr-text">{truncate(walletAddress ?? '', 7)}</span>
        </div>
      </div>

      <hr className="divider" />

      {/* ── ZK Proof Overlay ── */}
      {isProving && (
        <ZkSpinner phase={txPhase as 'proving' | 'submitting'} />
      )}

      {/* ── Error Banner ── */}
      {txError && !isProving && (
        <div className="error-banner animate-fade-in">
          <strong>Transaction failed:</strong> {txError}
          <br />
          <button
            style={{ marginTop: 8, color: '#fca5a5', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}
            onClick={resetTxState}
          >
            Dismiss
          </button>
        </div>
      )}

      {!isProving && (
        <>
          {/* ── Section 1: Contract ── */}
          <div className="panel-section">
            <p className="section-label">Contract</p>

            {!contractAddress ? (
              <>
                <div className="contract-actions">
                  <button
                    id="deploy-btn"
                    className="btn btn-primary btn-sm"
                    onClick={handleDeploy}
                    disabled={deploying}
                  >
                    {deploying ? '⏳ Deploying…' : '🚀 Deploy New'}
                  </button>
                  <button
                    id="join-btn"
                    className="btn btn-ghost btn-sm"
                    onClick={() => setShowJoin((v) => !v)}
                    disabled={deploying}
                  >
                    🔗 Join Existing
                  </button>
                </div>

                {showJoin && (
                  <div className="join-row animate-fade-in">
                    <input
                      id="join-address-input"
                      className="form-input"
                      placeholder="Paste contract address…"
                      value={joinAddr}
                      onChange={(e) => setJoinAddr(e.target.value)}
                    />
                    <button
                      id="join-confirm-btn"
                      className="btn btn-primary btn-sm"
                      style={{ flexShrink: 0 }}
                      onClick={handleJoin}
                      disabled={!joinAddr.trim() || deploying}
                    >
                      Join
                    </button>
                  </div>
                )}

                <div className="privacy-hint">
                  <span className="privacy-hint-icon">ℹ️</span>
                  <span className="privacy-hint-text">
                    Deploy a fresh contract on Preprod, or join an existing one by address.
                    Make sure your <strong>local proof server is running</strong> (Docker).
                  </span>
                </div>
              </>
            ) : (
              <div className="address-badge">
                <span className="address-badge-label">Preprod</span>
                <span className="address-badge-value" title={contractAddress}>
                  {truncate(contractAddress, 16)}
                </span>
              </div>
            )}
          </div>

          {contractAddress && (
            <>
              <hr className="divider" />

              {/* ── Section 2: Negotiation Status ── */}
              <div className="panel-section">
                <div className="status-row">
                  <p className="section-label">Status</p>
                  <StatusBadge />
                </div>
                <button
                  id="open-negotiation-btn"
                  className="btn btn-ghost btn-full"
                  onClick={handleOpen}
                  disabled={isProving}
                >
                  📋 Open / Reset Negotiation
                </button>
              </div>

              <hr className="divider" />

              {/* ── Section 3: Private Match ── */}
              <div className="panel-section">
                <p className="section-label">Private Match</p>

                <div className="privacy-hint">
                  <span className="privacy-hint-icon">🔒</span>
                  <span className="privacy-hint-text">
                    <strong>Proved without revealing:</strong> These values enter the ZK circuit as
                    witnesses — only the proof is submitted. They are cleared from memory immediately after.
                  </span>
                </div>

                <div className="match-inputs">
                  <div className="form-group">
                    <label className="form-label" htmlFor="buyer-max-input">
                      Buyer Max Price
                    </label>
                    <input
                      id="buyer-max-input"
                      type="number"
                      min="0"
                      className="form-input"
                      placeholder="e.g. 120"
                      value={buyerMax}
                      onChange={(e) => setBuyerMax(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="seller-min-input">
                      Seller Min Price
                    </label>
                    <input
                      id="seller-min-input"
                      type="number"
                      min="0"
                      className="form-input"
                      placeholder="e.g. 100"
                      value={sellerMin}
                      onChange={(e) => setSellerMin(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  id="match-offer-btn"
                  className="btn btn-primary btn-full"
                  onClick={handleMatch}
                  disabled={isProving || !buyerMax || !sellerMin}
                >
                  ⚡ Match Offer — Generate ZK Proof
                </button>
              </div>

              {/* ── Section 4: Privacy Receipt ── */}
              {(status === 'Matched' || status === 'Failed') && (
                <>
                  <hr className="divider" />
                  <PrivacyReceipt
                    status={status}
                    agreedPrice={negotiationState?.agreedPrice ?? 0n}
                    contractAddress={contractAddress}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
