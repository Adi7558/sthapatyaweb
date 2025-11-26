"use client";

import { motion } from "motion/react";


export function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
            {/* Logo with spinning and pulse animation */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.9, 1, 0.9],
                    rotate: 360,
                }}
                transition={{
                    scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    opacity: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                className="w-48 h-48 flex items-center justify-center"
            >
                <img
                    src="/faviconLogo.png"
                    alt="Loading..."
                    className="w-full h-full object-contain drop-shadow-2xl"
                    />
            </motion.div>
        </motion.div>
    );
}
