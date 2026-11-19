import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { spring, springSheet } from "../lib/motion";
import Chip from "./ui/Chip";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // Escape closes, Tab stays inside the dialog, page scroll is locked, focus returns to the trigger
  useEffect(() => {
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return undefined;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      return undefined;
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-3 sm:p-6">
      {/* blur-only backdrop. It is a sibling of the panel (not its parent) so the panel's own glass can still blur the page */}
      <m.div
        aria-hidden="true"
        className="glass-veil absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12, transition: { duration: 0.18 } }}
        transition={springSheet}
        className="glass-panel glass-scroll relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-3 sm:p-4"
      >
        <m.button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.88 }}
          transition={spring}
          className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-black/45 text-white ring-1 ring-white/25 backdrop-blur-md"
        >
          <FaTimes aria-hidden="true" />
        </m.button>

        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot`}
          width="800"
          height="450"
          className="aspect-[16/8] w-full rounded-3xl object-cover"
        />

        <div className="p-3 sm:p-5">
          <h2 id="project-dialog-title" className="title-gradient text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          {project.period && <p className="mt-1 text-sm text-ink-faint">{project.period}</p>}
          <p className="mt-3 leading-relaxed text-ink-soft">{project.longDesc}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Chip key={t} className="!px-2.5 !py-0.5 !text-xs">
                {t}
              </Chip>
            ))}
          </div>

          <div className={`mt-6 grid gap-6 ${project.challenges?.length ? "md:grid-cols-2" : ""}`}>
            <div>
              <h3 className="text-lg font-bold">Highlights</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft marker:text-accent">
                {project.highlights.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            {project.challenges?.length > 0 && (
              <div>
                <h3 className="text-lg font-bold">Challenges solved</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft marker:text-accent">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <m.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              transition={spring}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-5 font-bold text-white"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Open live demo
            </m.a>
            <m.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              transition={spring}
              className="glass-inner inline-flex h-11 items-center gap-2 rounded-full px-5 font-bold text-ink"
            >
              <FaGithub aria-hidden="true" /> View source
            </m.a>
          </div>
        </div>
      </m.div>
    </div>
  );
}
