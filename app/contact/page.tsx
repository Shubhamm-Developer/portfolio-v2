"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        challenge: formData.get("challenge"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  }

  // const formData = new FormData(form);
  // const data = {
  //   name: formData.get("name"),
  //   email: formData.get("email"),
  //   company: formData.get("company"),
  //   challenge: formData.get("challenge"),
  //   message: formData.get("message"),
  // };

  //   await new Promise((resolve) => setTimeout(resolve, 800));

  //   // console.log("Form submitted:", data);
  //   setSubmitted(true);
  //   setIsLoading(false);
  //   form.reset();

  //   setTimeout(() => setSubmitted(false), 5000);
  // }

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="container-max py-16 sm:py-24">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--foreground)] mb-4">
            Let's Talk
          </h1>
          <p className="lead">
            Tell me about your backend challenges. Whether you need API
            optimization, reliability improvements, or debugging help—I'll
            respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Thanks for reaching out! I'll be in touch within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ border: "1px solid var(--border)" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ border: "1px solid var(--border)" }}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Company / Project
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ border: "1px solid var(--border)" }}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="challenge"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  What's Your Main Backend Challenge?
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <option value="">Select one...</option>
                  <option value="slow-apis">Slow APIs & Latency</option>
                  <option value="database">Database Performance</option>
                  <option value="reliability">System Reliability & Bugs</option>
                  <option value="scaling">Scaling Issues</option>
                  <option value="optimization">
                    General Performance Optimization
                  </option>
                  <option value="code-review">
                    Code Review & Architecture
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Tell Me More About Your Challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ border: "1px solid var(--border)" }}
                  placeholder="What specific issues are you experiencing? What have you tried? What's the impact on your business?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="card h-fit sticky top-24 p-6">
              <h3 className="font-bold text-[color:var(--foreground)] mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4 text-sm muted">
                <li className="flex items-start gap-3">
                  <span className="text-lg">📧</span>
                  <span>
                    <strong>Response within 24 hours</strong> with initial
                    thoughts and questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📞</span>
                  <span>
                    <strong>Free consultation call</strong> to understand your
                    challenges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📋</span>
                  <span>
                    <strong>Custom proposal</strong> with scope and approach
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>
                    <strong>No pressure</strong> - I'm here to help, not sell
                  </span>
                </li>

                <div
                  className="mt-8 pt-8"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <p className="text-xs muted mb-3">
                    <strong>Prefer email?</strong>
                  </p>
                  <p className="text-sm muted break-all">
                    <a
                      href="mailto:hello@yourportfolio.com"
                      className="hover:underline"
                      style={{ color: "var(--accent)" }}
                    >
                      hello@yourportfolio.com
                    </a>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-6">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">
                How does engagement work?
              </h3>
              <p className="muted">
                We start with a consultation to understand your challenges. I
                then provide a proposal with scope, timeline, and cost. Once
                agreed, we begin work with regular check-ins.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">
                What's your typical engagement length?
              </h3>
              <p className="muted">
                Projects typically range from 1-3 months depending on
                complexity. Some are short (2-3 week investigations), others are
                longer (ongoing optimization and reliability work).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">
                Do you work full-time or part-time?
              </h3>
              <p className="muted">
                I'm available for project-based work. Engagements can be
                full-time, part-time, or on-demand depending on your needs.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">
                What if I'm not sure if I need help?
              </h3>
              <p className="muted">
                Let's talk anyway. I offer free initial consultations. I can
                help you diagnose whether there are real issues and if
                optimization would be worthwhile.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">
                Can you work with my existing team?
              </h3>
              <p className="muted">
                Absolutely. I work closely with your engineers, pair on
                debugging, and make sure knowledge transfers so you can maintain
                improvements long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
