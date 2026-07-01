import Icon from "./Icon.jsx";

export default function CertificationCard({ certification }) {
  return (
    <div className="glass-card p-8 rounded-xl flex flex-col items-start gap-6 hover:bg-surface-container-low transition-colors bg-white">
      <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-lg border border-outline-variant/30">
        <Icon name={certification.icon} className="text-primary" />
      </div>
      <div>
        <h4 className="font-headline-md text-body-md mb-1 text-on-background">
          {certification.title}
        </h4>
        <p className="text-on-surface-variant text-[12px] mb-4">
          {certification.issuer}
        </p>
        <a
          className="text-primary text-label-sm font-label-sm flex items-center gap-1"
          href={certification.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW CREDENTIAL <Icon name="north_east" className="text-xs" />
        </a>
      </div>
    </div>
  );
}
