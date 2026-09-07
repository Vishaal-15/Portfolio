import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { ShieldCheck, Fingerprint, Activity, Crosshair } from 'lucide-react';
import portraitImg from '../../assets/portrait.png';
import './PortraitFrame.css';

export const PortraitFrame: React.FC = () => {
  return (
    <div className="portrait-wrapper">
      {/* Outer Technical Frame */}
      <div className="portrait-container technical-bracket" aria-label="Biometric Identity Profile">
        {/* Frame Top Header */}
        <div className="portrait-header font-mono">
          <div className="portrait-header-left">
            <Fingerprint size={14} className="portrait-header-icon" />
            <span className="portrait-header-title">BIOMETRIC PROFILE</span>
          </div>
          <div className="portrait-header-right">
            <span className="portrait-id-tag">ID: VAK-SEC-849</span>
          </div>
        </div>

        {/* Image Canvas Container */}
        <div className="portrait-media-box">
          {/* Authentic Portrait Image */}
          <img
            src={portraitImg}
            alt="Vishaal A K — Cybersecurity Researcher"
            className="portrait-image"
            loading="eager"
            width="460"
            height="560"
          />

          {/* Micro HUD Overlay: Corner Data Points */}
          <div className="portrait-corner-marker top-left font-mono">
            <Crosshair size={10} />
            <span>X: 0x4B</span>
          </div>
          <div className="portrait-corner-marker top-right font-mono">
            <span>RES: 1080p</span>
          </div>

          {/* Biometric Slow Scanning Line */}
          <div className="portrait-scanline-beam" aria-hidden="true" />

          {/* Subtle static scanline texture */}
          <div className="portrait-texture-overlay" aria-hidden="true" />
        </div>

        {/* Frame Bottom Telemetry Bar */}
        <div className="portrait-footer font-mono">
          <div className="footer-status-item">
            <span className="footer-status-key text-muted">STATUS:</span>
            <span className="footer-status-val text-accent">
              <ShieldCheck size={12} className="inline-icon" />
              SECURE
            </span>
          </div>

          <div className="footer-status-divider" />

          <div className="footer-status-item">
            <span className="footer-status-key text-muted">PROFILE:</span>
            <span className="footer-status-val text-accent">
              <Activity size={12} className="inline-icon" />
              ACTIVE
            </span>
          </div>

          <div className="footer-status-divider" />

          <div className="footer-status-item env-tag">
            <span className="footer-status-key text-muted">ENV:</span>
            <span className="footer-status-val">{PORTFOLIO_DATA.systemMeta.environment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
