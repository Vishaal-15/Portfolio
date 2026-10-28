import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { PortraitFrame } from './PortraitFrame';
import { ArrowRight, Mail, FileText } from 'lucide-react';
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

          <h2 className="hero-subtitle">
            Cybersecurity <span className="hero-subtitle-amp">&amp;</span> Software Developer
          </h2>

          <p className="hero-description font-sans">
            Bridging software engineering and defensive security. I design and build high-throughput security event pipelines, real-time threat detection platforms, applied cryptographic solutions, and machine learning models.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="hero-btn-secondary">
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary hero-resume-btn"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Modern Portrait */}
        <div className="hero-right-column">
          <PortraitFrame />
        </div>
      </div>
    </section>
  );
};
