"use client";

import { useThemeColors } from "../theme/useThemeColors";
import { usePathname } from "next/navigation";

export function Footer() {
    const { colors } = useThemeColors();
    const pathname = usePathname(); // get current route

    // Check if current page is homepage
    const isHomePage = pathname === "/" || pathname === "/homepage";

    return (
        <footer
            className="py-6 border-t-2"
            style={{ backgroundColor: colors.background }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <p
                    className="text-center text-sm"
                    style={{ color: colors.textLight }}
                >
                     © {new Date().getFullYear()}{" "}
                    {isHomePage
                        ? "Sthapatya Consultants India Pvt. Ltd. All rights reserved"
                        : "Sthapatya Consultants & Softwares India Pvt. Ltd. All rights reserved"}
                </p>
            </div>
        </footer>
    );
}
