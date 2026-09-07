import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ShieldCheck, Cpu, Database, Network } from 'lucide-react';
import './SecurityStatus.css';

export const SecurityStatus: React.FC = () => {
  return (
    <div className="security-status-card technical-bracket font-mono" aria-label="Security Status & Research Telemetry">
      {/* Top Header */}
      <div className="sec-card-header">
        <div className="sec-card-title-group">
          <ShieldCheck size={13} className="text-accent" />
          <span className="sec-card-title">SECURITY PROFILE</span>
        </div>
        <div className="sec-status-badge">
          <span className="pulse-dot" />
          <span className="sec-status-text">{PORTFOLIO_DATA.systemMeta.status}</span>
        </div>
      </div>

      {/* Node Metadata Row */}
      <div className="sec-meta-grid">
        <div className="meta-cell">
          <span className="meta-label">NODE</span>
          <span className="meta-value">{PORTFOLIO_DATA.systemMeta.nodeId}</span>
        </div>
        <div className="meta-cell">
          <span className="meta-label">MODE</span>
          <span className="meta-value text-accent">{PORTFOLIO_DATA.systemMeta.mode}</span>
        </div>
      </div>

      {/* Focus Capabilities Matrix */}
      <div className="sec-focus-section">
        <div className="focus-header">
          <span className="focus-label text-muted">// RESEARCH FOCUS</span>
          <span className="focus-sub text-muted">LAB: VIT-AP CoE</span>
        </div>
        <div className="focus-tags-list">
          <div className="focus-tag-chip">
            <ShieldCheck size={11} className="chip-icon" />
            <span>Cybersecurity</span>
          </div>
          <div className="focus-tag-chip">
            <Database size={11} className="chip-icon" />
            <span>Secure Systems</span>
          </div>
          <div className="focus-tag-chip">
            <Cpu size={11} className="chip-icon" />
            <span>ML Models</span>
          </div>
          <div className="focus-tag-chip">
            <Network size={11} className="chip-icon" />
            <span>Real-time Detection</span>
          </div>
        </div>
      </div>
    </div>
  );
};
