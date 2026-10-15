import React from 'react';
import { Fingerprint, Crosshair } from 'lucide-react';
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
              <span className="pulse-dot" style={{ width: '6px', height: '6px', display: 'inline-block' }} />
              ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
