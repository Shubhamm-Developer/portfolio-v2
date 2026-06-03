"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="section hero-surface">
      <div className="container-max text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[color:var(--foreground)]">
            Need Help With a Slow API, Production Bug, or Backend Bottleneck?
          </h2>
          <p className="lead mb-8 section-inner">
            Let's discuss your backend challenges. Whether you need performance
            optimization, reliability improvements, or backend refactoring—I can
            help.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="btn-primary text-lg inline-block px-8 py-4"
            >
              Let's Talk About Your Backend
            </Link>
          </motion.div>

          <p className="muted-2 mt-6 text-sm">
            Response within 24 hours • Free initial consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
