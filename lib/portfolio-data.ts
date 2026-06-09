import { CaseStudy, ProofPoint, Service } from "@/types";

export const PROOF_POINTS: ProofPoint[] = [
  {
    metric: "Auth",
    description: "Built JWT authentication flows, refresh token handling, and role-based access control",
    context: "Express.js backend development",
  },
  {
    metric: "PostgreSQL",
    description: "Worked with schema design, indexing, query optimization, and relational modeling",
    context: "Performance-focused backend systems",
  },
  {
    metric: "Redis ",
    description: "Used Redis for caching, rate limiting, session storage, and background processing",
    context: "Improving backend performance",
  },
  {
    metric: "REST APIs",
    description: "Designed and implemented backend APIs with validation, pagination, and error handling",
    context: "Production-style backend architecture",
  },
  {
    metric: "Performance",
    description: "Exploring query optimization, caching strategies, and application profiling",
    context: "Learning performance engineering",
  },
  {
    metric: "System Design",
    description: "Studying scalable backend architectures and distributed system fundamentals",
    context: "Continuous learning and experimentation",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
  id: "saas-backend",
  title: "Multi-Tenant SaaS Backend",
  subtitle: "JWT Authentication, RBAC, PostgreSQL & Redis",
  category: "performance",

  description:
    "Personal backend project focused on tenant isolation, authentication, authorization, and scalable API architecture.",

  problem:
    "How can multiple organizations securely share the same backend infrastructure while keeping their data isolated and access controlled?",

  investigation:
    "Explored JWT authentication, refresh token strategies, role-based access control, PostgreSQL row-level security patterns, and tenant-aware API design.",

  solutionsImplemented: [
    "JWT authentication with refresh token flow",
    "Role-based access control (RBAC)",
    "Tenant-aware middleware",
    "PostgreSQL schema design",
    "Redis caching and rate limiting",
    "Input validation and error handling",
  ],

  results: [],

  keyMetrics: [],

  lessonsLearned: [
    "Authentication becomes complex quickly when multiple organizations are involved",
    "Database design decisions impact future scalability",
    "Authorization should be centralized and consistent",
    "Rate limiting is important even for internal APIs",
  ],

  technologies: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "TypeScript",
  ],
},
  {
  id: "job-processing",
  title: "Background Job Processing Platform",
  subtitle: "BullMQ, Redis Queues & Worker Architecture",
  category: "reliability",

  description:
    "Personal backend project exploring asynchronous processing, queue systems, retries, and worker-based architecture.",

  problem:
    "How can long-running tasks be processed reliably without blocking API requests?",

  investigation:
    "Studied queue systems, retry mechanisms, dead-letter queues, worker scaling, and job failure recovery patterns.",

  solutionsImplemented: [
    "Redis-backed queues using BullMQ",
    "Dedicated worker processes",
    "Retry and backoff strategies",
    "Dead-letter queue exploration",
    "Job monitoring and logging",
    "Task status tracking APIs",
  ],

  results: [],

  keyMetrics: [],

  lessonsLearned: [
    "Background processing improves API responsiveness",
    "Idempotency is critical for retryable jobs",
    "Queue visibility is important for debugging",
    "Failure handling needs to be designed from the beginning",
  ],

  technologies: [
    "Node.js",
    "Express.js",
    "Redis",
    "BullMQ",
    "WebSockets",
  ],
},
  
];

export const SERVICES: Service[] = [
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Build scalable, maintainable backend systems from scratch or expand existing infrastructure.",
    benefits: [
      "RESTful and GraphQL APIs",
      "Microservices architecture",
      "Event-driven systems",
      "Real-time data processing",
      "System design for scale",
    ],
    icon: "⚙️",
  },
  {
    id: "api-development",
    title: "API Development & Design",
    description:
      "Design and implement robust APIs that are fast, reliable, and easy to use.",
    benefits: [
      "API design best practices",
      "Versioning strategies",
      "Authentication & authorization",
      "Rate limiting & quotas",
      "API documentation & testing",
    ],
    icon: "🔌",
  },
  {
    id: "database-optimization",
    title: "Database Optimization",
    description:
      "Identify and fix database performance issues, optimize queries, and improve scalability.",
    benefits: [
      "Query optimization",
      "Index strategy",
      "Partitioning & sharding",
      "Caching strategies",
      "Data modeling improvements",
    ],
    icon: "📊",
  },
  {
    id: "performance-audit",
    title: "Performance Optimization",
    description:
      "Comprehensive analysis of your backend to identify bottlenecks and optimization opportunities.",
    benefits: [
      "APM analysis",
      "Profiling & benchmarking",
      "Load testing",
      "Architecture review",
      "Actionable recommendations",
    ],
    icon: "📈",
  },
  {
    id: "bug-investigation",
    title: "Bug Investigation & Debugging",
    description:
      "Track down and fix elusive production bugs using systematic debugging techniques.",
    benefits: [
      "Root cause analysis",
      "Production debugging",
      "Memory leak detection",
      "Race condition identification",
      "Monitoring setup",
    ],
    icon: "🔍",
  },
  {
    id: "reliability-improvement",
    title: "Backend Reliability",
    description:
      "Reduce production incidents and improve system stability with observability and resilience patterns.",
    benefits: [
      "Observability setup",
      "Error tracking",
      "Alerting & monitoring",
      "Incident response",
      "Resilience patterns",
    ],
    icon: "🛡️",
  },
  {
    id: "code-review",
    title: "Code Reviews & Audit",
    description:
      "Technical review of your codebase to identify issues, improve quality, and share knowledge.",
    benefits: [
      "Architecture review",
      "Security assessment",
      "Performance review",
      "Best practices",
      "Team guidance",
    ],
    icon: "✅",
  },
  {
    id: "backend-refactoring",
    title: "Backend Refactoring",
    description:
      "Modernize and improve existing backend systems without disrupting functionality.",
    benefits: [
      "Technical debt reduction",
      "Code quality improvement",
      "Maintainability enhancement",
      "Testing infrastructure",
      "Migration strategies",
    ],
    icon: "🔄",
  },
];

export const PHILOSOPHY_POINTS = [
  {
    title: "Observability First",
    description:
      "You cannot optimize what you cannot measure. Build comprehensive observability into your systems from day one.",
    details: [
      "Structured logging with context",
      "Distributed tracing across services",
      "Real-time performance metrics",
      "Custom business metrics",
    ],
  },
  {
    title: "Measure Before Optimizing",
    description:
      "Intuition is often wrong. Use data to guide optimization efforts and avoid premature optimization.",
    details: [
      "Profile before assuming",
      "Benchmark changes rigorously",
      "Monitor before and after",
      "Follow the data, not hunches",
    ],
  },
  {
    title: "Reliability Over Hype",
    description:
      "Boring, proven technologies that work reliably are better than cutting-edge tools that add complexity.",
    details: [
      "Proven technology stacks",
      "Minimal dependencies",
      "Operational simplicity",
      "Long-term maintainability",
    ],
  },
  {
    title: "Simplicity Over Complexity",
    description:
      "Every line of code is a liability. Simple systems are easier to understand, debug, and maintain.",
    details: [
      "Explicit over implicit",
      "Clear over clever",
      "Boring over novel",
      "Maintainable over impressive",
    ],
  },
  {
    title: "Root Cause Thinking",
    description:
      "Fix the root cause, not the symptom. Surface-level fixes lead to recurring problems.",
    details: [
      'Ask "why?" five times',
      "Investigate systematically",
      "Prevent recurrence",
      "Learn from every incident",
    ],
  },
];
