"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_POINTS } from "@/lib/portfolio-data";
import { useState } from "react";

export function PhilosophySection() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section className="section section-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground)] mb-4">
            Backend Engineering Philosophy
          </h2>
          <p className="lead section-inner">
            My approach to building reliable, performant, and maintainable
            backend systems.
          </p>
        </motion.div>

        <div className="space-y-4">
          {PHILOSOPHY_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[color:var(--surface-2)] transition text-left"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-1">
                    {point.title}
                  </h3>
                  <p className="muted text-sm">{point.description}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-[color:var(--muted-2)] transition-transform ml-4 flex-shrink-0 ${
                    expandedId === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {expandedId === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4"
                  style={{
                    borderTop: "1px solid var(--border)",
                    background: "var(--surface-2)",
                  }}
                >
                  <ul className="space-y-3">
                    {point.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[color:var(--accent)] font-bold mt-1">
                          ✓
                        </span>
                        <span className="muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
