import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaBook,
  FaAward,
  FaUniversity,
  FaFlask,
  FaCalculator,
} from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

export default function Education() {
  const educationDetails = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nagpur University",
      period: "2021 - 2024",
      location: "Nagpur, Maharashtra",
      score: "First Class",
      description:
        "Specialized in software development, database management, and web technologies. Developed strong foundation in programming, algorithms, and software engineering principles through hands-on projects.",
      icon: <FaGraduationCap />,
      color: "from-blue-500/20 to-cyan-500/20",
      achievements: [
        "Mastered programming fundamentals: Java, PHP, SQL",
        "Built multiple web applications as academic projects",
        "Developed understanding of software development lifecycle",
        "Gained knowledge in database design and management",
        "Participated in technical presentations and coding exercises",
      ],
      coursework: [
        "Web Technologies & Development",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (Java)",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Discrete Mathematics",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Maharashtra State Board",
      period: "2020 - 2021",
      location: "Nagpur, Maharashtra",
      score: "General Science Stream",
      description:
        "Completed higher secondary education with focus on science subjects, developing analytical and problem-solving skills that provided strong foundation for technical education.",
      icon: <IoMdSchool />,
      color: "from-purple-500/20 to-pink-500/20",
      achievements: [
        "Developed strong analytical thinking through science subjects",
        "Enhanced logical reasoning abilities",
        "Built foundation for technical problem-solving",
        "Learned systematic approach to complex problems",
      ],
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Information Technology",
      ],
      scienceIcon: <FaFlask />,
    },
  ];

  const skillsFromScience = [
    {
      skill: "Analytical Thinking",
      description: "Developed through physics and chemistry problem-solving",
      icon: "🔍",
    },
    {
      skill: "Logical Reasoning",
      description: "Enhanced through mathematics and scientific methods",
      icon: "🧠",
    },
    {
      skill: "Problem-Solving",
      description: "Systematic approach learned from scientific experiments",
      icon: "⚡",
    },
    {
      skill: "Attention to Detail",
      description: "Cultivated through laboratory work and calculations",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      {/* Bg elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#f5c518]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sec Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
            <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
              Academic Journey
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
              Education
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From science foundations to specialized computer applications
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* progress line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#f5c518] via-transparent to-transparent" />

            {educationDetails.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:pl-16" : "md:pl-1/2 md:pr-16"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#f5c518] z-10 ${
                    index % 2 === 0
                      ? "md:-translate-x-1/2"
                      : "md:translate-x-1/2"
                  }`}
                >
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#f5c518]/30 animate-ping" />
                </div>

                {/* Edu Card */}
                <div
                  className={`relative ml-16 md:ml-0 group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
                  />

                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-[#f5c518]/20 to-transparent">
                            {edu.id === 2 ? (
                              <FaFlask className="text-xl text-[#f5c518]" />
                            ) : (
                              edu.icon
                            )}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-1">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center gap-2 text-[#f5c518] font-medium">
                              <FaUniversity className="text-sm" />
                              <span>{edu.institution}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#f5c518]" />
                            {edu.period}
                          </span>
                          <span className="hidden md:inline">•</span>
                          <span>{edu.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#f5c518]/10 to-transparent border border-[#f5c518]/20 text-[#f5c518]">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FaAward className="text-[#f5c518]" />
                          {edu.id === 2 ? "Key Learnings" : "Key Achievements"}
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#f5c518] mt-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Course */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FaBook className="text-[#f5c518]" />
                          {edu.id === 2 ? "Subjects" : "Relevant Coursework"}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <motion.span
                              key={course}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-black/50 to-black/30 border border-white/10 text-gray-300"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Science Background */}
                    {edu.id === 2 && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FaCalculator className="text-[#f5c518]" />
                          Science Background Benefits for Programming
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {skillsFromScience.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-black/30 border border-white/10 text-center"
                            >
                              <div className="text-2xl mb-2">{item.icon}</div>
                              <div className="text-sm font-medium text-white mb-1">
                                {item.skill}
                              </div>
                              <div className="text-xs text-gray-400">
                                {item.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Educational Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f5c518] to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Educational Progression
                </h4>
                <p className="text-gray-400">
                  How my educational background supports my development career
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Science Foundation */}
                <div className="text-center p-6 rounded-xl bg-black/30 border border-white/10">
                  <div className="text-3xl mb-3">🔬</div>
                  <h5 className="font-bold text-white mb-2">
                    Science Foundation
                  </h5>
                  <p className="text-sm text-gray-300 mb-3">
                    Developed analytical thinking and problem-solving skills
                    through physics, chemistry, and mathematics
                  </p>
                  <div className="text-xs text-[#f5c518]">
                    12th Grade (General Science)
                  </div>
                </div>

                {/* Technical Education */}
                <div className="text-center p-6 rounded-xl bg-black/30 border border-white/10">
                  <div className="text-3xl mb-3">💻</div>
                  <h5 className="font-bold text-white mb-2">
                    Technical Education
                  </h5>
                  <p className="text-sm text-gray-300 mb-3">
                    Gained comprehensive computer science knowledge through BCA
                    program with hands-on programming experience
                  </p>
                  <div className="text-xs text-[#f5c518]">
                    Bachelor of Computer Applications
                  </div>
                </div>

                {/* Practical Application */}
                <div className="text-center p-6 rounded-xl bg-black/30 border border-white/10">
                  <div className="text-3xl mb-3">🚀</div>
                  <h5 className="font-bold text-white mb-2">
                    Practical Application
                  </h5>
                  <p className="text-sm text-gray-300 mb-3">
                    Applied theoretical knowledge to real projects, building
                    portfolio and professional skills
                  </p>
                  <div className="text-xs text-[#f5c518]">
                    Self-Taught & Professional Development
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm">
                  This progression from scientific foundation to technical
                  specialization provides a strong base for software
                  development, combining analytical rigor with practical coding
                  skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10 backdrop-blur-sm">
            <FaGraduationCap className="text-4xl text-[#f5c518] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">
              From Science Student to Developer
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey from General Science in 12th grade to BCA in Computer
              Applications shows a natural progression toward technology. The
              analytical thinking developed through science subjects provided
              excellent preparation for programming logic and problem-solving.
              The BCA degree then gave me specialized knowledge in software
              development, creating a perfect blend of scientific methodology
              and technical expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f5c518]/10 to-transparent border border-[#f5c518]/20 text-[#f5c518] text-sm">
                Scientific Method → Debugging
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f5c518]/10 to-transparent border border-[#f5c518]/20 text-[#f5c518] text-sm">
                Physics Logic → Programming Logic
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f5c518]/10 to-transparent border border-[#f5c518]/20 text-[#f5c518] text-sm">
                Chemistry Precision → Code Precision
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
