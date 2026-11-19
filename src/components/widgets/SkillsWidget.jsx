import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { skillCategories } from "../../constants/skills";
import { spring } from "../../lib/motion";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

export default function SkillsWidget({ className = "" }) {
  const [tab, setTab] = useState(0);
  const tabRefs = useRef([]);
  const current = skillCategories[tab];

  // arrow keys move between tabs, as in a native tab list
  const onKeyDown = (e) => {
    const last = skillCategories.length - 1;
    const next =
      e.key === "ArrowRight"
        ? tab === last
          ? 0
          : tab + 1
        : e.key === "ArrowLeft"
          ? tab === 0
            ? last
            : tab - 1
          : null;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <GlassCard
      as="article"
      id="skills"
      lift={3}
      className={`p-6 sm:p-8 ${className}`}
    >
      <WidgetTitle icon={<FaCode />}>Skills</WidgetTitle>

      <div
        role="tablist"
        aria-label="Skill categories"
        onKeyDown={onKeyDown}
        className="glass-inner mt-5 inline-flex max-w-full flex-wrap gap-1 rounded-3xl p-1.5 sm:rounded-full"
      >
        {skillCategories.map((c, i) => {
          const selected = tab === i;
          return (
            <m.button
              key={c.category}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`skill-tab-${i}`}
              aria-selected={selected}
              aria-controls="skill-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(i)}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold ${selected ? "text-white" : "text-ink-soft hover:text-ink"}`}
            >
              <m.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)]"
                initial={false}
                animate={{
                  opacity: selected ? 1 : 0,
                  scale: selected ? 1 : 0.8,
                }}
                transition={spring}
              />
              <span className="relative">{c.category}</span>
            </m.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={tab}
          id="skill-panel"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`skill-tab-${tab}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: spring }}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
          className="mt-5 rounded-2xl"
        >
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {current.skills.map((skill) => (
              <m.li
                key={skill.name}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={spring}
                className="glass-inner rounded-2xl p-4"
              >
                {/* brand colours sit on a dark chip so they stay legible in both themes */}
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-xl bg-slate-900/85 text-2xl"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <p className="mt-3 font-bold">{skill.name}</p>
                <p className="mt-0.5 text-sm text-ink-faint">
                  {skill.description}
                </p>
              </m.li>
            ))}
          </ul>
        </m.div>
      </AnimatePresence>
    </GlassCard>
  );
}
