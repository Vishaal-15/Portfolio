import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { PortraitFrame } from './PortraitFrame';
import { Terminal, Shield, Cpu, Download } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-label="Professional Profile Hero">
      <div className="hero-container">
        {/* Left Column: Name, Subtitle, Bio & Direct Action Buttons */}
        <div className="hero-left-column">
          <h1 className="hero-name">
            <span className="hero-gradient-name">{PORTFOLIO_DATA.name}</span>
          </h1>

          <h2 className="hero-subtitle font-mono">
            <Shield size={20} className="hero-sub-icon text-accent" />
            <span>Cybersecurity &amp;</span>
            <Terminal size={20} className="hero-sub-icon text-accent" />
            <span>Software Developer</span>
          </h2>

          <p className="hero-description font-sans">
            Bridging the gap between software development and defensive security. I build secure systems, real-time threat detection platforms, and intelligent security solutions. Specializing in telemetry ingestion, applied cryptography, and machine learning.
          </p>

          <div className="hero-actions font-mono">
            <a href="#projects" className="hero-btn-primary">
              <Cpu size={18} />
              <span>VIEW PROJECTS</span>
            </a>
            <a href="#contact" className="hero-btn-secondary">
              <span>INITIATE CONTACT</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary hero-resume-btn"
            >
              <Download size={18} />
              <span>RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Square Reticle Frame with Circular Headshot */}
        <div className="hero-right-column">
          <PortraitFrame />
        </div>
      </div>
    </section>
  );
};
