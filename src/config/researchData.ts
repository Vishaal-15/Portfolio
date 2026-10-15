/**
 * Centralized Research Data Configuration
 * Strictly verified cybersecurity research identity, technical focus areas, and research pipelines for Vishaal A K
 */

export interface ResearchFocusArea {
  id: string;
  order: string;
  title: string;
  subtitle: string;
  status: 'ACTIVE' | 'EXPLORING';
  statusLabel: string;
  description: string;
  keyTopics: string[];
  researchQuestions: string[];
}

export interface ResearchMethodologyStep {
  step: string;
  name: string;
  sub: string;
  desc: string;
}

export interface ResearchSystemStep {
  step: string;
  name: string;
  role: string;
}

export interface ResearchToolchainCategory {
  category: string;
  tools: string[];
}

export interface ResearchArchiveItem {
  id: string;
  order: string;
  name: string;
  status: 'CURRENT WORK' | 'INTEREST';
  focusOverview: string;
  technicalExplorations: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  abstract: string;
  paperUrl?: string;
  status: 'PUBLISHED' | 'UNDER REVIEW' | 'PREPRINT';
}

export interface ResearchNotebookNote {
  id: string;
  topic: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface ResearchConfig {
  terminalCmd: string;
  terminalOutput: string[];
  profileCmd: string;
  profileStatement: string;
  philosophyCmd: string;
  philosophyStatement: string;
  currentRole: {
    badge: string;
    role: string;
    organization: string;
    department: string;
    status: string;
    startDate: string;
    overview: string;
    researchScope: string[];
  };
  focusAreas: ResearchFocusArea[];
  methodology: ResearchMethodologyStep[];
  xdrResearchContext: {
    title: string;
    subtitle: string;
    overview: string;
    highlights: string[];
    pipeline: ResearchSystemStep[];
  };
  statusIndicators: Array<{
    label: string;
    status: 'ACTIVE' | 'EXPLORING';
    type: string;
  }>;
  toolchain: ResearchToolchainCategory[];
  archive: ResearchArchiveItem[];
  notebook: ResearchNotebookNote[];
  publications: PublicationItem[];
}

export const RESEARCH_DATA: ResearchConfig = {
  terminalCmd: "ls research/",
  terminalOutput: [
    "research-interests/",
    "current-work/",
    "security-systems/",
    "machine-learning/"
  ],
  profileCmd: "cat research-profile.md",
  profileStatement: "I am interested in developing secure, scalable, and intelligent systems, with a focus on cybersecurity, machine learning, backend infrastructure, and real-time security detection.",
  philosophyCmd: "cat research-principles.md",
  philosophyStatement: "I am interested in turning security research concepts into practical, scalable, and defensible systems.",

  currentRole: {
    badge: "RESEARCH // CURRENT",
    role: "SECURITY RESEARCH INTERN",
    organization: "VIT-AP UNIVERSITY",
    department: "Centre of Excellence in Cyber Security",
    status: "ACTIVE",
    startDate: "JUN 2026",
    overview: "I contribute to cybersecurity research at VIT-AP University's Centre of Excellence in Cyber Security, investigating real-time telemetry processing, distributed detection platforms, and defensive architectures.",
    researchScope: [
      "Real-time security telemetry ingestion across distributed endpoints",
      "High-speed log indexing and paginated event queries",
      "Automated response orchestration and MITRE ATT&CK alignment",
      "Threat-aware backend architectures with resilience by design"
    ]
  },

  focusAreas: [
    {
      id: "cybersecurity",
      order: "01",
      title: "CYBERSECURITY",
      subtitle: "Security-Focused Engineering",
      status: "ACTIVE",
      statusLabel: "● ACTIVE FOCUS",
      description: "Investigating defensive architectures, threat-informed defense models, and robust security controls integrated directly into system lifecycles.",
      keyTopics: ["Threat-Aware Systems", "Defensive Engineering", "Allowlist Filtering", "Vulnerability Surface Reduction"],
      researchQuestions: [
        "How can layered validation barriers mitigate prompt injection in generative models?",
        "What architectural patterns best prevent credential leakage and lateral traversal?"
      ]
    },
    {
      id: "secure-systems",
      order: "02",
      title: "SECURE SYSTEMS",
      subtitle: "Secure Application Design",
      status: "ACTIVE",
      statusLabel: "● ACTIVE FOCUS",
      description: "Exploring fault-tolerant, hardened software architectures with minimal attack surface and privacy-by-design guarantees.",
      keyTopics: ["Privacy-by-Design", "Hardened Backend Pipelines", "Secrets Isolation", "Asynchronous Processing"],
      researchQuestions: [
        "How can in-memory caching layers enforce stateful session integrity under adversarial load?",
        "What decoupled topologies maximize availability while guaranteeing strict access control?"
      ]
    },
    {
      id: "machine-learning",
      order: "03",
      title: "MACHINE LEARNING",
      subtitle: "Applied ML & Anomaly Detection",
      status: "EXPLORING",
      statusLabel: "● EXPLORING",
      description: "Evaluating machine learning algorithms for intelligent pattern recognition, predictive classification, and anomaly discovery in multi-dimensional datasets.",
      keyTopics: ["Supervised Classifiers", "Regression Modeling", "Feature Normalization", "Anomaly Detection"],
      researchQuestions: [
        "How do tree-based ensemble models perform in real-time edge decision pipelines?",
        "What data pre-processing workflows yield the lowest latency for low-error inference?"
      ]
    },
    {
      id: "detection-systems",
      order: "04",
      title: "DETECTION SYSTEMS",
      subtitle: "Real-Time Telemetry & Rules",
      status: "ACTIVE",
      statusLabel: "● ACTIVE FOCUS",
      description: "Researching high-throughput event ingestion, distributed log indexing, and automated rule engines for threat detection.",
      keyTopics: ["Real-Time Telemetry", "Log Ingest Pipelines", "Event Indexing", "Detection Engines"],
      researchQuestions: [
        "How can asynchronous message streaming scale to ingest security telemetry from distributed sources in real time?",
        "What indexing schemas provide the optimal trade-off between write throughput and search latency?"
      ]
    },
    {
      id: "network-security",
      order: "05",
      title: "NETWORK SECURITY",
      subtitle: "Protocols & Virtual Topologies",
      status: "ACTIVE",
      statusLabel: "● ACTIVE FOCUS",
      description: "Analyzing core network routing protocols (BGP, OSPF), traffic segmentation, and security-aware virtual network topologies.",
      keyTopics: ["BGP & OSPF Routing", "Virtual Topologies", "Packet Segmentation", "Linux Network Admin"],
      researchQuestions: [
        "How do inter-domain routing policies impact attack path propagation in hybrid cloud setups?",
        "What virtual segmentation strategies provide the strongest isolation between operational tiers?"
      ]
    }
  ],

  methodology: [
    {
      step: "01",
      name: "RESEARCH QUESTIONS",
      sub: "Identify Vulnerabilities",
      desc: "Formulate technical inquiries based on real-world threat vectors, scale bottlenecks, and theoretical attack surfaces."
    },
    {
      step: "02",
      name: "SECURITY MODELS",
      sub: "Theoretical Frameworks",
      desc: "Define formal threat models, boundary invariants, cryptographic specifications, and mathematical proofs."
    },
    {
      step: "03",
      name: "SYSTEM DESIGN",
      sub: "Hardened Architecture",
      desc: "Architect decoupled, asynchronous components with strict layer separation and defense-in-depth controls."
    },
    {
      step: "04",
      name: "IMPLEMENTATION",
      sub: "Applied Engineering",
      desc: "Build production-ready code with secure coding standards, secrets management, and robust error handling."
    },
    {
      step: "05",
      name: "TESTING",
      sub: "Empirical Validation",
      desc: "Execute scale testing, adversary simulation suites, cryptographic test vectors, and latency benchmarking."
    },
    {
      step: "06",
      name: "SECURE SYSTEMS",
      sub: "Defensible Outcomes",
      desc: "Deploy resilient, observable platforms that withstand adversarial inputs and massive operational scale."
    }
  ],

  xdrResearchContext: {
    title: "CURRENT TECHNICAL RESEARCH CONTEXT",
    subtitle: "High-Performance Agentic SOC Platform",
    overview: "As part of my cybersecurity research experience at VIT-AP University, I contribute to the architectural design and implementation of a high-performance Agentic SOC platform for distributed telemetry ingestion and automated triage.",
    highlights: [
      "Asynchronous FastAPI backend tier with Redis in-memory session caching",
      "Elasticsearch cluster for high-speed security log aggregation and paginated queries",
      "Real-time security telemetry ingest pipeline powered by Apache Kafka",
      "Automated response orchestrator with MITRE ATT&CK mapping, SLA-enforced ticketing (Jira/ServiceNow), and Kasm Remote Browser Isolation (RBI)"
    ],
    pipeline: [
      { step: "01", name: "ENDPOINT TELEMETRY", role: "Real-time process, auth, and system event generation" },
      { step: "02", name: "DATA INGESTION", role: "High-throughput asynchronous streaming and queueing" },
      { step: "03", name: "REAL-TIME PROCESSING", role: "FastAPI non-blocking parsing & Redis state caching" },
      { step: "04", name: "SECURITY ANALYSIS", role: "Elasticsearch schema indexing & query aggregation" },
      { step: "05", name: "DETECTION", role: "Rule correlation engine and anomaly classification" },
      { step: "06", name: "RESPONSE", role: "MITRE ATT&CK mapping, Jira/ServiceNow ticketing, Kasm RBI" },
      { step: "07", name: "SECURE SYSTEM", role: "Resilient, defensible infrastructure with closed feedback" }
    ]
  },

  statusIndicators: [
    { label: "CYBERSECURITY", status: "ACTIVE", type: "Focus Area" },
    { label: "SECURE SYSTEMS", status: "ACTIVE", type: "Focus Area" },
    { label: "MACHINE LEARNING", status: "EXPLORING", type: "Focus Area" },
    { label: "DETECTION SYSTEMS", status: "ACTIVE", type: "Focus Area" },
    { label: "NETWORK SECURITY", status: "ACTIVE", type: "Focus Area" }
  ],

  toolchain: [
    {
      category: "MACHINE LEARNING & ANALYTICS",
      tools: ["Python", "Scikit-learn", "NumPy", "Pandas"]
    },
    {
      category: "BACKEND & DATA INGESTION",
      tools: ["FastAPI", "Redis", "Elasticsearch", "Apache Kafka"]
    },
    {
      category: "SECURITY & INFRASTRUCTURE",
      tools: ["Linux", "Wireshark", "Nmap", "Burp Suite"]
    }
  ],

  archive: [
    {
      id: "archive-sec-systems",
      order: "01",
      name: "SECURITY SYSTEMS",
      status: "CURRENT WORK",
      focusOverview: "Architectural investigations into defense-in-depth pipelines, allowlist validation tiers, and secrets isolation.",
      technicalExplorations: [
        "Evaluation of 7-tier validation pipelines in prompt-based AI applications (~95% malicious input mitigation)",
        "Secrets isolation patterns using decoupled environment execution runtimes"
      ]
    },
    {
      id: "archive-ml",
      order: "02",
      name: "MACHINE LEARNING",
      status: "CURRENT WORK",
      focusOverview: "Exploration of predictive modeling, supervised classification, and regression benchmarks for decision support.",
      technicalExplorations: [
        "Random Forest multi-class agronomic crop recommendation achieving 88% test accuracy",
        "Sub-500ms real-time price regression engine trained on 10,000+ product records"
      ]
    },
    {
      id: "archive-net-sec",
      order: "03",
      name: "NETWORK SECURITY",
      status: "CURRENT WORK",
      focusOverview: "Dynamic routing protocols, enterprise switch management, and virtual network topology isolation.",
      technicalExplorations: [
        "BGP and OSPF Area 0 route propagation across simulated multi-node enterprise topologies",
        "Linux-based network administration and VLAN interface segmentation"
      ]
    },
    {
      id: "archive-detection",
      order: "04",
      name: "DETECTION SYSTEMS",
      status: "CURRENT WORK",
      focusOverview: "High-speed telemetry ingestion, Elasticsearch query pagination, and automated incident triage.",
      technicalExplorations: [
        "Ingestion pipelines for distributed endpoint event streams",
        "Automated response workflows with MITRE ATT&CK classification and SLA ticketing"
      ]
    },
    {
      id: "archive-crypto",
      order: "05",
      name: "CRYPTOGRAPHY",
      status: "CURRENT WORK",
      focusOverview: "Theoretical number theory fundamentals vs semantic security in modern asymmetric cryptosystems.",
      technicalExplorations: [
        "Raw RSA construction from first principles: modular inverse via Extended Euclidean algorithm",
        "2048-bit RSA-OAEP implementation with SHA-256 padding validated on 100+ test vectors"
      ]
    }
  ],

  notebook: [
    {
      id: "note-systems",
      topic: "SYSTEMS",
      title: "Asynchronous Backends for Scale Ingestion",
      date: "RESEARCH LOG // 2026",
      summary: "Non-blocking event processing with FastAPI and Redis reduces queue congestion significantly when ingesting high-throughput telemetry streams.",
      tags: ["FastAPI", "Redis", "Telemetry", "Scale Testing"]
    },
    {
      id: "note-security",
      topic: "SECURITY",
      title: "Layered Defense-in-Depth for Generative AI",
      date: "RESEARCH LOG // 2025",
      summary: "Allowlist regex boundaries paired with strict MIME and size checks block approximately 95% of prompt override test inputs before reaching the model layer.",
      tags: ["Allowlist", "Privacy-by-Design", "LLM Security", "Sanitization"]
    },
    {
      id: "note-models",
      topic: "MODELS",
      title: "Model Selection in Multi-Feature Classification",
      date: "RESEARCH LOG // 2024",
      summary: "Ensemble Random Forest classifiers demonstrated a +12% accuracy gain over baseline Logistic Regression when handling non-linear soil and weather variables.",
      tags: ["Random Forest", "Cross-Validation", "Scikit-learn", "Classification"]
    },
    {
      id: "note-detection",
      topic: "DETECTION",
      title: "Automated Incident Escalation via SOAR",
      date: "RESEARCH LOG // 2026",
      summary: "Mapping telemetry anomalies to MITRE ATT&CK techniques enables automated SLA ticketing and rapid containment via remote browser isolation.",
      tags: ["MITRE ATT&CK", "Incident Response", "Jira", "Kasm RBI"]
    },
    {
      id: "note-infra",
      topic: "INFRASTRUCTURE",
      title: "Dynamic Routing Topologies in Lab Simulations",
      date: "RESEARCH LOG // 2024",
      summary: "Configuring BGP exterior gateway peering with intra-area OSPF routing provides stable fault recovery across simulated virtual networks.",
      tags: ["BGP", "OSPF", "Linux Networking", "Virtual Topologies"]
    }
  ],

  // Extensible Publications Array (Currently empty, ready for future papers)
  publications: []
};
