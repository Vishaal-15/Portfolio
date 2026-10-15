import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { BookOpen, UserCheck, GraduationCap, Building2, FlaskConical, MapPin, Target, Activity } from 'lucide-react';

export const ProfileMetadata: React.FC = () => {
  const { degree, institution, currentYear, location, researchLab, about } = PORTFOLIO_DATA;

  return (
    <div className="profile-metadata-container">
      {/* Profile Overview Card */}
      <div className="dossier-card technical-bracket font-mono" aria-label="Profile Overview">
        {/* Card Header */}
        <div className="dossier-header">
          <div className="dossier-header-title">
            <BookOpen size={14} className="text-accent" />
            <span>PROFILE OVERVIEW</span>
          </div>
          <div className="dossier-status-pill">
            <span className="pulse-dot" />
            <span className="text-accent">ACTIVE</span>
          </div>
        </div>

        {/* Metadata List */}
        <div className="dossier-fields-list">
          {/* Current Role */}
          <div className="dossier-field">
            <div className="field-label-group">
              <UserCheck size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">CURRENT ROLE</span>
            </div>
            <div className="field-value font-sans font-semibold text-primary">
              Security Research Intern
            </div>
          </div>

          {/* Research Lab */}
          <div className="dossier-field research-field">
            <div className="field-label-group">
              <FlaskConical size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">AFFILIATION</span>
            </div>
            <div className="field-value font-sans text-accent-secondary">
              {researchLab}
            </div>
          </div>

          {/* Primary Focus */}
          <div className="dossier-field">
            <div className="field-label-group">
              <Target size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">CORE DOMAINS</span>
            </div>
            <div className="field-value font-sans font-semibold text-accent">
              Cybersecurity, Distributed Systems &amp; Machine Learning
            </div>
          </div>

          {/* Undergrad Education */}
          <div className="dossier-field">
            <div className="field-label-group">
              <GraduationCap size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">EDUCATION</span>
            </div>
            <div className="field-value font-sans text-primary">
              {degree}
              <span className="field-badge font-mono">{currentYear}</span>
            </div>
          </div>

          {/* Institution */}
          <div className="dossier-field">
            <div className="field-label-group">
              <Building2 size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">INSTITUTION</span>
            </div>
            <div className="field-value font-sans text-primary">
              {institution}
            </div>
          </div>

          {/* Location */}
          <div className="dossier-field">
            <div className="field-label-group">
              <MapPin size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">LOCATION</span>
            </div>
            <div className="field-value font-sans text-primary">
              {location}
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Principles Matrix Card */}
      <div className="attributes-matrix-card technical-bracket font-mono" aria-label="Engineering Principles Matrix">
        <div className="attributes-header">
          <Activity size={13} className="text-accent" />
          <span className="attributes-title">// ENGINEERING &amp; SYSTEMS PRINCIPLES</span>
        </div>
        <div className="attributes-list">
          {about.securityAttributes.map((attr) => (
            <div key={attr.label} className="attribute-row">
              <span className="attribute-label">{attr.label}</span>
              <div className="attribute-indicator">
                <span className="pulse-dot mini-dot" />
                <span className="attribute-status text-accent">{attr.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
