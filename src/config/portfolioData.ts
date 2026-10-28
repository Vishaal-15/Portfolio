/**
 * Centralized Portfolio Data Configuration
 * Strictly verified professional identity & technical metadata for Vishaal A K
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
}

export interface SecurityAttribute {
  label: string;
  status: string;
}

export interface ExperienceMetricData {
  value: string;
  label: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  order: string;
  role: string;
  organization: string;
  department?: string;
  period: string;
  year: string;
  status: 'CURRENT' | 'COMPLETED';
  isPrimary?: boolean;
  recruiterSummary?: {
    headline: string;
    highlight: string;
    tags: string[];
  };
  summary: string;
  bullets: string[];
  stack: string[];
  metric?: ExperienceMetricData;
  architectureType?: 'xdr' | 'network' | 'none';
}

export interface ExperienceConfig {
  command: string;
  loadingText: string;
  recordsCount: string;
  verifiedStatus: string;
  filterCommand: string;
  items: ExperienceItem[];
  socStatusItems: {
    label: string;
    status: string;
    description: string;
  }[];
}

export interface AcademicCoursework {
  title: string;
  category: string;
  relevance: string;
}

export interface AcademicProfileConfig {
  applicantStatus: string;
  targetDegree: string;
  statementHeadline: string;
  researchFocusSummary: string;
  coursework: AcademicCoursework[];
  cvUrl: string;
  cvLabel: string;
}

export interface PortfolioConfig {
  name: string;
  brand: string;
  title: string;
  secondaryTitle: string;
  currentPosition: string;
  roleDescription: string;
  institution: string;
  degree: string;
  currentYear: string;
  location: string;
  researchLab: string;
  resumePath: string;
  systemHost: string;
  terminalUser: string;
  workingDirectory: string;
  navItems: NavItem[];
  technicalFocus: string[];
  securityTags: string[];
  academicProfile: AcademicProfileConfig;
  systemMeta: {
    nodeId: string;
    status: string;
    mode: string;
    environment: string;
    clearance: string;
  };
  about: {
    command: string;
    paragraphs: string[];
    philosophyCommand: string;
    philosophyQuote: string;
    capabilitiesCommand: string;
    capabilities: CapabilityItem[];
    securityAttributes: SecurityAttribute[];
    pwdCommand: string;
    pwdOutput: string;
  };
  experience: ExperienceConfig;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    terminalUser: string;
    terminalHost: string;
    description: string;
    ctaText: string;
    copyright: string;
    tagline: string;
  };
}

export const PORTFOLIO_DATA: PortfolioConfig = {
  name: "Vishaal A K",
  brand: "VISHAAL AK",
  title: "Cybersecurity Researcher",
  secondaryTitle: "Software Developer",
  currentPosition: "Cybersecurity Research Intern",
  roleDescription: "Building secure systems, real-time threat detection platforms, and intelligent security solutions.",
  institution: "Kumaraguru College of Technology, Coimbatore",
  degree: "B.E. Computer Science and Engineering",
  currentYear: "Fourth-Year Undergraduate (2021 — 2025)",
  location: "Coimbatore, India",
  researchLab: "Centre of Excellence in Cyber Security, VIT-AP University",
  resumePath: "/resume.pdf",
  systemHost: "research-workstation",
  terminalUser: "vishaal",
  workingDirectory: "/academic/research/systems",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],
  technicalFocus: [
    "DISTRIBUTED SYSTEMS",
    "CYBERSECURITY",
    "MACHINE LEARNING",
    "BACKEND ARCHITECTURES",
    "NETWORK PROTOCOLS"
  ],
  securityTags: [
    "Systems Security",
    "Real-time Telemetry",
    "Applied Machine Learning",
    "Cryptographic Protocols"
  ],
  academicProfile: {
    applicantStatus: "Cybersecurity & Software Developer",
    targetDegree: "Master of Science (M.S.) in Computer Science / Cybersecurity",
    statementHeadline: "Engineering Defensible, Secure Systems & Intelligent Anomaly Detection",
    researchFocusSummary: "Bridging rigorous academic research with robust software engineering—investigating high-throughput security event pipelines, first-principles cryptography, and adversarial robustness in generative models.",
    cvUrl: "/resume.pdf",
    cvLabel: "Download Academic CV (PDF)",
    coursework: [
      {
        title: "Operating Systems & Concurrency",
        category: "Core Systems",
        relevance: "Process management, memory virtualization, IPC, and POSIX threads"
      },
      {
        title: "Computer Networks & Protocols",
        category: "Networks",
        relevance: "BGP, OSPF, TCP/IP stack internals, socket programming, and packet routing"
      },
      {
        title: "Applied Cryptography & Network Security",
        category: "Security",
        relevance: "Asymmetric ciphers, RSA-OAEP, modular arithmetic, and TLS protocols"
      },
      {
        title: "Data Structures & Algorithm Design",
        category: "Theory & Algorithms",
        relevance: "Time/space complexity, graph traversal, and dynamic programming"
      },
      {
        title: "Machine Learning & Statistical Modeling",
        category: "Machine Learning",
        relevance: "Supervised classification, regression modeling, and cross-validation"
      },
      {
        title: "Database Management & Distributed Data",
        category: "Systems & Data",
        relevance: "Relational schemas, indexing strategies, and asynchronous queues"
      }
    ]
  },
  systemMeta: {
    nodeId: "VIT-AP CoE / KCT",
    status: "PORTFOLIO",
    mode: "CYBERSECURITY & DEV",
    environment: "PRODUCTION & RESEARCH",
    clearance: "ACTIVE"
  },
  about: {
    command: "Academic Dossier",
    paragraphs: [
      "I am a fourth-year Computer Science and Engineering undergraduate at Kumaraguru College of Technology, Coimbatore, dedicated to cybersecurity, distributed backends, machine learning, and security engineering.",
      "Currently, I am a Security Research Intern at the Centre of Excellence in Cyber Security, VIT-AP University. My work centers on real-time security telemetry ingestion, Agentic SOC platform architectures, and automated incident triage.",
      "My work bridges practical software development with applied security research—designing observable backends, validating cryptographic implementations against formal test vectors, and deploying machine learning pipelines with verifiable benchmarks."
    ],
    philosophyCommand: "Research & Engineering Principles",
    philosophyQuote: "I focus on building systems that are not only functional, but mathematically sound, observable, and resilient under adversarial load.",
    capabilitiesCommand: "ls capabilities/",
    capabilities: [
      {
        title: "Cybersecurity",
        slug: "cybersecurity/",
        description: "Security-focused application development, threat modeling, and defensive engineering."
      },
      {
        title: "Machine Learning",
        slug: "machine-learning/",
        description: "Building, evaluating, and applying ML models for intelligent pattern & anomaly detection."
      },
      {
        title: "Backend Development",
        slug: "backend-engineering/",
        description: "Developing high-performance APIs, data pipelines, and real-time processing backends."
      },
      {
        title: "Detection Systems",
        slug: "detection-systems/",
        description: "Working with security telemetry, event log streaming, and automated detection workflows."
      },
      {
        title: "Secure Systems",
        slug: "secure-systems/",
        description: "Engineering fault-tolerant, hardened software architectures with minimal attack surface."
      },
      {
        title: "Network Security",
        slug: "network-security/",
        description: "Analyzing network traffic, inspecting protocol layers, and implementing defense strategies."
      }
    ],
    securityAttributes: [
      { label: "Systems Thinking", status: "Core" },
      { label: "Defensive Engineering", status: "Core" },
      { label: "Applied Research", status: "Focus" },
      { label: "Continuous Learning", status: "Ongoing" }
    ],
    pwdCommand: "pwd",
    pwdOutput: "/home/vishaal/security-research"
  },
  experience: {
    command: "cat experience.log",
    loadingText: "Loading professional experience...",
    recordsCount: "[01] VERIFIED RECORD FOUND",
    verifiedStatus: "[STATUS] VERIFIED",
    filterCommand: "grep -i 'security' experience.log",
    socStatusItems: [
      { label: "TELEMETRY", status: "ACTIVE", description: "Real-time endpoint event ingestion" },
      { label: "INDEXING", status: "ACTIVE", description: "Elasticsearch high-speed log tier" },
      { label: "DETECTION", status: "ACTIVE", description: "Rule & anomaly analysis engine" },
      { label: "RESPONSE", status: "READY", description: "SOAR orchestrator & ticketing" }
    ],
    items: [
      {
        id: "vitap-xdr",
        order: "01",
        role: "SECURITY RESEARCH INTERN",
        organization: "VIT-AP UNIVERSITY",
        department: "Centre of Excellence in Cyber Security",
        period: "JUN 2026 — PRESENT",
        year: "2026",
        status: "CURRENT",
        isPrimary: true,
        recruiterSummary: {
          headline: "AGENTIC SOC PLATFORM · REAL-TIME TELEMETRY",
          highlight: "AUTONOMOUS INCIDENT TRIAGE · MITRE ATT&CK · SOAR ORCHESTRATION",
          tags: ["FastAPI", "Redis", "Elasticsearch", "Apache Kafka", "MITRE ATT&CK", "Jira", "ServiceNow", "Kasm RBI"]
        },
        summary: "I engineered an Agentic SOC platform featuring real-time security telemetry streaming, automated incident triage, and MITRE ATT&CK taxonomy alignment.",
        bullets: [
          "I engineered an Agentic SOC platform for real-time security telemetry ingestion, automated alert triage, and incident containment.",
          "I developed an asynchronous FastAPI backend and Redis caching layer coupled with Elasticsearch for high-speed log indexing and paginated event search.",
          "I designed a resilient asynchronous event queueing pipeline using Apache Kafka and Elasticsearch to support high-throughput telemetry streams.",
          "I integrated an automated response orchestrator featuring MITRE ATT&CK technique mapping, SLA-enforced ticketing across Jira and ServiceNow, and browser session isolation via Kasm RBI."
        ],
        stack: [
          "FastAPI",
          "Python",
          "Redis",
          "Elasticsearch",
          "Apache Kafka",
          "MITRE ATT&CK",
          "Jira",
          "ServiceNow",
          "Kasm RBI"
        ],
        metric: {
          value: "REAL-TIME",
          label: "AGENTIC SOC",
          context: "TELEMETRY PIPELINE"
        },
        architectureType: "xdr"
      }
    ]
  },
  contact: {
    email: "vishaalanand1512@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishaal-ak/",
    github: "https://github.com/Vishaal-15",
    terminalUser: "vishaal",
    terminalHost: "sec-lab",
    description: "Whether you have a question, a project proposal, or just want to discuss the latest in cybersecurity and ethical hacking, my inbox is open. I'll get back to you as soon as possible.",
    ctaText: "LET'S CONNECT",
    copyright: "© 2026 Vishaal A K. All rights reserved.",
    tagline: "Cybersecurity • Software Engineering • Machine Learning"
  }
};
