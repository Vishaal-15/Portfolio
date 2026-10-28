import React from 'react';
import { ProfileTerminal } from './ProfileTerminal';
import { CapabilityPreview } from './CapabilityPreview';
import { ProfileMetadata } from './ProfileMetadata';
import { PhilosophyCard } from './PhilosophyCard';
import { ShieldCheck } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Vishaal A K">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-section-header">
          <div className="section-badge">
            <ShieldCheck size={13} className="text-accent" />
            <span>About &amp; Foundations</span>
          </div>

          <h2 className="section-main-title">
            Academic Foundations <span className="text-accent">&amp;</span> Lab Research
          </h2>

          <div className="section-subtext">
            <span></span>
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
