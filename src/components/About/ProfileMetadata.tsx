import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ShieldCheck, UserCheck, GraduationCap, Building2, FlaskConical, MapPin, Target, Activity } from 'lucide-react';

export const ProfileMetadata: React.FC = () => {
  const { currentPosition, degree, institution, currentYear, location, researchLab, about } = PORTFOLIO_DATA;

  return (
    <div className="profile-metadata-container">
      {/* Primary Dossier Card */}
      <div className="dossier-card technical-bracket font-mono" aria-label="Security Profile Dossier">
        {/* Card Header */}
        <div className="dossier-header">
          <div className="dossier-header-title">
            <ShieldCheck size={14} className="text-accent" />
            <span>SECURITY DOSSIER // VAK-01</span>
          </div>
          <div className="dossier-status-pill">
            <span className="pulse-dot" />
            <span className="text-accent">VERIFIED</span>
          </div>
        </div>

        {/* Metadata List */}
        <div className="dossier-fields-list">
          {/* Field: Role */}
          <div className="dossier-field">
            <div className="field-label-group">
              <UserCheck size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">ROLE</span>
            </div>
            <div className="field-value font-sans font-semibold text-primary">
              {currentPosition}
            </div>
          </div>

          {/* Field: Education */}
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

          {/* Field: Institution */}
          <div className="dossier-field">
            <div className="field-label-group">
              <Building2 size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">INSTITUTION</span>
            </div>
            <div className="field-value font-sans text-primary">
              {institution}
            </div>
          </div>

          {/* Field: Research Lab */}
          <div className="dossier-field research-field">
            <div className="field-label-group">
              <FlaskConical size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">RESEARCH AFFILIATION</span>
            </div>
            <div className="field-value font-sans text-accent-secondary">
              {researchLab}
            </div>
          </div>

          {/* Field: Location */}
          <div className="dossier-field">
            <div className="field-label-group">
              <MapPin size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">LOCATION</span>
            </div>
            <div className="field-value font-sans text-primary">
              {location}
            </div>
          </div>

          {/* Field: Focus Domains */}
          <div className="dossier-field">
            <div className="field-label-group">
              <Target size={12} className="field-icon text-accent" />
              <span className="field-label text-muted">CORE FOCUS</span>
            </div>
            <div className="field-value font-mono text-secondary field-tags-inline">
              Cybersecurity • Secure Systems • ML • Backend Engineering • Network Security
            </div>
          </div>
        </div>
      </div>

      {/* Security Attributes Matrix Card */}
      <div className="attributes-matrix-card technical-bracket font-mono" aria-label="Security Attributes Matrix">
        <div className="attributes-header">
          <Activity size={13} className="text-accent" />
          <span className="attributes-title">// ENGINEERING PRINCIPLES</span>
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
