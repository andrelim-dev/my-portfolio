import Icon from "./Icon.jsx";

export default function SkillCard({ title, icon, items }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-low transition-all cursor-default bg-surface-container-lowest">
      <div>
        <Icon name={icon} className="text-primary mb-4 sm:mb-6" />
        <h3 className="font-headline-md text-headline-md mb-4 sm:mb-6 text-on-background">
          {title}
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1"
            >
              <span className="text-on-surface-variant text-body-md">
                {item.name}
              </span>
              <span className="shrink-0 text-[10px] bg-on-background/5 px-2 py-1 rounded text-on-background font-label-sm">
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
