import React, { useState } from 'react';
import { RESEARCH_DATA } from '../../config/researchData';
import { Terminal, Folder, Sparkles, Copy, Check } from 'lucide-react';

export const ResearchTerminal: React.FC = () => {
  const data = RESEARCH_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.terminalCmd}\n${data.profileCmd}\n${data.philosophyCmd}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="research-terminal-window technical-bracket" aria-label="Research Terminal Environment">
      {/* Terminal Titlebar */}
      <div className="research-term-header font-mono">
        <div className="term-header-left">
          <Terminal size={13} className="text-accent" />
          <span>sec-lab: ~/research/research-profile.md</span>
        </div>
        <div className="term-header-right">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">RESEARCH_NOTEBOOK_ACTIVE</span>
          <button
            type="button"
            className="term-copy-btn"
            onClick={handleCopy}
            title="Copy terminal session"
            aria-label="Copy terminal text"
          >
            {copied ? <Check size={10} className="text-accent" /> : <Copy size={10} />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="research-term-body font-mono">
        {/* Command 1: ls research/ */}
        <div className="term-cmd-row">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.terminalCmd}</span>
        </div>

        {/* Directory Output */}
        <div className="term-dir-listing">
          {data.terminalOutput.map((dir) => (
            <span key={dir} className="dir-pill">
              <Folder size={11} className="text-accent" />
              <span>{dir}</span>
            </span>
          ))}
        </div>

        {/* Command 2: cat research-profile.md */}
        <div className="term-cmd-row term-mt">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.profileCmd}</span>
        </div>

        {/* Profile Output */}
        <div className="term-quote-output font-sans">
          <div className="quote-accent-bar" aria-hidden="true" />
          <p className="profile-quote-text">
            "{data.profileStatement}"
          </p>
        </div>

        {/* Command 3: cat research-principles.md */}
        <div className="term-cmd-row term-mt">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.philosophyCmd}</span>
        </div>

        {/* Philosophy Output */}
        <div className="term-philosophy-output">
          <Sparkles size={13} className="text-accent flex-shrink-0" />
          <span className="philosophy-text font-sans">
            "{data.philosophyStatement}"
          </span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
