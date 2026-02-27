import React from "react";
import { motion } from "framer-motion";

const Logo = ({ onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 cursor-pointer"
      onClick={onClick}
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
  );
};

export default Logo;