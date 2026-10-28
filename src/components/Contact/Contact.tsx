import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Communication">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="section-badge">
            <Mail size={13} className="text-accent" />
            <span>Get in Touch</span>
          </div>

          <h2 className="contact-title">
            Let&apos;s Connect
          </h2>

          <p className="contact-description font-sans">
            Whether you have a question, a project proposal, or just want to discuss the latest in cybersecurity and ethical hacking, my inbox is open. I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Primary Clear CTA */}
        <div className="contact-cta-wrapper">
          <a
            href={`mailto:${contact.email}`}
            className="contact-cta-button"
            aria-label="Send email to Vishaal A K - opens email client"
          >
            <span className="cta-glow-bg" />
            <span className="cta-button-inner">
              <Mail size={16} className="cta-button-icon" />
              <span className="cta-button-label">Send an Email</span>
              <ArrowUpRight size={15} className="cta-button-arrow" />
            </span>
          </a>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="contact-links-grid" role="region" aria-label="Direct Communication Channels">
          {/* EMAIL Channel */}
          <div className="contact-card">
            <span className="contact-card-label">Email</span>
            <a
              href={`mailto:${contact.email}`}
              className="contact-card-link"
              aria-label={`Send email to ${contact.email}`}
            >
              <Mail size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value">{contact.email}</span>
            </a>
          </div>

          {/* LINKEDIN Channel */}
          <div className="contact-card">
            <span className="contact-card-label">LinkedIn</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value">linkedin.com/in/vishaal-ak</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>

          {/* GITHUB Channel */}
          <div className="contact-card">
            <span className="contact-card-label">GitHub</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={16} className="contact-card-icon text-accent" />
              <span className="contact-card-value">github.com/Vishaal-15</span>
              <ArrowUpRight size={14} className="contact-card-external" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
