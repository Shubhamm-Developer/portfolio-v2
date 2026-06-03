import { CaseStudy, ProofPoint, Service } from "@/types";

export const PROOF_POINTS: ProofPoint[] = [
  {
    metric: "45% API Response Time Reduction",
    description: "Optimized database queries and implemented caching strategy",
    context: "SaaS platform with millions of daily requests",
  },
  {
    metric: "Eliminated N+1 Query Problem",
    description: "Refactored data fetching patterns across the codebase",
    context: "E-commerce backend serving 10k+ concurrent users",
  },
  {
    metric: "99.98% Uptime Improvement",
    description:
      "Implemented observability and fixed critical reliability issues",
    context: "Production environment spanning 4 regions",
  },
  {
    metric: "60% Infrastructure Cost Reduction",
    description: "Optimized resource usage through performance improvements",
    context: "Monthly recurring infrastructure savings of $15k+",
  },
  {
    metric: "Zero to Production Debugging System",
    description: "Built comprehensive logging and monitoring infrastructure",
    context: "Reduced MTTR from 2 hours to 15 minutes",
  },
  {
    metric: "10x Database Query Performance",
    description: "Strategic indexing and query restructuring",
    context: "Reduced peak load by 70% on busiest endpoints",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "api-performance",
    title: "API Performance Optimization",
    subtitle: "Reduced latency by 45% and eliminated database bottlenecks",
    category: "performance",
    description:
      "A SaaS platform was experiencing severe performance degradation during peak hours, with API response times exceeding 3 seconds. Through systematic profiling and optimization, we identified and fixed critical bottlenecks.",
    problem: `The SaaS platform's core API endpoints were consistently responding in 2-3 seconds during peak hours, causing poor user experience and driving customer churn. Load testing revealed the backend couldn't handle more than 500 concurrent users without timing out. Database queries were inefficient, and there was no caching layer.`,
    investigation: `Profiled production traffic using APM tools. Found multiple N+1 query problems, missing database indexes, and inefficient join operations. Query analysis showed some endpoints executing 50+ queries for a single request. Identified several full table scans on high-traffic tables.`,
    solutionsImplemented: [
      "Added strategic database indexes based on query patterns",
      "Refactored N+1 queries using batch loading and JOINs",
      "Implemented Redis caching for frequently accessed data",
      "Added pagination to prevent loading large datasets",
      "Optimized connection pooling configuration",
      "Implemented request-level query timeouts",
      "Added rate limiting to prevent cascade failures",
    ],
    results: [
      {
        title: "P95 Latency",
        before: "2,850ms",
        after: "620ms",
        impact: "78% reduction",
      },
      {
        title: "P99 Latency",
        before: "4,200ms",
        after: "1,100ms",
        impact: "74% reduction",
      },
      {
        title: "Concurrent User Capacity",
        before: "500 users",
        after: "5,000 users",
        impact: "10x improvement",
      },
      {
        title: "Database CPU Usage",
        before: "85% peak",
        after: "35% peak",
        impact: "59% reduction",
      },
    ],
    keyMetrics: [
      {
        label: "Response Time",
        value: "620ms",
        impact: "Down from 2.8s (78% faster)",
      },
      {
        label: "Throughput",
        value: "10k req/s",
        impact: "Up from 2k req/s (5x)",
      },
      {
        label: "Error Rate",
        value: "0.01%",
        impact: "Down from 2.3%",
      },
      {
        label: "Infrastructure Savings",
        value: "$8k/month",
        impact: "By reducing resource needs",
      },
    ],
    lessonsLearned: [
      "Measure before optimizing - APM data revealed the actual bottlenecks",
      "Database performance is often the biggest backend bottleneck",
      "N+1 query patterns are extremely common in ORMs without proper usage patterns",
      "Caching strategy should be based on access patterns, not arbitrary decisions",
      "Observability is critical for identifying performance regressions early",
    ],
    technologies: ["PostgreSQL", "Redis", "APM Tools", "Node.js", "Datadog"],
  },
  {
    id: "reliability-improvement",
    title: "Production Reliability Overhaul",
    subtitle:
      "Reduced critical incidents by 94% and improved MTTR from 2h to 15min",
    category: "reliability",
    description:
      "A fintech backend was experiencing frequent production outages causing customer trust issues. We implemented comprehensive observability and fixed underlying reliability issues.",
    problem: `The backend was experiencing 3-4 critical incidents per week, each lasting 45+ minutes. Developers didn't have visibility into production issues, making debugging extremely slow. No structured error tracking or alerting. When issues occurred, the team was flying blind.`,
    investigation: `Analyzed incident logs and found recurring patterns: memory leaks under high load, unhandled edge cases in payment processing, cascading failures when one service went down. The code had no structured logging. Metrics were limited to basic CPU/memory.`,
    solutionsImplemented: [
      "Implemented structured logging with correlation IDs across services",
      "Added comprehensive error tracking with Sentry",
      "Built custom alerting rules for anomalies",
      "Fixed memory leaks in WebSocket connection handlers",
      "Implemented circuit breakers for external API dependencies",
      "Added graceful degradation for non-critical features",
      "Created runbooks for common incident scenarios",
    ],
    results: [
      {
        title: "Critical Incidents",
        before: "3-4 per week",
        after: "0.2 per week",
        impact: "94% reduction",
      },
      {
        title: "MTTR (Mean Time To Resolve)",
        before: "120 minutes",
        after: "15 minutes",
        impact: "88% improvement",
      },
      {
        title: "Detection Time",
        before: "45+ minutes",
        after: "2 minutes",
        impact: "95% faster detection",
      },
      {
        title: "System Uptime",
        before: "98.2%",
        after: "99.98%",
        impact: "SLA compliant",
      },
    ],
    keyMetrics: [
      {
        label: "Incidents Per Month",
        value: "0.8",
        impact: "Down from 12+",
      },
      {
        label: "MTTR",
        value: "15 min",
        impact: "Down from 2h",
      },
      {
        label: "Customer Impact",
        value: "Near zero",
        impact: "Previously 40+ affected",
      },
      {
        label: "On-call Stress",
        value: "Minimal",
        impact: "Was severe 24/7",
      },
    ],
    lessonsLearned: [
      "Observability must be built in from the start, not added later",
      "Structured logging with context makes debugging exponentially faster",
      "Circuit breakers and bulkheads prevent cascading failures",
      "Monitoring should focus on business metrics and customer impact, not just metrics",
      "Runbooks and automation reduce incident response time significantly",
    ],
    technologies: [
      "Node.js",
      "Sentry",
      "Datadog",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
    ],
  },
  {
    id: "database-optimization",
    title: "Database Optimization & Scaling",
    subtitle:
      "Deferred infrastructure scaling by 18 months through optimization",
    category: "optimization",
    description:
      "An e-commerce backend was hitting database scalability limits faster than expected. Rather than immediately scaling infrastructure, we optimized queries and data models first.",
    problem: `Database was approaching capacity with 50GB of data and query times degrading. Company was planning to implement database sharding at significant engineering cost. Growing user base meant the problem would only get worse.`,
    investigation: `Analyzed query performance and found: inefficient JOIN patterns, missing indexes on frequently sorted columns, bloated tables with unnecessary historical data, and inefficient pagination. Table structure wasn't optimized for the access patterns.`,
    solutionsImplemented: [
      "Added 12 strategic indexes based on query analysis",
      "Refactored complex JOINs into simpler queries",
      "Implemented table partitioning for historical data",
      "Created materialized views for reporting queries",
      "Optimized pagination to use index-efficient cursor-based approach",
      "Cleaned up 2 years of unused data (15GB)",
      "Set up query performance monitoring",
    ],
    results: [
      {
        title: "Query Performance",
        before: "3-5s for complex queries",
        after: "100-200ms",
        impact: "95% improvement",
      },
      {
        title: "Database Size",
        before: "50GB",
        after: "32GB",
        impact: "36% reduction",
      },
      {
        title: "Disk IOPS",
        before: "85% utilization",
        after: "25% utilization",
        impact: "70% reduction",
      },
      {
        title: "Scaling Timeline",
        before: "6 months to outgrow",
        after: "24 months to outgrow",
        impact: "18 months deferred",
      },
    ],
    keyMetrics: [
      {
        label: "Query Optimization",
        value: "95% faster",
        impact: "Most queries now <200ms",
      },
      {
        label: "Storage Saved",
        value: "18GB",
        impact: "Removed bloat safely",
      },
      {
        label: "Sharding Deferred",
        value: "18 months",
        impact: "Estimated $200k saved",
      },
      {
        label: "Cost Reduction",
        value: "$3k/month",
        impact: "Smaller instance size needed",
      },
    ],
    lessonsLearned: [
      "Optimization should always come before scaling infrastructure",
      "Missing indexes are one of the most common and impactful issues",
      "Data models should be optimized for actual access patterns",
      "Monitoring query performance prevents future degradation",
      "Regular cleanup of historical data improves performance significantly",
    ],
    technologies: [
      "PostgreSQL",
      "Query Analysis Tools",
      "Monitoring & Profiling",
      "AWS RDS",
      "pgAdmin",
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
    title: "Performance Audits",
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
    title: "Reliability Improvement",
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
