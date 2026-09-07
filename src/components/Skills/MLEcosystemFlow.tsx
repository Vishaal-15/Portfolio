import React, { useState } from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { Cpu, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

export const MLEcosystemFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const steps = SKILLS_DATA.mlFlow;

  return (
    <div className="skills-diagram-wrapper technical-bracket" aria-label="Machine Learning Pipeline Architecture">
      <div className="diagram-header font-mono">
        <div className="diagram-title">
          <Cpu size={14} className="text-accent" />
          <span>APPLIED MACHINE LEARNING · WORKFLOW PIPELINE</span>
        </div>
        <span className="diagram-tag text-muted">// STATISTICAL &amp; ENSEMBLE MODELING</span>
      </div>

      <p className="diagram-intro font-sans">
        Practical ML workflow connecting raw tabular features to validated predictive inference for real-time decision support.
      </p>

      {/* Horizontal Flow Container */}
      <div className="diagram-pipeline-container font-mono">
        <div className="diagram-pipeline-row">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <React.Fragment key={item.name}>
                <button
                  type="button"
                  className={`diagram-node-btn ${isSelected ? 'node-active' : ''}`}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  aria-expanded={isSelected}
                  aria-label={`Inspect ${item.name}`}
                >
                  <span className="node-num">// {item.step}</span>
                  <span className="node-title">{item.name}</span>
                </button>

                {idx < steps.length - 1 && (
                  <div className="diagram-connector" aria-hidden="true">
                    <ArrowRight size={13} className="text-accent arrow-h" />
                    <ArrowDown size={13} className="text-accent arrow-v" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Detail Callout */}
      {activeStep !== null && (
        <div className="diagram-detail-callout font-mono" role="status">
          <div className="detail-callout-head">
            <CheckCircle2 size={13} className="text-accent" />
            <span className="callout-stage-title">
              STAGE {steps[activeStep].step}: {steps[activeStep].name}
            </span>
          </div>
          <p className="callout-stage-desc font-sans">
            {steps[activeStep].desc}
          </p>
        </div>
      )}
    </div>
  );
};
