import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaLightbulb,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

export default function About() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 72 },
    { name: "MongoDB", level: 70 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const achievements = [
    { icon: <FaCode />, title: "Projects Built", value: "6+" },
    { icon: <FaGraduationCap />, title: "BCA Degree", value: "2024" },
    { icon: <FaLightbulb />, title: "Tech Stack", value: "MERN" },
    { icon: <FaRocket />, title: "Learning", value: "Continuous" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      {/* Bg elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#f5c518]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
            <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
              Introduction
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#f5c518]" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Get to know the developer behind the code
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f5c518] to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#f5c518]/20 to-transparent">
                    <IoSparkles className="text-2xl text-[#f5c518]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Anshuman Kharbade
                    </h4>
                    <p className="text-[#f5c518] font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Hi there! I'm a passionate web developer with a strong
                    foundation in{" "}
                    <span className="text-[#f5c518] font-semibold">HTML</span>,{" "}
                    <span className="text-[#f5c518] font-semibold">CSS</span>,
                    and{" "}
                    <span className="text-[#f5c518] font-semibold">
                      JavaScript
                    </span>
                    , and growing expertise in the{" "}
                    <span className="text-[#f5c518] font-semibold">
                      MERN stack
                    </span>
                    . I enjoy building interactive and responsive websites that
                    blend clean design with smooth functionality.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    I hold a{" "}
                    <span className="text-[#f5c518] font-semibold">
                      Bachelor's degree in Computer Applications (BCA)
                    </span>
                    , and am constantly learning through real-world projects
                    using technologies like{" "}
                    <span className="text-[#f5c518] font-semibold">
                      React.js
                    </span>
                    ,{" "}
                    <span className="text-[#f5c518] font-semibold">
                      Node.js
                    </span>
                    , and{" "}
                    <span className="text-[#f5c518] font-semibold">
                      MongoDB
                    </span>
                    . My goal is to craft digital experiences that are fast,
                    accessible, and user-friendly.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm hover:border-[#f5c518]/30 transition-all duration-300 group"
                >
                  <div className="text-[#f5c518] text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {achievement.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCode className="text-[#f5c518]" />
                  Technical Skills
                </h4>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[#f5c518] text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className="h-full bg-gradient-to-r from-[#f5c518] to-yellow-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume btn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black hover:from-yellow-400 hover:to-[#f5c518] hover:shadow-[0_0_30px_rgba(245,197,24,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <FaDownload className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f5c518] to-yellow-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
