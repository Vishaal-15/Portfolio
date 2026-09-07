import React from 'react';
import { Layers, ArrowRight, Cpu } from 'lucide-react';

interface MLArchitectureFlowProps {
  type: 'ecommerce' | 'crop';
}

export const MLArchitectureFlow: React.FC<MLArchitectureFlowProps> = ({ type }) => {
  if (type === 'ecommerce') {
    const ecomSteps = [
      { step: "01", name: "REACT UI", role: "Dynamic Catalog" },
      { step: "02", name: "NODE / EXPRESS", role: "REST API Gateway" },
      { step: "03", name: "PYTHON INFERENCE", role: "Regression Engine" },
      { step: "04", name: "PRICE PREDICTION", role: "<500ms Latency" }
    ];

    return (
      <div className="ml-flow-wrapper font-mono" aria-label="E-Commerce Full Stack ML Flow">
        <div className="ml-flow-header">
          <Layers size={13} className="text-accent" />
          <span>FULL-STACK ML PIPELINE FLOW</span>
        </div>

        <div className="ml-flow-nodes-row">
          {ecomSteps.map((item, idx) => (
            <React.Fragment key={item.name}>
              <div className="ml-node-badge">
                <span className="ml-node-step">{item.step}</span>
                <span className="ml-node-name">{item.name}</span>
                <span className="ml-node-sub">{item.role}</span>
              </div>
              {idx < ecomSteps.length - 1 && (
                <ArrowRight size={12} className="text-accent ml-arrow-icon" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Crop Recommendation Flow
  const cropStages = [
    { step: "INPUT", name: "SOIL (N, P, K) & CLIMATE", role: "7 Environmental Parameters" },
    { step: "MODEL", name: "RANDOM FOREST CLASSIFIER", role: "Cross-Validated Ensemble" },
    { step: "OUTPUT", name: "OPTIMAL CROP DECISION", role: "88% Test Accuracy (+12% Imp.)" }
  ];

  return (
    <div className="ml-flow-wrapper font-mono" aria-label="Crop Recommendation ML Flow">
      <div className="ml-flow-header">
        <Cpu size={13} className="text-accent" />
        <span>CLASSIFICATION PIPELINE &amp; MULTI-MODEL ENSEMBLE</span>
      </div>

      <div className="ml-flow-nodes-row">
        {cropStages.map((item, idx) => (
          <React.Fragment key={item.name}>
            <div className="ml-node-badge">
              <span className="ml-node-step">{item.step}</span>
              <span className="ml-node-name">{item.name}</span>
              <span className="ml-node-sub">{item.role}</span>
            </div>
            {idx < cropStages.length - 1 && (
              <ArrowRight size={12} className="text-accent ml-arrow-icon" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
