import React from 'react';

interface ZkSpinnerProps {
  label?: string;
}

export function ZkSpinner({ label = 'Generating ZK proof...' }: ZkSpinnerProps) {
  return (
    <div className="zk-spinner-wrap">
      <div className="zk-spinner">
        <div className="zk-spinner-ring" />
        <div className="zk-spinner-ring" />
        <div className="zk-spinner-ring" />
        <div className="zk-spinner-core" />
      </div>
      <p className="zk-spinner-label">{label}</p>
    </div>
  );
}
