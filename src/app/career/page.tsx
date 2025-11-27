// app/career/page.tsx
import type { Metadata } from "next";
import { CareerPage } from "@/components/pages/CareerPage";

// ✅ ISR: rebuild every 1 hour (adjust as you like)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Careers | Sthapatya Consultants",
  description:
    "Explore career opportunities at Sthapatya Consultants. Join our team to help transform urban governance across Maharashtra and India.",
};

export default function Page() {
  return <CareerPage />;
}
