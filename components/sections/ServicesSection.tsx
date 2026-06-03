"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/portfolio-data";

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="services" className="section section-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground)] mb-4">
            Services
          </h2>
          <p className="lead section-inner">
            Here's how I help businesses improve their backend systems and solve
            real engineering problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="muted text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      style={{ color: "var(--accent)" }}
                      className="font-bold mt-0.5"
                    >
                      •
                    </span>
                    <span className="text-xs muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
