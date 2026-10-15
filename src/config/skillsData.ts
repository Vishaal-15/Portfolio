/**
 * Centralized Skills & Technical Arsenal Data Configuration
 * Strictly verified technical stack, categorization, and contextual usage for Vishaal A K
 */

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  type?: 'DATABASE' | 'CACHE' | 'SEARCH / LOG DATA' | 'LANGUAGE' | 'FRAMEWORK' | 'TOOL' | 'CONCEPT';
  context: string;
  usedIn: string[];
  role: 'primary' | 'secondary' | 'supporting';
}

export interface SkillCategory {
  id: string;
  order: string;
  title: string;
  subtitle: string;
  filterCategory: 'ALL' | 'SECURITY' | 'PROGRAMMING' | 'BACKEND' | 'ML' | 'INFRASTRUCTURE';
  isProminent?: boolean;
  skills: SkillItem[];
  description: string;
}

export interface SecurityFlowStep {
  step: string;
  name: string;
  desc: string;
}

export interface MLFlowStep {
  step: string;
  name: string;
  desc: string;
}

export interface EcosystemNode {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  coreTech: string[];
}

export interface SkillsConfig {
  terminalCmd: string;
  terminalOutput: string[];
  stackCmd: string;
  stackStatement: string;
  whichCmd: string;
  whichOutput: string[];
  filterOptions: Array<{
    id: string;
    label: string;
    filterKey: 'ALL' | 'SECURITY' | 'PROGRAMMING' | 'BACKEND' | 'ML' | 'INFRASTRUCTURE';
  }>;
  categories: SkillCategory[];
  securityStackFlow: SecurityFlowStep[];
  mlFlow: MLFlowStep[];
  ecosystem: {
    title: string;
    subtitle: string;
    overview: string;
    coreHub: EcosystemNode;
    pillars: EcosystemNode[];
    anchor: EcosystemNode;
  };
}

