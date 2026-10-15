import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Quote, Sparkles } from 'lucide-react';

export const PhilosophyCard: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <div className="philosophy-card technical-bracket font-mono" aria-label="Core Research & Engineering Philosophy">
      {/* Header */}
      <div className="philosophy-header">
        <div className="philosophy-header-title">
          <Sparkles size={13} className="text-accent inline-icon" />
          <span>RESEARCH &amp; SYSTEMS PHILOSOPHY</span>
        </div>
        <span className="philosophy-tag text-muted">FOUNDATION</span>
      </div>

      {/* Quote Block */}
      <div className="philosophy-body">
        <Quote size={20} className="philosophy-quote-icon text-accent" />
        <blockquote className="philosophy-quote font-sans">
          "{about.philosophyQuote}"
        </blockquote>
      </div>

      {/* Footer Tag */}
      <div className="philosophy-footer font-mono">
        <span className="text-muted">// METHODOLOGY:</span>
        <span className="text-accent-secondary">SYSTEMS_SECURITY_BY_DESIGN</span>
      </div>
    </div>
  );
};
