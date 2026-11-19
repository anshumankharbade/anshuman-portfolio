import { FaGraduationCap } from "react-icons/fa";
import { EDUCATION } from "../../constants/resume";
import Chip from "../ui/Chip";
import GlassCard from "../ui/GlassCard";
import WidgetTitle from "../ui/WidgetTitle";

export default function EducationWidget({ className = "" }) {
  return (
    <GlassCard as="article" id="education" lift={3} className={`p-6 sm:p-8 ${className}`}>
      <WidgetTitle icon={<FaGraduationCap />}>Education</WidgetTitle>

      <ul className="mt-5 space-y-3">
        {EDUCATION.map((e) => (
          <li key={e.title} className="glass-inner rounded-2xl p-4">
            <h4 className="font-bold leading-snug">{e.title}</h4>
            <p className="mt-1 text-sm text-ink-soft">
              {e.school}, {e.place}
            </p>
            <p className="text-sm text-ink-faint">{e.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.summary}</p>
            {e.chips.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.chips.map((c) => (
                  <Chip key={c} className="!px-2.5 !py-0.5 !text-xs">
                    {c}
                  </Chip>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
