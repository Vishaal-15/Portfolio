import React from 'react';
import { Shield, Lock, Cpu, Code2, Server, Cloud } from 'lucide-react';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Security & Detection',
    icon: <Shield size={22} className="matrix-icon text-accent" />,
    skills: [
      'Agentic SOC Platform',
      'Security Telemetry Ingestion',
      'MITRE ATT&CK Taxonomy Mapping',
      'Automated Incident Triage',
      'SOAR Workflows (Jira / ServiceNow)',
      'Remote Browser Isolation (Kasm RBI)',
      'Threat Modeling & Defense-in-Depth'
    ]
  },
  {
    title: 'Applied Cryptography',
    icon: <Lock size={22} className="matrix-icon text-accent" />,
    skills: [
      '2048-Bit RSA-OAEP',
      'PyCryptodome Library',
      'Number Theory Algorithms',
      'Extended Euclidean Modular Inverse',
      'Semantic Security Verification',
      'Input Sanitization & Boundary Defense'
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Cpu size={22} className="matrix-icon text-accent" />,
    skills: [
      'Scikit-learn',
      'Random Forest Classifiers',
      'Regression Modeling',
      'LLM Boundary Defense',
      'Data Preprocessing & Pandas',
      'Cross-Validation & Benchmarking'
    ]
  },
  {
    title: 'Programming',
    icon: <Code2 size={22} className="matrix-icon text-accent" />,
    skills: [
      'Python (FastAPI, Flask, Streamlit)',
      'JavaScript / TypeScript',
      'React',
      'Node.js',
      'C / C++',
      'Data Structures & Algorithms'
    ]
  },
  {
    title: 'Backend & Systems',
    icon: <Server size={22} className="matrix-icon text-accent" />,
    skills: [
      'Apache Kafka Streaming',
      'Redis (In-Memory Session Caching)',
      'Elasticsearch (Schema & Log Indexing)',
      'Asynchronous Event Pipelines',
      'RESTful APIs',
      'Linux Administration'
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud size={22} className="matrix-icon text-accent" />,
    skills: [
      'Git / GitHub Workflows',
      'Network Protocols (TCP/IP, BGP, OSPF)',
      'Virtual Topologies',
      'Postman & API Profiling',
      'Linux Shell Scripting',
      'CI/CD Pipeline Fundamentals'
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section" aria-label="Technical Skills and Competencies">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-section-header">
          <div className="section-badge">
            <Cpu size={13} className="text-accent" />
            <span>Skills &amp; Expertise</span>
          </div>

          <h2 className="section-main-title">
            Technical Competencies <span className="text-accent">&amp;</span> Toolchain
          </h2>
        </div>

        {/* 6-Card Clean Grid */}
        <div className="skills-matrix-grid" role="region" aria-label="Skills Grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="skills-matrix-card technical-bracket">
              <div className="matrix-card-header">
                <span className="matrix-icon-wrapper">{cat.icon}</span>
                <h3 className="matrix-card-title">{cat.title}</h3>
              </div>

              <ul className="matrix-skills-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="matrix-skill-item">
                    <span className="matrix-bullet text-accent">•</span>
                    <span className="matrix-skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
