import React from 'react';
import { SKILLS_DATA } from '../../config/skillsData';
import { Cpu, Terminal, Shield, Layers, Database } from 'lucide-react';

export const SkillsTerminalIntro: React.FC = () => {
  const data = SKILLS_DATA;

  return (
    <div className="skills-terminal-window technical-bracket" aria-label="Technical Arsenal and Research Stack">
      {/* Titlebar */}
      <div className="skills-term-header font-mono">
        <div className="term-header-left">
          <Cpu size={14} className="text-accent" />
          <span>TECHNICAL ARSENAL &amp; ENGINEERING DOMAINS</span>
        </div>
        <div className="term-header-right">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-accent">VERIFIED TOOLCHAIN</span>
        </div>
      </div>

      {/* Body */}
      <div className="skills-term-body font-mono">
        {/* Quote / Statement */}
        <div className="term-quote-output font-sans">
          <div className="quote-accent-bar" aria-hidden="true" />
          <p className="skills-quote-text">
            "{data.stackStatement}"
          </p>
        </div>

        {/* 4 Toolchain Focus Disciplines */}
        <div className="skills-disciplines-row font-mono">
          <div className="discipline-chip">
            <Terminal size={12} className="text-accent inline-icon" />
            <span className="text-primary font-semibold">Systems &amp; Languages:</span>
            <span className="text-muted">Python, C, TypeScript</span>
          </div>

          <div className="discipline-chip">
            <Shield size={12} className="text-accent inline-icon" />
            <span className="text-primary font-semibold">Security &amp; Protocols:</span>
            <span className="text-muted">BGP, OSPF, MITRE ATT&amp;CK, TLS</span>
          </div>

          <div className="discipline-chip">
            <Database size={12} className="text-accent inline-icon" />
            <span className="text-primary font-semibold">Distributed Backends:</span>
            <span className="text-muted">FastAPI, Kafka, Elasticsearch, Redis</span>
          </div>

          <div className="discipline-chip">
            <Layers size={12} className="text-accent inline-icon" />
            <span className="text-primary font-semibold">ML &amp; Data:</span>
            <span className="text-muted">Scikit-learn, Pandas, NumPy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
