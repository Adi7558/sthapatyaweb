import "../styles/globals.css";
import { Dancing_Script } from "next/font/google";
import type { ReactNode } from "react";

import { AppProviders } from "./providers";
import { RouteLoaderProvider } from "@/components/common/RouteLoaderProvider";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dancing-script",
});

export const metadata = {
  title: "Sthapatya Consultant Pvt",
  description: "Website migrated from React + Vite to Next.js",
    icons: {
    icon: "/faviconLogo.png", // ✅ uses /public/faviconLogo.png
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body>
        <RouteLoaderProvider>
          <AppProviders>{children}</AppProviders>
        </RouteLoaderProvider>
      </body>
    </html>
  );
}
