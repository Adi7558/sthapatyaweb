import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sthapatyaconsultants.com";

  // 👇 Add/remove routes to match your actual pages
  const routes = [
    "",           // homepage => https://sthapatyaconsultants.com/
    "/services",
    "/contact",
    "/careers",
    "/about",
  ];

  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
