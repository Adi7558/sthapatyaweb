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

    // PAGES THAT EXIST
    const validRoutes = ["/", "/about", "/journey", "/projects", "/services", "/career", "/contact",];

    // If pathname is not one of these → it's NotFound
    const isNotFoundPage = !validRoutes.includes(pathname);

    // Homepage → hide footer only
    const hideFooterOnHome = pathname === "/";

    const hideNavbar = isNotFoundPage;
    const hideFooter = isNotFoundPage || hideFooterOnHome;

    return (
        <ThemeProvider>
            <Toaster position="top-right" richColors closeButton />

            {!hideNavbar && <Navbar />}

            {children}

            {!hideFooter && <Footer />}
        </ThemeProvider>
    );
}
