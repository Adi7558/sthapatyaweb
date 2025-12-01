// src/app/layout.tsx
import "../styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import { AppProviders } from "./providers";
import { RouteLoaderProvider } from "@/components/common/RouteLoaderProvider";

export const metadata: Metadata = {
  title: "Sthapatya Consultant Pvt",
  description: "Website migrated from React + Vite to Next.js",
  icons: {
    icon: "/faviconLogo.png", // ✅ uses /public/faviconLogo.png
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <RouteLoaderProvider> */}
          <AppProviders>{children}</AppProviders>
        {/* </RouteLoaderProvider> */}
      </body>
    </html>
  );
}
