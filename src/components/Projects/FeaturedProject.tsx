import React from 'react';
import { ProjectItem } from '../../config/projectsData';
import { PromptSecurityFlow } from './visuals/PromptSecurityFlow';
import { RSAFlow } from './visuals/RSAFlow';
import { ShieldCheck, FileText, ExternalLink, Key, Terminal, Code2 } from 'lucide-react';

interface FeaturedProjectProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onOpenCaseStudy
}) => {
  const isPromptProject = project.id === 'secure-prompt-scorer';
  const isRSAProject = project.id === 'rsa-implementation';

  return (
    <article
      id={`project-${project.id}`}
      className="featured-project-container technical-bracket"
      aria-labelledby={`featured-title-${project.id}`}
    >
      {/* Featured Header Top Strip */}
      <div className="featured-card-header">
        <div className="featured-header-left font-mono">
          <div className="featured-order-badge">
            <span className="text-accent">//</span>
            <span className="order-num">{project.order}</span>
          </div>
          <div className="featured-meta">
            <span className="meta-category-badge">
              {project.category === 'security' ? (
                <>
                  <ShieldCheck size={11} className="text-accent" />
                  <span>FEATURED SECURITY PROJECT</span>
                </>
              ) : (
                <>
                  <Key size={11} className="text-accent" />
                  <span>CRYPTOGRAPHY &amp; SECURITY</span>
                </>
              )}
            </span>
            <span className="meta-slug text-muted">projects/{project.slug}</span>
          </div>
        </div>

        <div className="featured-header-actions">
          <button
            type="button"
            className="featured-case-study-btn font-mono"
            onClick={() => onOpenCaseStudy(project)}
            aria-label={`View case study for ${project.title}`}
          >
            <FileText size={12} className="text-accent" />
            <span>CASE STUDY</span>
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-github-btn font-mono"
            aria-label={`View ${project.title} on GitHub (opens in new window)`}
          >
            <Code2 size={12} />
            <span>GITHUB</span>
            <ExternalLink size={10} className="text-accent" />
          </a>
        </div>
      </div>

      {/* Main Content Grid: Narrative Left + Interactive Architecture Right */}
      <div className="featured-main-grid">
        {/* Left Column: Details, Metrics, and Actions */}
        <div className="featured-narrative-col">
          <h3 id={`featured-title-${project.id}`} className="featured-project-title">
            {project.title}
          </h3>

          <p className="featured-description font-sans">
            {project.shortDescription}
          </p>

          {/* Metrics Panel */}
          {project.metrics.length > 0 && (
            <div className="featured-metrics-row font-mono" role="region" aria-label="Validated Engineering Metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="featured-metric-box">
                  <span className="f-metric-context text-muted">// {m.context}</span>
                  <div className="f-metric-val-row">
                    <span className="f-metric-num text-accent">{m.value}</span>
                    <span className="f-metric-label">{m.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stack Tags */}
          <div className="featured-stack-wrapper font-mono">
            <span className="stack-label text-muted">// TECHNOLOGIES:</span>
            <div className="featured-stack-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="featured-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Buttons Bar */}
          <div className="featured-mobile-actions font-mono">
            <button
              type="button"
              className="featured-case-study-btn"
              onClick={() => onOpenCaseStudy(project)}
            >
              <FileText size={12} className="text-accent" />
              <span>VIEW CASE STUDY</span>
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-github-btn"
            >
              <Code2 size={12} />
              <span>GITHUB</span>
              <ExternalLink size={10} className="text-accent" />
            </a>
          </div>
        </div>

        {/* Right Column: Custom Visual Pipeline */}
        <div className="featured-visual-col">
          {isPromptProject && <PromptSecurityFlow />}
          {isRSAProject && <RSAFlow />}
        </div>
      </div>

      {/* Terminal Footer Strip */}
      <div className="featured-card-footer font-mono" aria-hidden="true">
        <div className="footer-term-log">
          <Terminal size={11} className="text-accent" />
          <span className="text-muted">vishaal@sec-lab:~/projects$</span>
          <span className="text-secondary">git log -1 --stat {project.slug}</span>
        </div>
        <span className="footer-status-pill">[VERIFIED_REPOSITORY]</span>
      </div>
    </article>
  );
};
