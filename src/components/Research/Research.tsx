import React from 'react';
import { ResearchTerminal } from './ResearchTerminal';
import { ResearchCurrentRole } from './ResearchCurrentRole';
import { ResearchFocusMatrix } from './ResearchFocusMatrix';
import { ResearchEngineeringFlow } from './ResearchEngineeringFlow';
import { ResearchSystemFlow } from './ResearchSystemFlow';
import { ResearchArchive } from './ResearchArchive';
import { ResearchNotebook } from './ResearchNotebook';
import { Publications } from './Publications';
import { ResearchStack } from './ResearchStack';
import { ShieldCheck, Cpu } from 'lucide-react';
import './Research.css';

export const Research: React.FC = () => {
  return (
    <section id="research" className="research-section" aria-label="Cybersecurity Research and Applied Systems">
      {/* Top Ambient Crosshairs */}
      <div className="research-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// DOSSIER: VAK-RESEARCH-LAB</span>
        <span className="crosshair-tag top-right">ACCESS_MODE: RESEARCH_ARCHIVE</span>
      </div>

      <div className="research-container">
        {/* Section Header */}
        <div className="research-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>04. CYBERSECURITY RESEARCH &amp; APPLIED SYSTEMS</span>
          </div>

          <h2 className="section-main-title">
            Research Lab <span className="text-accent">&amp;</span> Technical Inquiries
          </h2>

          <div className="section-subtext font-mono">
            <Cpu size={12} className="inline-icon text-accent" />
            <span>THREAT MODELS • REAL-TIME TELEMETRY • APPLIED SECURITY ENGINEERING</span>
          </div>
        </div>

        {/* Terminal Header & Research Profile Command */}
        <ResearchTerminal />

        {/* Current Research Role & Scope at VIT-AP */}
        <ResearchCurrentRole />

        {/* 5 Core Research Focus Areas Matrix */}
        <ResearchFocusMatrix />

        {/* Applied Methodology Pipeline (Research -> Engineering) */}
        <ResearchEngineeringFlow />

        {/* Current Technical Research Context (XDR 100,000+ Endpoint Telemetry Platform) */}
        <ResearchSystemFlow />

        {/* Two-Column Balanced Grid: Digital Archive & Field Notebook */}
        <div className="research-middle-grid">
          <ResearchArchive />
          <ResearchNotebook />
        </div>

        {/* Bottom Two-Column Grid: Publications & Toolchain Preview */}
        <div className="research-bottom-grid">
          <Publications />
          <ResearchStack />
        </div>
      </div>
    </section>
  );
};
