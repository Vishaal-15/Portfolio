import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ArrowRight, Download, Shield } from 'lucide-react';
import './CTAButtons.css';

export const CTAButtons: React.FC = () => {
  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-cta-group">
      {/* Primary CTA: View Projects */}
      <a
        href="#projects"
        className="btn-primary font-mono"
        onClick={handleProjectsClick}
        aria-label="View cybersecurity projects"
      >
        <span className="btn-glow-layer" />
        <span className="btn-content">
          <Shield size={16} className="btn-icon-leading" />
          <span className="btn-label">VIEW MY PROJECTS</span>
          <ArrowRight size={15} className="btn-icon-trailing" />
        </span>
      </a>

      {/* Secondary CTA: Download Resume */}
      <a
        href={PORTFOLIO_DATA.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary font-mono"
        download="Vishaal_AK_Resume.pdf"
        aria-label="Download Vishaal A K Resume (PDF)"
      >
        <span className="btn-content">
          <Download size={15} className="btn-icon-leading" />
          <span className="btn-label">DOWNLOAD MY RESUME</span>
        </span>
      </a>
    </div>
  );
};
