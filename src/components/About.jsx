import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0b0b0b] py-20 text-white"
    >
      <div className="container mx-auto px-6 max-w-10xl text-center">
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-[#f5c518] mb-10 drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        >
          About Me
        </motion.h3>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md hover:border-[#f5c518]/40 transition-all duration-300"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I'm{" "}
            <span className="text-[#f5c518] font-semibold">
              Anshuman Kharbade
            </span>
            , a passionate web developer with a strong foundation in{" "}
            <span className="text-[#f5c518]">HTML</span>,{" "}
            <span className="text-[#f5c518]">CSS</span>, and{" "}
            <span className="text-[#f5c518]">JavaScript</span>, and growing
            expertise in the <span className="text-[#f5c518]">MERN stack</span>.
            I enjoy building interactive and responsive websites that blend
            clean design with smooth functionality.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-4">
            I hold a{" "}
            <span className="text-[#f5c518]">
              Bachelor's degree in Computer Applications (BCA)
            </span>
            , and am constantly learning through real-world projects using
            technologies like <span className="text-[#f5c518]">React.js</span>,{" "}
            <span className="text-[#f5c518]">Node.js</span>, and{" "}
            <span className="text-[#f5c518]">MongoDB</span>. My goal is to craft
            digital experiences that are fast, accessible, and user-friendly,
            while continuously evolving in the ever-changing tech world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
