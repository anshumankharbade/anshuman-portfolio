import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,197,24,0.12), rgba(245,197,24,0.06))",
            boxShadow: "0 8px 28px rgba(245,197,24,0.12)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" style={{ color: "var(--gold)" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
