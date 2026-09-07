import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="contact-section" aria-label="Contact Vishaal A K">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge font-mono">
            <span className="badge-prefix">//</span>
            <span>06. CONTACT</span>
          </div>

          <h2 className="contact-title">
            CONTACT
          </h2>

          <p className="contact-description">
            {contact.description}
          </p>
        </div>

        {/* Primary Clear CTA: LET'S CONNECT */}
        <div className="contact-cta-wrapper">
          <a
            href={`mailto:${contact.email}`}
            className="contact-cta-button font-mono"
            aria-label="Send email to Vishaal A K - opens email client"
          >
            <span className="cta-glow-bg" />
            <span className="cta-button-inner">
              <Mail size={16} className="cta-button-icon" />
              <span className="cta-button-label">{contact.ctaText}</span>
              <ArrowUpRight size={15} className="cta-button-arrow" />
            </span>
          </a>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="contact-links-grid" role="region" aria-label="Direct Communication Channels">
          {/* EMAIL Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">EMAIL</span>
            <a
              href={`mailto:${contact.email}`}
              className="contact-card-link"
              aria-label={`Send email to ${contact.email}`}
            >
              <Mail size={16} className="contact-card-icon" />
              <span className="contact-card-value font-mono">{contact.email}</span>
            </a>
          </div>

          {/* LINKEDIN Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">LINKEDIN</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={16} className="contact-card-icon" />
              <span className="contact-card-value font-mono">LinkedIn</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>

          {/* GITHUB Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">GITHUB</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={16} className="contact-card-icon" />
              <span className="contact-card-value font-mono">GitHub</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>
        </div>

        {/* Small Terminal Touch at the bottom */}
        <div className="contact-terminal-touch font-mono" aria-label={`Terminal prompt: ${contact.terminalUser}@${contact.terminalHost}:~$`}>
          <span className="term-prompt">{contact.terminalUser}@{contact.terminalHost}:~$</span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
