import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Backend Engineer",
  description:
    "Learn about my approach to backend engineering, debugging, performance optimization, and how I help businesses improve their systems.",
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="container-max py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--foreground)] mb-8">
          About
        </h1>

        <div className="prose prose-lg mb-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              What I Do
            </h2>
            <p className="muted mb-4 text-lg leading-relaxed">
              I help businesses improve their backend systems. Whether your APIs
              are slow, your database is struggling under load, or you're
              dealing with mysterious production bugs, I work systematically to
              identify root causes and implement solutions that actually stick.
            </p>
            <p className="muted text-lg leading-relaxed">
              My focus is on practical, measurable improvements: faster APIs,
              fewer production incidents, better database performance, reduced
              infrastructure waste, and easier maintenance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              How I Approach Problems
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">
                  Measure First
                </h3>
                <p className="muted">
                  Before making changes, I understand what's actually happening
                  in production using APM tools, profiling, and systematic
                  analysis. Intuition is often wrong; data doesn't lie.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">
                  Investigate Systematically
                </h3>
                <p className="muted">
                  I dig deep to find root causes, not just symptoms. This means
                  understanding your architecture, data flows, query patterns,
                  and where bottlenecks actually exist.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">
                  Implement with Confidence
                </h3>
                <p className="muted">
                  Solutions are implemented carefully with monitoring and
                  testing. Changes are validated to show actual improvement
                  before considering work complete.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">
                  Document & Handoff
                </h3>
                <p className="muted">
                  Your team should understand what changed and why. I provide
                  documentation, runbooks, and knowledge transfer so you can
                  maintain improvements long-term.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              Problems I Solve
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="font-bold">
                  →
                </span>
                <span className="muted">
                  <strong>Slow APIs:</strong> Database queries taking seconds,
                  N+1 problems, inefficient joins, missing indexes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="font-bold">
                  →
                </span>
                <span className="muted">
                  <strong>Production bugs:</strong> Elusive issues that only
                  happen under load, memory leaks, race conditions, data
                  corruption
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="font-bold">
                  →
                </span>
                <span className="muted">
                  <strong>Scaling bottlenecks:</strong> Database hitting limits,
                  connection pool exhaustion, infrastructure costs getting
                  expensive
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="font-bold">
                  →
                </span>
                <span className="muted">
                  <strong>Unreliable systems:</strong> Frequent incidents,
                  cascading failures, poor error handling, lack of observability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="font-bold">
                  →
                </span>
                <span className="muted">
                  <strong>Technical debt:</strong> Hard-to-maintain code, poor
                  test coverage, outdated patterns, undocumented systems
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[color:var(--foreground)] mb-3">
                  Backend & API Development
                </h3>
                <ul className="space-y-2 muted">
                  <li>• Node.js / Express / NestJS</li>
                  <li>• RESTful and GraphQL APIs</li>
                  <li>• System design & architecture</li>
                  <li>• Microservices patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--foreground)] mb-3">
                  Databases & Performance
                </h3>
                <ul className="space-y-2 muted">
                  <li>• PostgreSQL optimization</li>
                  <li>• Query analysis & tuning</li>
                  <li>• Caching strategies (Redis)</li>
                  <li>• Data modeling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--foreground)] mb-3">
                  Reliability & Operations
                </h3>
                <ul className="space-y-2 muted">
                  <li>• Observability & monitoring</li>
                  <li>• Error tracking & debugging</li>
                  <li>• Incident response</li>
                  <li>• Performance audits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--foreground)] mb-3">
                  Infrastructure
                </h3>
                <ul className="space-y-2 muted">
                  <li>• AWS (RDS, EC2, Lambda)</li>
                  <li>• Kubernetes basics</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Load testing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
              Why Work With Me
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="muted">
                    <strong>Data-driven decisions:</strong> I measure everything
                    and follow the data, not hunches or assumptions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="muted">
                    <strong>Proven track record:</strong> Real case studies with
                    measurable business impact (not vague claims).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="muted">
                    <strong>Long-term improvements:</strong> Fix root causes so
                    problems don't come back.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="muted">
                    <strong>Knowledge transfer:</strong> Your team learns from
                    the work, making your system more maintainable.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="muted">
                    <strong>Practical experience:</strong> I've debugged
                    production systems, optimized databases, and scaled backends
                    at companies with millions of users.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="hero-surface rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--foreground)]">
            Ready to Improve Your Backend?
          </h2>
          <p className="lead mb-6">
            Let's discuss your challenges. I offer free initial consultations to
            understand your problems.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
