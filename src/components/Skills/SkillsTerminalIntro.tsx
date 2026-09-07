import React, { useState } from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { Terminal, Copy, Check } from 'lucide-react';

export const SkillsTerminalIntro: React.FC = () => {
  const data = SKILLS_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.terminalCmd}\n${data.stackCmd}\n${data.stackStatement}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="skills-terminal-window technical-bracket" aria-label="Technical Arsenal Terminal Environment">
      {/* Titlebar */}
      <div className="skills-term-header font-mono">
        <div className="term-header-left">
          <Terminal size={13} className="text-accent" />
          <span>sec-lab: ~/skills/technical-stack.txt</span>
        </div>
        <div className="term-header-right">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">ARSENAL_INITIALIZED</span>
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
      <div className="skills-term-body font-mono">
        {/* Command 1: ls -la skills/ */}
        <div className="term-cmd-row">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.terminalCmd}</span>
        </div>

        {/* Directory Output */}
        <div className="term-dir-grid">
          {data.terminalOutput.map((dir) => (
            <span key={dir} className="skills-dir-entry">
              <span className="dir-perm text-muted">drwxr-xr-x</span>
              <span className="dir-target text-accent">{dir.replace('drwxr-xr-x ', '')}</span>
            </span>
          ))}
        </div>

        {/* Command 2: cat technical-stack.txt */}
        <div className="term-cmd-row term-mt">
          <span className="text-accent">vishaal@sec-lab:~$</span>
          <span className="term-cmd-text">{data.stackCmd}</span>
        </div>

        {/* Output Statement */}
        <div className="term-quote-output font-sans">
          <div className="quote-accent-bar" aria-hidden="true" />
          <p className="skills-quote-text">
            "{data.stackStatement}"
          </p>
        </div>
      </div>
    </div>
  );
};
