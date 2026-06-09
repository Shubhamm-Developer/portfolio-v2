"use client";

import { motion, Variants } from "framer-motion";

const engineeringCards = [
  {
    id: 1,
    icon: "⚡",
    title: "API Optimization",
    tech: "Node.js + PostgreSQL",
    description:
      "High-performance REST APIs with optimized queries and caching strategies.",
  },
  {
    id: 2,
    icon: "📊",
    title: "Reliability Engineering",
    tech: "Observability + Monitoring",
    description:
      "Production-grade monitoring, alerting, and incident response systems.",
  },
  {
    id: 3,
    icon: "🚀",
    title: "Scaling Systems",
    tech: "Caching + Redis",
    description:
      "Horizontal scaling, load balancing, and distributed system architecture.",
  },
  {
    id: 4,
    icon: "🔍",
    title: "Database Performance",
    tech: "Indexing + Query Tuning",
    description:
      "Advanced indexing strategies and query optimization for complex workloads.",
  },
];

export function EngineeringSnapshotSection() {
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8,  },
    },
  };

  return (
    <section id="engineering-snapshot" className="section section-bg">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground)] mb-4">
            Engineering Snapshot
          </h2>
          <p className="lead section-inner">
            Core engineering disciplines that drive performance, reliability,
            and scale.
          </p>
        </motion.div>

        {/* Engineering cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {engineeringCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Card border + background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-lg group-hover:border-white/20 transition-all duration-300" />

              {/* Card content */}
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="text-4xl mb-4">{card.icon}</div>

                {/* Title */}
                <h3 className="text-lg sm:text-base font-semibold text-white mb-2 leading-tight">
                  {card.title}
                </h3>

                {/* Tech stack */}
                <p className="text-xs font-medium text-[color:var(--accent)] mb-4 tracking-wide">
                  {card.tech}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
