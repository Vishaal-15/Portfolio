import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const ProfileTerminal: React.FC = () => {
  const { about, academicProfile } = PORTFOLIO_DATA;

  return (
    <div className="about-terminal-window technical-bracket" aria-label="Academic Research Profile">
      {/* Title Bar */}
      <div className="about-terminal-header font-mono">
        <div className="about-terminal-title">
          <BookOpen size={14} className="text-accent inline-icon" />
          <span>ACADEMIC &amp; TECHNICAL BACKGROUND</span>
        </div>
        <div className="about-terminal-tag">
          <Award size={12} className="text-accent inline-icon" />
          <span>SECURITY INTERN</span>
        </div>
      </div>

      {/* Narrative Body */}
      <div className="about-terminal-body">
        {/* Academic Overview Header */}
        <div className="about-narrative-intro font-mono">
          <span className="text-accent">// BACKGROUND &amp; FOCUS:</span>
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
        <div className="about-coursework-section font-mono">
          <div className="coursework-header">
            <span className="text-accent">// UNDERGRADUATE FOUNDATIONS &amp; RELEVANT COURSEWORK:</span>
          </div>
          <div className="coursework-grid">
            {academicProfile.coursework.map((course) => (
              <div key={course.title} className="coursework-item">
                <div className="coursework-head">
                  <CheckCircle2 size={11} className="text-accent inline-icon" />
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
