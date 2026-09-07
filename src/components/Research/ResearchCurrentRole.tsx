import React from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { Building, Calendar, Activity, Cpu } from 'lucide-react';

export const ResearchCurrentRole: React.FC = () => {
  const { currentRole, statusIndicators } = RESEARCH_DATA;

  return (
    <div className="research-current-card technical-bracket" aria-label="Current Cybersecurity Research Role">
      {/* Top Header Strip */}
      <div className="current-role-header">
        <div className="current-badge-group font-mono">
          <span className="current-badge-tag">
            <Activity size={12} className="text-accent" />
            <span>{currentRole.badge}</span>
          </span>
          <span className="current-status-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <span>● {currentRole.status}</span>
          </span>
        </div>

        <div className="current-date-tag font-mono text-muted">
          <Calendar size={12} className="inline-icon text-accent" />
          <span>START: {currentRole.startDate} — PRESENT</span>
        </div>
      </div>

      {/* Main Role & Institution */}
      <div className="current-role-body">
        <div className="role-titles-block">
          <h3 className="current-role-title">
            {currentRole.role}
          </h3>
          <div className="current-org-line font-mono">
            <span className="org-name">
              <Building size={13} className="inline-icon text-accent" />
              {currentRole.organization}
            </span>
            <span className="unit-name text-muted">
              [{currentRole.department}]
            </span>
          </div>
        </div>

        <p className="current-overview font-sans">
          {currentRole.overview}
        </p>

        {/* Research Scope */}
        <div className="current-scope-block font-sans">
          <div className="scope-head font-mono">
            <span className="text-accent">//</span> ACTIVE RESEARCH SCOPE:
          </div>
          <ul className="scope-bullets">
            {currentRole.researchScope.map((scope, idx) => (
              <li key={idx} className="scope-item">
                <span className="scope-prefix font-mono text-accent">❯</span>
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus Status Indicators HUD */}
        <div className="research-status-hud font-mono" role="region" aria-label="Research Focus Activity Indicators">
          <div className="hud-header">
            <Cpu size={12} className="text-accent" />
            <span>RESEARCH FOCUS STATUS INDICATORS</span>
          </div>
          <div className="hud-badges-grid">
            {statusIndicators.map((ind) => (
              <div key={ind.label} className="hud-badge-item">
                <span className={ind.status === 'ACTIVE' ? 'pulse-dot' : 'status-dot-amber'} aria-hidden="true" />
                <span className="hud-label">{ind.label}</span>
                <span className={`hud-val ${ind.status === 'ACTIVE' ? 'text-accent' : 'text-amber'}`}>
                  {ind.status}
                </span>
              </div>
            ))}
          </div>
          <div className="hud-disclaimer text-muted">
            // NOTE: INDICATES PORTFOLIO RESEARCH FOCUS AND ACTIVE INVESTIGATION AREAS
          </div>
        </div>
      </div>
    </div>
  );
};
