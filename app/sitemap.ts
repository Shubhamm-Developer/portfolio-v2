import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourportfolio.com";

  const caseStudiesRoutes = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...caseStudiesRoutes,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
