import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, Terminal } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Communication">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge font-mono">
            <span className="badge-prefix">//</span>
            <span>06. CONNECT</span>
          </div>

          <h2 className="contact-title">
            GET IN TOUCH
          </h2>

          <p className="contact-description font-sans">
            Whether you have a question, an opportunity, or want to collaborate on cybersecurity, systems research, and software development, my inbox is open. I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Primary Clear CTA: INITIATE CONTACT */}
        <div className="contact-cta-wrapper">
          <a
            href={`mailto:${contact.email}`}
            className="contact-cta-button font-mono"
            aria-label="Send email to Vishaal A K - opens email client"
          >
            <span className="cta-glow-bg" />
            <span className="cta-button-inner">
              <Mail size={16} className="cta-button-icon" />
              <span className="cta-button-label">INITIATE CONTACT</span>
              <ArrowUpRight size={15} className="cta-button-arrow" />
            </span>
          </a>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="contact-links-grid" role="region" aria-label="Direct Communication Channels">
          {/* EMAIL Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">DIRECT EMAIL</span>
            <a
              href={`mailto:${contact.email}`}
              className="contact-card-link"
              aria-label={`Send email to ${contact.email}`}
            >
              <Mail size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value font-mono">{contact.email}</span>
            </a>
          </div>

          {/* LINKEDIN Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">PROFESSIONAL PROFILE</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value font-mono">LinkedIn Profile</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>

          {/* GITHUB Channel */}
          <div className="contact-card">
            <span className="contact-card-label font-mono">OPEN SOURCE CODE</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value font-mono">GitHub Repositories</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>
        </div>

        {/* Terminal Direct Prompt */}
        <div className="contact-terminal-touch font-mono" aria-label="Terminal Connection String">
          <Terminal size={14} className="text-accent inline-icon" />
          <span className="text-muted">sys.connect(&quot;{contact.email}&quot;)</span>
        </div>
      </div>
    </section>
  );
};
