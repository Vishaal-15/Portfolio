import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ExperienceCard } from './ExperienceCard';
import { ShieldCheck } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  const primaryExperience = PORTFOLIO_DATA.experience.items[0];

  return (
    <section id="experience" className="experience-section" aria-label="Professional Experience and Research Appointment">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-section-header">
          <div className="section-badge">
            <ShieldCheck size={13} className="text-accent" />
            <span>Experience &amp; Appointments</span>
          </div>

          <h2 className="section-main-title">
            Professional <span className="text-accent">Experience</span>
          </h2>

          <div className="section-subtext">
            <span>Agentic SOC Platform · Real-Time Telemetry · Automated Incident Triage</span>
          </div>
        </div>

        {/* Experience Content: Clean High-Impact Primary Card */}
        <div className="experience-cards-feed" role="feed" aria-label="Experience Record">
          {primaryExperience && (
            <ExperienceCard experience={primaryExperience} />
          )}
        </div>
      </div>
    </section>
  );
};
