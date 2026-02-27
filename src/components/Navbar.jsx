import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import Logo from "./ui/Logo";
import DesktopNavigation from "./ui/DesktopNavigation";
import DesktopSocial from "./ui/DesktopSocial";
import MobileMenu from "./ui/MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserScroll = useRef(false);
  const scrollTimeoutRef = useRef(null); // 👈 new ref for timeout

  const [activeSection, setActiveSection] = useActiveSection(links, 100, isUserScroll);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const scrollTo = useCallback(
    (id) => {
      // Clear any pending timeout from previous clicks
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      isUserScroll.current = true;       // disable observer updates
      setActiveSection(id);               // immediately highlight clicked link

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Re‑enable observer after scroll finishes (1500ms should be enough for longest scroll)
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScroll.current = false;
        scrollTimeoutRef.current = null;
      }, 1500); // 👈 increased timeout

      setIsMenuOpen(false);
    },
    [setActiveSection]
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-white/10 navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Logo onClick={() => scrollTo("hero")} />

            <div className="hidden md:flex items-center gap-2">
              <DesktopNavigation
                links={links}
                activeSection={activeSection}
                onLinkClick={scrollTo}
              />
              <DesktopSocial />
            </div>

            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg bg-black/50 border border-white/10 text-white hover:bg-[#f5c518]/10 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-40 md:hidden"
              onClick={closeMenu}
            />
            <MobileMenu
              links={links}
              activeSection={activeSection}
              onLinkClick={scrollTo}
              onClose={closeMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}