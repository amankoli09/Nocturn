import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { useNegotiation } from '../context/NegotiationContext';
import { PrivacyReceipt } from './PrivacyReceipt';
import { ZkSpinner } from './ZkSpinner';

function truncate(s: string, n = 12): string {
  if (!s || s.length <= n * 2 + 3) return s;
  return `${s.slice(0, n)}...${s.slice(-n)}`;
}

export function NegotiationPanel() {
  const { walletAddress, disconnect } = useWallet();
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
  const [showJoinInput, setShowJoinInput] = useState(false);
  const [buyerMax, setBuyerMax] = useState('');
  const [sellerMin, setSellerMin] = useState('');
  const [lastBuyerMax, setLastBuyerMax] = useState<bigint | null>(null);
  const [lastSellerMin, setLastSellerMin] = useState<bigint | null>(null);

  const isProving = txPhase === 'proving' || txPhase === 'submitting';
  const status = negotiationState?.status ?? null;

  const handleDeploy = async () => {
    resetTxState();
    await deployFresh();
  };

  const handleJoin = async () => {
    if (!joinAddr.trim()) return;
    resetTxState();
    await joinExisting(joinAddr.trim());
    setShowJoinInput(false);
    setJoinAddr('');
  };

  const handleOpen = async () => {
    resetTxState();
    await openNegotiation();
  };

  const handleMatch = async () => {
    const bMax = BigInt(buyerMax || '0');
    const sMin = BigInt(sellerMin || '0');
    if (bMax === 0n && sMin === 0n) return;
    setLastBuyerMax(bMax);
    setLastSellerMin(sMin);
    resetTxState();
    await matchOffer(bMax, sMin);
    // Clear inputs after submit — private values should not linger
    setBuyerMax('');
    setSellerMin('');
  };

  const getStatusBadge = () => {
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
  };

  return (
    <div className="negotiation-panel glass-card animate-slide-up">
      {/* Header */}
      <div className="panel-header">
        <div className="panel-title">
          <span>🌒</span>
          <span className="text-gradient">Nocturn</span>
        </div>
        <div className="wallet-info">
          <div className="wallet-dot" />
          <span className="code-text" title={walletAddress ?? ''}>
            {truncate(walletAddress ?? '', 8)}
          </span>
        </div>
      </div>

      <div className="divider" />

      {/* ── ZK Proof in progress overlay ── */}
      {isProving && (
        <div className="animate-fade-in">
          <ZkSpinner
            label={
              txPhase === 'proving'
                ? 'Generating ZK proof — private values stay in your browser...'
                : 'Submitting transaction to Midnight Preprod...'
            }
          />
        </div>
      )}

      {/* ── Error banner ── */}
      {txPhase === 'error' && txError && (
        <div className="error-banner animate-fade-in">
          <strong>Transaction failed:</strong> {txError}
          <br />
          <button
            style={{ marginTop: 8, color: '#fca5a5', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}
            onClick={resetTxState}
          >
            Dismiss
          </button>
        </div>
      )}

      {!isProving && (
        <>
          {/* ── 1. Contract ── */}
          <div className="contract-section">
            <p className="section-title">Contract</p>

            {!contractAddress ? (
              <>
                <div className="contract-actions">
                  <button
                    id="deploy-btn"
                    className="btn btn-primary"
                    onClick={handleDeploy}
                    disabled={deploying}
                  >
                    {deploying ? '⏳ Deploying...' : '🚀 Deploy New'}
                  </button>
                  <button
                    id="join-btn"
                    className="btn btn-ghost"
                    onClick={() => setShowJoinInput((v) => !v)}
                    disabled={deploying}
                  >
                    🔗 Join Existing
                  </button>
                </div>

                {showJoinInput && (
                  <div className="flex gap-sm animate-slide-up" style={{ marginTop: 8 }}>
                    <input
                      id="join-address-input"
                      className="form-input"
                      placeholder="Contract address..."
                      value={joinAddr}
                      onChange={(e) => setJoinAddr(e.target.value)}
                    />
                    <button
                      id="join-confirm-btn"
                      className="btn btn-primary"
                      style={{ borderRadius: 'var(--radius-md)', padding: '12px 20px', flexShrink: 0 }}
                      onClick={handleJoin}
                      disabled={!joinAddr.trim() || deploying}
                    >
                      Join
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="address-display">
                <span className="address-display__label">Preprod</span>
                <span className="code-text" title={contractAddress}>
                  {truncate(contractAddress, 14)}
                </span>
              </div>
            )}
          </div>

          {contractAddress && (
            <>
              <div className="divider" />

              {/* ── 2. Open Negotiation ── */}
              <div className="open-section">
                <div className="status-row">
                  <p className="section-title">Negotiation Status</p>
                  {getStatusBadge()}
                </div>
                <button
                  id="open-negotiation-btn"
                  className="btn btn-ghost w-full"
                  style={{ borderRadius: 'var(--radius-md)' }}
                  onClick={handleOpen}
                  disabled={isProving}
                >
                  📋 Open / Reset Negotiation
                </button>
              </div>

              <div className="divider" />

              {/* ── 3. Match Offer ── */}
              <div className="match-section">
                <p className="section-title">Private Match</p>

                <div className="privacy-hint">
                  <span className="privacy-hint__icon">🔒</span>
                  <span>
                    <strong>Proved without revealing your input:</strong> These values enter the ZK circuit as witnesses — they
                    produce a proof without being written to the ledger. Once the proof
                    is submitted, they are erased.
                  </span>
                </div>

                <div className="match-inputs">
                  <div className="input-group">
                    <label className="label" htmlFor="buyer-max-input">
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
                  <div className="input-group">
                    <label className="label" htmlFor="seller-min-input">
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
                  className="btn btn-primary w-full"
                  style={{ borderRadius: 'var(--radius-md)' }}
                  onClick={handleMatch}
                  disabled={isProving || !buyerMax || !sellerMin}
                >
                  ⚡ Match Offer — Generate ZK Proof
                </button>
              </div>

              {/* ── 4. Privacy Receipt (post-match) ── */}
              {(status === 'Matched' || status === 'Failed') && (
                <>
                  <div className="divider" />
                  <PrivacyReceipt
                    status={status}
                    agreedPrice={negotiationState?.agreedPrice ?? 0n}
                    contractAddress={contractAddress}
                    buyerMaxWasSet={lastBuyerMax !== null}
                    sellerMinWasSet={lastSellerMin !== null}
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
