import React from 'react';
import { ProjectItem } from '../../config/projectsData';
import { MLArchitectureFlow } from './visuals/MLArchitectureFlow';
import { FileText, ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy
}) => {
  const isEcommerce = project.id === 'ecommerce-price-prediction';
  const isCrop = project.id === 'crop-recommendation-ml';

  return (
    <article
      id={`project-${project.id}`}
      className="standard-project-card technical-bracket"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Header Strip */}
      <div className="std-card-header font-mono">
        <div className="std-header-left">
          <span className="std-order-badge">// {project.order}</span>
          <span className="std-category-tag">[{project.category.toUpperCase()}]</span>
        </div>
        <div className="std-header-slug text-muted">
          <span>{project.slug}</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="std-card-body">
        <h3 id={`project-title-${project.id}`} className="std-project-title">
          {project.title}
        </h3>

        <p className="std-project-desc font-sans">
          {project.shortDescription}
        </p>

        {/* Visual Architecture Flow */}
        <div className="std-visual-container">
          {isEcommerce && <MLArchitectureFlow type="ecommerce" />}
          {isCrop && <MLArchitectureFlow type="crop" />}
        </div>

        {/* Metrics Grid */}
        {project.metrics.length > 0 && (
          <div className="std-metrics-grid font-mono" role="region" aria-label="Validated Performance Metrics">
            {project.metrics.map((m) => (
              <div key={m.label} className="std-metric-item">
                <span className="std-m-context text-muted">// {m.context}</span>
                <div className="std-m-row">
                  <span className="std-m-val text-accent">{m.value}</span>
                  <span className="std-m-label">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology Pills */}
        <div className="std-stack-row font-mono">
          {project.technologies.map((tech) => (
            <span key={tech} className="std-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="std-card-footer font-mono">
        <button
          type="button"
          className="std-case-btn"
          onClick={() => onOpenCaseStudy(project)}
          aria-label={`View Case Study for ${project.title}`}
        >
          <FileText size={12} className="text-accent" />
          <span>CASE STUDY</span>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="std-github-btn"
          aria-label={`View ${project.title} on GitHub (opens in new window)`}
        >
          <Code2 size={12} />
          <span>GITHUB</span>
          <ExternalLink size={10} className="text-accent" />
        </a>
      </div>
    </article>
  );
};
