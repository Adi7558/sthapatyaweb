// src/app/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";

// ✅ ISR-style caching: rebuild every 1 hour (3600 seconds)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects | Sthapatya Consultants",
  description:
    "Explore flagship GIS, property tax, and smart governance projects delivered by Sthapatya Consultants across Maharashtra.",
};

export default function Page() {
  return <ProjectsPage />;
}
