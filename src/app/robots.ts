// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sthapatyaconsultants.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // If you have any admin/private areas, you can disallow them like:
      // disallow: ["/admin"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
