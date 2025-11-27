// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesPage from "./../../components/pages/ServicesPages";

// ✅ ISR: cache + rebuild every 1 hour
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services | Sthapatya Consultants",
  description:
    "Explore municipal services by Sthapatya Consultants including property tax survey, water bill management, GIS mapping, trade license, asset management, and more.",
};

export default function Page() {
  return <ServicesPage />;
}
