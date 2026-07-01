import Icon from "./Icon.jsx";

export default function SecondaryProjectCard({ project }) {
  return (
    <div className="col-span-12 lg:col-span-5 group">
      <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 h-full flex flex-col bg-white">
        <div className="h-56 relative overflow-hidden bg-surface-container-low">
          <div
            className="w-full h-full bg-contain bg-no-repeat bg-center scale-102"
            role="img"
            aria-label={project.alt}
            style={{ backgroundImage: `url('${project.image}')` }}
          />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              {project.title}
            </h3>
            <p className="text-on-surface-variant font-body-md mb-6">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              {project.stack}
            </span>
            <button
              type="button"
              aria-label={`Open ${project.title}`}
              className="flex items-center p-2 border border-outline-variant/30 rounded-full hover:bg-on-background hover:text-background transition-colors text-on-background cursor-pointer"
            >
              <Icon name="open_in_new" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
