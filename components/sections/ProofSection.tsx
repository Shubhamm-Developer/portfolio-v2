"use client";

import { motion } from "framer-motion";
import { PROOF_POINTS } from "@/lib/portfolio-data";

export function ProofSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
            Proven Results
          </h2>
          <p className="lead section-inner">
            Real outcomes from real projects. Numbers that matter for your
            business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROOF_POINTS.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:shadow-md transition"
            >
              <div className="mb-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {point.metric.split(" ")[0]}% or {point.metric.split(" ")[1]}
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-2">
                {point.metric}
              </h3>
              <p className="text-[color:var(--foreground)] mb-3 text-sm">
                {point.description}
              </p>
              <p className="text-xs muted-2 italic">{point.context}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
