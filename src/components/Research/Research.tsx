import React from 'react';
import {
  FlaskConical,
  Radio,
  Lock,
  ShieldCheck,
  Cpu,
  Calendar,
  Building,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import './Research.css';

export const Research: React.FC = () => {
  return (
    <section id="research" className="research-section" aria-label="Research and Systems">
      <div className="research-container">
        {/* Section Header */}
        <div className="research-header">
          <div className="section-badge">
            <FlaskConical size={13} className="text-accent" />
            <span>Research &amp; Publications</span>
          </div>
          <h2 className="research-section-title">
            Research <span className="text-accent">&amp;</span> Publications
          </h2>
          <div className="research-divider" aria-hidden="true" />
          <p className="research-lead-text font-sans">

          </p>
        </div>

        {/* 1. Primary Research Appointment Card */}
        <div className="research-primary-card" aria-label="Active Research Appointment">
          <div className="primary-card-top">
            <div className="primary-card-badge-row">

              <span className="appointment-date text-muted">
                <Calendar size={13} className="text-accent inline-icon" />
                Jun 2026 — Present
              </span>
            </div>

            <h3 className="appointment-role">
              Cybersecurity Research Intern
            </h3>

            <div className="appointment-institution text-secondary">
              <Building size={14} className="text-accent inline-icon" />
              <span>Centre of Excellence in Cyber Security · VIT-AP University</span>
            </div>
          </div>

          <p className="appointment-overview font-sans">
            Designing and developing an Agentic SOC platform to ingest, normalize, and orchestrate security telemetry across distributed endpoints in real time.
          </p>

          {/* Clean Bullet List */}
          <div className="appointment-bullets-list font-sans">
            <div className="bullet-row">
              <span className="bullet-arrow text-accent">•</span>
              <div className="bullet-content">
                <strong className="text-primary">Real-Time Telemetry Pipeline:</strong> Built an asynchronous data ingestion tier using Apache Kafka and FastAPI to handle continuous security event streams.
              </div>
            </div>

            <div className="bullet-row">
              <span className="bullet-arrow text-accent">•</span>
              <div className="bullet-content">
                <strong className="text-primary">High-Speed Log Querying:</strong> Configured Elasticsearch indexing and Redis session caching for fast, paginated querying across large event logs.
              </div>
            </div>

            <div className="bullet-row">
              <span className="bullet-arrow text-accent">•</span>
              <div className="bullet-content">
                <strong className="text-primary">Automated Incident Triage:</strong> Integrated MITRE ATT&amp;CK taxonomy alignment with automated ticket escalation in Jira/ServiceNow and browser isolation using Kasm RBI.
              </div>
            </div>
          </div>

          {/* Technologies Used Badges */}
          <div className="appointment-tech-tags font-mono">
            <span className="tech-badge">FastAPI</span>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Apache Kafka</span>
            <span className="tech-badge">Elasticsearch</span>
            <span className="tech-badge">Redis</span>
            <span className="tech-badge">MITRE ATT&amp;CK</span>
            <span className="tech-badge">Kasm RBI</span>
            <span className="tech-badge">Linux</span>
          </div>
        </div>

        {/* 2. Core Research Domains Grid */}
        <div className="research-domains-section">
          <div className="domains-heading-row">
            <span className="domains-heading-title">Core Research Focus</span>
            <span className="text-muted">4 Domains</span>
          </div>

          <div className="research-cards-grid">
            {/* Domain 1 */}
            <div className="research-domain-card">
              <div className="domain-card-header font-mono">
                <div className="domain-icon-box">
                  <Radio size={20} className="text-accent" />
                </div>
                <span className="domain-index text-muted">01</span>
              </div>
              <h4 className="domain-title font-mono">Distributed Telemetry Ingest</h4>
              <p className="domain-desc font-sans">
                Designing message queues and fast indexing schemas for distributed security event streaming under continuous load.
              </p>
              <div className="domain-tags font-mono">
                <span className="domain-pill">Kafka Streaming</span>
                <span className="domain-pill">Elasticsearch</span>
                <span className="domain-pill">FastAPI</span>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="research-domain-card">
              <div className="domain-card-header font-mono">
                <div className="domain-icon-box">
                  <Lock size={20} className="text-accent" />
                </div>
                <span className="domain-index text-muted">02</span>
              </div>
              <h4 className="domain-title font-mono">Applied Cryptography</h4>
              <p className="domain-desc font-sans">
                Implementing mathematical RSA from first principles and comparing it against 2048-bit RSA-OAEP semantic security.
              </p>
              <div className="domain-tags font-mono">
                <span className="domain-pill">RSA-OAEP 2048</span>
                <span className="domain-pill">Number Theory</span>
                <span className="domain-pill">PyCryptodome</span>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="research-domain-card">
              <div className="domain-card-header font-mono">
                <div className="domain-icon-box">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <span className="domain-index text-muted">03</span>
              </div>
              <h4 className="domain-title font-mono">Defense-in-Depth</h4>
              <p className="domain-desc font-sans">
                Building multi-tier input validation pipelines and regex allowlists to mitigate prompt injections and payload delivery.
              </p>
              <div className="domain-tags font-mono">
                <span className="domain-pill">Input Sanitization</span>
                <span className="domain-pill">Layered Defense</span>
                <span className="domain-pill">Secrets Isolation</span>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="research-domain-card">
              <div className="domain-card-header font-mono">
                <div className="domain-icon-box">
                  <Cpu size={20} className="text-accent" />
                </div>
                <span className="domain-index text-muted">04</span>
              </div>
              <h4 className="domain-title font-mono">Applied Machine Learning</h4>
              <p className="domain-desc font-sans">
                Benchmarking multiclass classifiers (Random Forest, Decision Trees) and real-time inference microservices.
              </p>
              <div className="domain-tags font-mono">
                <span className="domain-pill">Scikit-learn</span>
                <span className="domain-pill">Random Forest</span>
                <span className="domain-pill">Low-Latency APIs</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Working Papers Card */}
        <div className="research-paper-card" aria-label="Working Paper and Manuscript">
          <div className="paper-card-top">
            <div className="paper-status-pill">
              <FlaskConical size={14} className="text-accent inline-icon" />
              <span>Working Paper · In Preparation</span>
            </div>
            <span className="paper-year text-muted">2026</span>
          </div>

          <h3 className="paper-title">
            Architecture and Evaluation of an Agentic SOC Platform for Real-Time Security Telemetry and Automated Triage
          </h3>

          <div className="paper-meta font-mono text-secondary">
            <span>Author: Vishaal A K</span>
            <span className="meta-dot">•</span>
            <span>Centre of Excellence in Cyber Security, VIT-AP University</span>
          </div>

          <p className="paper-abstract font-sans">
            An exploration of asynchronous backend architectures (FastAPI, Redis, Apache Kafka, Elasticsearch) for high-throughput event processing, automated MITRE ATT&amp;CK taxonomy alignment, and incident containment.
          </p>

          <div className="paper-footer font-mono">
            <span className="paper-sub-note text-accent">
              <Sparkles size={12} className="inline-icon" />
              Research project at VIT-AP CoE
            </span>
            <a href="#contact" className="paper-inquiry-link">
              <span>Discuss Project</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
