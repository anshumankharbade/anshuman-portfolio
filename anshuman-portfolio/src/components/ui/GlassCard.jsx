import { useRef } from "react";
import { m } from "framer-motion";
import { spring } from "../../lib/motion";

// `m` elements are looked up from a fixed map because LazyMotion's strict mode forbids `motion.*`.
const TAGS = { div: m.div, article: m.article, section: m.section, li: m.li };

/**
 * Liquid-glass surface.
 *  - hover: elastic spring lift, plus an inner radial light and a rim light that follow the cursor
 *  - press: spring squish
 *  - scroll: springs in once when it enters the viewport
 * The cursor position is written straight to CSS variables (no React re-render per move).
 */
export default function GlassCard({
  as = "div",
  className = "",
  interactive = true,
  reveal = true,
  lift = 6,
  delay = 0,
  children,
  ...props
}) {
  const ref = useRef(null);
  const frame = useRef(0);
  const Tag = TAGS[as] ?? m.div;

  const track = (e) => {
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  };

  const revealProps = reveal
    ? {
        initial: { opacity: 0, y: 28, scale: 0.97 },
        whileInView: { opacity: 1, y: 0, scale: 1, transition: { ...spring, delay } },
        viewport: { once: true, margin: "0px 0px -8% 0px" },
      }
    : {};

  const interactiveProps = interactive
    ? {
        whileHover: { y: -lift, scale: 1.008, transition: spring },
        whileTap: { scale: 0.985, transition: spring },
        onPointerMove: track,
        onPointerEnter: track,
      }
    : {};

  return (
    <Tag
      ref={ref}
      transition={spring}
      className={`glass ${interactive ? "spotlight" : ""} rounded-3xl ${className}`}
      {...revealProps}
      {...interactiveProps}
      {...props}
    >
      {children}
    </Tag>
  );
}
