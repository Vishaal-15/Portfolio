import React from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { Terminal } from 'lucide-react';

export const SkillsTerminalBottom: React.FC = () => {
  const data = SKILLS_DATA;

  return (
    <div className="skills-terminal-bottom technical-bracket font-mono" aria-label="Terminal Technical Stack Query">
      <div className="term-bottom-header">
        <Terminal size={12} className="text-accent" />
        <span>sec-lab: ~/bin/which-skills</span>
      </div>

      <div className="term-bottom-body">
        {/* Command: which skills */}
        <div className="term-cmd-row">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.whichCmd}</span>
        </div>

        {/* Output List */}
        <div className="term-which-output">
          {data.whichOutput.map((item) => (
            <div key={item} className="which-item">
              <span className="text-muted">/usr/local/bin/</span>
              <span className="text-accent">{item}</span>
            </div>
          ))}
        </div>

        {/* Trailing Active Prompt */}
        <div className="term-cmd-row term-mt">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
