import React, { useState } from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { GitCommit, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

export const ResearchEngineeringFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const steps = RESEARCH_DATA.methodology;

  return (
    <div className="research-engineering-wrapper technical-bracket" aria-label="Research to Engineering Methodology">
      {/* Header */}
      <div className="engineering-header font-mono">
        <div className="eng-title">
          <GitCommit size={14} className="text-accent" />
          <span>RESEARCH → ENGINEERING · APPLIED METHODOLOGY PIPELINE</span>
        </div>
        <div className="eng-badge">
          <span>THEORY TO DEFENSIBLE DEPLOYMENT</span>
        </div>
      </div>

      <p className="eng-intro font-sans">
        My approach bridges foundational security questions with rigorous system implementation, ensuring empirical verification at every stage of architecture design.
      </p>

      {/* Interactive Methodology Pipeline */}
      <div className="eng-pipeline-container font-mono">
        <div className="eng-pipeline-stages">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <React.Fragment key={item.name}>
                <button
                  type="button"
                  className={`eng-stage-btn ${isSelected ? 'stage-active' : ''}`}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  aria-expanded={isSelected}
                  aria-label={`Inspect stage ${item.step}: ${item.name}`}
                >
                  <span className="stage-step-num">// {item.step}</span>
                  <span className="stage-step-name">{item.name}</span>
                  <span className="stage-step-sub text-muted">{item.sub}</span>
                </button>

                {idx < steps.length - 1 && (
                  <div className="eng-stage-arrow" aria-hidden="true">
                    <ArrowRight size={13} className="text-accent arrow-h" />
                    <ArrowDown size={13} className="text-accent arrow-v" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Step Description Callout */}
      {activeStep !== null && (
        <div className="eng-detail-callout font-mono" role="status">
          <div className="eng-callout-head">
            <CheckCircle2 size={13} className="text-accent" />
            <span className="eng-callout-title">
              STAGE {steps[activeStep].step}: {steps[activeStep].name}
            </span>
            <span className="eng-callout-sub text-accent">[{steps[activeStep].sub}]</span>
          </div>
          <p className="eng-callout-desc font-sans">
            {steps[activeStep].desc}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="eng-footer font-mono text-muted">
        <span>// RIGOROUS CYBERSECURITY METHODOLOGY: THREAT MODELING ➔ SECURE ARCHITECTURE ➔ TESTING</span>
      </div>
    </div>
  );
};
