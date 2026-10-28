import React from 'react';
import { ExperienceItem } from '../../config/portfolioData';
import { XDRArchitecture } from './XDRArchitecture';
import { NetworkArchitecture } from './NetworkArchitecture';
import { ExperienceMetric } from './ExperienceMetric';
import { ShieldCheck, Building, Calendar, Check, Layers } from 'lucide-react';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const isPrimary = experience.isPrimary;
  const isCurrent = experience.status === 'CURRENT';

  return (
    <article
      id={`exp-${experience.id}`}
      className={`experience-card-container ${isPrimary ? 'card-primary technical-bracket' : 'card-standard'} ${isCurrent ? 'card-current' : ''}`}
      aria-labelledby={`heading-${experience.id}`}
    >
      {/* Top Card Header Strip */}
      <div className="card-top-header">
        <div className="card-header-main">
          <div className="title-block">
            <div className="role-and-status">
              <h3 id={`heading-${experience.id}`} className="experience-role-title">
                {experience.role}
              </h3>
              {isCurrent ? (
                <span className="status-pill status-current">
                  <span>Current</span>
                </span>
              ) : (
                <span className="status-pill status-completed">
                  <Check size={11} className="text-accent" />
                  <span>Completed</span>
                </span>
              )}
            </div>

            <div className="org-and-date">
              <span className="org-name">
                <Building size={14} className="inline-icon text-accent" />
                {experience.organization}
              </span>
              {experience.department && (
                <span className="department-tag text-muted">{experience.department}</span>
              )}
              <span className="period-divider text-muted">•</span>
              <span className="period-date text-accent">
                <Calendar size={13} className="inline-icon text-accent" />
                {experience.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Role Summary Banner */}
      {experience.recruiterSummary && (
        <div className="recruiter-summary-banner technical-bracket" role="region" aria-label="Executive Technical Summary">
          <div className="recruiter-banner-head">
            <ShieldCheck size={14} className="text-accent" />
            <span className="recruiter-label">Key Highlights</span>
          </div>
          <div className="recruiter-headline">{experience.recruiterSummary.headline}</div>
          <div className="recruiter-subhead">{experience.recruiterSummary.highlight}</div>
          <div className="recruiter-tagline">
            {experience.recruiterSummary.tags.map((tag) => (
              <span key={tag} className="recruiter-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* Main Body Grid: Narrative & Visual Elements */}
      <div className="card-body-content">
        {/* Left Column: First-Person Narrative & Key Contributions */}
        <div className="card-narrative-section">
          <p className="card-lead-summary font-sans">
            {experience.summary}
          </p>

          <div className="card-bullets-block font-sans">
            <div className="bullets-header">
              Key Contributions &amp; Engineering Scope
            </div>
            <ul className="bullets-list">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-indicator" aria-hidden="true">•</span>
                  <span className="bullet-text">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metric Panel (if not primary large visualization) */}
          {experience.metric && !isPrimary && (
            <div className="card-metric-wrapper">
              <ExperienceMetric metric={experience.metric} />
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="card-stack-block">
            <div className="stack-header">
              <Layers size={13} className="text-accent" />
              <span>TECHNOLOGY STACK</span>
            </div>
            <div className="stack-pills-list">
              {experience.stack.map((tech) => (
                <span key={tech} className="tech-pill font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Architecture / Prominent Metric */}
        {experience.architectureType === 'xdr' && (
          <div className="card-visual-section card-visual-xdr">
            {/* Metric Panel for XDR */}
            {experience.metric && (
              <div className="xdr-metric-top">
                <ExperienceMetric metric={experience.metric} size="large" />
              </div>
            )}
            <XDRArchitecture />
          </div>
        )}

        {experience.architectureType === 'network' && (
          <div className="card-visual-section card-visual-network">
            <NetworkArchitecture />
          </div>
        )}
      </div>
    </article>
  );
};
