import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const MobileMenu = ({ links, activeSection, onLinkClick, onClose }) => {
  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 right-0 h-full w-full max-w-sm z-50 md:hidden"
      style={{ willChange: "transform" }}
    >
      <div className="h-full bg-black/95 border-l border-white/10 overflow-y-auto">
        {/* Menu Header */}
        <div className="p-5 border-b border-white/10 sticky top-0 bg-black/95 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center">
                <span className="bg-gradient-to-r from-[#f5c518] to-yellow-400 bg-clip-text text-transparent font-bold text-lg">
                  AK
                </span>
              </div>
              <div>
                <div className="text-white font-bold">Anshuman</div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-black/50 border border-white/10 text-white hover:bg-[#f5c518]/10 transition-all duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Menu links */}
        <div className="p-5 space-y-2">
          {links.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => {
                onLinkClick(link.id);
                onClose();
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-[#f5c518]/20 to-yellow-400/20 border border-[#f5c518]/30 text-[#f5c518]"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div
                className={`p-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-[#f5c518] text-black"
                    : "bg-white/10"
                }`}
              >
                {link.icon}
              </div>
              <span className="font-medium text-sm sm:text-base">
                {link.name}
              </span>
              {activeSection === link.id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-[#f5c518]" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Social & Resume */}
        <div className="p-5 border-t border-white/10 mt-auto">
          <div className="space-y-4">
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/anshumankharbade"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-black/50 border border-white/10 text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/anshumankharbade"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-black/50 border border-white/10 text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </div>

            <motion.button
              onClick={downloadResume}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black hover:opacity-90 transition-all duration-300"
            >
              <FaDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
