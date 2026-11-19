import { FaBookOpen, FaCheckCircle, FaPuzzlePiece, FaSyncAlt } from "react-icons/fa";
import { APPROACH } from "../../constants/resume";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

const ICONS = [FaBookOpen, FaCheckCircle, FaSyncAlt, FaPuzzlePiece];

export default function ApproachWidget({ className = "" }) {
  return (
    <GlassCard as="article" id="approach" lift={3} className={`p-6 sm:p-8 ${className}`}>
      <WidgetTitle icon={<FaPuzzlePiece />}>Development approach</WidgetTitle>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {APPROACH.map((a, i) => {
          const Icon = ICONS[i];
          return (
            <li key={a.title} className="glass-inner rounded-2xl p-4">
              <Icon aria-hidden="true" className="text-lg text-accent" />
              <h4 className="mt-3 font-bold">{a.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a.text}</p>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
