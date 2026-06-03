import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backend Engineer | API & Database Performance Optimization",
  description:
    "Backend engineer specializing in API performance, database optimization, reliability, and debugging. I help startups and businesses improve their backend systems.",
  keywords: [
    "backend engineer",
    "API performance",
    "database optimization",
    "performance engineering",
    "Node.js",
    "PostgreSQL",
    "system reliability",
    "backend development",
  ],
  authors: [{ name: "Backend Engineer" }],
  creator: "Backend Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Backend Engineer | API & Database Performance Optimization",
    description:
      "Backend engineer specializing in API performance, database optimization, reliability, and debugging.",
    siteName: "Backend Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backend Engineer | API & Database Performance Optimization",
    description:
      "Backend engineer specializing in API performance, database optimization, reliability, and debugging.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="canonical" href="https://yourportfolio.com" />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
