import React from 'react';
import { RESEARCH_DATA, PublicationItem } from '../../config/researchData';
import { BookMarked, FileText, ExternalLink, Clock } from 'lucide-react';

export const Publications: React.FC = () => {
  const publications: PublicationItem[] = RESEARCH_DATA.publications;

  return (
    <div className="research-publications-wrapper technical-bracket" aria-label="Research Publications">
      {/* Header */}
      <div className="publications-header font-mono">
        <div className="pub-title">
          <BookMarked size={14} className="text-accent" />
          <span>PUBLICATIONS &amp; PEER-REVIEWED RESEARCH</span>
        </div>
        <div className="pub-tag text-muted">
          // ARCHIVE: PAPERS &amp; PREPRINTS
        </div>
      </div>

      {/* When publications exist in the future, render them */}
      {publications.length > 0 ? (
        <div className="publications-list" role="list">
          {publications.map((pub) => (
            <article key={pub.id} className="publication-card font-mono" role="listitem">
              <div className="pub-card-head">
                <span className="pub-status-badge">{pub.status}</span>
                <span className="pub-date text-muted">{pub.date}</span>
              </div>
              <h4 className="pub-card-title">{pub.title}</h4>
              <p className="pub-authors text-secondary">{pub.authors.join(', ')}</p>
              <p className="pub-venue text-accent">Published in: {pub.venue}</p>
              <p className="pub-abstract font-sans">{pub.abstract}</p>
              {pub.paperUrl && (
                <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className="pub-link">
                  <FileText size={12} />
                  <span>READ PAPER</span>
                  <ExternalLink size={10} className="text-accent" />
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        /* Professional Verified Empty State */
        <div className="publications-empty-state font-mono" role="status">
          <div className="empty-icon-box">
            <Clock size={22} className="text-accent" />
          </div>
          <div className="empty-text-group">
            <h4 className="empty-title">No publications listed yet.</h4>
            <p className="empty-desc font-sans">
              Research work and technical findings will be added here as they become available.
            </p>
          </div>
          <div className="empty-status-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <span>RESEARCH IN PROGRESS · LAB PIPELINE ACTIVE</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="publications-footer font-mono text-muted">
        <span>// ACADEMIC REPOSITORIES &amp; PREPRINTS WILL BE CATALOGUED HERE UPON PUBLICATION</span>
      </div>
    </div>
  );
};
