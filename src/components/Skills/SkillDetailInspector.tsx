import React from 'react';
import { SkillItem } from '../../config/skillsData';
import { Info, CheckCircle2, X } from 'lucide-react';

interface SkillDetailInspectorProps {
  selectedSkill: SkillItem | null;
  onClose: () => void;
}

export const SkillDetailInspector: React.FC<SkillDetailInspectorProps> = ({ selectedSkill, onClose }) => {
  if (!selectedSkill) return null;

  return (
    <div className="skill-inspector-card technical-bracket font-mono" role="dialog" aria-label={`Technical context for ${selectedSkill.name}`}>
      <div className="inspector-head">
        <div className="inspector-title-row">
          <Info size={13} className="text-accent" />
          <span className="inspector-skill-name">{selectedSkill.name}</span>
          {selectedSkill.type && (
            <span className="inspector-type-pill text-accent">[{selectedSkill.type}]</span>
          )}
        </div>
        <button
          type="button"
          className="inspector-close-btn"
          onClick={onClose}
          aria-label="Close inspector"
        >
          <X size={13} />
        </button>
      </div>

      <div className="inspector-body">
        <div className="inspector-section">
          <span className="inspector-label text-muted">// VERIFIED USAGE CONTEXT:</span>
          <p className="inspector-context-text font-sans">
            {selectedSkill.context}
          </p>
        </div>

        <div className="inspector-section">
          <span className="inspector-label text-muted">// APPLIED IN REPOSITORIES &amp; RESEARCH:</span>
          <div className="inspector-used-tags">
            {selectedSkill.usedIn.map((item) => (
              <span key={item} className="inspector-used-tag">
                <CheckCircle2 size={11} className="text-accent" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
