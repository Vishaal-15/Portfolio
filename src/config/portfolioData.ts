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
  secondaryTitle: "Software Engineer",
  currentPosition: "Cybersecurity Research Intern",
  roleDescription: "I build secure systems, real-time detection platforms, and intelligent security solutions.",
  institution: "Kumaraguru College of Technology, Coimbatore",
  degree: "B.E. Computer Science and Engineering",
  currentYear: "Fourth-Year Student",
  location: "Coimbatore, India",
  researchLab: "Centre of Excellence in Cyber Security, VIT-AP University",
  resumePath: "/resume.pdf",
  systemHost: "sec-lab",
  terminalUser: "vishaal",
  workingDirectory: "/home/vishaal/security-research",
  navItems: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "RESEARCH", href: "#research" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" }
  ],
  technicalFocus: [
    "CYBERSECURITY",
    "SECURE SYSTEMS",
    "MACHINE LEARNING",
    "BACKEND ENGINEERING",
    "NETWORK SECURITY"
  ],
  securityTags: [
    "Cybersecurity",
    "Secure Systems",
    "Machine Learning",
    "Real-time Detection"
  ],
  systemMeta: {
    nodeId: "SEC-LAB / PROFILE_01",
    status: "ACTIVE",
    mode: "RESEARCH",
    environment: "SECURE",
    clearance: "OPERATIONAL"
  },
  about: {
    command: "cat about.txt",
    paragraphs: [
      "I am a fourth-year Computer Science and Engineering student at Kumaraguru College of Technology, Coimbatore, specializing in cybersecurity, secure systems, machine learning, and backend development.",
      "I am currently contributing to cybersecurity research at VIT-AP University's Centre of Excellence in Cyber Security, where I focus on real-time detection systems, secure infrastructure, and threat-aware architectures.",
      "My work bridges practical software engineering with applied security research — designing robust backends, deploying detection models, and engineering resilient solutions with security by design."
    ],
    philosophyCommand: "cat philosophy.txt",
    philosophyQuote: "I focus on building systems that are not only functional, but secure, observable, and resilient.",
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
        title: "Backend Engineering",
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
      { label: "SYSTEMS THINKING", status: "ACTIVE" },
      { label: "SECURE ENGINEERING", status: "ACTIVE" },
      { label: "APPLIED RESEARCH", status: "ACTIVE" },
      { label: "CONTINUOUS LEARNING", status: "ACTIVE" }
    ],
    pwdCommand: "pwd",
    pwdOutput: "/home/vishaal/security-research"
  },
  experience: {
    command: "cat experience.log",
    loadingText: "Loading professional experience...",
    recordsCount: "[03] EXPERIENCE RECORDS FOUND",
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
          headline: "XDR PLATFORM · 100,000+ ENDPOINT SCALE TESTING",
          highlight: "REAL-TIME SECURITY TELEMETRY · MITRE ATT&CK · INCIDENT RESPONSE",
          tags: ["FastAPI", "Redis", "Elasticsearch", "Apache Kafka", "MITRE ATT&CK", "Jira", "ServiceNow", "Kasm RBI"]
        },
        summary: "I built a high-performance, production-ready Extended Detection & Response (XDR) platform capable of scale-testing 100,000+ endpoints with real-time security telemetry.",
        bullets: [
          "I built a high-performance, production-ready Extended Detection & Response (XDR) platform capable of scale-testing 100,000+ endpoints.",
          "I engineered an asynchronous FastAPI backend and Redis caching layer coupled with Elasticsearch for high-speed log indexing and paginated search of real-time security telemetry.",
          "I designed a resilient asynchronous backend processing tier using Apache Kafka and Elasticsearch to support high-throughput telemetry pipelines.",
          "I integrated an automated response orchestrator featuring MITRE ATT&CK tactic and technique mapping, SLA-enforced incident ticketing across Jira and ServiceNow, and secure browser session isolation via Kasm RBI."
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
          value: "100,000+",
          label: "ENDPOINTS",
          context: "SCALE TEST"
        },
        architectureType: "xdr"
      },
      {
        id: "juniper-networking",
        order: "02",
        role: "NETWORKING AND CLOUD INTERN",
        organization: "JUNIPER NETWORKS (HPE)",
        department: "Enterprise Networking Lab",
        period: "OCT 2024 — DEC 2024",
        year: "2024",
        status: "COMPLETED",
        isPrimary: false,
        summary: "I analyzed enterprise networking architectures, configured core dynamic routing protocols, and engineered virtual network topologies in simulated environments.",
        bullets: [
          "I analyzed enterprise networking architecture and applied dynamic routing configurations across BGP and OSPF within a simulated environment.",
          "I gained hands-on operational exposure to Linux-based network administration, virtual network topologies, and switch and router management.",
          "I investigated cloud networking fundamentals, hybrid infrastructure interconnects, and scalable protocol implementations."
        ],
        stack: [
          "BGP",
          "OSPF",
          "Linux Networking",
          "Cloud Fundamentals",
          "Virtual Topologies",
          "Switch Management",
          "Router Management",
          "Hybrid Infrastructure"
        ],
        architectureType: "network"
      },
      {
        id: "motioncut-web",
        order: "03",
        role: "WEB DEVELOPMENT INTERN",
        organization: "MOTIONCUT",
        department: "Frontend Engineering Team",
        period: "NOV 2024 — DEC 2024",
        year: "2024",
        status: "COMPLETED",
        isPrimary: false,
        summary: "I optimized frontend UI components, enhanced responsiveness, and achieved significant render performance improvements across production web modules.",
        bullets: [
          "I optimized frontend UI components, improved responsiveness, and streamlined client-side asset delivery across 3 web modules.",
          "I reduced page render time by approximately 30% through modular component refactoring and performance profiling.",
          "I collaborated using agile sprint cycles and maintained rigorous Git/version-control workflows."
        ],
        stack: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Git / GitHub",
          "Agile Sprints",
          "Performance Optimization"
        ],
        metric: {
          value: "~30%",
          label: "IMPROVEMENT",
          context: "PAGE RENDER TIME"
        },
        architectureType: "none"
      }
    ]
  },
  contact: {
    email: "vishaalanand1512@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishaal-ak/",
    github: "https://github.com/Vishaal-15",
    terminalUser: "vishaal",
    terminalHost: "sec-lab",
    description: "I'd love to connect and discuss opportunities, projects, or ideas around cybersecurity and technology.",
    ctaText: "LET'S CONNECT",
    copyright: "© 2026 Vishaal A K. All rights reserved.",
    tagline: "Cybersecurity • Software Engineering • Machine Learning"
  }
};
