"use client";

import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { RouteLoaderProvider } from "@/components/common/RouteLoaderProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RouteLoaderProvider>
        {/* 🔔 Sonner toaster – now all toast.*() calls will work */}
        <Toaster
          position="top-right"
          richColors
          closeButton
        />

        <Navbar />
        {children}
        <Footer />
      </RouteLoaderProvider>
    </ThemeProvider>
  );
}
