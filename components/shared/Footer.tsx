"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-surface">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Backend Engineer</h3>
            <p className="muted-2">
              Improving APIs, performance, reliability, and maintainability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm muted-2">
              <li>
                <Link href="/#services" className="hover:underline transition">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline transition">
                  API Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline transition">
                  Database Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline transition">
                  Performance Audits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm muted-2">
              <li>
                <Link
                  href="/case-studies"
                  className="hover:underline transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm muted-2">
              <li>
                <a href="#" className="hover:underline transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition">
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm muted-2"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p>&copy; 2024 Backend Engineer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
