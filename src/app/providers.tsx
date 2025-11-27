"use client";

import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { usePathname } from "next/navigation";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const pathname = usePathname();

  // Hide layout ONLY when the route is the Next.js built-in 404 page
  const hideLayout =
   pathname?.startsWith("/_not-found");

  return (
    <ThemeProvider>
      <Toaster position="top-right" richColors closeButton />

      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </ThemeProvider>
  );
}
