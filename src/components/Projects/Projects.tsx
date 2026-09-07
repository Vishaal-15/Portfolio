import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../../config/projectsData';
import { ProjectFilters } from './ProjectFilters';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { FolderGit2, ShieldCheck, Terminal, Folder } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'security' | 'ml' | 'backend' | 'crypto'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const allProjects = PROJECTS_DATA.projects;

  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categories.includes(activeCategory);
  });

  const featuredList = filteredProjects.filter((p) => p.tier === 'featured');
  const standardList = filteredProjects.filter((p) => p.tier === 'standard');

  return (
    <section id="projects" className="projects-section" aria-label="Technical Projects and Engineering Repositories">
      {/* Top Ambient Crosshairs */}
      <div className="projects-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// REPOSITORY: VAK-SEC-PROJECTS</span>
        <span className="crosshair-tag top-right">ACCESS_MODE: VERIFIED_SOURCE</span>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>03. TECHNICAL PROJECTS &amp; LAB REPOSITORIES</span>
          </div>

          <h2 className="section-main-title">
            Security Engineering <span className="text-accent">&amp;</span> Applied Systems
          </h2>

          <div className="section-subtext font-mono">
            <FolderGit2 size={12} className="inline-icon text-accent" />
            <span>PRIVACY-BY-DESIGN • CRYPTOGRAPHIC PROTOCOLS • FULL-STACK ML PIPELINES</span>
          </div>
        </div>

        {/* Technical Terminal Directory Header */}
        <div className="projects-terminal-window technical-bracket" aria-label="Project Repository Terminal">
          <div className="projects-term-bar font-mono">
            <div className="projects-term-title">
              <Terminal size={13} className="text-accent" />
              <span>sec-lab: ~/projects</span>
            </div>
            <div className="projects-term-status">
              <span className="pulse-dot" aria-hidden="true" />
              <span className="text-accent">GIT_TREES_VERIFIED</span>
            </div>
          </div>

          <div className="projects-term-body font-mono">
            <div className="term-line">
              <span className="text-accent">vishaal@sec-lab:~$</span>
              <span className="term-cmd-text">{PROJECTS_DATA.command}</span>
            </div>

            {/* Directory Listing Output */}
            <div className="projects-dir-output" role="region" aria-label="Directory Listing">
              {PROJECTS_DATA.directoryOutput.map((dir) => (
                <div key={dir.name} className="dir-item-row">
                  <span className="dir-perms text-muted">{dir.permissions}</span>
                  <span className="dir-name text-accent">
                    <Folder size={11} className="inline-icon" />
                    {dir.name}
                  </span>
                  <span className="dir-desc text-secondary">// {dir.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          filteredCount={filteredProjects.length}
        />

        {/* Tier 1: Featured Security Projects */}
        {featuredList.length > 0 && (
          <div className="featured-projects-tier" role="region" aria-label="Featured Security Projects">
            <div className="tier-header-label font-mono">
              <span className="text-accent">// TIER 01:</span> FEATURED SECURITY &amp; CRYPTOGRAPHY PROJECTS
            </div>
            <div className="featured-feed">
              {featuredList.map((project) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={setSelectedCaseStudy}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tier 2: Standard Machine Learning & Full-Stack Projects */}
        {standardList.length > 0 && (
          <div className="standard-projects-tier" role="region" aria-label="Technical and Machine Learning Projects">
            <div className="tier-header-label font-mono">
              <span className="text-accent">// TIER 02:</span> FULL-STACK &amp; MACHINE LEARNING SYSTEMS
            </div>
            <div className="standard-grid">
              {standardList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={setSelectedCaseStudy}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
