import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Server } from 'lucide-react';

export const SystemIndicator: React.FC = () => {
  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs text-secondary bg-panel border border-subtle rounded-xs"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.35rem 0.75rem',
        backgroundColor: 'rgba(13, 21, 27, 0.75)',
        border: '1px solid rgba(25, 196, 200, 0.15)',
        borderRadius: 'var(--radius-xs)',
        fontSize: '0.72rem',
        letterSpacing: '0.05em'
      }}
    >
      <Server size={12} style={{ color: 'var(--accent-primary)' }} />
      <span style={{ color: 'var(--text-muted)' }}>PORTFOLIO SYSTEM:</span>
      <span className="pulse-dot" />
      <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
        {PORTFOLIO_DATA.systemMeta.clearance}
      </span>
    </div>
  );
};
