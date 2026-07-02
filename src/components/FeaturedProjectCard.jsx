import Icon from "./Icon.jsx";

export default function FeaturedProjectCard({ project }) {
  return (
    <div className="col-span-12 lg:col-span-7 group">
      <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 h-full flex flex-col bg-white">
        <div className="h-80 relative overflow-hidden bg-surface-container-low">
          <div
            className="w-full h-full bg-contain bg-no-repeat bg-center scale-101"
            role="img"
            aria-label={project.alt}
            style={{ backgroundImage: `url('${project.image}')` }}
          />
          <div className="absolute top-6 left-6 flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-sm border border-outline-variant/30 text-on-background"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="p-10 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-headline-lg mb-4 text-on-background">
              {project.title}
            </h3>
            <p className="text-on-surface-variant font-body-md mb-8 max-w-xl">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-4 text-on-surface-variant">
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
