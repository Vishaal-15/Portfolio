import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { TerminalIntro } from './TerminalIntro';
import { PortraitFrame } from './PortraitFrame';
import { SecurityStatus } from './SecurityStatus';
import { CTAButtons } from './CTAButtons';
import { SystemIndicator } from '../Common/SystemIndicator';
import { Shield, Lock, Terminal } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      {/* Background Micro Details / Crosshairs */}
      <div className="hero-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// SEC.NODE: VAK-01</span>
        <span className="crosshair-tag top-right">SECURITY_LEVEL: RESEARCH</span>
      </div>

      <div className="hero-container">
        {/* Left Column: Terminal & Identity & CTAs */}
        <div className="hero-left-column">
          {/* Top Micro System Telemetry */}
          <div className="hero-meta-bar">
            <SystemIndicator />
            <div className="meta-sub-item font-mono">
              <span className="text-muted">HOST:</span>
              <span className="text-accent">{PORTFOLIO_DATA.systemHost}</span>
            </div>
          </div>

          {/* Linux Terminal Animation */}
          <div className="hero-terminal-wrapper">
            <TerminalIntro />
          </div>

          {/* Professional Identity Typography */}
          <div className="hero-identity-block">
            <div className="hero-badge-tag font-mono">
              <Shield size={12} className="text-accent" />
              <span>VERIFIED CYBERSECURITY PROFILE</span>
            </div>

            <h1 className="hero-name">
              {PORTFOLIO_DATA.name}
            </h1>

            <div className="hero-titles font-mono">
              <span className="title-primary">{PORTFOLIO_DATA.title}</span>
              <span className="title-separator text-muted">/</span>
              <span className="title-secondary">{PORTFOLIO_DATA.secondaryTitle}</span>
            </div>

            <p className="hero-description">
              {PORTFOLIO_DATA.roleDescription}
            </p>

            <div className="hero-affiliation font-mono">
              <div className="affiliation-item">
                <Lock size={12} className="affiliation-icon" />
                <span>{PORTFOLIO_DATA.degree}</span>
                <span className="affiliation-bullet">•</span>
                <span className="text-muted">{PORTFOLIO_DATA.institution}</span>
              </div>
              <div className="affiliation-item research-affil">
                <Terminal size={12} className="affiliation-icon" />
                <span className="text-accent">Research Contributor:</span>
                <span className="text-muted">{PORTFOLIO_DATA.researchLab}</span>
              </div>
            </div>
          </div>

          {/* Technical Classification Tags */}
          <div className="hero-tech-tags font-mono" aria-label="Technical focus domains">
            <span className="tech-tags-label text-muted">// FOCUS:</span>
            <div className="tech-tags-list">
              {PORTFOLIO_DATA.technicalFocus.map((tag) => (
                <span key={tag} className="tech-tag">
                  <span className="tech-tag-prefix">#</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <CTAButtons />
        </div>

        {/* Right Column: Sketch Portrait & SOC Monitoring Panel */}
        <div className="hero-right-column">
          <div className="hero-visual-card">
            <PortraitFrame />
            <SecurityStatus />
          </div>
        </div>
      </div>
    </section>
  );
};
