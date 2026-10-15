import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ArrowRight, FileText, FolderGit2 } from 'lucide-react';
import './CTAButtons.css';

export const CTAButtons: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-cta-group">
      {/* Primary CTA: Explore Research & Systems */}
      <a
        href="#research"
        className="btn-primary font-mono"
        onClick={(e) => handleScrollTo(e, 'research')}
        aria-label="Explore research areas and systems"
      >
        <span className="btn-glow-layer" />
        <span className="btn-content">
          <FolderGit2 size={15} className="btn-icon-leading" />
          <span className="btn-label">EXPLORE RESEARCH</span>
          <ArrowRight size={15} className="btn-icon-trailing" />
        </span>
      </a>

      {/* Secondary CTA: Download Academic CV */}
      <a
        href={PORTFOLIO_DATA.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary font-mono"
        download="Vishaal_AK_Academic_CV.pdf"
        aria-label="Download Academic CV (PDF)"
      >
        <span className="btn-content">
          <FileText size={15} className="btn-icon-leading text-accent" />
          <span className="btn-label">ACADEMIC CV (PDF)</span>
        </span>
      </a>

      {/* Tertiary Quick Link: View Projects */}
      <a
        href="#projects"
        className="btn-tertiary font-mono"
        onClick={(e) => handleScrollTo(e, 'projects')}
        aria-label="View technical projects"
      >
        <span>PROJECTS &rarr;</span>
      </a>
    </div>
  );
};
