import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Terminal, Shield, CheckCircle2 } from 'lucide-react';

interface ExperienceTerminalHeaderProps {
  filterMode: 'all' | 'security';
  onFilterChange: (mode: 'all' | 'security') => void;
}

export const ExperienceTerminalHeader: React.FC<ExperienceTerminalHeaderProps> = ({
  filterMode,
  onFilterChange
}) => {
  const expData = PORTFOLIO_DATA.experience;
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(filterMode === 'all' ? expData.command : expData.filterCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="experience-terminal-window technical-bracket" aria-label="Terminal Experience Log">
      {/* Terminal Bar */}
      <div className="experience-terminal-header font-mono">
        <div className="terminal-header-title">
          <Terminal size={13} className="text-accent" />
          <span>sec-lab: ~/logs/experience.log</span>
        </div>
        <div className="terminal-header-status">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">LOG_STREAM_VERIFIED</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="experience-terminal-body font-mono">
        {/* Command 1: cat experience.log */}
        <div className="terminal-log-line">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="terminal-cmd-text">{expData.command}</span>
          <button
            type="button"
            className="terminal-copy-btn"
            onClick={handleCopyCmd}
            title="Copy command"
            aria-label="Copy terminal command"
          >
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>

        {/* Output */}
        <div className="terminal-log-output">
          <div className="log-loading-text text-muted">
            <span className="loading-spinner" aria-hidden="true">⠋</span> {expData.loadingText}
          </div>
          <div className="log-records-found">
            <span className="records-count text-accent">{expData.recordsCount}</span>
            <span className="records-status font-bold">
              <CheckCircle2 size={12} className="inline-icon text-accent" /> {expData.verifiedStatus}
            </span>
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="terminal-filter-toolbar">
          <div className="filter-prompt">
            <span className="text-accent">vishaal@sec-lab:~$</span>
            <span className="filter-command-label">
              {filterMode === 'security' ? expData.filterCommand : 'cat experience.log --all'}
            </span>
          </div>

          <div className="filter-buttons-group">
            <button
              type="button"
              className={`filter-toggle-btn ${filterMode === 'all' ? 'filter-active' : ''}`}
              onClick={() => onFilterChange('all')}
              aria-pressed={filterMode === 'all'}
            >
              <Terminal size={11} />
              <span>SHOW ALL [3]</span>
            </button>

            <button
              type="button"
              className={`filter-toggle-btn ${filterMode === 'security' ? 'filter-active' : ''}`}
              onClick={() => onFilterChange('security')}
              aria-pressed={filterMode === 'security'}
            >
              <Shield size={11} />
              <span>SECURITY FOCUS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
