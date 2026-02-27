import React from "react";
import { motion } from "framer-motion";

const DesktopNavigation = ({ links, activeSection, onLinkClick }) => {
  return (
    <div className="flex items-center gap-1 bg-black/50 border border-white/10 rounded-xl p-1">
      {links.map((link) => (
        <motion.button
          key={link.id}
          onClick={() => onLinkClick(link.id)}
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
  );
};

export default DesktopNavigation;