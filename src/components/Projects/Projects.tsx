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
      {/* Top Ambient Banner */}
      <div className="projects-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// SOFTWARE DEVELOPMENT &amp; OPEN-SOURCE PROJECTS</span>
        <span className="crosshair-tag top-right">EMPIRICALLY VERIFIED BENCHMARKS</span>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-section-header">
          <h2 className="section-main-title">
            Software Development <span className="text-accent">&amp;</span> Applied Cryptography
          </h2>
        </div>

        {/* Executive Research Systems Overview Bar */}
        <div className="projects-terminal-window technical-bracket" aria-label="Research Systems Overview">
          <div className="projects-term-bar font-mono">
            <div className="projects-term-title">
              <FolderGit2 size={13} className="text-accent" />
              <span>RESEARCH SYSTEMS &amp; BENCHMARKS INDEX</span>
            </div>
            <div className="projects-term-status">
              <span className="pulse-dot" aria-hidden="true" />
              <span className="text-accent">4 VERIFIED REPOSITORIES</span>
            </div>
          </div>

          <div className="projects-overview-grid font-mono">
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">~95% ATTACK MITIGATION</span>
              <span className="chip-name">Secure Prompt Scorer</span>
              <span className="chip-desc text-muted">7-tier defense-in-depth LLM boundary</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">2048-BIT SEMANTIC SECURITY</span>
              <span className="chip-name">RSA-OAEP Cryptography</span>
              <span className="chip-desc text-muted">Raw number theory vs PyCryptodome (100+ vectors)</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">&lt;500MS LATENCY</span>
              <span className="chip-name">Price Prediction Engine</span>
              <span className="chip-desc text-muted">Full-stack regression pipeline (10,000+ records)</span>
            </div>
            <div className="project-highlight-chip">
              <span className="chip-metric text-accent">88% ACCURACY (+12%)</span>
              <span className="chip-name">Intelligent Crop Classifier</span>
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
