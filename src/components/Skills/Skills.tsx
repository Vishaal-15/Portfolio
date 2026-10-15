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
    <section id="skills" className="skills-section" aria-label="Technical Arsenal and Skills Matrix">
      {/* Top Crosshair Tag */}
      <div className="skills-crosshairs font-mono" aria-hidden="true">
        <span className="crosshair-tag top-left">// CORE TECHNICAL COMPETENCIES</span>
        <span className="crosshair-tag top-right">VERIFIED TOOLCHAIN</span>
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-matrix-header">
          <h2 className="skills-matrix-title font-mono">
            &lt;Skills_Matrix /&gt;
          </h2>
          <div className="skills-matrix-divider" aria-hidden="true" />
        </div>

        {/* 6-Card Clean Grid */}
        <div className="skills-matrix-grid" role="region" aria-label="Skills Grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="skills-matrix-card technical-bracket">
              <div className="matrix-card-header">
                <span className="matrix-icon-wrapper">{cat.icon}</span>
                <h3 className="matrix-card-title">{cat.title}</h3>
              </div>

              <ul className="matrix-skills-list font-mono">
                {cat.skills.map((skill) => (
                  <li key={skill} className="matrix-skill-item">
                    <span className="matrix-bullet text-accent">&gt;</span>
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
