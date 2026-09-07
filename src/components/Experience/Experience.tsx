import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ExperienceTerminalHeader } from './ExperienceTerminalHeader';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ExperienceCard } from './ExperienceCard';
import { ShieldCheck, Activity } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'security'>('all');
  const [activeExpId, setActiveExpId] = useState<string>('vitap-xdr');

  const allItems = PORTFOLIO_DATA.experience.items;
  const filteredItems = filterMode === 'security'
    ? allItems.filter(item => item.isPrimary || item.id === 'vitap-xdr' || item.id === 'juniper-networking')
    : allItems;

  return (
    <section id="experience" className="experience-section" aria-label="Professional Experience and Security Operations">
      {/* Top Ambient Crosshairs / Watermark */}
      <div className="experience-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// LOGSTREAM: VAK-OPERATIONAL-EXPERIENCE</span>
        <span className="crosshair-tag top-right">SYSTEM_CLEARANCE: OPERATIONAL</span>
      </div>

      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>02. PROFESSIONAL EXPERIENCE &amp; OPERATIONS</span>
          </div>

          <h2 className="section-main-title">
            Engineering Systems <span className="text-accent">&amp;</span> Defensive Security
          </h2>

          <div className="section-subtext font-mono">
            <Activity size={12} className="inline-icon text-accent" />
            <span>XDR PLATFORMS • ENTERPRISE ROUTING • PERFORMANCE OPTIMIZATION</span>
          </div>
        </div>

        {/* Terminal Header & Log Status */}
        <ExperienceTerminalHeader
          filterMode={filterMode}
          onFilterChange={setFilterMode}
        />

        {/* Experience Content Layout: Left Timeline Overview + Right Detailed Experience Cards */}
        <div className="experience-main-layout">
          <aside className="experience-sidebar" aria-label="Timeline Overview">
            <ExperienceTimeline
              activeId={activeExpId}
              onSelectExperience={setActiveExpId}
            />
          </aside>

          <div className="experience-cards-feed" role="feed" aria-label="Experience Records">
            {filteredItems.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
