import React from "react";
import { motion } from "framer-motion";

const HERO_BG =
  "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-full relative flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/85 -z-10" />
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <div className="uppercase tracking-widest text-sm text-[#f5c518]">
              Portfolio
            </div>

            <h1
              className="text-5xl md:text-6xl font-extrabold text-[#f5c518] gold-glow"
              style={{ textShadow: "0 8px 28px rgba(245,197,24,0.12)" }}
            >
              Anshuman Kharbade
            </h1>

            <p className="text-lg opacity-75 max-w-xl">
              Web Developer • Tech Enthusiast • Lifelong Learner
            </p>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-md uppercase tracking-wider border border-white/10 hover:scale-[1.03] transition"
              >
                View Work
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-md uppercase tracking-wider border border-[#f5c518] hover:bg-[#f5c518]/20 transition"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
