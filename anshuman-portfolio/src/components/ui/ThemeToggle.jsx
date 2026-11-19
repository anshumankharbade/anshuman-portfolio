import { useRef } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../theme/ThemeContext";
import { spring } from "../../lib/motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const ref = useRef(null);
  const next = theme === "dark" ? "light" : "dark";

  const onClick = () => {
    const rect = ref.current.getBoundingClientRect();
    // the glow blooms out from the middle of the button
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <m.button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={`Switch to ${next} theme`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.86 }}
      transition={spring}
      className="theme-toggle glass-inner relative isolate grid size-10 shrink-0 place-items-center rounded-full text-[var(--halo-ink)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          aria-hidden="true"
          initial={{ rotate: -80, scale: 0.3, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 80, scale: 0.3, opacity: 0 }}
          transition={spring}
        >
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </m.span>
      </AnimatePresence>
    </m.button>
  );
}
