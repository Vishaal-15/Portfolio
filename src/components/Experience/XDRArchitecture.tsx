import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Server, Activity, Database, Zap, Shield, ArrowDown, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

interface NodeDetail {
  id: string;
  title: string;
  role: string;
  tech: string;
}

const NODE_DETAILS: Record<string, NodeDetail> = {
  endpoints: {
    id: 'endpoints',
    title: 'Distributed Endpoints',
    role: 'Simulated endpoints generating system call, auth, & process events',
    tech: 'Distributed Agent Simulation'
  },
  telemetry: {
    id: 'telemetry',
    title: 'Security Telemetry Ingest',
    role: 'Real-time asynchronous event queueing & stream normalization',
    tech: 'Apache Kafka / Async Streams'
  },
  fastapi: {
    id: 'fastapi',
    title: 'Async FastAPI Tier',
    role: 'High-throughput non-blocking API pipeline for ingest & triage',
    tech: 'FastAPI / Python 3.11+'
  },
  redis: {
    id: 'redis',
    title: 'Redis Caching Layer',
    role: 'In-memory stateful session caching & rate-limit throttling',
    tech: 'Redis In-Memory Key-Value'
  },
  elasticsearch: {
    id: 'elasticsearch',
    title: 'Elasticsearch Cluster',
    role: 'High-speed log indexing, schema validation, & paginated query tier',
    tech: 'Elasticsearch Indexing'
  },
  detection: {
    id: 'detection',
    title: 'Detection / Analysis Tier',
    role: 'Real-time rule correlation, behavior analysis & threat detection',
    tech: 'Rule Engine / Correlation'
  },
  mitre: {
    id: 'mitre',
    title: 'MITRE ATT&CK Mapping',
    role: 'Automated tactic, technique & sub-technique classification',
    tech: 'ATT&CK Enterprise Matrix'
  },
  ticketing: {
    id: 'ticketing',
    title: 'SLA Incident Ticketing',
    role: 'Enforced response workflows, escalation routing & incident tracking',
    tech: 'Jira & ServiceNow APIs'
  },
  kasm: {
    id: 'kasm',
    title: 'Kasm RBI Isolation',
    role: 'Remote Browser Isolation for containment of malicious artifacts',
    tech: 'Kasm Web Isolation'
  }
};

