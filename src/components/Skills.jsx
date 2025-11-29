import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "REST APIs",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-[#0b0b0b] text-white py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-[#f5c518] mb-14 drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        >
          Skills
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto ">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(245,197,24,0.8)",
                textShadow: "0 0 12px rgba(245,197,24,0.9)",
              }}
              className="px-8 py-4 rounded-xl border border-white/10 bg-black/40 
                         hover:border-[#f5c518] hover:text-[#f5c518] transition-all duration-50 
                         text-base md:text-lg font-semibold uppercase tracking-wide backdrop-blur-md"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
