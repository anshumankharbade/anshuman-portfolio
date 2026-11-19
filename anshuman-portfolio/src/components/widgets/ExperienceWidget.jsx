import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaBriefcase, FaChevronDown } from "react-icons/fa";
import { EXPERIENCE } from "../../constants/resume";
import { spring, springSettle } from "../../lib/motion";
import Chip from "../ui/Chip";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

export default function ExperienceWidget({ className = "" }) {
  const [open, setOpen] = useState(0);

  return (
    <GlassCard as="article" id="experience" lift={3} className={`p-6 sm:p-8 ${className}`}>
      <WidgetTitle icon={<FaBriefcase />}>Experience</WidgetTitle>

      <ul className="mt-5 space-y-3">
        {EXPERIENCE.map((job, i) => {
          const isOpen = open === i;
          return (
            <li key={job.title} className="glass-inner rounded-2xl">
              <h4>
                <button
                  type="button"
                  id={`job-${i}-btn`}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}-panel`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-start justify-between gap-4 rounded-2xl p-4 text-left"
                >
                  <span>
                    <span className="block text-base font-bold">{job.title}</span>
                    <span className="block text-sm text-ink-soft">{job.org}</span>
                    <span className="mt-1 block text-sm text-ink-faint">
                      {job.period}, {job.location}
                    </span>
                  </span>
                  <m.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={spring}
                    className="mt-1 shrink-0 text-ink-faint"
                  >
                    <FaChevronDown />
                  </m.span>
                </button>
              </h4>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={`job-${i}-panel`}
                    role="region"
                    aria-labelledby={`job-${i}-btn`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={springSettle}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="text-sm leading-relaxed text-ink-soft">{job.summary}</p>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft marker:text-accent">
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {job.tags.map((t) => (
                          <Chip key={t} className="!px-2.5 !py-0.5 !text-xs">
                            {t}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
