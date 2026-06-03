import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { FeaturedCaseStudiesSection } from "@/components/sections/FeaturedCaseStudiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Backend Engineer | API Performance & Database Optimization",
  description:
    "Backend engineer specializing in API performance, database optimization, reliability, and debugging. I help startups and businesses improve their backend systems and production reliability.",
  keywords: [
    "backend engineer",
    "API performance optimization",
    "database optimization",
    "performance engineering",
    "Node.js developer",
    "PostgreSQL",
    "system reliability",
    "production debugging",
  ],
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProofSection />
      <FeaturedCaseStudiesSection />
      <ServicesSection />
      <PhilosophySection />
      <CTASection />
    </div>
  );
}
