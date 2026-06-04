"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustMetrics = [
  {
    number: "45%",
    label: "API Speed Improvement",
  },
  {
    number: "99.98%",
    label: "Uptime",
  },
  {
    number: "10x",
    label: "Query Performance",
  },
  {
    number: "60%",
    label: "Cost Savings",
  },
];

export function HeroSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center hero-surface overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container-max py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Premium headline with stronger hierarchy */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.0] tracking-tight text-white">
            Backend Engineer Who Fixes Slow APIs, Production Bugs, and Scaling
            Bottlenecks
          </h1>

          {/* Refined paragraph with optimal line length */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            I help businesses improve API performance, reliability, and
            maintainability. If your backend is slow, unreliable, or hard to
            maintain—let's fix it.
          </p>

          {/* Enhanced CTA buttons with larger sizing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/case-studies"
                className="btn-primary px-10 py-4 text-base font-semibold"
              >
                View Case Studies
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-base font-semibold border border-[color:var(--accent)] text-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent)] hover:text-white transition-all duration-300"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>

          {/* Specialization highlight */}
          <p className="text-sm text-gray-400 mb-16 font-medium tracking-wide">
            Specializing in: API Performance • Database Optimization • System
            Reliability • Backend Refactoring • Production Debugging
          </p>

          {/* Trust Metrics Bar - Glass-style cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glass background effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300" />

                {/* Content */}
                <div className="relative px-4 sm:px-6 py-6 sm:py-8">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-snug">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
