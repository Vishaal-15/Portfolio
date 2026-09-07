import React from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { FileText, FolderGit2 } from 'lucide-react';

export const ProfileTerminal: React.FC = () => {
  const { terminalUser, systemHost, about } = PORTFOLIO_DATA;

  return (
    <div className="about-terminal-window technical-bracket font-mono" aria-label="About Terminal Profile">
      {/* Title Bar */}
      <div className="about-terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-expand" />
        </div>
        <div className="about-terminal-title">
          <FileText size={13} className="terminal-icon" />
          <span>about.txt — {terminalUser}@{systemHost}</span>
        </div>
        <div className="about-terminal-tag">
          <span>READ_ONLY</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="about-terminal-body">
        {/* Command: cat about.txt */}
        <div className="terminal-command-line">
          <span className="prompt-user">{terminalUser}@{systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="terminal-cmd">{about.command}</span>
        </div>

        {/* Narrative Output */}
        <div className="about-narrative-output">
          {about.paragraphs.map((para, index) => (
            <p key={index} className="narrative-paragraph">
              {para}
            </p>
          ))}
        </div>

        {/* Command: pwd */}
        <div className="terminal-command-line pwd-command-line">
          <span className="prompt-user">{terminalUser}@{systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="terminal-cmd">{about.pwdCommand}</span>
        </div>

        {/* pwd Output */}
        <div className="about-pwd-output">
          <FolderGit2 size={13} className="text-accent inline-icon" />
          <span className="text-accent-secondary">{about.pwdOutput}</span>
        </div>

        {/* Blinking Cursor Prompt */}
        <div className="terminal-command-line final-prompt-line">
          <span className="prompt-user">{terminalUser}@{systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </div>
  );
};
