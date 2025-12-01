// src/app/robots.ts
import type { MetadataRoute } from "next";



export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sthapatyaconsultants.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ["/admin"], // if needed later
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
