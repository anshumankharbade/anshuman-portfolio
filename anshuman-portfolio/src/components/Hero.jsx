import { m } from "framer-motion";
import { FaDownload, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import { PROFILE } from "../constants/site";
import { SOCIAL_LINKS } from "../constants/social";
import useClock from "../hooks/useClock";
import { spring } from "../lib/motion";
import Chip from "./ui/Chip";
import GlassCard from "./ui/GlassCard";

// Hero is the LCP: text is in the first paint (no opacity:0 start, no remote image).
// The entrance (.rise) only moves things, it never hides them.
const press = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.93 }, transition: spring };

export default function Hero() {
  const time = useClock(PROFILE.timeZone);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <h1
            id="hero-title"
            className="rise title-gradient text-[clamp(3rem,9vw,5.75rem)] font-extrabold leading-[0.98] tracking-tight"
            style={{ "--i": 0 }}
          >
            <span className="block">Anshuman</span>
            <span className="block">Kharbade</span>
          </h1>
          <p className="rise title-accent mt-5 text-2xl font-bold sm:text-3xl" style={{ "--i": 1 }}>
            {PROFILE.role}
          </p>
          <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-ink-soft" style={{ "--i": 2 }}>
            {PROFILE.tagline}
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 3 }}>
            <m.a
              href="#projects"
              {...press}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-6 text-base font-bold text-white shadow-lg shadow-[var(--btn-from)]/30"
            >
              <FaFolderOpen aria-hidden="true" /> View projects
            </m.a>
            <m.a
              href="#contact"
              {...press}
              className="glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-base font-bold text-ink"
            >
              <FaEnvelope aria-hidden="true" /> Contact me
            </m.a>
          </div>
        </div>

        {/* control-center style widget cluster */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rise" style={{ "--i": 3 }}>
            <GlassCard reveal={false} className="h-full p-5">
              <p className="text-sm text-ink-faint">{PROFILE.city} local time</p>
              <p className="title-gradient mt-1 text-3xl font-extrabold tabular-nums">{time}</p>
            </GlassCard>
          </div>

          <div className="rise lg:mt-8" style={{ "--i": 4 }}>
            <GlassCard reveal={false} className="relative h-full p-5">
              <p className="text-sm text-ink-faint">Have a project?</p>
              <a href="#contact" className="mt-1 block text-xl font-bold after:absolute after:inset-0 after:rounded-3xl">
                Let&rsquo;s talk
              </a>
            </GlassCard>
          </div>

          <div className="rise col-span-2" style={{ "--i": 5 }}>
            <GlassCard reveal={false} className="p-5">
              <p className="text-sm text-ink-faint">Main stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROFILE.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="rise col-span-2" style={{ "--i": 6 }}>
            <GlassCard reveal={false} interactive={false} className="flex items-center gap-2 p-3">
              {SOCIAL_LINKS.map((s) => (
                <m.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  {...press}
                  className="glass-inner grid size-12 place-items-center rounded-2xl text-ink"
                >
                  {s.icon}
                </m.a>
              ))}
              <m.a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send an email"
                {...press}
                className="glass-inner grid size-12 place-items-center rounded-2xl text-ink"
              >
                <FaEnvelope aria-hidden="true" className="size-5" />
              </m.a>
              <m.a
                href={PROFILE.resume}
                download
                {...press}
                className="glass-inner ml-auto inline-flex h-12 items-center gap-2 rounded-2xl px-4 text-sm font-bold text-ink"
              >
                <FaDownload aria-hidden="true" /> Resume
              </m.a>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
