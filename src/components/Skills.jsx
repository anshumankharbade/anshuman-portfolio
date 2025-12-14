import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      color: "from-blue-500/20 to-cyan-500/20",
      proficiency: "Advanced",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          level: 92,
          color: "#E34F26",
          proficiency: "Expert",
          description: "Semantic markup, accessibility",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          level: 90,
          color: "#1572B6",
          proficiency: "Expert",
          description: "Flexbox, Grid, responsive design",
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          level: 88,
          color: "#F7DF1E",
          proficiency: "Advanced",
          description: "ES6+, Async/Await, APIs",
        },
        {
          name: "React.js",
          icon: <FaReact />,
          level: 86,
          color: "#61DAFB",
          proficiency: "Advanced",
          description: "Hooks, Context API",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 90,
          color: "#06B6D4",
          proficiency: "Expert",
          description: "Utility-first, responsive",
        },
      ],
    },
    {
      category: "Backend & Databases",
      icon: "⚙️",
      color: "from-purple-500/20 to-pink-500/20",
      proficiency: "Intermediate",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          level: 75,
          color: "#339933",
          proficiency: "Intermediate",
          description: "REST APIs, NPM",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: 72,
          color: "#000000",
          proficiency: "Intermediate",
          description: "Middleware, routing",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          level: 70,
          color: "#47A248",
          proficiency: "Intermediate",
          description: "CRUD operations",
        },
        {
          name: "REST APIs",
          icon: <TbApi />,
          level: 85,
          color: "#FF6B6B",
          proficiency: "Advanced",
          description: "Design, documentation",
        },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      color: "from-green-500/20 to-emerald-500/20",
      proficiency: "Proficient",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt />,
          level: 80,
          color: "#F05032",
          proficiency: "Advanced",
          description: "Version control",
        },
        {
          name: "VS Code",
          level: 95,
          color: "#007ACC",
          proficiency: "Expert",
          description: "Extensions, debugging",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          level: 85,
          color: "#FF6C37",
          proficiency: "Advanced",
          description: "API testing",
        },
        {
          name: "Responsive Design",
          level: 92,
          color: "#F5C518",
          proficiency: "Expert",
          description: "Mobile-first, performance",
        },
      ],
    },
  ];

  const proficiencyLevels = {
    Beginner: {
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    Intermediate: {
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    Advanced: {
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    Expert: {
      color: "text-[#f5c518]",
      bg: "bg-[#f5c518]/10",
      border: "border-[#f5c518]/20",
    },
    Proficient: {
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#f5c518]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
            <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
              Technical Skills
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#f5c518]" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
              Skills & Proficiency
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base max-w-2xl mx-auto"
          >
            Detailed breakdown of my technical skills with proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const averageLevel = Math.round(
              category.skills.reduce((acc, skill) => acc + skill.level, 0) /
                category.skills.length
            );

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${category.color} to-black/90 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#f5c518]/50 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{category.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {category.category}
                        </h4>
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 mt-1 rounded-full text-xs font-medium ${
                            proficiencyLevels[category.proficiency].bg
                          } ${proficiencyLevels[category.proficiency].border} ${
                            proficiencyLevels[category.proficiency].color
                          }`}
                        >
                          {category.proficiency}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.1,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="p-1.5 rounded-md flex items-center justify-center"
                              style={{
                                backgroundColor: `${skill.color}20`,
                                border: `1px solid ${skill.color}40`,
                              }}
                            >
                              {skill.icon || (
                                <span className="text-lg">🛠️</span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <div className="text-gray-300 font-medium text-sm truncate">
                                {skill.name}
                              </div>
                            </div>
                          </div>
                          <div className="text-right min-w-[60px]">
                            <span
                              className="text-sm font-semibold block"
                              style={{ color: skill.color }}
                            >
                              {skill.level}%
                            </span>
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded-full ${
                                proficiencyLevels[skill.proficiency].bg
                              } ${
                                proficiencyLevels[skill.proficiency].border
                              } ${proficiencyLevels[skill.proficiency].color}`}
                            >
                              {skill.proficiency}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.1 + 0.2,
                              }}
                              className="absolute h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                              }}
                            />
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {skill.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">
                        {category.skills.length} technologies
                      </span>
                      <div className="flex items-center gap-1">
                        <FaChartLine className="text-[#f5c518] text-xs" />
                        <span className="text-gray-300">
                          Average: {averageLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <FaRocket className="text-[#f5c518] text-sm" />
            <span className="text-[#f5c518] font-medium text-sm">
              Focused on continuous learning and improvement
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
            Building strong fundamentals while staying current with modern
            technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
