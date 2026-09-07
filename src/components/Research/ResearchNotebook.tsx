import React, { useState } from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { BookOpen, Tag, Calendar } from 'lucide-react';

export const ResearchNotebook: React.FC = () => {
  const notes = RESEARCH_DATA.notebook;
  const [activeTopic, setActiveTopic] = useState<string>('ALL');

  const topics = ['ALL', 'SYSTEMS', 'SECURITY', 'MODELS', 'DETECTION', 'INFRASTRUCTURE'];

  const filteredNotes = activeTopic === 'ALL'
    ? notes
    : notes.filter((n) => n.topic === activeTopic);

  return (
    <div className="research-notebook-wrapper technical-bracket" aria-label="Technical Research Notebook Log">
      {/* Header */}
      <div className="notebook-header font-mono">
        <div className="notebook-title">
          <BookOpen size={14} className="text-accent" />
          <span>TECHNICAL RESEARCH NOTEBOOK · FIELD LOGS</span>
        </div>
        <div className="notebook-tag text-muted">
          // NOTES ARCHIVE: SEC-LAB/RESEARCH-JOURNAL
        </div>
      </div>

      {/* Topic Filter Tabs */}
      <div className="notebook-tabs-bar font-mono" role="tablist" aria-label="Research Note Topics">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={activeTopic === t}
            className={`notebook-tab-btn ${activeTopic === t ? 'tab-active' : ''}`}
            onClick={() => setActiveTopic(t)}
          >
            <span>{t}</span>
          </button>
        ))}
      </div>

      {/* Notes List */}
      <div className="notebook-notes-feed" role="feed" aria-label="Research Field Notes">
        {filteredNotes.map((note) => (
          <article key={note.id} className="notebook-note-card font-mono" aria-labelledby={`note-title-${note.id}`}>
            <div className="note-card-head">
              <div className="note-topic-badge">
                <span className="text-accent">//</span>
                <span>{note.topic}</span>
              </div>
              <span className="note-date text-muted">
                <Calendar size={11} className="inline-icon" />
                {note.date}
              </span>
            </div>

            <h4 id={`note-title-${note.id}`} className="note-title">
              {note.title}
            </h4>

            <p className="note-summary font-sans">
              {note.summary}
            </p>

            <div className="note-tags-row">
              {note.tags.map((tag) => (
                <span key={tag} className="note-tag">
                  <Tag size={10} className="text-accent" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <div className="notebook-footer font-mono text-muted">
        <span>// SECURE RESEARCH LAB FIELD NOTES · ARCHITECTURAL OBSERVATIONS &amp; EMPIRICAL FINDINGS</span>
      </div>
    </div>
  );
};
