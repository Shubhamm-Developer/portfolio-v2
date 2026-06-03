"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="container-max h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-[color:var(--foreground)]"
        >
          Backend Engineer
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/case-studies"
            className="text-sm font-medium muted hover:text-[color:var(--foreground)] transition"
          >
            Case Studies
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium muted hover:text-[color:var(--foreground)] transition"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium muted hover:text-[color:var(--foreground)] transition"
          >
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            <span
              className="inline-block px-4 py-2 rounded-lg"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              Let's Talk
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="px-4 py-4 space-y-3 bg-surface">
            <Link
              href="/case-studies"
              className="block text-sm font-medium muted hover:text-[color:var(--foreground)]"
            >
              Case Studies
            </Link>
            <Link
              href="/#services"
              className="block text-sm font-medium muted hover:text-[color:var(--foreground)]"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium muted hover:text-[color:var(--foreground)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-center"
            >
              <span
                className="inline-block px-4 py-2 rounded-lg"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                Let's Talk
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
