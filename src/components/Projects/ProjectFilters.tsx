import React from 'react';
import { PROJECTS_DATA } from '../../config/projectsData';
import { Terminal, Shield, Cpu, Server, Key } from 'lucide-react';

interface ProjectFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: 'all' | 'security' | 'ml' | 'backend' | 'crypto') => void;
  filteredCount: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  filteredCount
}) => {
  const categories = PROJECTS_DATA.categories;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'security': return <Shield size={11} />;
      case 'ml': return <Cpu size={11} />;
      case 'backend': return <Server size={11} />;
      case 'crypto': return <Key size={11} />;
      default: return <Terminal size={11} />;
    }
  };

  return (
    <div className="project-filters-toolbar" role="toolbar" aria-label="Project category filters">
      <div className="filter-buttons-container">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              className={`project-filter-btn ${isActive ? 'filter-btn-active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
              <span className="cat-count">({cat.count})</span>
            </button>
          );
        })}
        <span className="filter-summary-count text-muted">
          Showing {filteredCount} {filteredCount === 1 ? 'project' : 'projects'}
        </span>
      </div>
    </div>
  );
};
