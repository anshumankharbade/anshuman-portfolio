import { m } from "framer-motion";
import { FaDownload, FaUser } from "react-icons/fa";
import { PROFILE } from "../../constants/site";
import { spring } from "../../lib/motion";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "5", label: "Production apps" },
  { value: "MERN", label: "Specialist" },
  { value: "BCA", label: "Graduated 2024" },
];

export default function AboutWidget({ className = "" }) {
  return (
    <GlassCard as="article" id="about" lift={3} className={`flex flex-col p-6 sm:p-8 ${className}`}>
      <WidgetTitle icon={<FaUser />}>About me</WidgetTitle>

      <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
        <p>
          Full Stack Developer with <strong className="font-semibold text-ink">2+ years</strong> of hands-on experience
          independently building and shipping{" "}
          <strong className="font-semibold text-ink">5 production-grade web applications</strong>, from architecture
          through cloud deployment on Vercel, Netlify and Render.
        </p>
        <p>
          I delivered a freelance booking platform for a paying client, a family-owned car rental business, replacing
          manual pricing calculations with an automated <strong className="font-semibold text-ink">dynamic pricing engine</strong>.
          I also built an <strong className="font-semibold text-ink">AI-powered pharmacy e-commerce platform</strong> with
          cost-conscious Gemini API caching.
        </p>
        <p>
          I own projects end to end: requirements, database schema, responsive web design, front end and back end
          development, and deployment. Open to contract or full-time engineering roles.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="glass-inner flex flex-col rounded-2xl p-4">
            <dt className="order-2 text-sm text-ink-faint">{s.label}</dt>
            <dd className="order-1 title-gradient text-2xl font-extrabold tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>

      <m.a
        href={PROFILE.resume}
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.93 }}
        transition={spring}
        className="mt-6 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-6 text-base font-bold text-white"
      >
        <FaDownload aria-hidden="true" /> Download resume
      </m.a>
    </GlassCard>
  );
}
