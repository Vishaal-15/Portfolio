import React from 'react';
import { ProjectItem } from '../../config/projectsData';
import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      id={`project-${project.id}`}
      className="project-card technical-bracket"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Top Bar: Folder Icon on left, GitHub Link on right */}
      <div className="project-card-top">
        <div className="project-folder-icon" aria-hidden="true">
          <FolderGit2 size={32} className="text-accent" />
        </div>
        <div className="project-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
            aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
            title="View on GitHub"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Project Title */}
      <h3 id={`project-title-${project.id}`} className="project-title font-mono">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title-link"
        >
          {project.title}
        </a>
      </h3>

      {/* Brief Description */}
      <p className="project-desc font-sans">
        {project.shortDescription}
      </p>

      {/* Tech Stack Pills at Bottom */}
      <div className="project-tech-stack font-mono" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
