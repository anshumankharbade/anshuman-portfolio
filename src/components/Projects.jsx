import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "LockR - Password Manager",
      desc: "A secure and responsive password manager built with React, offering local credential storage with copy, edit, and delete functionality.",
      tags: ["React", "Node.js", "Tailwind CSS"],
      live: "https://lockr-pi.vercel.app/",
      github: "https://github.com/anshumankharbade/lockr",
    },
    {
      id: 2,
      title: "Spotify Clone",
      desc: "Front-end clone of Spotify with audio playback, play/pause, progress bar, and responsive design.",
      tags: ["Html", "CSS", "JavaScript"],
      live: "https://spotify-clone-3oxp.vercel.app/",
      github: "https://github.com/anshumankharbade/Spotify-clone",
    },
    {
      id: 3,
      title: "Currency Converter",
      desc: "Responsive web app to convert currencies using real-time exchange rates API.",
      tags: ["Html", "CSS", "JavaScript", "API"],
      live: "https://anshumankharbade.github.io/Currency-Converter/",
      github: "https://github.com/anshumankharbade/Currency-Converter",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-[#0b0b0b] py-20"
    >
      <div className="container mx-auto px-6 text-center text-white">
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-[#f5c518] mb-14 drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="bg-black/50 p-6 rounded-2xl border border-white/10 hover:border-[#f5c518] hover:shadow-[0_0_25px_rgba(245,197,24,0.3)] transition-all duration-300 backdrop-blur-md"
            >
              <h4 className="text-2xl font-semibold text-[#f5c518] mb-2">
                {p.title}
              </h4>
              <p className="text-sm text-gray-300 mb-4">{p.desc}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase opacity-80 border border-white/10 px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-[#f5c518] rounded-md hover:bg-[#ffdb4d] transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-[#f5c518] text-[#f5c518] rounded-md hover:bg-[#f5c518] hover:text-black transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
