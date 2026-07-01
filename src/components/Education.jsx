import { education } from "../data/education.js";
import Reveal from "./Reveal.jsx";
import TimelineDot from "./TimelineDot.jsx";

export default function Education() {
  return (
    <Reveal as="div" delay={200}>
      <h2 className="font-display text-headline-lg mb-16 text-on-background">
        Education
      </h2>
      <div className="relative pl-8 border-l-2 border-outline-variant/50 space-y-16">
        {education.map((entry) => (
          <div key={entry.id} className="relative">
            <TimelineDot current={entry.current} />
            <span
              className={`font-label-sm text-label-sm mb-2 block uppercase tracking-widest ${
                entry.current ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {entry.period}
            </span>
            <h3 className="font-headline-md text-headline-md mb-1 text-on-background">
              {entry.title}
            </h3>
            <p className="text-on-surface-variant font-body-md italic">
              {entry.org}
            </p>
            {entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low border border-outline-variant/30 px-3 py-1 rounded text-[10px] font-label-sm text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
