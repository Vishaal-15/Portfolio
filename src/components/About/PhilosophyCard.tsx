import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Quote, Sparkles } from 'lucide-react';

export const PhilosophyCard: React.FC = () => {
  const { terminalUser, systemHost, about } = PORTFOLIO_DATA;

  return (
    <div className="philosophy-card technical-bracket font-mono" aria-label="Core Engineering Philosophy">
      {/* Header Command */}
      <div className="philosophy-header">
        <div className="terminal-command-line">
          <span className="prompt-user">{terminalUser}@{systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="terminal-cmd">{about.philosophyCommand}</span>
        </div>
        <Sparkles size={13} className="text-accent philosophy-sparkle" />
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
        <span className="text-muted">// PRINCIPLE:</span>
        <span className="text-accent-secondary">SECURITY_BY_DESIGN</span>
      </div>
    </div>
  );
};
