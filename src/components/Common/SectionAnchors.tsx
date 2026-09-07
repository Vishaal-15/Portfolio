import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';

/**
 * Minimal invisible target anchors for future unbuilt sections.
 * Excludes sections that are already implemented as full components (like #about).
 */
export const SectionAnchors: React.FC = () => {
  // Filter out already implemented sections
  const implementedSections = ['about', 'experience', 'projects', 'research', 'skills'];
  const futureItems = PORTFOLIO_DATA.navItems.filter(
    (item) => !implementedSections.includes(item.href.replace('#', ''))
  );

  return (
    <div className="section-anchors-container" aria-hidden="true" style={{ opacity: 0.1 }}>
      {futureItems.map((item) => {
        const id = item.href.replace('#', '');
        return (
          <div
            key={id}
            id={id}
            style={{
              height: '1px',
              margin: '2rem 0',
              pointerEvents: 'none'
            }}
          />
        );
      })}
    </div>
  );
};
