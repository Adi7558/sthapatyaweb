"use client";

import { useTheme } from "./ThemeContext";

/**
 * Custom hook that returns theme colors in a structured, typed way
 */
export function useThemeColors() {
    const { currentTheme } = useTheme();
    const colors = currentTheme.colors;

    return {
        colors,
        backgrounds: {
            primary: colors.primary,
            secondary: colors.secondary,
            accent: colors.accent,
            light: colors.backgroundLight,
            cream: "#FFFFFF",
            white: "#FFFFFF",
            card: colors.primary,
        },
        text: {
            primary: { color: colors.text },
            secondary: { color: colors.textLight },
            accent: { color: colors.accent },
            blue: { color: colors.primary },
            dark: { color: colors.secondary },
        },
        background: {
            primary: { backgroundColor: colors.primary },
            secondary: { backgroundColor: colors.secondary },
            accent: { backgroundColor: colors.accent },
            light: { backgroundColor: colors.backgroundLight },
            cream: { backgroundColor: "#FFFFFF" },
            white: { backgroundColor: "#FFFFFF" },
        },
        border: {
            primary: { borderColor: colors.primary },
            secondary: { borderColor: colors.secondary },
            accent: { borderColor: colors.accent },
            light: { borderColor: `${colors.primary}33` },
        },
        shadows: {
            sm: { boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" },
            md: { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" },
            lg: { boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" },
            xl: { boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)" },
            colored: { boxShadow: `0 8px 20px ${colors.primary}20` },
        },
        button: {
            primary: {
                backgroundColor: colors.primary,
                color: "white",
            },
            secondary: {
                backgroundColor: colors.secondary,
                color: "white",
            },
            accent: {
                backgroundColor: colors.accent,
                color: "white",
            },
            outline: {
                backgroundColor: "transparent",
                border: `2px solid ${colors.primary}`,
                color: colors.primary,
            },
        },
    };
}


/* -------------------------------------------------------------- */
/*                            TYPE DEF                            */
/* -------------------------------------------------------------- */

// export type ThemeColors = {
//     colors: Record<string, string>;

//     backgrounds: Record<string, string>;

//     text: Record<string, { color: string }>;

//     background: Record<string, { backgroundColor: string }>;

//     border: Record<string, { borderColor: string }>;

//     shadows: {
//         sm: { boxShadow: string };
//         md: { boxShadow: string };
//         lg: { boxShadow: string };
//         xl: { boxShadow: string };
//         colored: { boxShadow: string };
//     };

//     button: Record<
//         string,
//         {
//             backgroundColor: string;
//             color: string;
//             border?: string;
//         }
//     >;
// };
