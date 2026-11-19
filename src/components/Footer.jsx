import { m } from "framer-motion";
import { FaArrowUp, FaHeart } from "react-icons/fa";
import { PROFILE } from "../constants/site";
import { spring } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl px-6 py-5 text-sm text-ink-soft sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}. Made with{" "}
          <FaHeart aria-label="love" className="inline text-red-500" /> in India.
        </p>
        <p>Built with React, Tailwind CSS and Framer Motion.</p>
        <m.a
          href="#hero"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          transition={spring}
          className="glass-inner inline-flex h-10 items-center gap-2 rounded-full px-4 font-bold text-ink"
        >
          <FaArrowUp aria-hidden="true" /> Back to top
        </m.a>
      </div>
    </footer>
  );
}
