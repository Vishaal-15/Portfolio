import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const sections = ['home', ...PORTFOLIO_DATA.navItems.map(item => item.href.substring(1))];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Name */}
        <a 
          href="#home" 
          className="navbar-brand font-mono"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          aria-label="Vishaal A K Portfolio Home"
        >
          <span className="brand-name">{PORTFOLIO_DATA.brand}</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {PORTFOLIO_DATA.navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link font-mono ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="nav-text">{item.label}</span>
                    {isActive && <span className="nav-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* System Status Indicator */}
        <div className="navbar-sys-status font-mono" aria-label="System Status">
          <span className="pulse-dot" />
          <span className="sys-status-label">STATUS: ONLINE</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div className="mobile-drawer-header font-mono">
          <span className="text-accent">// NAVIGATION DIRECTORY</span>
          <span className="mobile-drawer-status font-mono">NODE: ONLINE</span>
        </div>
        <nav className="mobile-nav-links" aria-label="Mobile Navigation Links">
          {PORTFOLIO_DATA.navItems.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link font-mono ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                <span className="mobile-nav-index text-muted">0{index + 1}.</span>
                <span className="mobile-nav-label">{item.label}</span>
                {isActive && <span className="nav-active-dot" style={{ marginLeft: 'auto' }} />}
              </a>
            );
          })}
        </nav>
        <div className="mobile-drawer-footer font-mono">
          <div className="mobile-footer-line">
            <span className="text-muted">HOST:</span> {PORTFOLIO_DATA.systemHost}
          </div>
          <div className="mobile-footer-line">
            <span className="text-muted">STATUS:</span> <span className="text-accent">VERIFIED</span>
          </div>
        </div>
      </div>
    </header>
  );
};
