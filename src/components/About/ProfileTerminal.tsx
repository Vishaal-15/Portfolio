import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const ProfileTerminal: React.FC = () => {
  const { about, academicProfile } = PORTFOLIO_DATA;

  return (
    <div className="about-terminal-window technical-bracket" aria-label="Academic Research Profile">
      {/* Title Bar */}
      <div className="about-terminal-header">
        <div className="about-terminal-title">
          <BookOpen size={15} className="text-accent inline-icon" />
          <span>Academic &amp; Research Background</span>
        </div>
        <div className="about-terminal-tag">
          <Award size={13} className="text-accent inline-icon" />
          <span>Research Appointment</span>
        </div>
      </div>

      {/* Narrative Body */}
      <div className="about-terminal-body">
        {/* Academic Overview Header */}
        <div className="about-narrative-intro">
          <span className="narrative-heading-label">Research Focus &amp; Objectives</span>
        </div>

        {/* Narrative Paragraphs */}
        <div className="about-narrative-output">
          {about.paragraphs.map((para, index) => (
            <p key={index} className="narrative-paragraph">
              {para}
            </p>
          ))}
        </div>

        {/* Academic Coursework & Foundations Highlights */}
        <div className="about-coursework-section">
          <div className="coursework-header">
            <span className="narrative-heading-label">Foundations &amp; Relevant Coursework</span>
          </div>
          <div className="coursework-grid">
            {academicProfile.coursework.map((course) => (
              <div key={course.title} className="coursework-item">
                <div className="coursework-head">
                  <CheckCircle2 size={13} className="text-accent inline-icon" />
                  <span className="coursework-title">{course.title}</span>
                </div>
                <span className="coursework-relevance text-muted font-sans">{course.relevance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
