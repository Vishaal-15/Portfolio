import React from 'react';
import portraitImg from '../../assets/portrait.jpg';
import './PortraitFrame.css';

export const PortraitFrame: React.FC = () => {
  return (
    <div className="portrait-wrapper">
      {/* Ambient Glow Backdrop */}
      <div className="portrait-ambient-glow" aria-hidden="true" />

      {/* Modern Portrait Card */}
      <div className="portrait-card" aria-label="Portrait of Vishaal A K">
        <div className="portrait-image-container">
          <img
            src={portraitImg}
            alt="Vishaal A K — Cybersecurity Researcher & Software Developer"
            className="portrait-image"
            loading="eager"
            width="460"
            height="560"
          />
        </div>
      </div>
    </div>
  );
};
