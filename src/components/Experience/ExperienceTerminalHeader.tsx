import React from 'react';
import { Layers, Shield, CheckCircle2, FlaskConical, Network, Globe } from 'lucide-react';

interface ExperienceTerminalHeaderProps {
  filterMode: 'all' | 'security';
  onFilterChange: (mode: 'all' | 'security') => void;
}

export const ExperienceTerminalHeader: React.FC<ExperienceTerminalHeaderProps> = ({
  filterMode,
  onFilterChange
}) => {
  return (
    <div className="experience-terminal-window technical-bracket" aria-label="Experience Overview & Filters">
      {/* Header Bar */}
      <div className="experience-terminal-header font-mono">
        <div className="terminal-header-title">
          <Layers size={14} className="text-accent" />
          <span>RESEARCH INTERNSHIPS &amp; INDUSTRIAL EXPERIENCE</span>
        </div>
        <div className="terminal-header-status">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">3 VERIFIED ROLES</span>
        </div>
      </div>

      {/* Summary Body */}
      <div className="experience-terminal-body font-mono">
        {/* Academic / Research Scope Overview */}
        <div className="experience-scope-row">
          <div className="scope-item">
            <FlaskConical size={13} className="text-accent inline-icon" />
            <span className="scope-name">VIT-AP CoE:</span>
            <span className="scope-desc text-muted">Agentic SOC Telemetry &amp; Automated Incident Triage</span>
          </div>
          <div className="scope-item">
            <Network size={13} className="text-accent inline-icon" />
            <span className="scope-name">Juniper Networks:</span>
            <span className="scope-desc text-muted">BGP / OSPF Protocols &amp; Virtual Topologies</span>
          </div>
          <div className="scope-item">
            <Globe size={13} className="text-accent inline-icon" />
            <span className="scope-name">MotionCut:</span>
            <span className="scope-desc text-muted">Frontend Performance Profiling (~30% Speedup)</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="terminal-filter-toolbar">
          <div className="filter-prompt">
            <CheckCircle2 size={13} className="text-accent inline-icon" />
            <span className="filter-command-label">
              FILTER PERSPECTIVE:
            </span>
          </div>

          <div className="filter-buttons-group">
            <button
              type="button"
              className={`filter-toggle-btn ${filterMode === 'all' ? 'filter-active' : ''}`}
              onClick={() => onFilterChange('all')}
              aria-pressed={filterMode === 'all'}
            >
              <Layers size={12} />
              <span>ALL APPOINTMENTS [3]</span>
            </button>

            <button
              type="button"
              className={`filter-toggle-btn ${filterMode === 'security' ? 'filter-active' : ''}`}
              onClick={() => onFilterChange('security')}
              aria-pressed={filterMode === 'security'}
            >
              <Shield size={12} />
              <span>RESEARCH &amp; SYSTEMS FOCUS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
