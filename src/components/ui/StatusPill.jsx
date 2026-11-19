import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { PROFILE, STATUSES } from "../../constants/site";
import useClock from "../../hooks/useClock";
import { spring, springSheet } from "../../lib/motion";

/**
 * Live availability pill for the cloud header.
 * Cycles through STATUSES, and opens a glass panel where visitors can pick one,
 * see your local time, and jump to the contact form.
 */
export default function StatusPill({ open, onToggle, onClose }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const time = useClock(PROFILE.timeZone);

  // auto-cycle, paused while the panel is open and for reduced-motion users
  useEffect(() => {
    if (reduce || open) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % STATUSES.length), 4500);
    return () => clearInterval(id);
  }, [reduce, open]);

  return (
    <div className="relative">
      <m.button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="status-panel"
        onClick={onToggle}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        transition={spring}
        className="glass-inner flex h-10 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold text-ink sm:text-sm"
      >
        {/* every label sits in the same grid cell, so the pill keeps a stable width while it cycles */}
        <span className="grid">
          {STATUSES.map((s, i) => (
            <m.span
              key={s.id}
              className="col-start-1 row-start-1 whitespace-nowrap"
              animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 10 }}
              transition={spring}
              aria-hidden={i !== index}
            >
              <span aria-hidden="true">{s.emoji}</span> {s.label}
            </m.span>
          ))}
        </span>
      </m.button>

      <AnimatePresence>
        {open && (
          <m.div
            id="status-panel"
            role="dialog"
            aria-label="Availability"
            initial={{ opacity: 0, scale: 0.88, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -6, transition: { duration: 0.15 } }}
            transition={springSheet}
            style={{ transformOrigin: "top right" }}
            className="glass absolute right-0 top-[calc(100%+0.9rem)] z-10 w-[min(21rem,calc(100vw-1.5rem))] rounded-3xl p-3"
          >
            <div className="space-y-2">
              {STATUSES.map((s, i) => (
                <m.button
                  key={s.id}
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                  className={`w-full rounded-2xl p-3 text-left ${i === index ? "glass-inner ring-1 ring-accent/50" : "hover:bg-white/10"}`}
                >
                  <span className="block text-sm font-bold">
                    <span aria-hidden="true">{s.emoji}</span> {s.label}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{s.detail}</span>
                </m.button>
              ))}
            </div>

            <div className="glass-inner mt-3 flex items-center justify-between rounded-2xl px-4 py-3">
              <span className="text-sm text-ink-soft">{PROFILE.city}, India</span>
              <span className="text-sm font-bold tabular-nums">{time}</span>
            </div>

            <m.a
              href="#contact"
              onClick={onClose}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="mt-3 flex h-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] text-sm font-bold text-white"
            >
              Start a conversation
            </m.a>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
