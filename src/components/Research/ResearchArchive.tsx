import React, { useState } from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { Archive, Folder, CheckCircle2 } from 'lucide-react';

export const ResearchArchive: React.FC = () => {
  const archiveItems = RESEARCH_DATA.archive;
  const [selectedId, setSelectedId] = useState<string>(archiveItems[0].id);

  const currentItem = archiveItems.find((item) => item.id === selectedId) || archiveItems[0];

  return (
    <div className="research-archive-wrapper technical-bracket" aria-label="Digital Research Archive">
      {/* Archive Header */}
      <div className="archive-header font-mono">
        <div className="archive-title">
          <Archive size={14} className="text-accent" />
          <span>RESEARCH ARCHIVE · DOMAIN REPOSITORIES</span>
        </div>
        <div className="archive-tag text-muted">
          // STATUS: INTEREST / CURRENT WORK
        </div>
      </div>

      <div className="archive-main-layout">
        {/* Left Side: Directory Selector */}
        <div className="archive-nav-list font-mono" role="tablist" aria-label="Research Archive Categories">
          {archiveItems.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`archive-nav-btn ${isSelected ? 'nav-active' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <div className="nav-btn-left">
                  <span className="archive-order">// {item.order}</span>
                  <Folder size={12} className="text-accent nav-folder-icon" />
                  <span className="archive-name">{item.name}</span>
                </div>
                <span className="archive-badge-pill">{item.status}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Selected Archive Domain Viewer */}
        <div className="archive-details-panel font-mono" role="tabpanel" aria-label={currentItem.name}>
          <div className="details-header">
            <div className="details-title-row">
              <span className="details-order text-accent">// {currentItem.order}</span>
              <h4 className="details-domain-title">{currentItem.name}</h4>
            </div>
            <span className="details-status-badge">STATUS: {currentItem.status}</span>
          </div>

          <p className="details-overview font-sans">
            {currentItem.focusOverview}
          </p>

          <div className="details-explorations-block">
            <div className="explorations-head text-muted">
              // TECHNICAL EXPLORATIONS &amp; APPLIED FOCUS:
            </div>
            <ul className="explorations-list font-sans">
              {currentItem.technicalExplorations.map((exp, idx) => (
                <li key={idx} className="exploration-item">
                  <CheckCircle2 size={13} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="archive-footer font-mono text-muted">
        <span>// DIGITAL RESEARCH ARCHIVE · ACTIVE INVESTIGATIONS &amp; ARCHITECTURAL EXPLORATIONS</span>
      </div>
    </div>
  );
};
