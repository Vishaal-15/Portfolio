import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../config/projectsData';
import { ProjectFilters } from './ProjectFilters';
import { ProjectCard } from './ProjectCard';
import { FolderGit2 } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'security' | 'ml' | 'backend' | 'crypto'>('all');

  const allProjects = PROJECTS_DATA.projects;

  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categories.includes(activeCategory);
  });

  return (
    <section id="projects" className="projects-section" aria-label="Technical Projects and Open-Source Repositories">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-section-header">
          <div className="section-badge">
            <FolderGit2 size={13} className="text-accent" />
            <span>Featured Projects</span>
          </div>

          <h2 className="section-main-title">
            Software Development <span className="text-accent">&amp;</span> Applied Cryptography
          </h2>
        </div>

        {/* Engineering Systems Overview Bar */}
        <div className="projects-terminal-window technical-bracket" aria-label="Systems and Benchmarks Overview">
          <div className="projects-term-bar">
            <div className="projects-term-title">
              <FolderGit2 size={14} className="text-accent" />
              <span>Engineering Benchmarks &amp; Highlights</span>
            </div>
            <div className="projects-term-status">
              <span className="text-accent">4 Repositories</span>
            </div>
          </div>

          <div className="projects-overview-grid">
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">~95% Mitigation</span>
              <span className="chip-name">Secure Prompt Scorer</span>
              <span className="chip-desc text-muted">7-tier defense-in-depth LLM boundary</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">2048-Bit RSA-OAEP</span>
              <span className="chip-name">Applied Cryptography</span>
              <span className="chip-desc text-muted">Raw number theory vs PyCryptodome (100+ vectors)</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">&lt;500ms Latency</span>
              <span className="chip-name">Price Prediction Engine</span>
              <span className="chip-desc text-muted">Full-stack regression pipeline (10,000+ records)</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">88% Accuracy (+12%)</span>
              <span className="chip-name">Crop Classifier</span>
              <span className="chip-desc text-muted">Cross-validated Random Forest agronomic model</span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          filteredCount={filteredProjects.length}
        />

        {/* Clean, Unified Project Cards Grid (Abhiram reference style) */}
        <div className="projects-cards-grid" role="region" aria-label="Projects List">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
