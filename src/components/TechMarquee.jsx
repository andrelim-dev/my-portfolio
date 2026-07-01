import { techStack } from "../data/techStack.js";
import { Icon } from "@iconify/react";

function TechList() {
  return (
    <ul className="flex shrink-0 items-center gap-16 px-8">
      {techStack.map((tech) => (
        <li
          key={tech.name}
          className="group flex items-center gap-3 text-label-sm text-on-surface-variant transition-colors duration-300 hover:text-on-surface"
        >
          <Icon
            icon={tech.icon}
            className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <div className="w-full border-y border-outline-variant/30 bg-surface-container-low py-10 overflow-hidden">
      <div className="flex w-[200%] animate-marquee">
        {/* Rendered twice back-to-back so the CSS loop is seamless */}
        <TechList />
        <TechList />
      </div>
    </div>
  );
}
