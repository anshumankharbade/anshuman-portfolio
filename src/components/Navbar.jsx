import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const links = [
  { id: "hero", name: "Home", icon: <FaHome size={18} /> },
  { id: "about", name: "About", icon: <FaUser size={18} /> },
  { id: "experience", name: "Experience", icon: <FaBriefcase size={18} /> },
  { id: "education", name: "Education", icon: <FaGraduationCap size={18} /> },
  { id: "projects", name: "Projects", icon: <FaFolderOpen size={18} /> },
  { id: "skills", name: "Skills", icon: <FaCode size={18} /> },
  { id: "contact", name: "Contact", icon: <FaEnvelope size={18} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolling, setScrolling] = useState(false);
  const isUserScroll = useRef(false);

  const toggle = () => setOpen((s) => !s);

  const scrollTo = (id) => {
    isUserScroll.current = true;
    setScrolling(true);
    setActiveSection(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setScrolling(false);
        isUserScroll.current = false;
      }, 500);
    }
    setOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (isUserScroll.current) return;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = links.map((link) => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i] && scrollPosition >= sections[i].offsetTop) {
            setActiveSection(links[i].id);
            break;
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollTo("hero")}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center">
                <span className="bg-gradient-to-r from-[#f5c518] to-yellow-400 bg-clip-text text-transparent font-bold text-lg sm:text-xl">
                  AK
                </span>
              </div>

              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg tracking-tight">
                  Anshuman
                </div>
                <div className="text-xs text-gray-400">
                  Full Stack Developer
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-black/50 border border-white/10 rounded-xl p-1">
                {links.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === link.id
                        ? "text-black bg-gradient-to-r from-[#f5c518] to-yellow-400"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Social Links & Resume */}
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
            </div>

            {/* Mobile Menu btn */}
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg bg-black/50 border border-white/10 text-white hover:bg-[#f5c518]/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {open ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed top-0 right-0 h-full w-full max-w-sm z-50 md:hidden"
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
                      onClick={() => setOpen(false)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-black/50 border border-white/10 text-white hover:bg-[#f5c518]/10 transition-all duration-300"
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Menu links */}
                <div className="p-5 space-y-2">
                  {links.map((link, index) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
