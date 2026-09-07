import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;

  const handleNavScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-container">
        {/* Main Footer Content Row */}
        <div className="footer-main-row">
          {/* Identity & Tagline Column */}
          <div className="footer-identity-col">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="footer-brand font-mono"
              aria-label="Vishaal A K - Back to top"
            >
              <span className="brand-prefix">//</span>
              <span className="brand-name">VISHAAL AK</span>
            </a>
            <p className="footer-tagline">
              {contact.tagline}
            </p>
          </div>

          {/* Navigation Links Column */}
          <nav className="footer-nav-col" aria-label="Footer Section Navigation">
            <span className="footer-col-heading font-mono">SECTIONS</span>
            <ul className="footer-nav-list font-mono">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavScroll(e, 'about')}
                  className="footer-link"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleNavScroll(e, 'experience')}
                  className="footer-link"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavScroll(e, 'projects')}
                  className="footer-link"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  onClick={(e) => handleNavScroll(e, 'research')}
                  className="footer-link"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavScroll(e, 'skills')}
                  className="footer-link"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavScroll(e, 'contact')}
                  className="footer-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect Links Column */}
          <div className="footer-connect-col" aria-label="Connect and Social Links">
            <span className="footer-col-heading font-mono">CONNECT</span>
            <ul className="footer-connect-list font-mono">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="GitHub profile (opens in a new tab)"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="LinkedIn profile (opens in a new tab)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="footer-link"
                  aria-label={`Email ${contact.email}`}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar font-mono">
          <p className="footer-copyright">
            {contact.copyright}
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="footer-top-btn"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="top-arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};