export const XDRArchitecture: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const socStatus = PORTFOLIO_DATA.experience.socStatusItems;

  return (
    <div className="xdr-architecture-wrapper" aria-label="VIT-AP Agentic SOC Platform Architecture">
      {/* Architecture Header & Legend */}
      <div className="xdr-arch-header">
        <div className="xdr-arch-title font-mono">
          <Activity size={14} className="text-accent" />
          <span>AGENTIC SOC ARCHITECTURE · DATA FLOW SPECIFICATION</span>
        </div>
        <div className="xdr-arch-badge font-mono">
          <span>HIGH-PERFORMANCE INGEST</span>
        </div>
      </div>

      {/* SOC Status HUD Indicator Bar */}
      <div className="xdr-soc-hud font-mono" role="region" aria-label="System Architecture Status HUD">
        <div className="soc-hud-label">// ARCHITECTURE SUBSYSTEMS:</div>
        <div className="soc-status-items">
          {socStatus.map((item) => (
            <div key={item.label} className="soc-status-badge" title={item.description}>
              <span className="pulse-dot" aria-hidden="true" />
              <span className="soc-label">{item.label}</span>
              <span className="soc-val text-accent">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Diagram Container */}
      <div className="xdr-diagram-scroll-container">
        <div className="xdr-diagram-grid">
          {/* Layer 1: Endpoints */}
          <div className="arch-flow-stage">
            <button
              type="button"
              className={`arch-node-box ${activeNode === 'endpoints' ? 'node-active' : ''}`}
              onClick={() => setActiveNode(activeNode === 'endpoints' ? null : 'endpoints')}
              onMouseEnter={() => setActiveNode('endpoints')}
              aria-expanded={activeNode === 'endpoints'}
            >
              <div className="arch-node-icon"><Server size={14} /></div>
              <div className="arch-node-content">
                <span className="arch-node-title font-mono">01. ENDPOINTS</span>
                <span className="arch-node-sub font-mono">Distributed Telemetry</span>
              </div>
            </button>
            <div className="arch-connector-down" aria-hidden="true">
              <ArrowDown size={14} className="text-accent" />
            </div>
          </div>

          {/* Layer 2: Security Telemetry */}
          <div className="arch-flow-stage">
            <button
              type="button"
              className={`arch-node-box ${activeNode === 'telemetry' ? 'node-active' : ''}`}
              onClick={() => setActiveNode(activeNode === 'telemetry' ? null : 'telemetry')}
              onMouseEnter={() => setActiveNode('telemetry')}
              aria-expanded={activeNode === 'telemetry'}
            >
              <div className="arch-node-icon"><Activity size={14} /></div>
              <div className="arch-node-content">
                <span className="arch-node-title font-mono">02. SECURITY TELEMETRY</span>
                <span className="arch-node-sub font-mono">Real-Time Ingestion</span>
              </div>
            </button>
            <div className="arch-connector-down" aria-hidden="true">
              <ArrowDown size={14} className="text-accent" />
            </div>
          </div>

          {/* Layer 3: Async FastAPI & Redis Branch */}
          <div className="arch-split-stage">
            <div className="arch-split-main">
              <button
                type="button"
                className={`arch-node-box arch-node-primary ${activeNode === 'fastapi' ? 'node-active' : ''}`}
                onClick={() => setActiveNode(activeNode === 'fastapi' ? null : 'fastapi')}
                onMouseEnter={() => setActiveNode('fastapi')}
                aria-expanded={activeNode === 'fastapi'}
              >
                <div className="arch-node-icon"><Zap size={14} /></div>
                <div className="arch-node-content">
                  <span className="arch-node-title font-mono">03. ASYNC FASTAPI</span>
                  <span className="arch-node-sub font-mono">Backend Processing Tier</span>
                </div>
              </button>
            </div>

            <div className="arch-split-branch" aria-hidden="true">
              <div className="arch-branch-line">
                <ArrowRight size={14} className="text-accent" />
              </div>
              <button
                type="button"
                className={`arch-node-box arch-node-side ${activeNode === 'redis' ? 'node-active' : ''}`}
                onClick={() => setActiveNode(activeNode === 'redis' ? null : 'redis')}
                onMouseEnter={() => setActiveNode('redis')}
                aria-expanded={activeNode === 'redis'}
              >
                <div className="arch-node-icon"><Database size={13} /></div>
                <div className="arch-node-content">
                  <span className="arch-node-title font-mono">REDIS</span>
                  <span className="arch-node-sub font-mono">In-Memory Cache</span>
                </div>
              </button>
            </div>
          </div>

          <div className="arch-connector-down arch-center-connector" aria-hidden="true">
            <ArrowDown size={14} className="text-accent" />
          </div>

          {/* Layer 4: Elasticsearch */}
          <div className="arch-flow-stage">
            <button
              type="button"
              className={`arch-node-box ${activeNode === 'elasticsearch' ? 'node-active' : ''}`}
              onClick={() => setActiveNode(activeNode === 'elasticsearch' ? null : 'elasticsearch')}
              onMouseEnter={() => setActiveNode('elasticsearch')}
              aria-expanded={activeNode === 'elasticsearch'}
            >
              <div className="arch-node-icon"><Database size={14} /></div>
              <div className="arch-node-content">
                <span className="arch-node-title font-mono">04. ELASTICSEARCH</span>
                <span className="arch-node-sub font-mono">Log Indexing &amp; Paginated Search</span>
              </div>
            </button>
            <div className="arch-connector-down" aria-hidden="true">
              <ArrowDown size={14} className="text-accent" />
            </div>
          </div>

          {/* Layer 5: Detection / Analysis */}
          <div className="arch-flow-stage">
            <button
              type="button"
              className={`arch-node-box ${activeNode === 'detection' ? 'node-active' : ''}`}
              onClick={() => setActiveNode(activeNode === 'detection' ? null : 'detection')}
              onMouseEnter={() => setActiveNode('detection')}
              aria-expanded={activeNode === 'detection'}
            >
              <div className="arch-node-icon"><Shield size={14} /></div>
              <div className="arch-node-content">
                <span className="arch-node-title font-mono">05. DETECTION / ANALYSIS</span>
                <span className="arch-node-sub font-mono">Correlation &amp; Threat Rules</span>
              </div>
            </button>
            <div className="arch-connector-down" aria-hidden="true">
              <ArrowDown size={14} className="text-accent" />
            </div>
          </div>

          {/* Layer 6: Automated Response Sub-Tree */}
          <div className="arch-response-stage">
            <div className="arch-response-header font-mono">
              <span className="arch-node-title">06. AUTOMATED RESPONSE ORCHESTRATOR</span>
              <span className="arch-node-sub">SOAR Execution &amp; Containment</span>
            </div>

            <div className="arch-response-branches">
              <button
                type="button"
                className={`arch-branch-leaf ${activeNode === 'mitre' ? 'node-active' : ''}`}
                onClick={() => setActiveNode(activeNode === 'mitre' ? null : 'mitre')}
                onMouseEnter={() => setActiveNode('mitre')}
                aria-expanded={activeNode === 'mitre'}
              >
                <CornerDownRight size={13} className="text-accent branch-icon" />
                <div className="leaf-content font-mono">
                  <span className="leaf-name">MITRE ATT&amp;CK</span>
                  <span className="leaf-desc">Tactic &amp; Technique Mapping</span>
                </div>
              </button>

              <button
                type="button"
                className={`arch-branch-leaf ${activeNode === 'ticketing' ? 'node-active' : ''}`}
                onClick={() => setActiveNode(activeNode === 'ticketing' ? null : 'ticketing')}
                onMouseEnter={() => setActiveNode('ticketing')}
                aria-expanded={activeNode === 'ticketing'}
              >
                <CornerDownRight size={13} className="text-accent branch-icon" />
                <div className="leaf-content font-mono">
                  <span className="leaf-name">Jira / ServiceNow</span>
                  <span className="leaf-desc">SLA Incident Ticketing</span>
                </div>
              </button>

              <button
                type="button"
                className={`arch-branch-leaf ${activeNode === 'kasm' ? 'node-active' : ''}`}
                onClick={() => setActiveNode(activeNode === 'kasm' ? null : 'kasm')}
                onMouseEnter={() => setActiveNode('kasm')}
                aria-expanded={activeNode === 'kasm'}
              >
                <CornerDownRight size={13} className="text-accent branch-icon" />
                <div className="leaf-content font-mono">
                  <span className="leaf-name">Kasm RBI</span>
                  <span className="leaf-desc">Remote Browser Isolation</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Node Info Box */}
      {activeNode && NODE_DETAILS[activeNode] && (
        <div className="arch-info-callout font-mono" role="status">
          <div className="info-header">
            <CheckCircle2 size={13} className="text-accent" />
            <span className="info-title">{NODE_DETAILS[activeNode].title}</span>
            <span className="info-tech">{NODE_DETAILS[activeNode].tech}</span>
          </div>
          <p className="info-text">{NODE_DETAILS[activeNode].role}</p>
        </div>
      )}

      {/* Architecture Disclaimer */}
      <div className="xdr-arch-footer font-mono">
        <span>// NOTE: ARCHITECTURAL REPRESENTATION OF DESIGNED PLATFORM DATA FLOW AND INGESTION PIPELINES</span>
      </div>
    </div>
  );
};
