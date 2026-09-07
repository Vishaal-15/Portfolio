import React from 'react';
import { ExperienceItem } from '../../config/portfolioData';
import { XDRArchitecture } from './XDRArchitecture';
import { NetworkArchitecture } from './NetworkArchitecture';
import { ExperienceMetric } from './ExperienceMetric';
import { ShieldCheck, Building, Calendar, Check, Layers, Terminal } from 'lucide-react';

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
          <div className="order-badge font-mono">
            <span className="order-prefix">//</span>
            <span className="order-number">{experience.order}</span>
          </div>

          <div className="title-block">
            <div className="role-and-status">
              <h3 id={`heading-${experience.id}`} className="experience-role-title">
                {experience.role}
              </h3>
              {isCurrent ? (
                <span className="status-pill status-current font-mono">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>● CURRENT</span>
                </span>
              ) : (
                <span className="status-pill status-completed font-mono">
                  <Check size={11} className="text-accent" />
                  <span>COMPLETED</span>
                </span>
              )}
            </div>

            <div className="org-and-date font-mono">
              <span className="org-name">
                <Building size={12} className="inline-icon text-accent" />
                {experience.organization}
              </span>
              {experience.department && (
                <span className="department-tag text-muted">[{experience.department}]</span>
              )}
              <span className="period-divider text-muted">•</span>
              <span className="period-date text-accent">
                <Calendar size={12} className="inline-icon text-accent" />
                {experience.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter-First Summary Banner (Primary Experience) */}
      {experience.recruiterSummary && (
        <div className="recruiter-summary-banner technical-bracket font-mono" role="region" aria-label="Executive Technical Summary">
          <div className="recruiter-banner-head">
            <ShieldCheck size={14} className="text-accent" />
            <span className="recruiter-label">EXECUTIVE RECRUITER SUMMARY</span>
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
            <div className="bullets-header font-mono">
              <span className="text-accent">//</span> KEY CONTRIBUTIONS &amp; ENGINEERING SCOPE:
            </div>
            <ul className="bullets-list">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-indicator font-mono" aria-hidden="true">❯</span>
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
            <div className="stack-header font-mono">
              <Layers size={12} className="text-accent" />
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

      {/* Card Footer Technical Status */}
      <div className="card-footer-strip font-mono" aria-hidden="true">
        <div className="footer-terminal-log">
          <Terminal size={11} className="text-accent" />
          <span className="terminal-user">vishaal@sec-lab:~$</span>
          <span className="terminal-cmd">git log --stat --oneline -1 {experience.id}</span>
        </div>
        <div className="footer-status-tag">
          <span>[VERIFIED_RECORD_{experience.order}]</span>
        </div>
      </div>
    </article>
  );
};
