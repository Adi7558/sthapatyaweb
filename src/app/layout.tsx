// src/app/layout.tsx
import "../styles/globals.css";
import { Dancing_Script } from "next/font/google";
import type { ReactNode } from "react";
import { Suspense } from "react";

import { AppProviders } from "./providers";
import { RouteLoaderProvider } from "@/components/common/RouteLoaderProvider";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dancing-script", // will be used in CSS
});

export const metadata = {
  title: "Sthapatya Consultant Pvt",
  description: "Website migrated from React + Vite to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body>
        <Suspense fallback={null}>
          <RouteLoaderProvider>
            <AppProviders>{children}</AppProviders>
          </RouteLoaderProvider>
        </Suspense>
      </body>
    </html>
  );
}
