import React, { useState } from 'react';
import { RESEARCH_DATA, ResearchFocusArea } from '../../config/researchData';
import { ShieldCheck, Cpu, Lock, Activity, Network, HelpCircle } from 'lucide-react';

export const ResearchFocusMatrix: React.FC = () => {
  const [activeArea, setActiveArea] = useState<ResearchFocusArea | null>(null);
  const areas = RESEARCH_DATA.focusAreas;

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity': return <ShieldCheck size={14} className="text-accent" />;
      case 'secure-systems': return <Lock size={14} className="text-accent" />;
      case 'machine-learning': return <Cpu size={14} className="text-accent" />;
      case 'detection-systems': return <Activity size={14} className="text-accent" />;
      case 'network-security': return <Network size={14} className="text-accent" />;
      default: return <ShieldCheck size={14} className="text-accent" />;
    }
  };

  return (
    <div className="research-focus-matrix-wrapper" aria-label="Research Focus Areas Matrix">
      {/* Section Subhead */}
      <div className="focus-matrix-header font-mono">
        <div className="focus-title">
          <ShieldCheck size={13} className="text-accent" />
          <span>RESEARCH FOCUS AREAS · 05 CORE INVESTIGATION DOMAINS</span>
        </div>
        <div className="focus-legend text-muted">
          // STATUS: [4 ACTIVE] · [1 EXPLORING]
        </div>
      </div>

      {/* Grid of 5 Focus Area Cards */}
      <div className="focus-cards-grid" role="list">
        {areas.map((area) => {
          const isSelected = activeArea?.id === area.id;
          return (
            <button
              key={area.id}
              type="button"
              className={`focus-card-btn technical-bracket ${isSelected ? 'focus-selected' : ''}`}
              onClick={() => setActiveArea(isSelected ? null : area)}
              aria-expanded={isSelected}
              role="listitem"
            >
              <div className="focus-card-top font-mono">
                <span className="focus-order">// {area.order}</span>
                <span className={`focus-status-badge ${area.status === 'ACTIVE' ? 'badge-active' : 'badge-exploring'}`}>
                  {area.statusLabel}
                </span>
              </div>

              <div className="focus-card-title-row">
                {getAreaIcon(area.id)}
                <h4 className="focus-area-title font-mono">{area.title}</h4>
              </div>

              <span className="focus-area-subtitle font-mono text-secondary">
                {area.subtitle}
              </span>

              <p className="focus-area-desc font-sans">
                {area.description}
              </p>

              <div className="focus-topics-tags font-mono">
                {area.keyTopics.map((topic) => (
                  <span key={topic} className="focus-tag">{topic}</span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Research Questions Detail Callout */}
      {activeArea && (
        <div className="focus-detail-callout technical-bracket font-mono" role="status">
          <div className="detail-callout-head">
            <HelpCircle size={14} className="text-accent" />
            <span className="callout-heading">
              KEY RESEARCH INQUIRIES // {activeArea.title}
            </span>
            <span className="callout-status-tag">{activeArea.statusLabel}</span>
          </div>

          <ul className="callout-questions-list font-sans">
            {activeArea.researchQuestions.map((q, idx) => (
              <li key={idx} className="question-item">
                <span className="question-prefix font-mono text-accent">Q{idx + 1}:</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
