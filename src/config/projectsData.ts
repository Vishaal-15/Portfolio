/**
 * Centralized Projects Configuration
 * Strictly verified repository data, security architectures, and metrics for Vishaal A K
 */

export interface ProjectMetric {
  value: string;
  label: string;
  context: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  architecture: string[];
  securityConsiderations: string[];
  technologies: string[];
  results: string[];
  githubUrl: string;
}

export interface ProjectItem {
  id: string;
  order: string;
  title: string;
  slug: string;
  category: 'security' | 'crypto' | 'ml' | 'backend';
  categories: Array<'security' | 'crypto' | 'ml' | 'backend'>;
  tier: 'featured' | 'standard';
  shortDescription: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
}

export interface ProjectsConfig {
  command: string;
  directoryOutput: Array<{
    permissions: string;
    name: string;
    description: string;
  }>;
  categories: Array<{
    id: 'all' | 'security' | 'ml' | 'backend' | 'crypto';
    label: string;
    count: number;
  }>;
  projects: ProjectItem[];
}

export const PROJECTS_DATA: ProjectsConfig = {
  command: "ls projects/",
  directoryOutput: [
    { permissions: "drwxr-xr-x", name: "agentic-soc/", description: "Agentic SOC Platform (VIT-AP Research)" },
    { permissions: "drwxr-xr-x", name: "secure-prompt-scorer/", description: "Prompt-Based Scorer with 7 Security Controls" },
    { permissions: "drwxr-xr-x", name: "rsa-implementation/", description: "Raw Number Theory & 2048-Bit RSA-OAEP" },
    { permissions: "drwxr-xr-x", name: "ecommerce-price-prediction/", description: "Full-Stack ML Forecasting Engine (<500ms)" },
    { permissions: "drwxr-xr-x", name: "crop-recommendation-ml/", description: "Multi-Model Crop Classifier (88% Accuracy)" }
  ],
  categories: [
    { id: 'all', label: 'ALL', count: 4 },
    { id: 'security', label: 'SECURITY', count: 2 },
    { id: 'ml', label: 'ML', count: 2 },
    { id: 'backend', label: 'BACKEND', count: 2 },
    { id: 'crypto', label: 'CRYPTO', count: 1 }
  ],
  projects: [
    {
      id: "secure-prompt-scorer",
      order: "01",
      title: "Secure Prompt-Based Scoring Application",
      slug: "secure-prompt-scorer",
      category: "security",
      categories: ["security", "backend"],
      tier: "featured",
      shortDescription: "A security-focused evaluation platform engineered with privacy-by-design principles and a hardened 7-layer validation pipeline to defend against prompt injection and malicious payload delivery.",
      technologies: [
        "Python",
        "Streamlit",
        "OpenAI API",
        "Input Sanitization",
        "Secrets Management",
        "Defense-in-Depth"
      ],
      metrics: [
        {
          value: "~95%",
          label: "ATTACK SURFACE REDUCTION",
          context: "MALICIOUS INPUTS BLOCKED"
        },
        {
          value: "7",
          label: "SECURITY CONTROLS",
          context: "DEFENSE-IN-DEPTH TIERS"
        }
      ],
      githubUrl: "https://github.com/Vishaal-15/prompt-accuracy-scorer",
      caseStudy: {
        overview: "I developed a secure Prompt-Based Scoring application using Python, Streamlit, and the OpenAI API. The system is designed from the ground up using privacy-by-design principles, establishing multi-stage sanitization and validation barriers between untrusted user inputs and generative LLM backends.",
        problem: "Unsanitized user inputs fed into generative models are susceptible to prompt injection, arbitrary command bypasses, denial of service through oversized payloads, and inadvertent leakage of sensitive runtime credentials.",
        approach: "I reduced the application's attack surface through allowlist-based input filtering, successfully blocking approximately 95% of malicious test inputs. I implemented 7 distinct security controls directly into the request-response lifecycle.",
        architecture: [
          "Client Request Ingestion: Streamlit user interface with client-side boundary checking",
          "Layer 1: Secrets Management via isolated environment runtime variable injection",
          "Layer 2: Allowlist-based Input Filtering against unauthorized characters and prompt overrides",
          "Layer 3 & 4: Strict MIME-type & File-Size validation to prevent malicious upload vectors",
          "Layer 5: Secure Execution Layer interfacing with OpenAI API over TLS 1.3",
          "Layer 6: LLM Output Validation to strip malicious execution artifacts and leakage",
          "Layer 7: Secure error handling, localized data minimization, and strict HTTPS enforcement"
        ],
        securityConsiderations: [
          "Secrets Management: Zero hardcoded API keys; dynamic runtime environment isolation",
          "Input Validation: Strict allowlist regular expressions prohibiting prompt override characters",
          "MIME-Type & Size Validation: Rigorous payload boundaries preventing buffer and parser abuse",
          "LLM Output Validation: Inspection of model responses before rendering to client",
          "Secure Error Handling: Masked stack traces preventing application fingerprinting",
          "Data Minimization: Transient session storage without long-term storage of user prompt data",
          "HTTPS Enforcement: Transport layer security for all external API endpoints"
        ],
        technologies: ["Python", "Streamlit", "OpenAI API", "Python RegEx", "Cryptography Modules", "HTTPS / TLS"],
        results: [
          "Blocked ~95% of malicious test inputs during adversarial validation suites",
          "Implemented 7 distinct security controls across the complete data lifecycle",
          "Guaranteed zero credential exposure through isolated secrets management",
          "Enforced strict privacy-by-design standards across all scoring sessions"
        ],
        githubUrl: "https://github.com/Vishaal-15/prompt-accuracy-scorer"
      }
    },
    {
      id: "rsa-implementation",
      order: "02",
      title: "RSA Encryption Implementation",
      slug: "rsa-implementation",
      category: "crypto",
      categories: ["crypto", "security"],
      tier: "featured",
      shortDescription: "A comprehensive dual-tier cryptographic implementation contrasting first-principles number theory algorithms with production-grade 2048-bit RSA-OAEP semantic security.",
      technologies: [
        "Python",
        "PyCryptodome",
        "RSA-OAEP",
        "Number Theory",
        "Modular Arithmetic",
        "Key Derivation"
      ],
      metrics: [
        {
          value: "2048-BIT",
          label: "RSA-OAEP PRODUCTION",
          context: "SEMANTIC SECURITY"
        },
        {
          value: "100+",
          label: "TEST VECTORS",
          context: "VALIDATED TEST CASES"
        }
      ],
      githubUrl: "https://github.com/Vishaal-15/RSA-implementation",
      caseStudy: {
        overview: "I engineered RSA cryptography through two distinct implementations: a foundational raw RSA built from mathematical first principles, and a production-grade 2048-bit RSA-OAEP implementation using PyCryptodome to deliver semantic security against chosen-plaintext attacks.",
        problem: "Textbook RSA encryption without optimal asymmetric encryption padding (OAEP) is deterministic and vulnerable to mathematical attacks such as Coppersmith's attack, chosen-plaintext attacks (CPA), and malleability exploits.",
        approach: "I built Implementation A (from scratch) with manual prime generation, greatest common divisor calculations, modular inverse using the Extended Euclidean Algorithm, and key derivation to deeply understand the underlying number theory. I then engineered Implementation B (production grade) deploying 2048-bit RSA with OAEP padding via PyCryptodome.",
        architecture: [
          "Implementation A (From Scratch): Prime candidate generation -> Miller-Rabin / Fermat primality testing -> Modulus n = p*q computation -> Totient φ(n) -> Modular Inverse derivation (d ≡ e⁻¹ mod φ(n))",
          "Implementation B (Production): 2048-bit cryptographic key generation -> Optimal Asymmetric Encryption Padding (OAEP) with SHA-256 hashing -> Ciphertext formatting and secure signature verification",
          "Cryptographic Verification Suite: Automated validation against standard NIST/RFC test vectors across 100+ test cases"
        ],
        securityConsiderations: [
          "Semantic Security: Deployed RSA-OAEP padding to prevent deterministic ciphertext analysis",
          "Key Length Hardening: Utilized standard 2048-bit key modulus for cryptographic longevity",
          "Side-Channel Resilience: PyCryptodome constant-time arithmetic primitives in production tier",
          "Mathematical Verification: Validated key derivation against Extended Euclidean theorem"
        ],
        technologies: ["Python", "PyCryptodome", "Math / Number Theory", "OAEP Padding", "SHA-256", "PyTest"],
        results: [
          "Constructed raw RSA from scratch to demonstrate complete mathematical understanding",
          "Engineered 2048-bit RSA-OAEP providing provable semantic security",
          "Validated cryptographic execution across 100+ standard test cases and edge vectors",
          "Produced reusable, well-documented cryptographic modules"
        ],
        githubUrl: "https://github.com/Vishaal-15/RSA-implementation"
      }
    },
    {
      id: "ecommerce-price-prediction",
      order: "03",
      title: "E-Commerce Price Prediction System",
      slug: "ecommerce-price-prediction",
      category: "ml",
      categories: ["ml", "backend"],
      tier: "standard",
      shortDescription: "A full-stack predictive application integrating Python regression modeling with an Express REST API and React interface, serving real-time price forecasts under 500ms.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Python",
        "Scikit-learn",
        "REST API"
      ],
      metrics: [
        {
          value: "10,000+",
          label: "RECORDS",
          context: "TRAINING DATASET"
        },
        {
          value: "<500ms",
          label: "LATENCY",
          context: "RESPONSE TIME"
        },
        {
          value: "₹45",
          label: "MEAN ABSOLUTE ERROR",
          context: "PRICE ₹100–₹5,000"
        }
      ],
      githubUrl: "https://github.com/Vishaal-15/Ecommerce-Price-Prediction",
      caseStudy: {
        overview: "I architected a full-stack price prediction application that integrates a Python machine learning regression model with an Express REST API backend and a responsive React frontend interface.",
        problem: "E-commerce retailers face volatile market dynamics and require accurate, low-latency price estimates across multi-attribute product catalogs without heavy computation delays.",
        approach: "I trained a high-accuracy regression model on over 10,000 product records, wrapped the inference engine in a Python microservice, and built an Express middleware tier to communicate with a responsive React dashboard, achieving sub-500ms response latency.",
        architecture: [
          "Frontend Tier: React single-page UI for dynamic input of product specifications",
          "API Gateway: Node.js & Express REST endpoints managing CORS, payload validation, and routing",
          "ML Inference Engine: Python regression service executing real-time feature transformation and price prediction",
          "Data Pipeline: Preprocessing and standardization pipeline trained on 10,000+ records"
        ],
        securityConsiderations: [
          "Input Sanitization: Validated numerical bounds on all API endpoints",
          "Error Masking: Express centralized error handling to prevent internal stack exposure",
          "Stateless Communication: Secure JSON payload exchange across decoupled services"
        ],
        technologies: ["React", "Node.js", "Express", "Python", "Scikit-learn", "Pandas", "REST API"],
        results: [
          "Achieved a Mean Absolute Error (MAE) of ₹45 across a price range of ₹100–₹5,000",
          "Delivered sub-500ms end-to-end response latency from UI input to prediction output",
          "Successfully trained and validated on a corpus of 10,000+ product records"
        ],
        githubUrl: "https://github.com/Vishaal-15/Ecommerce-Price-Prediction"
      }
    },
    {
      id: "crop-recommendation-ml",
      order: "04",
      title: "Intelligent Crop Recommendation System",
      slug: "crop-recommendation-ml",
      category: "ml",
      categories: ["ml"],
      tier: "standard",
      shortDescription: "An agricultural decision-support classification model optimizing crop selection based on soil nutrients and meteorological parameters, delivering 88% prediction accuracy.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Random Forest",
        "Cross-Validation"
      ],
      metrics: [
        {
          value: "88%",
          label: "ACCURACY",
          context: "TEST SET PREDICTION"
        },
        {
          value: "+12%",
          label: "IMPROVEMENT",
          context: "OVER BASELINE"
        }
      ],
      githubUrl: "https://github.com/Vishaal-15/Crop-Recommendation-ML",
      caseStudy: {
        overview: "I built a machine learning classification model to recommend optimal crops based on soil nutrients (Nitrogen, Phosphorus, Potassium) and environmental conditions (temperature, humidity, pH, rainfall).",
        problem: "Agricultural yields suffer significantly when crops are chosen without empirical alignment to underlying soil chemistry and regional weather parameters.",
        approach: "I analyzed multi-dimensional agronomic datasets, performed extensive feature engineering and normalization, and benchmarked Logistic Regression, Decision Tree, and Random Forest models using cross-validation to select the optimal classifier.",
        architecture: [
          "Feature Ingestion Tier: Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, pH, and Rainfall",
          "Preprocessing & Scaling: Standard scaling and outlier isolation via Pandas and NumPy",
          "Model Evaluation Matrix: Benchmarked Logistic Regression, Decision Tree, and Random Forest",
          "Final Ensemble Classifier: Cross-validated Random Forest deployment with optimized hyperparameters"
        ],
        securityConsiderations: [
          "Data Integrity: Outlier rejection preventing anomalous input distortion",
          "Deterministic Validation: Seeded cross-validation splits guaranteeing reproducible evaluation"
        ],
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Random Forest"],
        results: [
          "Achieved 88% prediction accuracy on the unseen test dataset",
          "Improved baseline model accuracy by 12% through hyperparameter tuning and model selection",
          "Identified key nutrient-yield correlation thresholds for precision agriculture"
        ],
        githubUrl: "https://github.com/Vishaal-15/Crop-Recommendation-ML"
      }
    }
  ]
};
