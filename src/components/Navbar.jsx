import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { id: "hero", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((s) => !s);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Close on click outside menu
  const handleOverlayClick = (e) => {
    if (e.target.id === "menu-overlay") {
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4 z-110">
          <div
            className="w-11 h-11 rounded-md p-1"
            style={{ boxShadow: "0 0 18px rgba(245,197,24,0.18)" }}
          >
            <div className="w-full h-full bg-linear-to-br from-[#121212] to-[#0b0b0b] rounded-sm flex items-center justify-center font-bold text-[#f5c518]">
              AK
            </div>
          </div>

          <div className="hidden sm:block text-white">
            <div className="text-base font-semibold">Anshuman Kharbade</div>
            <div className="text-xs opacity-70">Web Developer</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center text-white">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm uppercase tracking-wider opacity-80 hover:opacity-100 focus:underline decoration-[#f5c518] decoration-3 transition"
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-110">
          <button
            onClick={toggle}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-black/40 border border-white/10 text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-overlay"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 md:hidden bg-black/90 backdrop-blur-2xl flex flex-col"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 19 }}
              className="flex flex-col items-center justify-center grow space-y-7 text-center bg-linear-to-b from-black/95 via-black/90 to-[#0b0b0b]/95 p-20"
            >
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl uppercase tracking-widest text-[#f5c518] drop-shadow-[0_0_14px_rgba(245,197,24,0.6)] hover:scale-110 transition-transform duration-300"
                  style={{ letterSpacing: 1.8 }}
                >
                  {l.name}
                </motion.button>
              ))}

              <div className="mt-10 flex gap-8 text-white text-sm">
                <motion.a
                  href="https://github.com/anshumankharbade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-200"
                  whileHover={{ y: -2 }}
                >
                  <Github className="w-5 h-5 text-[#f5c518]" />
                  Github
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/anshuman-kharbade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-200"
                  whileHover={{ y: -2 }}
                >
                  <Linkedin className="w-5 h-5 text-[#f5c518]" />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
