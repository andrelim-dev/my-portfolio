import Icon from "./Icon.jsx";

export default function FeaturedProjectCard({ project }) {
  return (
    <div className="col-span-12 lg:col-span-7 group">
      <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 h-full flex flex-col bg-surface-container-lowest">
        <div className="h-56 sm:h-64 lg:h-80 relative overflow-hidden bg-surface-container-low">
          <div
            className="w-full h-full bg-contain bg-no-repeat bg-center scale-101"
            role="img"
            aria-label={project.alt}
            style={{ backgroundImage: `url('${project.image}')` }}
          />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-sm border border-outline-variant/30 text-on-background"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between gap-6">
          <div>
            <h3 className="font-display text-headline-md sm:text-headline-lg mb-3 sm:mb-4 text-on-background">
              {project.title}
            </h3>
            <p className="text-on-surface-variant font-body-md mb-2 sm:mb-8 max-w-xl">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3 sm:gap-4 text-on-surface-variant">
              {project.stack.map((tech) => (
                <span key={tech} className="text-label-sm font-label-sm">
                  {tech}
                </span>
              ))}
            </div>
            {/* Will be updated to project detail page */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/btn text-on-background cursor-pointer hover:mr-2 transition-all"
            >
              <span className="font-label-sm text-label-sm">VIEW DETAILS</span>
              <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
