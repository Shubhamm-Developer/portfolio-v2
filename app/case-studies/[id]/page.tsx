import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";

const categoryColors = {
  performance: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    label: "Performance",
  },
  reliability: {
    bg: "bg-green-100",
    text: "text-green-700",
    label: "Reliability",
  },
  optimization: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    label: "Optimization",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  const colors = categoryColors[study.category];

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Navigation */}
      <div className="container-max py-8">
        <Link
          href="/case-studies"
          className="font-semibold flex items-center gap-2"
          style={{ color: "var(--accent)" }}
        >
          ← Back to Case Studies
        </Link>
      </div>

      <article className="container-max py-12">
        {/* Header */}
        <div className="mb-12">
          <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${colors.bg} ${colors.text}`}
          >
            {colors.label}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--foreground)] mb-4">
            {study.title}
          </h1>
          <p className="lead mb-8">{study.subtitle}</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-6">
              Key Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {study.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[color:var(--surface)] rounded p-6"
                >
                  <div className="text-sm muted mb-2">{metric.label}</div>
                  <div className="text-3xl font-bold text-[color:var(--foreground)] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {metric.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              The Problem
            </h2>
            <p className="text-lg muted mb-4">{study.description}</p>
            <div className="card rounded">
              <p className="text-[color:var(--foreground)] leading-relaxed">
                {study.problem}
              </p>
            </div>
          </div>
        </div>

        {/* Investigation Section */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              Investigation & Analysis
            </h2>
            <div className="card rounded-lg">
              <p className="text-[color:var(--foreground)] leading-relaxed">
                {study.investigation}
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-6">
              Solutions Implemented
            </h2>
            <div className="space-y-3">
              {study.solutionsImplemented.map((solution, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-[color:var(--surface-2)] p-6 rounded-lg"
                >
                  <div className="text-xl font-bold text-[color:var(--accent)] mt-1 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-[color:var(--foreground)] font-medium">
                      {solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-6">
              Results: Before vs After
            </h2>
            <div className="space-y-4">
              {study.results.map((result, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-[color:var(--foreground)] mb-4 text-lg">
                    {result.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm muted mb-1">Before</div>
                      <div className="text-2xl font-bold text-red-600">
                        {result.before}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[color:var(--muted-2)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm muted mb-1">After</div>
                      <div className="text-2xl font-bold text-green-600">
                        {result.after}
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-4 pt-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div className="text-sm muted font-semibold">
                      Impact:{" "}
                      <span className="text-green-600">{result.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-6">
              Engineering Lessons Learned
            </h2>
            <div className="card">
              <ul className="space-y-3">
                {study.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[color:var(--accent)] font-bold text-lg mt-0.5">
                      •
                    </span>
                    <p className="muted">{lesson}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full font-medium text-sm"
                  style={{
                    background: "var(--surface-2)",
                    color: "var(--foreground)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="timeline mb-12">
          <div className="timeline-marker">
            <span className="timeline-dot" />
          </div>
          <div>
            <div className="hero-surface rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-[color:var(--foreground)]">
                Need Similar Help With Your Backend?
              </h2>
              <p className="lead mb-6">
                Let's discuss your backend challenges and how I can help improve
                performance, reliability, and maintainability.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
