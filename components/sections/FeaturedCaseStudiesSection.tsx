"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/portfolio-data";

const categoryColors = {
  performance: "bg-blue-500/10 border-blue-500/30",
  reliability: "bg-green-500/10 border-green-500/30",
  optimization: "bg-purple-500/10 border-purple-500/30",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function FeaturedCaseStudiesSection() {
  return (
    <section className="py-20 sm:py-32 section-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[color:var(--foreground)] mb-6">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            In-depth analysis of projects where systematic engineering,
            optimization, and debugging improved business outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12"
        >
          {CASE_STUDIES.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className={`relative border rounded-lg overflow-hidden ${categoryColors[study.category]} backdrop-blur-sm hover:border-opacity-100 transition-all duration-300 group`}
            >
              {/* Card content */}
              <div className="p-8 sm:p-12">
                {/* Header with title and category */}
                <div className="mb-8">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[color:var(--accent)] mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-lg text-gray-300 font-medium">
                    {study.subtitle}
                  </p>
                </div>

                {/* Three-column layout: Problem | Solution | Outcome */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Problem Section */}
                  <div className="border-l-2 border-white/10 pl-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
                      Problem
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution Section */}
                  <div className="border-l-2 border-white/10 pl-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
                      Solution
                    </h4>
                    <ul className="space-y-3">
                      {study.solutionsImplemented
                        .slice(0, 4)
                        .map((solution, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm text-gray-300"
                          >
                            <span className="text-[color:var(--accent)] font-bold flex-shrink-0">
                              →
                            </span>
                            <span>{solution}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Outcome Section */}
                  <div className="border-l-2 border-[color:var(--accent)] pl-6 bg-[color:var(--accent)]/5 -m-6 p-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-[color:var(--accent)] mb-4">
                      Outcome
                    </h4>
                    <ul className="space-y-3">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="text-sm">
                          <div className="font-bold text-white">
                            {result.title}
                          </div>
                          <div className="text-[color:var(--accent)] font-semibold">
                            {result.impact}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="mb-12 pb-12 border-b border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-6">
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {study.keyMetrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl sm:text-3xl font-black text-[color:var(--accent)] mb-2">
                          {metric.value}
                        </div>
                        <div className="text-xs font-medium text-gray-400 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-medium hover:border-white/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-[color:var(--accent)] hover:gap-3 transition-all group/link"
                  >
                    Read Full Report
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-block px-8 py-4 font-semibold rounded-lg border border-white/20 text-white hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-all duration-300"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
