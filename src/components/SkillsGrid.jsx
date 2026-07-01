import { skillGroups } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import SkillCard from "./SkillCard.jsx";

export default function SkillsGrid() {
  return (
    <section
      id="stack"
      className="py-32 px-margin-desktop max-w-container-max mx-auto"
    >
      <Reveal as="div" className="text-center mb-20">
        <h2 className="font-display text-headline-lg mb-4 text-on-background">
          Technical Skills
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          A curated collection of technologies and tools I use to build scalable
          web applications and AI-powered solutions.
        </p>
      </Reveal>

      <Reveal
        as="div"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillGroups.map((group) => (
          <SkillCard
            key={group.id}
            title={group.title}
            icon={group.icon}
            items={group.items}
          />
        ))}
      </Reveal>
    </section>
  );
}
