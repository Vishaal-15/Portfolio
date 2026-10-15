import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { GraduationCap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import './AcademicSummaryCard.css';

export const AcademicSummaryCard: React.FC = () => {
  const { academicProfile, degree, institution, researchLab } = PORTFOLIO_DATA;

  return (
    <div className="academic-summary-card technical-bracket" aria-label="Academic Summary and Research Trajectory">
      {/* Top Header Badge */}
      <div className="summary-card-header font-mono">
        <div className="header-left">
          <GraduationCap size={15} className="text-accent" />
          <span className="header-title">PROSPECTIVE GRADUATE RESEARCHER</span>
        </div>
        <div className="header-right">
          <span className="applicant-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <span>ACTIVE</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="summary-card-body">
        <h3 className="summary-headline font-mono">
          {academicProfile.statementHeadline}
        </h3>

        <p className="summary-description">
          {academicProfile.researchFocusSummary}
        </p>

        {/* Academic Credentials Strip */}
        <div className="academic-credentials-grid font-mono">
          <div className="cred-item">
            <div className="cred-icon-box">
              <BookOpen size={13} className="text-accent" />
            </div>
            <div className="cred-text-group">
              <span className="cred-label">UNDERGRADUATE DEGREE</span>
              <span className="cred-value">{degree}</span>
              <span className="cred-sub text-muted">{institution}</span>
            </div>
          </div>

          <div className="cred-item">
            <div className="cred-icon-box">
              <Layers size={13} className="text-accent" />
            </div>
            <div className="cred-text-group">
              <span className="cred-label">ACTIVE LAB AFFILIATION</span>
              <span className="cred-value">Cybersecurity Research Intern</span>
              <span className="cred-sub text-muted">{researchLab}</span>
            </div>
          </div>
        </div>

        {/* Research Competencies Badges */}
        <div className="summary-badges-row font-mono">
          <span className="badge-chip">
            <CheckCircle2 size={11} className="text-accent inline-icon" />
            Distributed Telemetry
          </span>
          <span className="badge-chip">
            <CheckCircle2 size={11} className="text-accent inline-icon" />
            Cryptographic Primitives
          </span>
          <span className="badge-chip">
            <CheckCircle2 size={11} className="text-accent inline-icon" />
            Applied Machine Learning
          </span>
          <span className="badge-chip">
            <CheckCircle2 size={11} className="text-accent inline-icon" />
            Defense-in-Depth
          </span>
        </div>
      </div>
    </div>
  );
};
