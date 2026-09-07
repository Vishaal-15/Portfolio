import React from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { Filter } from 'lucide-react';

interface SkillFiltersProps {
  activeFilter: string;
  onSelectFilter: (filterKey: 'ALL' | 'SECURITY' | 'PROGRAMMING' | 'BACKEND' | 'ML' | 'INFRASTRUCTURE') => void;
}

export const SkillFilters: React.FC<SkillFiltersProps> = ({ activeFilter, onSelectFilter }) => {
  const options = SKILLS_DATA.filterOptions;

  return (
    <div className="skill-filters-toolbar font-mono" role="toolbar" aria-label="Filter Technical Skills">
      <div className="filter-prompt-label">
        <Filter size={12} className="text-accent" />
        <span className="text-accent">vishaal@sec-lab:~$</span>
        <span>filter-stack --category=</span>
      </div>

      <div className="filter-buttons-row">
        {options.map((opt) => {
          const isActive = activeFilter === opt.filterKey;
          return (
            <button
              key={opt.id}
              type="button"
              className={`filter-tag-btn ${isActive ? 'filter-active' : ''}`}
              onClick={() => onSelectFilter(opt.filterKey)}
              aria-pressed={isActive}
            >
              <span className="filter-bracket">[</span>
              <span className="filter-name">{opt.label}</span>
              <span className="filter-bracket">]</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
