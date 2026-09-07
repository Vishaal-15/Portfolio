import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Folder, Shield, Cpu, Server, Radio, Lock, Network } from 'lucide-react';

export const CapabilityPreview: React.FC = () => {
  const { terminalUser, systemHost, about } = PORTFOLIO_DATA;

  // Icon map for technical domains
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'cybersecurity/':
        return <Shield size={14} className="capability-icon text-accent" />;
      case 'machine-learning/':
        return <Cpu size={14} className="capability-icon text-accent" />;
      case 'backend-engineering/':
        return <Server size={14} className="capability-icon text-accent" />;
      case 'detection-systems/':
        return <Radio size={14} className="capability-icon text-accent" />;
      case 'secure-systems/':
        return <Lock size={14} className="capability-icon text-accent" />;
      case 'network-security/':
        return <Network size={14} className="capability-icon text-accent" />;
      default:
        return <Folder size={14} className="capability-icon text-accent" />;
    }
  };

  return (
    <div className="capabilities-preview-box technical-bracket font-mono" aria-label="Technical Ecosystem Preview">
      {/* Header Command */}
      <div className="capabilities-header">
        <div className="terminal-command-line">
          <span className="prompt-user">{terminalUser}@{systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="terminal-cmd">{about.capabilitiesCommand}</span>
        </div>
        <span className="capabilities-count-tag text-muted">6 directories</span>
      </div>

      {/* Capabilities 2-Column Grid */}
      <div className="capabilities-grid">
        {about.capabilities.map((item) => (
          <div key={item.slug} className="capability-card">
            <div className="capability-card-top">
              {getIcon(item.slug)}
              <span className="capability-slug text-accent">{item.slug}</span>
            </div>
            <p className="capability-description font-sans">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
