import React from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { ShieldCheck, Server, Cpu, Network, Lock, ArrowDown } from 'lucide-react';

export const TechnicalEcosystem: React.FC = () => {
  const { ecosystem } = SKILLS_DATA;

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity-hub': return <ShieldCheck size={14} className="text-accent" />;
      case 'backend-pillar': return <Server size={14} className="text-accent" />;
      case 'ml-pillar': return <Cpu size={14} className="text-accent" />;
      case 'network-pillar': return <Network size={14} className="text-accent" />;
      case 'secure-systems-anchor': return <Lock size={14} className="text-accent" />;
      default: return <ShieldCheck size={14} className="text-accent" />;
    }
  };

  return (
    <div className="skills-ecosystem-wrapper technical-bracket" aria-label="Technical Ecosystem Architecture">
      {/* Header */}
      <div className="ecosystem-header font-mono">
        <div className="eco-title">
          <ShieldCheck size={14} className="text-accent" />
          <span>{ecosystem.title}</span>
        </div>
        <span className="eco-badge font-mono text-accent">
          CYBERSECURITY-ANCHORED SYSTEMS
        </span>
      </div>

      <p className="eco-overview font-sans">
        {ecosystem.overview}
      </p>

      {/* Ecosystem Visual Hierarchy */}
      <div className="ecosystem-tree-container font-mono">
        {/* Level 1: Core Hub (Cybersecurity) */}
        <div className="eco-level-hub">
          <div className="eco-node-card hub-node">
            <div className="eco-node-top">
              {getNodeIcon(ecosystem.coreHub.id)}
              <span className="eco-node-title">{ecosystem.coreHub.title}</span>
            </div>
            <span className="eco-node-sub text-muted">{ecosystem.coreHub.subtitle}</span>
            <div className="eco-pills-row">
              {ecosystem.coreHub.coreTech.map((tech) => (
                <span key={tech} className="eco-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Level 1 -> 2 Connector Lines */}
        <div className="eco-connector-split" aria-hidden="true">
          <div className="split-stem-top" />
          <div className="split-bar" />
          <div className="split-drops">
            <div className="split-drop" />
            <div className="split-drop" />
            <div className="split-drop" />
          </div>
        </div>

        {/* Level 2: 3 Pillars (Backend, ML/AI, Networking) */}
        <div className="eco-level-pillars">
          {ecosystem.pillars.map((pillar) => (
            <div key={pillar.id} className="eco-node-card pillar-node">
              <div className="eco-node-top">
                {getNodeIcon(pillar.id)}
                <span className="eco-node-title">{pillar.title}</span>
              </div>
              <span className="eco-node-sub text-muted">{pillar.subtitle}</span>
              <div className="eco-pills-row">
                {pillar.coreTech.map((tech) => (
                  <span key={tech} className="eco-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Level 2 -> 3 Merge Lines */}
        <div className="eco-connector-merge" aria-hidden="true">
          <div className="merge-drops">
            <div className="merge-drop" />
            <div className="merge-drop" />
            <div className="merge-drop" />
          </div>
          <div className="merge-bar" />
          <div className="merge-stem-bottom" />
          <ArrowDown size={14} className="text-accent merge-arrow" />
        </div>

        {/* Level 3: Outcome (Secure Systems) */}
        <div className="eco-level-anchor">
          <div className="eco-node-card anchor-node">
            <div className="eco-node-top">
              {getNodeIcon(ecosystem.anchor.id)}
              <span className="eco-node-title">{ecosystem.anchor.title}</span>
            </div>
            <span className="eco-node-sub text-muted">{ecosystem.anchor.subtitle}</span>
            <div className="eco-pills-row">
              {ecosystem.anchor.coreTech.map((tech) => (
                <span key={tech} className="eco-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="eco-footer font-mono text-muted">
        <span>// HOLISTIC CAPABILITIES ARCHITECTURE: THREAT AWARENESS ➔ RESILIENT COMPUTATION</span>
      </div>
    </div>
  );
};
