import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const DesktopSocial = () => {
  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="flex items-center gap-3 ml-4">
      <motion.a
        href="https://github.com/anshumankharbade"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.95 }}
        className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
      >
        <FaGithub className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/anshumankharbade"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.95 }}
        className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
      >
        <FaLinkedin className="w-5 h-5" />
      </motion.a>

      <motion.button
        onClick={downloadResume}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black hover:opacity-90 transition-all duration-300"
      >
        <FaDownload className="w-4 h-4" />
        <span>Resume</span>
      </motion.button>
    </div>
  );
};

export default DesktopSocial;