import React from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { Wrench, Cpu, Server, Shield } from 'lucide-react';

export const ResearchStack: React.FC = () => {
  const toolchain = RESEARCH_DATA.toolchain;

  const getCategoryIcon = (category: string) => {
    if (category.includes('MACHINE LEARNING')) return <Cpu size={13} className="text-accent" />;
    if (category.includes('BACKEND')) return <Server size={13} className="text-accent" />;
    return <Shield size={13} className="text-accent" />;
  };

  return (
    <div className="research-toolchain-wrapper technical-bracket" aria-label="Research Toolchain and Technologies">
      {/* Header */}
      <div className="toolchain-header font-mono">
        <div className="toolchain-title">
          <Wrench size={14} className="text-accent" />
          <span>RESEARCH TOOLCHAIN · TECHNICAL STACK PREVIEW</span>
        </div>
        <div className="toolchain-tag text-muted">
          // REPRODUCIBLE RESEARCH ENVIRONMENT
        </div>
      </div>

      {/* Grid of Toolchain Categories */}
      <div className="toolchain-grid font-mono">
        {toolchain.map((group) => (
          <div key={group.category} className="toolchain-group-card">
            <div className="toolchain-group-head">
              {getCategoryIcon(group.category)}
              <span className="toolchain-group-title">{group.category}</span>
            </div>
            <div className="toolchain-pills-list">
              {group.tools.map((tool) => (
                <span key={tool} className="toolchain-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="toolchain-footer font-mono text-muted">
        <span>// OPERATIONAL TOOLCHAIN FOR MACHINE LEARNING, TELEMETRY PIPELINES &amp; SECURITY ANALYSIS</span>
      </div>
    </div>
  );
};
