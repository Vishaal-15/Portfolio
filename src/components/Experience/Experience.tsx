import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ExperienceCard } from './ExperienceCard';
import { ShieldCheck, Activity } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  const primaryExperience = PORTFOLIO_DATA.experience.items[0];

  return (
    <section id="experience" className="experience-section" aria-label="Professional Experience and Research Appointment">
      {/* Top Ambient Banner */}
      <div className="experience-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// APPOINTMENT: RESEARCH LAB INTERNSHIP</span>
        <span className="crosshair-tag top-right">RECORD: VERIFIED ACTIVE APPOINTMENT</span>
      </div>

      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>02. EXPERIENCE</span>
          </div>

          <h2 className="section-main-title">
            Security Research <span className="text-accent">Intern</span>
          </h2>

          <div className="section-subtext font-mono">
            <Activity size={12} className="inline-icon text-accent" />
            <span>AGENTIC SOC PLATFORM • REAL-TIME TELEMETRY • AUTOMATED TRIAGE</span>
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
