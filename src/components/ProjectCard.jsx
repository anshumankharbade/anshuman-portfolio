import { m } from "framer-motion";
import { FaExpandAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { spring } from "../lib/motion";
import Chip from "./ui/Chip";
import GlassCard from "./ui/GlassCard";

const press = { whileHover: { scale: 1.06 }, whileTap: { scale: 0.92 }, transition: spring };

export default function ProjectCard({ project, index, wide, onOpen }) {
  const shown = project.tags.slice(0, wide ? 5 : 3);
  const rest = project.tags.length - shown.length;

  return (
    <GlassCard
      as="article"
      delay={(index % 3) * 0.06}
      className={`flex flex-col p-3 ${wide ? "md:col-span-2" : ""}`}
    >
      <div className="shrink-0 overflow-hidden rounded-2xl">
        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot`}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          className={`aspect-[16/9] w-full object-cover ${wide ? "md:aspect-[21/9]" : ""}`}
        />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {project.period && <p className="text-sm text-ink-faint">{project.period}</p>}
        <h3 className="mt-0.5 text-xl font-bold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {shown.map((t) => (
            <Chip key={t} className="!px-2.5 !py-0.5 !text-xs">
              {t}
            </Chip>
          ))}
          {rest > 0 && (
            <Chip className="!px-2.5 !py-0.5 !text-xs" aria-label={`and ${rest} more technologies`}>
              +{rest}
            </Chip>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <m.button
            type="button"
            onClick={() => onOpen(project)}
            {...press}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-4 text-sm font-bold text-white"
          >
            <FaExpandAlt aria-hidden="true" /> Details
          </m.button>
          <m.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}: live demo (opens in a new tab)`}
            {...press}
            className="glass-inner inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-bold text-ink"
          >
            <FaExternalLinkAlt aria-hidden="true" /> Live demo
          </m.a>
          <m.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}: source code on GitHub (opens in a new tab)`}
            {...press}
            className="glass-inner inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-bold text-ink"
          >
            <FaGithub aria-hidden="true" /> Code
          </m.a>
        </div>
      </div>
    </GlassCard>
  );
}
