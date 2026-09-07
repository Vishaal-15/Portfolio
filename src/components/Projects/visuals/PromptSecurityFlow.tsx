import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, ArrowDown, Key } from 'lucide-react';

interface SecurityControl {
  name: string;
  desc: string;
  tag: string;
}

const SECURITY_CONTROLS: SecurityControl[] = [
  { name: "SECRETS MANAGEMENT", desc: "Runtime environment variable isolation with zero hardcoded credentials", tag: "CONTROL 1" },
  { name: "INPUT VALIDATION", desc: "Allowlist regex blocking ~95% of prompt override / injection attempts", tag: "CONTROL 2" },
  { name: "MIME-TYPE CHECK", desc: "Strict file signature verification on all uploaded artifacts", tag: "CONTROL 3" },
  { name: "FILE-SIZE CHECK", desc: "Hardened byte payload ceilings to prevent memory denial-of-service", tag: "CONTROL 4" },
  { name: "LLM OUTPUT CHECK", desc: "Automated scanning of model responses before rendering to client", tag: "CONTROL 5" },
  { name: "ERROR HANDLING", desc: "Masked stack traces and generic error responses preventing reconnaissance", tag: "CONTROL 6" },
  { name: "DATA MINIMIZATION", desc: "Ephemeral in-memory session processing with zero persistent prompt storage", tag: "CONTROL 7" },
  { name: "HTTPS ENFORCEMENT", desc: "End-to-end TLS 1.3 encryption across all client and API channels", tag: "ENFORCEMENT" }
];

export const PromptSecurityFlow: React.FC = () => {
  const [activeControl, setActiveControl] = useState<SecurityControl | null>(null);

  const pipelineStages = [
    { label: "USER INPUT", sub: "Untrusted Client Input" },
    { label: "ALLOWLIST FILTER", sub: "Regex Pattern Check" },
    { label: "INPUT VALIDATION", sub: "MIME & Size Bounds" },
    { label: "SECURE PROCESSING", sub: "Secrets Isolation" },
    { label: "LLM INFERENCE", sub: "OpenAI API (TLS 1.3)" },
    { label: "OUTPUT VALIDATION", sub: "Payload Scanning" },
    { label: "SAFE RESPONSE", sub: "Sanitized Output" }
  ];

  return (
    <div className="prompt-security-flow-wrapper" aria-label="Secure Prompt Scoring Security Pipeline">
      {/* Flow Header */}
      <div className="flow-card-header font-mono">
        <div className="flow-title">
          <ShieldCheck size={14} className="text-accent" />
          <span>SECURITY PIPELINE · 7-TIER VALIDATION MATRIX</span>
        </div>
        <div className="flow-tag">
          <span>~95% ATTACK REDUCTION</span>
        </div>
      </div>

      {/* Pipeline Data Stream Visualizer */}
      <div className="pipeline-stream-container font-mono">
        <div className="pipeline-stream-stages">
          {pipelineStages.map((stage, idx) => (
            <React.Fragment key={stage.label}>
              <div className="stream-stage-node">
                <span className="stage-index">{String(idx + 1).padStart(2, '0')}</span>
                <span className="stage-title">{stage.label}</span>
                <span className="stage-sub">{stage.sub}</span>
              </div>
              {idx < pipelineStages.length - 1 && (
                <div className="stream-arrow" aria-hidden="true">
                  <ArrowRight size={13} className="text-accent arrow-horizontal" />
                  <ArrowDown size={13} className="text-accent arrow-vertical" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Security Controls Grid */}
      <div className="security-controls-panel">
        <div className="controls-panel-title font-mono">
          <Lock size={12} className="text-accent" />
          <span>IMPLEMENTED SECURITY CONTROLS (CLICK TO INSPECT)</span>
        </div>
        <div className="controls-badges-grid">
          {SECURITY_CONTROLS.map((ctrl) => {
            const isSelected = activeControl?.name === ctrl.name;
            return (
              <button
                key={ctrl.name}
                type="button"
                className={`control-badge-btn ${isSelected ? 'control-active' : ''}`}
                onClick={() => setActiveControl(isSelected ? null : ctrl)}
                aria-label={`Inspect ${ctrl.name}: ${ctrl.desc}`}
              >
                <CheckCircle2 size={11} className="text-accent" />
                <span className="ctrl-name font-mono">{ctrl.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Control Details Callout */}
      {activeControl && (
        <div className="control-detail-callout font-mono" role="status">
          <div className="callout-header">
            <Key size={13} className="text-accent" />
            <span className="callout-title">{activeControl.name}</span>
            <span className="callout-tag text-muted">[{activeControl.tag}]</span>
          </div>
          <p className="callout-desc font-sans">{activeControl.desc}</p>
        </div>
      )}

      {/* Footer Note */}
      <div className="flow-card-footer font-mono">
        <span>// PRIVACY-BY-DESIGN ARCHITECTURE · LAYERED DEFENSE-IN-DEPTH ENFORCEMENT</span>
      </div>
    </div>
  );
};
