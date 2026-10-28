import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Folder, Shield, Cpu, Server, Radio, Lock, Network, Layers } from 'lucide-react';

export const CapabilityPreview: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

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
    <div className="capabilities-preview-box technical-bracket" aria-label="Research and Technical Competencies">
      {/* Header */}
      <div className="capabilities-header">
        <div className="capabilities-header-title">
          <Layers size={15} className="text-accent inline-icon" />
          <span>Research &amp; Technical Competencies</span>
        </div>
        <span className="capabilities-count-tag text-muted">6 Core Domains</span>
      </div>

      {/* Capabilities 2-Column Grid */}
      <div className="capabilities-grid">
        {about.capabilities.map((item) => (
          <div key={item.slug} className="capability-card">
            <div className="capability-card-top">
              {getIcon(item.slug)}
              <span className="capability-slug text-accent">{item.title}</span>
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
