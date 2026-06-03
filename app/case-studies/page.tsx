import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Case Studies | Backend Engineer",
  description:
    "Detailed case studies of backend optimization projects: API performance, reliability improvements, and database optimization.",
};

const categoryColors = {
  performance: { bg: "bg-blue-100", text: "text-blue-700" },
  reliability: { bg: "bg-green-100", text: "text-green-700" },
  optimization: { bg: "bg-purple-100", text: "text-purple-700" },
};

export default function CaseStudiesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="container-max py-16 sm:py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--foreground)] mb-4">
            Case Studies
          </h1>
          <p className="lead">
            Detailed analysis of backend optimization projects with measurable
            business impact.
          </p>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="block card p-8 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[study.category].bg} ${categoryColors[study.category].text}`}
                >
                  {study.category.charAt(0).toUpperCase() +
                    study.category.slice(1)}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-2 group-hover:text-[color:var(--accent)]">
                {study.title}
              </h2>

              <p className="muted mb-4">{study.subtitle}</p>

              <p className="text-[color:var(--foreground)] mb-6">
                {study.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {study.keyMetrics.slice(0, 4).map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-sm muted">{metric.label}</div>
                    <div className="text-lg font-bold text-[color:var(--foreground)]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-[color:var(--accent)] font-semibold group-hover:underline">
                Read Full Case Study →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
