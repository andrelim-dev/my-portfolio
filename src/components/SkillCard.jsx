import Icon from "./Icon.jsx";

export default function SkillCard({ title, icon, items }) {
  return (
    <div className="glass-card p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-low transition-all cursor-default bg-surface-container-lowest">
      <div>
        <Icon name={icon} className="text-primary mb-6" />
        <h3 className="font-headline-md text-headline-md mb-6 text-on-background">
          {title}
        </h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span className="text-on-surface-variant">{item.name}</span>
              <span className="text-[10px] bg-on-background/5 px-2 py-1 rounded text-on-background font-label-sm">
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
