import React, { useEffect, useRef } from 'react';
import { ProjectItem } from '../../config/projectsData';
import { Terminal, X, ExternalLink, ShieldCheck, CheckCircle2, FileCode } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="case-study-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="case-study-modal-dialog technical-bracket"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        tabIndex={-1}
      >
        {/* Terminal Header Bar */}
        <div className="modal-terminal-header font-mono">
          <div className="modal-term-info">
            <Terminal size={13} className="text-accent" />
            <span>sec-lab: ~/projects/{project.slug}/README.md</span>
          </div>
          <button
            type="button"
            className="modal-close-btn font-mono"
            onClick={onClose}
            aria-label="Close Case Study Modal"
          >
            <span>[ ESC / CLOSE ]</span>
            <X size={13} />
          </button>
        </div>

        {/* Modal Terminal Command Execution Simulation */}
        <div className="modal-terminal-cmds font-mono">
          <div className="term-cmd-row">
            <span className="text-accent">vishaal@sec-lab:~/projects$</span>
            <span className="term-cmd-text">cd {project.slug}/</span>
          </div>
          <div className="term-cmd-row">
            <span className="text-accent">vishaal@sec-lab:~/projects/{project.slug}$</span>
            <span className="term-cmd-text">cat README.md</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-scroll-body">
          {/* Main Title & Order Badge */}
          <div className="modal-header-hero">
            <div className="modal-badges-row font-mono">
              <span className="modal-order-tag">// PROJECT {project.order}</span>
              <span className="modal-category-tag">[{project.category.toUpperCase()}]</span>
            </div>
            <h2 id="case-study-title" className="modal-main-title">
              {project.title}
            </h2>
          </div>

          {/* Quick Metrics Strip */}
          {project.metrics.length > 0 && (
            <div className="modal-metrics-strip font-mono" role="region" aria-label="Key Validated Metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="modal-metric-card">
                  <span className="m-context text-muted">// {m.context}</span>
                  <span className="m-val text-accent">{m.value}</span>
                  <span className="m-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Sections */}
          <div className="modal-dossier-sections">
            {/* 01. Overview */}
            <section className="dossier-section" aria-labelledby="sec-overview">
              <h3 id="sec-overview" className="dossier-sec-title font-mono">
                <span className="text-accent">// 01.</span> OVERVIEW
              </h3>
              <p className="dossier-text font-sans">{caseStudy.overview}</p>
            </section>

            {/* 02. Problem */}
            <section className="dossier-section" aria-labelledby="sec-problem">
              <h3 id="sec-problem" className="dossier-sec-title font-mono">
                <span className="text-accent">// 02.</span> PROBLEM STATEMENT
              </h3>
              <p className="dossier-text font-sans">{caseStudy.problem}</p>
            </section>

            {/* 03. Approach */}
            <section className="dossier-section" aria-labelledby="sec-approach">
              <h3 id="sec-approach" className="dossier-sec-title font-mono">
                <span className="text-accent">// 03.</span> ENGINEERING APPROACH
              </h3>
              <p className="dossier-text font-sans">{caseStudy.approach}</p>
            </section>

            {/* 04. Architecture & Pipeline */}
            <section className="dossier-section" aria-labelledby="sec-architecture">
              <h3 id="sec-architecture" className="dossier-sec-title font-mono">
                <span className="text-accent">// 04.</span> ARCHITECTURE &amp; PIPELINE BREAKDOWN
              </h3>
              <ul className="dossier-bullets-list font-sans">
                {caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="dossier-bullet-item">
                    <span className="bullet-prefix font-mono text-accent">❯</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 05. Security / Engineering Considerations */}
            {caseStudy.securityConsiderations && caseStudy.securityConsiderations.length > 0 && (
              <section className="dossier-section" aria-labelledby="sec-security">
                <h3 id="sec-security" className="dossier-sec-title font-mono">
                  <span className="text-accent">// 05.</span> SECURITY &amp; DEFENSIVE HARDENING
                </h3>
                <ul className="dossier-bullets-list font-sans">
                  {caseStudy.securityConsiderations.map((item, idx) => (
                    <li key={idx} className="dossier-bullet-item">
                      <ShieldCheck size={13} className="text-accent bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 06. Technologies */}
            <section className="dossier-section" aria-labelledby="sec-tech">
              <h3 id="sec-tech" className="dossier-sec-title font-mono">
                <span className="text-accent">// 06.</span> TECHNOLOGIES &amp; TOOLING
              </h3>
              <div className="dossier-tech-tags font-mono">
                {caseStudy.technologies.map((tech) => (
                  <span key={tech} className="dossier-tag">{tech}</span>
                ))}
              </div>
            </section>

            {/* 07. Results & Verified Findings */}
            <section className="dossier-section" aria-labelledby="sec-results">
              <h3 id="sec-results" className="dossier-sec-title font-mono">
                <span className="text-accent">// 07.</span> RESULTS &amp; EMPIRICAL VALIDATION
              </h3>
              <ul className="dossier-bullets-list font-sans">
                {caseStudy.results.map((res, idx) => (
                  <li key={idx} className="dossier-bullet-item">
                    <CheckCircle2 size={13} className="text-accent bullet-icon" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Modal Footer with GitHub Action */}
        <div className="modal-footer-strip font-mono">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github-action-btn"
            aria-label={`View ${project.title} on GitHub (opens in new window)`}
          >
            <FileCode size={14} />
            <span>VIEW REPOSITORY ON GITHUB</span>
            <ExternalLink size={12} className="text-accent" />
          </a>
          <button
            type="button"
            className="modal-dismiss-btn"
            onClick={onClose}
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
