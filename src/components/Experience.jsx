import { experience } from "../data/experience.js";
import Reveal from "./Reveal.jsx";
import TimelineDot from "./TimelineDot.jsx";

export default function Experience() {
  return (
    <Reveal as="div">
      <h2 className="font-display text-headline-lg mb-16 text-on-background">
        Professional Journey
      </h2>
      <div className="relative pl-8 border-l-2 border-outline-variant/50 space-y-16">
        {experience.map((role) => (
          <div key={role.id} className="relative">
            <TimelineDot current={role.current} />
            <span
              className={`font-label-sm text-label-sm mb-2 block uppercase tracking-widest ${
                role.current ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {role.period}
            </span>
            <h3 className="font-headline-md text-headline-md mb-1 text-on-background">
              {role.role}
            </h3>
            <p className="text-on-surface-variant font-body-md mb-4 italic">
              {role.org}
            </p>
            <p className="text-on-surface-variant font-body-md">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