export const SKILLS_DATA: SkillsConfig = {
  terminalCmd: "ls -la skills/",
  terminalOutput: [
    "drwxr-xr-x programming/",
    "drwxr-xr-x cybersecurity/",
    "drwxr-xr-x backend/",
    "drwxr-xr-x machine-learning/",
    "drwxr-xr-x databases/",
    "drwxr-xr-x infrastructure/",
    "drwxr-xr-x developer-tools/"
  ],
  stackCmd: "cat technical-stack.txt",
  stackStatement: "My technical toolkit spans cybersecurity, software engineering, machine learning, backend systems, networking, and infrastructure.",
  whichCmd: "which skills",
  whichOutput: [
    "cybersecurity",
    "software-engineering",
    "machine-learning",
    "backend-systems",
    "network-security"
  ],

  filterOptions: [
    { id: "all", label: "ALL", filterKey: "ALL" },
    { id: "security", label: "SECURITY", filterKey: "SECURITY" },
    { id: "programming", label: "PROGRAMMING", filterKey: "PROGRAMMING" },
    { id: "backend", label: "BACKEND", filterKey: "BACKEND" },
    { id: "ml", label: "ML", filterKey: "ML" },
    { id: "infrastructure", label: "INFRASTRUCTURE", filterKey: "INFRASTRUCTURE" }
  ],

  categories: [
    {
      id: "programming",
      order: "01",
      title: "PROGRAMMING",
      subtitle: "Core Languages & Systems Development",
      filterCategory: "PROGRAMMING",
      description: "Foundational programming languages used across security engineering, algorithmic modeling, backend services, and systems architecture.",
      skills: [
        {
          id: "python",
          name: "Python",
          category: "programming",
          type: "LANGUAGE",
          context: "Used for cybersecurity research, backend REST APIs, machine learning modeling, cryptographic implementations, and automated testing suites.",
          usedIn: ["XDR Platform", "Secure Prompt Scorer", "RSA Implementation", "Crop Recommendation ML", "Price Prediction ML"],
          role: "primary"
        },
        {
          id: "java",
          name: "Java",
          category: "programming",
          type: "LANGUAGE",
          context: "Object-oriented design, robust data structures, and enterprise backend engineering principles.",
          usedIn: ["Academic Systems", "Data Structures & Algorithms"],
          role: "secondary"
        },
        {
          id: "c",
          name: "C",
          category: "programming",
          type: "LANGUAGE",
          context: "Low-level systems programming, memory management, pointer manipulation, and foundational systems architecture.",
          usedIn: ["Systems Programming", "Computer Architecture Lab"],
          role: "secondary"
        },
        {
          id: "cpp",
          name: "C++",
          category: "programming",
          type: "LANGUAGE",
          context: "High-performance computational algorithms, object-oriented systems modeling, and competitive algorithm optimization.",
          usedIn: ["Algorithm Analysis", "Performance Benchmarking"],
          role: "secondary"
        },
        {
          id: "javascript",
          name: "JavaScript",
          category: "programming",
          type: "LANGUAGE",
          context: "Modern asynchronous web engineering, DOM event handling, REST client integration, and Full-Stack MERN development.",
          usedIn: ["E-Commerce Price Prediction", "Cybersecurity Portfolio"],
          role: "secondary"
        }
      ]
    },
    {
      id: "cybersecurity",
      order: "02",
      title: "CYBERSECURITY",
      subtitle: "Defensive Engineering & Threat Intelligence",
      filterCategory: "SECURITY",
      isProminent: true,
      description: "Defensive security engineering, threat modeling, cryptographic protocols, security controls, and real-time detection architectures.",
      skills: [
        {
          id: "sec-eng",
          name: "Security Engineering",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Hardening system architectures, defense-in-depth design, secrets isolation, and privacy-by-design guarantees.",
          usedIn: ["VIT-AP Research Lab", "Secure Prompt Scorer"],
          role: "primary"
        },
        {
          id: "net-sec",
          name: "Network Security",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "BGP / OSPF dynamic routing, packet analysis, VLAN isolation, and virtual topology segmentation.",
          usedIn: ["VIT-AP XDR Platform", "Juniper Networks Virtual Lab"],
          role: "primary"
        },
        {
          id: "threat-detect",
          name: "Threat Detection",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Real-time security telemetry ingestion, anomalous event classification, and automated correlation rules.",
          usedIn: ["VIT-AP XDR Platform", "FastAPI/Kafka Ingest"],
          role: "primary"
        },
        {
          id: "secure-app-dev",
          name: "Secure Application Development",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Allowlist input sanitization, MIME/size boundary validation, and secure LLM gateway enforcement (~95% attack surface reduction).",
          usedIn: ["Secure Prompt Scorer", "E-Commerce System"],
          role: "primary"
        },
        {
          id: "cryptography",
          name: "Cryptography",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Number theory from first principles (Extended Euclidean modular inverses) and production 2048-bit RSA-OAEP with SHA-256 padding.",
          usedIn: ["RSA Implementation", "TLS 1.3 Integrations"],
          role: "primary"
        },
        {
          id: "owasp",
          name: "OWASP",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Mitigating web and API security vulnerabilities, injection defense, broken access control prevention, and data exposure protection.",
          usedIn: ["Prompt Scorer", "REST API Development"],
          role: "primary"
        },
        {
          id: "mitre-attck",
          name: "MITRE ATT&CK",
          category: "cybersecurity",
          type: "CONCEPT",
          context: "Mapping telemetry events to adversary tactics and techniques for automated SOAR playbook escalation.",
          usedIn: ["VIT-AP XDR Platform", "SOAR Workflows"],
          role: "primary"
        },
        {
          id: "wireshark",
          name: "Wireshark",
          category: "cybersecurity",
          type: "TOOL",
          context: "Deep packet inspection, network protocol decoding, and transport flow analysis.",
          usedIn: ["Network Protocol Labs", "Traffic Analysis"],
          role: "supporting"
        },
        {
          id: "nmap",
          name: "Nmap",
          category: "cybersecurity",
          type: "TOOL",
          context: "Network discovery, port scanning, service enumeration, and host reachability verification.",
          usedIn: ["Network Security Audits", "Lab Topology Verification"],
          role: "supporting"
        },
        {
          id: "burp-suite",
          name: "Burp Suite",
          category: "cybersecurity",
          type: "TOOL",
          context: "HTTP proxy analysis, web application request interception, and API vulnerability testing.",
          usedIn: ["Web Security Testing", "Input Boundary Analysis"],
          role: "supporting"
        }
      ]
    },
    {
      id: "backend",
      order: "03",
      title: "BACKEND",
      subtitle: "High-Throughput Asynchronous Infrastructure",
      filterCategory: "BACKEND",
      description: "Distributed, asynchronous backend services, high-speed log indexing, in-memory caching, and event stream pipelines.",
      skills: [
        {
          id: "fastapi",
          name: "FastAPI",
          category: "backend",
          type: "FRAMEWORK",
          context: "Asynchronous, high-concurrency Python backend powering non-blocking telemetry ingestion and sub-500ms API endpoints.",
          usedIn: ["VIT-AP XDR Platform", "Machine Learning APIs"],
          role: "primary"
        },
        {
          id: "nodejs",
          name: "Node.js",
          category: "backend",
          type: "FRAMEWORK",
          context: "Event-driven runtime for server-side JavaScript, asynchronous gateway services, and REST API microservices.",
          usedIn: ["E-Commerce Price Prediction", "MotionCut Internship"],
          role: "secondary"
        },
        {
          id: "express",
          name: "Express",
          category: "backend",
          type: "FRAMEWORK",
          context: "Lightweight routing middleware, request sanitization, and REST API controllers.",
          usedIn: ["E-Commerce Price Prediction"],
          role: "secondary"
        },
        {
          id: "rest-apis",
          name: "REST APIs",
          category: "backend",
          type: "CONCEPT",
          context: "Standardized HTTP API architecture, JSON serialization, OpenAPI/Swagger specifications, and secure CORS/auth headers.",
          usedIn: ["XDR Platform", "Prompt Scorer", "E-Commerce System"],
          role: "primary"
        },
        {
          id: "redis",
          name: "Redis",
          category: "backend",
          type: "CACHE",
          context: "In-memory key-value caching, stateful session integrity, and ephemeral token storage under high-volume throughput.",
          usedIn: ["VIT-AP XDR Platform", "Rate Limiting Layers"],
          role: "primary"
        },
        {
          id: "elasticsearch",
          name: "Elasticsearch",
          category: "backend",
          type: "SEARCH / LOG DATA",
          context: "Distributed document cluster for high-speed security log aggregation, inverted index search, and paginated incident queries.",
          usedIn: ["VIT-AP XDR Platform", "Security Event Logging"],
          role: "primary"
        },
        {
          id: "apache-kafka",
          name: "Apache Kafka",
          category: "backend",
          type: "FRAMEWORK",
          context: "High-throughput distributed event streaming for ingesting real-time security telemetry across distributed sources.",
          usedIn: ["VIT-AP Agentic SOC Platform", "Telemetry Queueing"],
          role: "primary"
        }
      ]
    },
    {
      id: "machine-learning",
      order: "04",
      title: "MACHINE LEARNING",
      subtitle: "Applied Predictive Modeling & Classifiers",
      filterCategory: "ML",
      description: "Data-driven statistical modeling, multi-model evaluation, regression benchmarks, and ensemble classifiers.",
      skills: [
        {
          id: "scikit-learn",
          name: "Scikit-learn",
          category: "machine-learning",
          type: "FRAMEWORK",
          context: "Model training, pipeline preprocessing, feature scaling, cross-validation, and performance evaluation metrics.",
          usedIn: ["Crop Recommendation ML (88% Acc)", "Price Prediction System"],
          role: "primary"
        },
        {
          id: "pandas",
          name: "Pandas",
          category: "machine-learning",
          type: "FRAMEWORK",
          context: "Dataframe manipulation, dataset cleaning, outlier mitigation, and feature matrix preparation.",
          usedIn: ["Crop Recommendation ML", "Price Prediction System (10k records)"],
          role: "primary"
        },
        {
          id: "numpy",
          name: "NumPy",
          category: "machine-learning",
          type: "FRAMEWORK",
          context: "N-dimensional array computation, vectorized linear algebra operations, and mathematical transforms.",
          usedIn: ["ML Data Pipelines", "Cryptographic Number Theory"],
          role: "primary"
        },
        {
          id: "regression",
          name: "Regression",
          category: "machine-learning",
          type: "CONCEPT",
          context: "Continuous price forecasting models delivering ₹45 MAE on 10,000+ product records with sub-500ms latency.",
          usedIn: ["E-Commerce Price Prediction"],
          role: "secondary"
        },
        {
          id: "classification",
          name: "Classification",
          category: "machine-learning",
          type: "CONCEPT",
          context: "Ensemble multi-class decision trees (Random Forest) optimizing multi-variable agronomic decisions.",
          usedIn: ["Crop Recommendation ML (+12% vs Baseline)"],
          role: "secondary"
        },
        {
          id: "model-evaluation",
          name: "Model Evaluation",
          category: "machine-learning",
          type: "CONCEPT",
          context: "K-fold cross-validation, confusion matrix analysis, precision/recall scoring, and MAE/RMSE residual benchmarking.",
          usedIn: ["Crop ML Validation", "Price Prediction Error Bounds"],
          role: "secondary"
        }
      ]
    },
    {
      id: "databases",
      order: "05",
      title: "DATA SYSTEMS",
      subtitle: "Relational, Document & Cache Stores",
      filterCategory: "BACKEND",
      description: "Structured relational databases, document-oriented persistence, caching tiers, and full-text search clusters.",
      skills: [
        {
          id: "postgresql",
          name: "PostgreSQL",
          category: "databases",
          type: "DATABASE",
          context: "Relational database management, ACID-compliant schema design, foreign key constraints, and indexed queries.",
          usedIn: ["Backend Systems", "Incident Ticketing Persistence"],
          role: "secondary"
        },
        {
          id: "mongodb",
          name: "MongoDB",
          category: "databases",
          type: "DATABASE",
          context: "NoSQL document store, JSON schema aggregation pipelines, and high-flexibility catalog storage.",
          usedIn: ["E-Commerce Price Prediction", "MotionCut Internship"],
          role: "secondary"
        },
        {
          id: "redis-db",
          name: "Redis",
          category: "databases",
          type: "CACHE",
          context: "In-memory caching layer for lightning-fast state retrieval and session token lifecycle management.",
          usedIn: ["VIT-AP XDR Platform", "Telemetry Processing Cache"],
          role: "primary"
        },
        {
          id: "elasticsearch-db",
          name: "Elasticsearch",
          category: "databases",
          type: "SEARCH / LOG DATA",
          context: "Distributed cluster for rapid log ingestion, full-text search indexing, and security event aggregation.",
          usedIn: ["VIT-AP XDR Platform", "Security Telemetry Search"],
          role: "primary"
        }
      ]
    },
    {
      id: "infrastructure",
      order: "06",
      title: "INFRASTRUCTURE",
      subtitle: "Containerization & Operating Environments",
      filterCategory: "INFRASTRUCTURE",
      description: "Linux systems administration, container runtimes, version control workflows, and reproducible environments.",
      skills: [
        {
          id: "docker",
          name: "Docker",
          category: "infrastructure",
          type: "TOOL",
          context: "Multi-container application orchestration, Dockerfile build stages, and isolated service deployment environments.",
          usedIn: ["XDR Component Sandboxing", "Full-Stack Deployment"],
          role: "primary"
        },
        {
          id: "linux",
          name: "Linux",
          category: "infrastructure",
          type: "TOOL",
          context: "Command-line administration, shell scripting, process management, file permissions, and network interface configuration.",
          usedIn: ["VIT-AP Research Lab", "Security Tooling", "Virtual Lab Topologies"],
          role: "primary"
        },
        {
          id: "git",
          name: "Git",
          category: "infrastructure",
          type: "TOOL",
          context: "Distributed version control, branch management, rebase workflows, and repository lifecycle tracking.",
          usedIn: ["All Projects", "Research Codebases"],
          role: "primary"
        },
        {
          id: "github",
          name: "GitHub",
          category: "infrastructure",
          type: "TOOL",
          context: "Collaborative code reviews, release tags, repository documentation, and open-source project management.",
          usedIn: ["4 Verified Public Repositories"],
          role: "primary"
        }
      ]
    },
    {
      id: "tools",
      order: "07",
      title: "TOOLS",
      subtitle: "Developer & Security Utilities",
      filterCategory: "ALL",
      description: "Essential development environments, API testing suites, packet analyzers, and vulnerability testing tools.",
      skills: [
        {
          id: "vs-code",
          name: "VS Code",
          category: "tools",
          type: "TOOL",
          context: "Primary technical IDE configured for TypeScript, Python, C/C++, debugging breakpoints, and Git integration.",
          usedIn: ["Daily Development", "Research Engineering"],
          role: "primary"
        },
        {
          id: "postman",
          name: "Postman",
          category: "tools",
          type: "TOOL",
          context: "REST API contract testing, payload mocking, authentication header inspection, and endpoint latency verification.",
          usedIn: ["XDR API Testing", "E-Commerce Gateway Validation"],
          role: "secondary"
        },
        {
          id: "wireshark-tool",
          name: "Wireshark",
          category: "tools",
          type: "TOOL",
          context: "Packet flow analysis, TCP/UDP stream reassembly, and protocol anomaly investigation.",
          usedIn: ["Network Security Labs", "Protocol Verification"],
          role: "secondary"
        },
        {
          id: "nmap-tool",
          name: "Nmap",
          category: "tools",
          type: "TOOL",
          context: "Host discovery, port scanning, and service version enumeration across lab network nodes.",
          usedIn: ["Lab Topology Auditing"],
          role: "secondary"
        },
        {
          id: "burp-tool",
          name: "Burp Suite",
          category: "tools",
          type: "TOOL",
          context: "Intercepting proxy for testing web input sanitization boundaries and API security controls.",
          usedIn: ["Web App Security Audits"],
          role: "secondary"
        }
      ]
    }
  ],

  securityStackFlow: [
    { step: "01", name: "APPLICATION", desc: "User input sanitization, allowlist regex boundaries, and secrets isolation" },
    { step: "02", name: "SECURITY CONTROLS", desc: "Layered defense-in-depth, OWASP mitigations, and TLS 1.3 cryptographic protection" },
    { step: "03", name: "NETWORK", desc: "Virtual network segmentation, BGP/OSPF dynamic routing, and packet filtering" },
    { step: "04", name: "TELEMETRY", desc: "High-throughput asynchronous streaming of host, auth, and network events" },
    { step: "05", name: "DETECTION", desc: "Automated correlation rules, anomaly classification, and MITRE ATT&CK mapping" },
    { step: "06", name: "RESPONSE", desc: "Automated ticketing (Jira/ServiceNow) and remote browser isolation containment (Kasm RBI)" }
  ],

  mlFlow: [
    { step: "01", name: "DATA", desc: "Multi-dimensional agronomic & e-commerce transaction records" },
    { step: "02", name: "PREPROCESSING", desc: "Feature scaling, outlier mitigation, and Pandas matrix preparation" },
    { step: "03", name: "MODEL", desc: "Ensemble Random Forest classifiers and linear/polynomial regression" },
    { step: "04", name: "EVALUATION", desc: "K-fold cross-validation, confusion matrix analysis, and residual error bounds" },
    { step: "05", name: "PREDICTION", desc: "High-accuracy decision support (88% acc) and real-time price forecasts (<500ms)" }
  ],

  ecosystem: {
    title: "TECHNICAL ECOSYSTEM ARCHITECTURE",
    subtitle: "Cybersecurity & Software Development",
    overview: "My technical capabilities converge on building secure, resilient, and intelligent computing systems where cybersecurity principles inform every architectural decision across backend, machine learning, and networking.",
    coreHub: {
      id: "cybersecurity-hub",
      title: "CYBERSECURITY",
      subtitle: "Defensive Anchor",
      category: "security",
      coreTech: ["Threat Modeling", "MITRE ATT&CK", "OWASP", "Cryptography", "Security Engineering"]
    },
    pillars: [
      {
        id: "backend-pillar",
        title: "BACKEND",
        subtitle: "High-Throughput Systems",
        category: "backend",
        coreTech: ["FastAPI", "Redis", "Elasticsearch", "Kafka", "Node.js"]
      },
      {
        id: "ml-pillar",
        title: "ML / AI",
        subtitle: "Intelligent Analytics",
        category: "ml",
        coreTech: ["Scikit-learn", "Pandas", "NumPy", "Classification", "Regression"]
      },
      {
        id: "network-pillar",
        title: "NETWORKING",
        subtitle: "Protocol Topology",
        category: "network",
        coreTech: ["BGP / OSPF", "Wireshark", "Nmap", "Packet Routing", "VLANs"]
      }
    ],
    anchor: {
      id: "secure-systems-anchor",
      title: "SECURE SYSTEMS",
      subtitle: "Empirical Defensible Outcome",
      category: "outcome",
      coreTech: ["Agentic SOC Platform", "Hardened Prompt Scorer (~95% Block)", "Production RSA-OAEP", "Fast Forecasting (<500ms)"]
    }
  }
};
