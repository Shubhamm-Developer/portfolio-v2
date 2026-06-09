"use client";

import { motion , Variants } from "framer-motion";
import { PROOF_POINTS } from "@/lib/portfolio-data";

// Helper function to parse metric number from metric string
function parseMetric(metric: string) {
  // Extract first token (number/metric)
  const parts = metric.split(" ");
  const metricNumber = parts[0];
  const metricTitle = parts.slice(1).join(" ");
  return { metricNumber, metricTitle };
}

export function ProofSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
            Backend Engineering Focus
          </h2>
          <p className="lead section-inner">
            Areas of backend development I am actively building and studying
            through hands-on projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROOF_POINTS.map((point, index) => {
            const { metricNumber, metricTitle } = parseMetric(point.metric);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Card border + background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-lg group-hover:border-white/20 transition-all duration-300" />

                {/* Card content */}
                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  {/* Metric Number - Large and prominent */}
                  <div className="text-4xl sm:text-5xl font-black text-[color:var(--accent)] mb-6 leading-tight">
                    {metricNumber}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-base font-semibold text-white mb-4 leading-snug">
                    {metricTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">
                    {point.description}
                  </p>

                  {/* Context Footer - Muted */}
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-4">
                    {point.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
