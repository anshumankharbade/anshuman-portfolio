import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaTasks,
  FaLaptopCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTools,
  FaCodeBranch,
} from "react-icons/fa";
import { IoRocket, IoGitNetwork } from "react-icons/io5";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Self-Taught Full Stack Developer",
      company: "Independent Learning & Skill Development",
      period: "Jan 2024 - Present",
      location: "Nagpur, India",
      description:
        "Self-directed learning and hands-on project development to master modern web technologies. Focused on building real-world applications while following industry best practices.",
      achievements: [
        "Built 6+ full-stack web applications using modern technologies",
        "Created responsive, accessible websites that work across all devices",
        "Implemented modern UI/UX principles with smooth animations",
        "Deployed applications using Vercel, Netlify, and GitHub Pages",
        "Maintained clean code with Git version control and best practices",
        "Learned and applied modern web development methodologies",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
        "REST APIs",
        "Node.js",
      ],
      icon: <FaLaptopCode />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 2,
      role: "Project Portfolio Developer",
      company: "Showcase Projects & Real-World Applications",
      period: "Apr 2024 - Present",
      location: "Nagpur, India",
      description:
        "Developing showcase projects to demonstrate technical skills and problem-solving abilities. Each project focuses on solving specific challenges and showcasing different aspects of web development.",
      achievements: [
        "Created a secure password manager with local encryption simulation",
        "Built a fully functional Spotify clone with audio playback",
        "Developed a real-time currency converter with API integration",
        "Designed interactive games (Tic-Tac-Toe) with smooth gameplay",
        "Optimized all projects for performance and SEO best practices",
        "Documented code and maintained comprehensive README files",
      ],
      technologies: [
        "React",
        "JavaScript",
        "API Integration",
        "Local Storage",
        "State Management",
        "Responsive Design",
        "Performance Optimization",
      ],
      icon: <FaProjectDiagram />,
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const skillsGained = [
    {
      name: "Frontend Development",
      level: 85,
      description: "React, JavaScript, Responsive Design",
    },
    {
      name: "UI/UX Design",
      level: 80,
      description: "Tailwind CSS, Framer Motion, Accessibility",
    },
    {
      name: "Problem Solving",
      level: 90,
      description: "Debugging, Algorithmic Thinking",
    },
    {
      name: "Version Control",
      level: 85,
      description: "Git, GitHub, Collaboration",
    },
    {
      name: "Project Management",
      level: 75,
      description: "Planning, Documentation, Deployment",
    },
    {
      name: "Self-Learning",
      level: 95,
      description: "Research, Implementation, Adaptation",
    },
  ];

  const developmentPrinciples = [
    {
      icon: <IoGitNetwork />,
      title: "Continuous Learning",
      description:
        "Regularly exploring new technologies and staying updated with industry trends",
    },
    {
      icon: <FaTools />,
      title: "Best Practices",
      description:
        "Following coding standards, documentation, and clean architecture",
    },
    {
      icon: <FaCodeBranch />,
      title: "Iterative Development",
      description:
        "Building, testing, and refining projects through multiple iterations",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem-First Approach",
      description:
        "Focusing on solving real problems rather than just implementing features",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#f5c518]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
            <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
              Development Journey
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
              Experience
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Hands-on learning through building real projects
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#f5c518] via-transparent to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
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

                {/* Experience Card */}
                <div
                  className={`relative ml-16 md:ml-0 group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
                  />

                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-xl bg-gradient-to-br from-[#f5c518]/20 to-transparent">
                            {exp.icon}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">
                              {exp.role}
                            </h4>
                            <p className="text-[#f5c518] font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#f5c518]" />
                            {exp.period}
                          </span>
                          <span className="hidden md:inline">•</span>
                          <span className="flex items-center gap-2">
                            <IoRocket className="text-[#f5c518]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaLightbulb className="text-[#f5c518]" />
                        Key Accomplishments
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 text-gray-300 text-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#f5c518] mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaTasks className="text-[#f5c518]" />
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-black/50 to-black/30 border border-white/10 text-gray-300 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Development Approach
            </h4>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Methodologies and principles that guide my learning and project
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10 backdrop-blur-sm hover:border-[#f5c518]/30 transition-all duration-300"
              >
                <div className="text-[#f5c518] text-2xl mb-3">
                  {principle.icon}
                </div>
                <h5 className="font-bold text-white mb-2">{principle.title}</h5>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Gained Section */}
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
                  Skills Developed Through Projects
                </h4>
                <p className="text-gray-400">
                  Practical skills gained through hands-on project development
                  and self-learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillsGained.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-300 font-medium block">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-xs block mt-1">
                          {skill.description}
                        </span>
                      </div>
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            With hands-on experience building real projects and a passion for
            continuous learning, I'm ready to contribute to meaningful
            development work.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black hover:from-yellow-400 hover:to-[#f5c518] transition-all duration-300 group"
          >
            <span>Let's Work Together</span>
            <IoRocket className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Explore my projects below to see practical examples of my work
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
