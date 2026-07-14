'use client';
import React from 'react';

interface ZkSpinnerProps {
  phase: 'proving' | 'submitting';
}

export function ZkSpinner({ phase }: ZkSpinnerProps) {
  return (
    <div className="zk-overlay animate-fade-in">
      <div className="zk-spinner-ring" />
      <div>
        <p className="zk-label">
          {phase === 'proving'
            ? 'Generating ZK Proof…'
            : 'Submitting to Preprod…'}
        </p>
        <p className="zk-sublabel">
          {phase === 'proving'
            ? 'Private values stay in your browser — only the proof travels on-chain.'
            : 'Broadcasting the proven transaction to Midnight Preprod.'}
        </p>
      </div>
    </div>
  );
}
