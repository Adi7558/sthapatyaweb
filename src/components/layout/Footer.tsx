"use client";

import { useThemeColors } from "../theme/useThemeColors";

export function Footer() {
    const { colors } = useThemeColors();

    return (
        <footer
            className="py-6 border-t-2"
            style={{
                backgroundColor: colors.background,
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <p
                    className="text-center text-sm"
                    style={{ color: colors.textLight }}
                    >
                    All rights reserved © {new Date().getFullYear()} Sthapatya Consultants & Softwares India Pvt. Ltd. 
                </p>

            </div>
        </footer>
    );
}
