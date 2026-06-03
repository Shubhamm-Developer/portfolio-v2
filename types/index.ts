export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "performance" | "reliability" | "optimization";
  description: string;
  problem: string;
  investigation: string;
  solutionsImplemented: string[];
  results: {
    title: string;
    before: string;
    after: string;
    impact: string;
  }[];
  keyMetrics: {
    label: string;
    value: string;
    impact: string;
  }[];
  lessonsLearned: string[];
  technologies: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface ProofPoint {
  metric: string;
  description: string;
  context: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  publishedAt: string;
}
