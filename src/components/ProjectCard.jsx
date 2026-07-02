import Icon from "./Icon.jsx";

export default function ProjectCard({ project }) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
      <div className="glass-card rounded-2xl p-6 sm:p-7 lg:p-8 border border-outline-variant/30 h-full flex flex-col hover:bg-surface-container-low transition-colors bg-white">
        <div className="mb-6 sm:mb-8 lg:mb-10 text-primary">
          <Icon name={project.icon} className="text-3xl sm:text-4xl" />
        </div>
        <h3 className="font-headline-md text-headline-sm sm:text-headline-md mb-3 sm:mb-4 text-on-background">
          {project.title}
        </h3>
        <p className="text-on-surface-variant font-body-md mb-6 sm:mb-8 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            {project.stack}
          </span>
          {/* Will be updated to project detail page */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex items-center p-2 border border-outline-variant/30 rounded-full hover:bg-on-background hover:text-background transition-colors text-on-background cursor-pointer"
          >
            <Icon name="open_in_new" />
          </a>
        </div>
      </div>
    </div>
  );
}
