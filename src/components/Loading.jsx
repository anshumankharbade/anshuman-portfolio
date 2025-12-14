import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b]"
      >
        {/* Main loading container */}
        <div className="relative text-center">
          {/* Animated icon */}
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
            <div className="relative">
              <FaCode className="text-5xl text-[#f5c518]" />
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)",
                  border: "1px solid rgba(245,197,24,0.2)",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
                Anshuman Kharbade
              </span>
            </h3>

            <div className="flex items-center justify-center gap-1">
              <p className="text-gray-400 text-lg">Loading portfolio</p>
              <span className="text-[#f5c518] text-lg w-8 text-left">
                {dots}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-xs mx-auto">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full bg-gradient-to-r from-[#f5c518] via-yellow-400 to-[#f5c518]"
              />
            </div>
            <p className="text-gray-500 text-sm text-center mt-3">
              Preparing your experience
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Anshuman Kharbade. All rights reserved.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
