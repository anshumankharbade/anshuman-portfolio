import { FaCheckCircle, FaCommentDots, FaProjectDiagram, FaPuzzlePiece, FaStar } from "react-icons/fa";
import { STRENGTHS } from "../../constants/resume";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

const ICONS = [FaProjectDiagram, FaCommentDots, FaPuzzlePiece, FaCheckCircle];

export default function StrengthsWidget({ className = "" }) {
  return (
    <GlassCard as="article" id="strengths" lift={3} className={`p-6 sm:p-8 ${className}`}>
      <WidgetTitle icon={<FaStar />}>Strengths</WidgetTitle>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {STRENGTHS.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <li key={s.title} className="glass-inner rounded-2xl p-4">
              <Icon aria-hidden="true" className="text-lg text-accent" />
              <h4 className="mt-3 font-bold">{s.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
