import {
  featuredProject,
  otherProjects,
  secondaryProject,
} from "../data/projects.js";
import Reveal from "./Reveal.jsx";
import FeaturedProjectCard from "./FeaturedProjectCard.jsx";
import SecondaryProjectCard from "./SecondaryProjectCard.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section
      id="project"
      className="py-20 sm:py-24 lg:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <h2 className="font-display text-headline-lg-mobile sm:text-headline-lg mb-10 sm:mb-16 reveal text-on-background">
        Selected Projects
      </h2>

      <Reveal
        as="div"
        className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-gutter"
      >
        <FeaturedProjectCard project={featuredProject} />
        <SecondaryProjectCard project={secondaryProject} />
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Reveal>
    </section>
  );
}
