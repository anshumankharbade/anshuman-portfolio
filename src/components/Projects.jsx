import { useCallback, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { PROJECTS_DATA } from "../constants/projects";
import { spring } from "../lib/motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./ui/SectionTitle";

// How many projects are shown up front. PROJECTS_DATA is ordered newest first, so anything beyond this
// number (the older projects) sits under the "More projects" button. Add a new project at the TOP of
// the list and the oldest visible one moves under the button automatically.
const VISIBLE_PROJECTS = 5;

// Which cards are double width, chosen so every row of the 4-column desktop grid (and of the
// 2-column tablet grid) is completely filled, whatever the number of projects.
function wideSet(count) {
  const wide = new Set();
  let start = 0;
  while (count - start >= 6) {
    wide.add(start); // wide, narrow, narrow
    wide.add(start + 5); // narrow, narrow, wide
    start += 6;
  }
  const tail = { 1: [0], 2: [0, 1], 3: [0], 4: [], 5: [0, 1, 4] }[count - start] ?? [];
  tail.forEach((i) => wide.add(start + i));
  return wide;
}

function ProjectGrid({ projects, onOpen }) {
  const wide = wideSet(projects.length);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-5">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} wide={wide.has(i)} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const reduce = useReducedMotion();
  const moreRef = useRef(null);
  const buttonRef = useRef(null);
  const close = useCallback(() => setSelected(null), []);

  const newest = PROJECTS_DATA.slice(0, VISIBLE_PROJECTS);
  const older = PROJECTS_DATA.slice(VISIBLE_PROJECTS);

  const toggleMore = () => {
    const next = !showMore;
    setShowMore(next);
    // opening: bring the newly revealed cards into view. closing: bring the button back into view.
    setTimeout(
      () => (next ? moreRef.current : buttonRef.current)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: next ? "start" : "center" }),
      next ? 60 : 220,
    );
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionTitle id="projects-title" title="Projects">
        Full-stack apps and interactive builds, each with a live demo and source code.
      </SectionTitle>

      <ProjectGrid projects={newest} onOpen={setSelected} />

      <AnimatePresence initial={false}>
        {showMore && (
          <m.div
            id="more-projects"
            ref={moreRef}
            role="region"
            aria-label="Older projects"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={spring}
            className="mt-4 lg:mt-5"
          >
            <ProjectGrid projects={older} onOpen={setSelected} />
          </m.div>
        )}
      </AnimatePresence>

      {older.length > 0 && (
        <div className="mt-8 flex justify-center">
          <m.button
            ref={buttonRef}
            type="button"
            onClick={toggleMore}
            aria-expanded={showMore}
            aria-controls="more-projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
            transition={spring}
            className="glass inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-5 text-base font-bold text-ink"
          >
            {showMore ? "Show fewer projects" : "More projects"}
            {!showMore && (
              <span className="glass-inner grid min-w-6 place-items-center rounded-full px-2 py-0.5 text-sm tabular-nums">
                {older.length}
              </span>
            )}
            <m.span aria-hidden="true" animate={{ rotate: showMore ? 180 : 0 }} transition={spring}>
              <FaChevronDown />
            </m.span>
          </m.button>
        </div>
      )}

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </section>
  );
}
