"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/portfolio-data";

const categoryColors = {
  performance: { bg: "bg-blue-100", text: "text-blue-700" },
  reliability: { bg: "bg-green-100", text: "text-green-700" },
  optimization: { bg: "bg-purple-100", text: "text-purple-700" },
};

export function FeaturedCaseStudiesSection() {
  return (
    <section className="py-16 sm:py-24 section-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground)] mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg muted section-inner">
            In-depth analysis of projects where systematic debugging,
            optimization, and engineering improved business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition max-w-4xl"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${categoryColors[study.category].bg} ${categoryColors[study.category].text}`}
                    >
                      {study.category.charAt(0).toUpperCase() +
                        study.category.slice(1)}
                    </div>
                    <h3 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg muted mb-4">{study.subtitle}</p>
                <p className="text-[color:var(--foreground)] mb-6 max-w-3xl leading-8">
                  {study.description}
                </p>

                {/* Key Metrics Preview */}
                  <div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-6 pb-6 max-w-4xl"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {study.keyMetrics.slice(0, 4).map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-sm muted mb-1">{metric.label}</div>
                      <div className="text-xl font-bold text-[color:var(--foreground)]">
                        {metric.value}
                      </div>
                      <div className="text-xs muted-2">{metric.impact}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[color:var(--surface)] text-[color:var(--foreground)] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${study.id}`}
                  className="btn-primary"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-left"
        >
          <Link
            href="/case-studies"
            className="inline-block px-6 py-3 font-semibold rounded-lg transition"
            style={{
              border: "2px solid var(--foreground)",
              color: "var(--foreground)",
            }}
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
