import Reveal from "./Reveal.jsx";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "12+", label: "Tech Stack" },
  { value: "4+", label: "Certs" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 sm:py-20"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-gutter items-center">
        <Reveal className="active order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
          <span className="font-label-sm text-label-sm tracking-widest text-primary mb-4 sm:mb-6 block">
            HI, I&apos;M ANDRE
          </span>
          <h1 className="font-display text-[40px] leading-[1.1] sm:text-5xl lg:text-display mb-5 sm:mb-6 text-on-background">
            Full-Stack Developer &amp; AI Engineer
          </h1>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
            Passionate about building scalable web applications and intelligent
            AI-powered solutions. Bridging the gap between robust engineering
            and cutting-edge machine learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12 sm:mb-16">
            <a
              className="w-full sm:w-auto text-center px-8 py-4 bg-on-background text-background font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 font-label-sm text-label-sm"
              href="#project"
            >
              View Projects
            </a>
            <a
              className="w-full sm:w-auto text-center px-8 py-4 border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-variant/20 transition-all active:scale-95 font-label-sm text-label-sm"
              href="/CV_Andre.pdf"
              download="CV_Andre.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm mx-auto lg:max-w-none lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-headline-lg-mobile sm:text-headline-lg mb-1 text-on-background">
                  {stat.value}
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="active order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-64 h-84 sm:w-72 sm:h-96 lg:w-80 lg:h-105 rounded-3xl overflow-hidden z-10 border border-outline-variant/50 shadow-xl bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover"
              alt="My profile photo"
              src="/images/profile.jpg"
            />
          </div>
          <div className="absolute inset-0 -z-10 scale-125 opacity-20 blur-3xl bg-primary" />
        </Reveal>
      </div>
    </section>
  );
}
