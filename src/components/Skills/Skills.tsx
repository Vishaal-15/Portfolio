import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../../config/skillsData';
import { SkillsTerminalIntro } from './SkillsTerminalIntro';
import { SkillFilters } from './SkillFilters';
import { SkillCategoryCard } from './SkillCategoryCard';
import { SkillDetailInspector } from './SkillDetailInspector';
import { SecurityStackFlow } from './SecurityStackFlow';
import { MLEcosystemFlow } from './MLEcosystemFlow';
import { TechnicalEcosystem } from './TechnicalEcosystem';
import { SkillsTerminalBottom } from './SkillsTerminalBottom';
import { ShieldCheck, Cpu } from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'SECURITY' | 'PROGRAMMING' | 'BACKEND' | 'ML' | 'INFRASTRUCTURE'>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = SKILLS_DATA.categories;

  const handleSelectFilter = (filterKey: 'ALL' | 'SECURITY' | 'PROGRAMMING' | 'BACKEND' | 'ML' | 'INFRASTRUCTURE') => {
    setActiveFilter(filterKey);
  };

  const handleSelectSkill = (skill: SkillItem) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  const handleCloseInspector = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="skills-section" aria-label="Technical Arsenal and Engineering Capabilities">
      {/* Top Ambient Crosshairs */}
      <div className="skills-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// REPOSITORY: VAK-TECHNICAL-ARSENAL</span>
        <span className="crosshair-tag top-right">ACCESS_MODE: CAPABILITIES_MATRIX</span>
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-section-header">
          <div className="section-badge font-mono">
            <ShieldCheck size={12} className="text-accent" />
            <span>05. TECHNICAL ARSENAL &amp; CAPABILITIES</span>
          </div>

          <h2 className="section-main-title">
            Technical Arsenal <span className="text-accent">&amp;</span> Engineering Stack
          </h2>

          <div className="section-subtext font-mono">
            <Cpu size={12} className="inline-icon text-accent" />
            <span>CYBERSECURITY • SOFTWARE ENGINEERING • MACHINE LEARNING • BACKEND INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Terminal Header & Toolkit Command */}
        <SkillsTerminalIntro />

        {/* Filter Toolbar */}
        <SkillFilters
          activeFilter={activeFilter}
          onSelectFilter={handleSelectFilter}
        />

        {/* Selected Skill Contextual Inspector */}
        {selectedSkill && (
          <SkillDetailInspector
            selectedSkill={selectedSkill}
            onClose={handleCloseInspector}
          />
        )}

        {/* 7 Verified Technical Arsenal Categories Grid */}
        <div className="skills-categories-grid" role="region" aria-label="Skill Categories Grid">
          {categories.map((cat) => {
            const isMuted = activeFilter !== 'ALL' && cat.filterCategory !== activeFilter;
            return (
              <SkillCategoryCard
                key={cat.id}
                category={cat}
                isMuted={isMuted}
                selectedSkill={selectedSkill}
                onSelectSkill={handleSelectSkill}
              />
            );
          })}
        </div>

        {/* Two-Column Conceptual Flow Pipelines */}
        <div className="skills-flow-grid">
          <SecurityStackFlow />
          <MLEcosystemFlow />
        </div>

        {/* Central Technical Ecosystem Architecture */}
        <TechnicalEcosystem />

        {/* Bottom Terminal Query */}
        <SkillsTerminalBottom />
      </div>
    </section>
  );
};
