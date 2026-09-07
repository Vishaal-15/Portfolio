import React from 'react';
import { PORTFOLIO_DATA, ExperienceItem } from '../../config/portfolioData';
import { Calendar, ChevronRight } from 'lucide-react';

interface ExperienceTimelineProps {
  activeId?: string;
  onSelectExperience?: (id: string) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  activeId,
  onSelectExperience
}) => {
  const experiences = PORTFOLIO_DATA.experience.items;

  const scrollToExperience = (id: string) => {
    if (onSelectExperience) {
      onSelectExperience(id);
    }
    const element = document.getElementById(`exp-${id}`);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="experience-timeline-nav" aria-label="Experience Timeline Track">
      <div className="timeline-track-header font-mono">
        <Calendar size={13} className="text-accent" />
        <span>TIMELINE FEED · 2024 — 2026</span>
      </div>

      <div className="timeline-nodes-list" role="list">
        {experiences.map((exp: ExperienceItem, index: number) => {
          const isCurrent = exp.status === 'CURRENT';
          const isSelected = activeId === exp.id;

          return (
            <div key={exp.id} className="timeline-node-wrapper" role="listitem">
              {/* Connector line between nodes */}
              {index < experiences.length - 1 && (
                <div className="timeline-connector-line" aria-hidden="true" />
              )}

              <button
                type="button"
                className={`timeline-node-button ${isSelected ? 'node-selected' : ''} ${isCurrent ? 'node-current' : ''}`}
                onClick={() => scrollToExperience(exp.id)}
                aria-label={`Jump to ${exp.role} at ${exp.organization}`}
              >
                <div className="timeline-dot-wrapper">
                  <span className={`timeline-dot ${isCurrent ? 'pulse-dot' : ''}`} />
                </div>

                <div className="timeline-node-body font-mono">
                  <div className="timeline-node-meta">
                    <span className="timeline-year">{exp.year}</span>
                    {isCurrent ? (
                      <span className="timeline-badge-current">● CURRENT</span>
                    ) : (
                      <span className="timeline-badge-done">COMPLETED</span>
                    )}
                  </div>
                  <span className="timeline-role-title">{exp.role}</span>
                  <span className="timeline-org-title text-muted">{exp.organization}</span>
                </div>

                <ChevronRight size={13} className="timeline-arrow text-accent" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
