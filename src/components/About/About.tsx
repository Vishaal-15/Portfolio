import React from 'react';
import { ProfileTerminal } from './ProfileTerminal';
import { CapabilityPreview } from './CapabilityPreview';
import { ProfileMetadata } from './ProfileMetadata';
import { PhilosophyCard } from './PhilosophyCard';
import { ShieldCheck, Cpu } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Vishaal A K">
      {/* Section Ambient Banner */}
      <div className="about-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// BACKGROUND: B.E. COMPUTER SCIENCE &amp; ENGINEERING</span>
        <span className="crosshair-tag top-right">SPECIALIZATION: CYBERSECURITY &amp; DISTRIBUTED SYSTEMS</span>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <div className="about-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>01. ABOUT &amp; TECHNICAL FOUNDATIONS</span>
          </div>

          <h2 className="section-main-title">
            Academic Foundations <span className="text-accent">&amp;</span> Lab Research
          </h2>

          <div className="section-subtext font-mono">
            <Cpu size={12} className="inline-icon text-accent" />
            <span>UNDERGRADUATE PREPARATION • REAL-TIME TELEMETRY • DEFENSIVE SYSTEMS ARCHITECTURE</span>
          </div>
        </div>

        {/* Two-Column About Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative Terminal & Capabilities Preview */}
          <div className="about-left-col">
            <ProfileTerminal />
            <CapabilityPreview />
          </div>

          {/* Right Column: Dossier Metadata & Philosophy */}
          <div className="about-right-col">
            <ProfileMetadata />
            <PhilosophyCard />
          </div>
        </div>
      </div>
    </section>
  );
};
