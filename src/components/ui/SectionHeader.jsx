import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ 
  title, 
  subtitle, 
  description,
  alignment = "center",
  titleGradient = "from-[#f5c518] via-yellow-300 to-[#f5c518]"
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const lineAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignmentClasses[alignment]}`}
    >
      <div className={`inline-flex items-center gap-3 mb-4 ${lineAlignment[alignment]}`}>
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
        <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
          {subtitle}
        </span>
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#f5c518]" />
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        <span className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
          {title}
        </span>
      </motion.h3>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;