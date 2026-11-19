import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { links, SECTION_IDS } from "../constants/navigation";
import { PROFILE } from "../constants/site";
import useActiveSection from "../hooks/useActiveSection";
import { spring, springSheet } from "../lib/motion";
import StatusPill from "./ui/StatusPill";
import ThemeToggle from "./ui/ThemeToggle";

/**
 * Floating "fluid cloud" header: one glass pill holding the logo, section links with a sliding
 * highlight, a live availability pill and the theme switch. On small screens the links move into
 * a glass sheet that springs open below the pill.
 */
export default function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const [panel, setPanel] = useState(null); // null | "status" | "menu"
  const navRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [box, setBox] = useState(null);

  // Slide the highlight to the active link. Positions are measured relative to the <ul> with bounding
  // rects (offsetLeft would be relative to the link's own positioned <li>, which is always 0).
  const measure = useCallback(() => {
    const list = listRef.current;
    const el = itemRefs.current[active];
    if (!list || !el) return;
    const link = el.getBoundingClientRect();
    if (link.width === 0) return; // the list is hidden below the lg breakpoint
    const x = Math.round((link.left - list.getBoundingClientRect().left) * 10) / 10;
    const w = Math.round(link.width * 10) / 10;
    setBox((prev) => (prev && prev.x === x && prev.w === w ? prev : { x, w }));
  }, [active]);
  useLayoutEffect(measure, [measure]);
  useEffect(() => {
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // close any open panel on outside click or Escape
  useEffect(() => {
    if (!panel) return undefined;
    const onDown = (e) => {
      if (!navRef.current?.contains(e.target)) setPanel(null);
    };
    const onKey = (e) => e.key === "Escape" && setPanel(null);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [panel]);

  const toggle = (name) => setPanel((p) => (p === name ? null : name));
  const menuOpen = panel === "menu";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <m.nav
        ref={navRef}
        aria-label="Primary"
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={spring}
        className="pointer-events-auto relative isolate flex w-full max-w-[980px] items-center gap-2 rounded-full p-1.5"
      >
        {/* the glass is its own layer so popovers inside the nav can blur the page, not just the nav */}
        <span aria-hidden="true" className="glass absolute inset-0 -z-10 rounded-full" />

        <a href="#hero" aria-label={`AK, ${PROFILE.name}: back to top`} className="shrink-0 rounded-full">
          <m.span
            whileHover={{ scale: 1.1, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
            transition={spring}
            className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] text-sm font-extrabold tracking-tight text-white shadow-lg shadow-[var(--btn-from)]/30"
          >
            AK
          </m.span>
        </a>

        <ul ref={listRef} className="relative ml-1 hidden items-center lg:flex">
          {box && (
            <m.span
              aria-hidden="true"
              className="glass-inner absolute inset-y-0 left-0 rounded-full"
              initial={false}
              animate={{ x: box.x, width: box.w }}
              transition={spring}
            />
          )}
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                ref={(el) => {
                  itemRefs.current[l.id] = el;
                }}
                aria-current={active === l.id ? "true" : undefined}
                className={`block rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active === l.id ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5">
          <StatusPill open={panel === "status"} onToggle={() => toggle("status")} onClose={() => setPanel(null)} />
          <ThemeToggle />
          <m.button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => toggle("menu")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.86 }}
            transition={spring}
            className="glass-inner grid size-10 shrink-0 place-items-center rounded-full text-ink lg:hidden"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </m.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <m.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.9, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8, transition: { duration: 0.15 } }}
              transition={springSheet}
              style={{ transformOrigin: "top center" }}
              className="glass absolute inset-x-0 top-[calc(100%+0.75rem)] glass-scroll max-h-[calc(100svh-6.5rem)] overflow-y-auto rounded-[2rem] p-3 lg:hidden"
            >
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.id}>
                    <m.a
                      href={`#${l.id}`}
                      onClick={() => setPanel(null)}
                      aria-current={active === l.id ? "true" : undefined}
                      whileTap={{ scale: 0.93 }}
                      transition={spring}
                      className={`flex items-center gap-3 rounded-2xl p-3.5 text-sm font-semibold ${
                        active === l.id ? "glass-inner text-ink ring-1 ring-accent/50" : "text-ink-soft hover:bg-white/10"
                      }`}
                    >
                      <span className="text-base text-accent">{l.icon}</span>
                      {l.name}
                    </m.a>
                  </li>
                ))}
                <li>
                  <m.a
                    href={PROFILE.resume}
                    download
                    whileTap={{ scale: 0.95 }}
                    transition={spring}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] p-3.5 text-sm font-bold text-white"
                  >
                    <FaDownload aria-hidden="true" /> Download resume
                  </m.a>
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>
    </header>
  );
}
