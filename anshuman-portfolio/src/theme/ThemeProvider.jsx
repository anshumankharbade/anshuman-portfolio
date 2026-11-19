import { useCallback, useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const THEME_COLOR = { dark: "#0a0f21", light: "#eaf0fb" };

function applyTheme(next) {
  document.documentElement.dataset.theme = next;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[next]);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage can be blocked (private mode); the theme still applies for this visit */
  }
}

// The glow is tinted for the theme being entered: warm sunrise light going to light mode,
// cool moonlight going to dark mode (rgb values, used with different alphas below).
const GLOW = {
  light: { core: "255, 214, 140", mid: "255, 176, 110", ring: "255, 190, 100" },
  dark: { core: "132, 160, 255", mid: "112, 96, 235", ring: "160, 182, 255" },
};

/**
 * A gentle bloom of light that spreads out of the toggle while the page palette fades underneath it,
 * plus a soft ripple ring around the button itself.
 */
function ThemeGlow({ glow, onDone }) {
  const c = GLOW[glow.to];
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <m.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: glow.x,
          top: glow.y,
          width: "230vmax",
          height: "230vmax",
          background: `radial-gradient(circle closest-side, rgba(${c.core}, 0.55) 0%, rgba(${c.mid}, 0.28) 38%, rgba(${c.mid}, 0) 100%)`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 1, 0] }}
        transition={{
          scale: { duration: 1.7, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 1.7, times: [0, 0.22, 1], ease: "easeInOut" },
        }}
        onAnimationComplete={onDone}
      />
      <m.span
        className="absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: glow.x,
          top: glow.y,
          border: `2px solid rgba(${c.ring}, 0.7)`,
          boxShadow: `0 0 24px 4px rgba(${c.ring}, 0.45)`,
        }}
        initial={{ scale: 1, opacity: 0.9 }}
        animate={{ scale: 3.4, opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </div>
  );
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  const [glow, setGlow] = useState(null);
  const fadeTimer = useRef(0);

  const commit = useCallback((next) => {
    applyTheme(next);
    setTheme(next);
  }, []);

  const toggleTheme = useCallback(
    (origin) => {
      const next = theme === "dark" ? "light" : "dark";
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return commit(next);

      // `theme-anim` (see index.css) makes every colour token fade over 0.9 s instead of snapping.
      // It must be on the page in the same frame the theme attribute changes.
      const root = document.documentElement;
      root.classList.add("theme-anim");
      clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => root.classList.remove("theme-anim"), 1400);

      commit(next);
      setGlow({
        id: Date.now(),
        x: origin?.x ?? window.innerWidth - 48,
        y: origin?.y ?? 40,
        to: next,
      });
      return undefined;
    },
    [theme, commit],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {glow && <ThemeGlow key={glow.id} glow={glow} onDone={() => setGlow(null)} />}
    </ThemeContext.Provider>
  );
}
