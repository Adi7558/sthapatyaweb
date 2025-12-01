// app/contact/page.tsx
import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

// ✅ Enable ISR / caching (rebuild every 1 hour – change if you want)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact Us | Sthapatya Consultants",
  description:
    "Get in touch with Sthapatya Consultants for property tax survey, GIS, municipal revenue solutions, and smart governance services across Maharashtra.",
};

export default function Page() {
  return <ContactPage />;
}
