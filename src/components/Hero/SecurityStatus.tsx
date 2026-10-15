import React from 'react';
import { BookOpen, ShieldCheck, Database, Award } from 'lucide-react';
import './SecurityStatus.css';

export const SecurityStatus: React.FC = () => {
  return (
    <div className="security-status-card technical-bracket font-mono" aria-label="Academic Research Highlights and Benchmarks">
      {/* Top Header */}
      <div className="sec-card-header">
        <div className="sec-card-title-group">
          <BookOpen size={14} className="text-accent" />
          <span className="sec-card-title">RESEARCH HIGHLIGHTS &amp; METRICS</span>
        </div>
        <div className="sec-status-badge">
          <span className="pulse-dot" />
          <span className="sec-status-text">ACTIVE</span>
        </div>
      </div>

      {/* Empirical Metrics Matrix (All verified from portfolio) */}
      <div className="sec-metrics-grid">
        <div className="metric-box">
          <span className="metric-val text-accent">AGENTIC</span>
          <span className="metric-label">SOC ARCHITECTURE</span>
          <span className="metric-context text-muted">VIT-AP CoE Research</span>
        </div>
        <div className="metric-box">
          <span className="metric-val text-accent">2048-BIT</span>
          <span className="metric-label">RSA-OAEP CRYPTO</span>
          <span className="metric-context text-muted">100+ Test Vectors</span>
        </div>
        <div className="metric-box">
          <span className="metric-val text-accent">~95%</span>
          <span className="metric-label">ATTACK REDUCTION</span>
          <span className="metric-context text-muted">7 Defense Controls</span>
        </div>
        <div className="metric-box">
          <span className="metric-val text-accent">88%</span>
          <span className="metric-label">ML CLASSIFICATION</span>
          <span className="metric-context text-muted">+12% vs Baseline</span>
        </div>
      </div>

      {/* Focus Disciplines */}
      <div className="sec-focus-section">
        <div className="focus-header">
          <span className="focus-label text-muted">// PRIMARY RESEARCH DOMAINS</span>
          <span className="focus-sub text-accent">VIT-AP CoE / KCT</span>
        </div>
        <div className="focus-tags-list">
          <div className="focus-tag-chip">
            <ShieldCheck size={11} className="chip-icon" />
            <span>Systems Security</span>
          </div>
          <div className="focus-tag-chip">
            <Database size={11} className="chip-icon" />
            <span>Distributed Ingestion</span>
          </div>
          <div className="focus-tag-chip">
            <Award size={11} className="chip-icon" />
            <span>Applied Cryptography</span>
          </div>
        </div>
      </div>
    </div>
  );
};
