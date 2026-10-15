import React, { useState } from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { Activity, Shield, ArrowRight, ArrowDown, CheckCircle2, Server, Database, Zap, Cpu } from 'lucide-react';

export const ResearchSystemFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { xdrResearchContext } = RESEARCH_DATA;

  const getNodeIcon = (step: string) => {
    switch (step) {
      case '01': return <Cpu size={12} className="text-accent" />;
      case '02': return <Zap size={12} className="text-accent" />;
      case '03': return <Server size={12} className="text-accent" />;
      case '04': return <Database size={12} className="text-accent" />;
      case '05': return <Activity size={12} className="text-accent" />;
      case '06': return <Shield size={12} className="text-accent" />;
      default: return <CheckCircle2 size={12} className="text-accent" />;
    }
  };

  return (
    <div className="research-system-wrapper technical-bracket" aria-label="Current Technical Research Context: XDR Security Pipeline">
      {/* Header */}
      <div className="system-flow-header font-mono">
        <div className="system-flow-title">
          <Activity size={14} className="text-accent" />
          <span>{xdrResearchContext.title}</span>
        </div>
        <div className="system-flow-badge">
          <span>DISTRIBUTED TELEMETRY STREAMING</span>
        </div>
      </div>

      <div className="system-flow-subhead font-mono text-secondary">
        // {xdrResearchContext.subtitle}
      </div>

      <p className="system-flow-overview font-sans">
        {xdrResearchContext.overview}
      </p>

      {/* Applied Research 7-Stage Horizontal Pipeline Flow */}
      <div className="system-pipeline-container font-mono">
        <div className="system-pipeline-header">
          <span className="text-accent">//</span>
          <span className="pipeline-label">TELEMETRY INGESTION &amp; DETECTION PIPELINE (CLICK TO INSPECT)</span>
        </div>

        <div className="system-pipeline-flow-row">
          {xdrResearchContext.pipeline.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <React.Fragment key={item.name}>
                <button
                  type="button"
                  className={`system-flow-node-card ${isSelected ? 'node-active' : ''}`}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  aria-expanded={isSelected}
                  aria-label={`Stage ${item.step}: ${item.name}`}
                >
                  <div className="node-top-bar">
                    <span className="node-num">// {item.step}</span>
                    {getNodeIcon(item.step)}
                  </div>
                  <span className="node-title-text">{item.name}</span>
                  <span className="node-role-preview font-sans">{item.role}</span>
                </button>

                {idx < xdrResearchContext.pipeline.length - 1 && (
                  <div className="system-flow-connector" aria-hidden="true">
                    <ArrowRight size={13} className="text-accent arrow-h" />
                    <ArrowDown size={13} className="text-accent arrow-v" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Details Callout */}
      {activeStep !== null && (
        <div className="system-step-callout font-mono" role="status">
          <div className="step-callout-head">
            <CheckCircle2 size={13} className="text-accent" />
            <span className="step-callout-title">
              STAGE {xdrResearchContext.pipeline[activeStep].step}: {xdrResearchContext.pipeline[activeStep].name}
            </span>
            <span className="step-callout-status text-accent">[ACTIVE_RESEARCH_PIPELINE]</span>
          </div>
          <p className="step-callout-role font-sans">
            {xdrResearchContext.pipeline[activeStep].role}
          </p>
        </div>
      )}

      {/* Key Research Architecture Highlights */}
      <div className="system-highlights-block font-mono">
        <div className="highlights-head">
          <Shield size={12} className="text-accent" />
          <span>KEY RESEARCH ARCHITECTURE HIGHLIGHTS</span>
        </div>
        <div className="highlights-grid font-sans">
          {xdrResearchContext.highlights.map((hl, idx) => (
            <div key={idx} className="highlight-grid-card">
              <span className="hl-prefix font-mono text-accent">❯</span>
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="system-flow-footer font-mono text-muted">
        <span>// APPLIED TELEMETRY INGESTION &amp; DETECTION RESEARCH · HIGH-THROUGHPUT EXPERIMENTAL PLATFORM</span>
      </div>
    </div>
  );
};
