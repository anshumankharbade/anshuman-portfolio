import SectionTitle from "./ui/SectionTitle";
import AboutWidget from "./widgets/AboutWidget";
import EducationWidget from "./widgets/EducationWidget";
import ExperienceWidget from "./widgets/ExperienceWidget";
import SkillsWidget from "./widgets/SkillsWidget";
import StrengthsWidget from "./widgets/StrengthsWidget";

/**
 * About, Experience, Education and Skills as modular dashboard widgets.
 * Rows are chosen so the three widgets the header links to (About, Experience, Skills)
 * never share a row, which keeps the active-section highlight accurate.
 */
export default function ControlCenter() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionTitle id="overview-title" title="Overview">
        Who I am, what I have studied and the tools I work with.
      </SectionTitle>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12 lg:gap-5">
        <AboutWidget className="md:col-span-6 lg:col-span-7" />
        <EducationWidget className="md:col-span-6 lg:col-span-5" />
        <ExperienceWidget className="md:col-span-6 lg:col-span-7" />
        <StrengthsWidget className="md:col-span-6 lg:col-span-5" />
        <SkillsWidget className="md:col-span-6 lg:col-span-12" />
      </div>
    </section>
  );
}
