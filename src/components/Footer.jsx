import React from "react";
import { FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-[#f5c518] font-semibold">
                Anshuman Kharbade
              </span>
              . All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <FaHeart className="inline text-red-500" /> in India
            </p>
          </div>

          {/* Back to Top btn */}
          <button
            onClick={scrollToTop}
            className="px-4 py-3 rounded-xl bg-black border border-white/10 text-gray-300 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-200"
            aria-label="Back to top"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Back to Top</span>
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

