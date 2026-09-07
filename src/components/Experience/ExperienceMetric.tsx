import React from 'react';
import { ExperienceMetricData } from '../../config/portfolioData';

interface ExperienceMetricProps {
  metric: ExperienceMetricData;
  size?: 'normal' | 'large';
  className?: string;
}

export const ExperienceMetric: React.FC<ExperienceMetricProps> = ({
  metric,
  size = 'normal',
  className = ''
}) => {
  return (
    <div
      className={`experience-metric-panel technical-bracket ${size === 'large' ? 'metric-large' : ''} ${className}`}
      role="group"
      aria-label={`${metric.context}: ${metric.value} ${metric.label}`}
    >
      <div className="metric-context font-mono">
        <span className="metric-prefix">//</span> {metric.context}
      </div>
      <div className="metric-value-row">
        <span className="metric-number font-mono">{metric.value}</span>
        <span className="metric-label font-mono">{metric.label}</span>
      </div>
      <div className="metric-status-bar" aria-hidden="true">
        <span className="metric-bar-fill" />
      </div>
    </div>
  );
};
