import React from 'react';
import { SkillCategory, SkillItem } from '../../config/skillsData';
import { ShieldCheck, Terminal, Cpu, Server, Database, Wrench, Layers } from 'lucide-react';

interface SkillCategoryCardProps {
  category: SkillCategory;
  isMuted: boolean;
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem) => void;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  isMuted,
  selectedSkill,
  onSelectSkill
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity': return <ShieldCheck size={14} className="text-accent" />;
      case 'programming': return <Terminal size={14} className="text-accent" />;
      case 'backend': return <Server size={14} className="text-accent" />;
      case 'machine-learning': return <Cpu size={14} className="text-accent" />;
      case 'databases': return <Database size={14} className="text-accent" />;
      case 'infrastructure': return <Layers size={14} className="text-accent" />;
      case 'tools': return <Wrench size={14} className="text-accent" />;
      default: return <Terminal size={14} className="text-accent" />;
    }
  };

  return (
    <div
      className={`skill-category-card technical-bracket ${category.isProminent ? 'card-prominent' : ''} ${
        isMuted ? 'card-muted' : ''
      }`}
      aria-label={`${category.title} Category`}
    >
      {/* Category Header */}
      <div className="cat-card-header font-mono">
        <div className="cat-order-group">
          <span className="cat-order-text">// {category.order}</span>
          <div className="cat-title-row">
            {getCategoryIcon(category.id)}
            <h3 className="cat-title-text">{category.title}</h3>
          </div>
        </div>
        <span className="cat-badge-label text-muted">
          {category.skills.length} TECHNOLOGIES
        </span>
      </div>

      <span className="cat-subtitle-text font-mono text-secondary">
        {category.subtitle}
      </span>

      <p className="cat-description font-sans">
        {category.description}
      </p>

      {/* Skills Grid */}
      <div className="cat-skills-grid" role="list">
        {category.skills.map((skill) => {
          const isSelected = selectedSkill?.id === skill.id;
          return (
            <button
              key={skill.id}
              type="button"
              className={`skill-tech-badge font-mono ${isSelected ? 'tech-selected' : ''}`}
              onClick={() => onSelectSkill(skill)}
              aria-expanded={isSelected}
              aria-label={`Inspect ${skill.name} context`}
              role="listitem"
            >
              <span className="skill-dot-marker" aria-hidden="true">●</span>
              <span className="skill-tech-name">{skill.name}</span>
              {skill.type && category.id === 'databases' && (
                <span className="skill-type-tag text-muted">
                  {skill.type}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
