import React from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { BookOpen, Sparkles, Layers, ShieldCheck, Database, Cpu } from 'lucide-react';

export const ResearchTerminal: React.FC = () => {
  const data = RESEARCH_DATA;

  return (
    <div className="research-terminal-window technical-bracket" aria-label="Academic Research Statement and Focus Pillars">
      {/* Titlebar */}
      <div className="research-term-header font-mono">
        <div className="term-header-left">
          <BookOpen size={14} className="text-accent" />
          <span>RESEARCH STATEMENT &amp; LAB INQUIRIES</span>
        </div>
        <div className="term-header-right">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">VIT-AP UNIVERSITY CoE</span>
        </div>
      </div>

      {/* Body */}
      <div className="research-term-body font-mono">
        {/* Research Profile & Philosophy Statement */}
        <div className="research-statement-box font-sans">
          <div className="quote-accent-bar" aria-hidden="true" />
          <div className="statement-text-group">
            <p className="profile-quote-text">
              "{data.profileStatement}"
            </p>
            <div className="statement-sub-principle font-mono">
              <Sparkles size={12} className="text-accent inline-icon" />
              <span>CORE PRINCIPLE: "{data.philosophyStatement}"</span>
            </div>
          </div>
        </div>

        {/* 4 Research Pillars Strip */}
        <div className="research-pillars-grid">
          <div className="pillar-item">
            <Layers size={13} className="text-accent" />
            <div className="pillar-text">
              <span className="pillar-title">Real-Time Telemetry</span>
              <span className="pillar-sub text-muted font-sans">Distributed endpoint ingestion pipelines</span>
            </div>
          </div>

          <div className="pillar-item">
            <ShieldCheck size={13} className="text-accent" />
            <div className="pillar-text">
              <span className="pillar-title">Threat Modeling</span>
              <span className="pillar-sub text-muted font-sans">MITRE ATT&amp;CK taxonomy alignment</span>
            </div>
          </div>

          <div className="pillar-item">
            <Database size={13} className="text-accent" />
            <div className="pillar-text">
              <span className="pillar-title">Cryptographic Systems</span>
              <span className="pillar-sub text-muted font-sans">Raw number theory vs 2048-bit RSA-OAEP</span>
            </div>
          </div>

          <div className="pillar-item">
            <Cpu size={13} className="text-accent" />
            <div className="pillar-text">
              <span className="pillar-title">Empirical Machine Learning</span>
              <span className="pillar-sub text-muted font-sans">Anomaly classification &amp; validation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
