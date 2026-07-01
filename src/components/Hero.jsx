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
      className="min-h-[90vh] flex flex-col justify-center px-margin-desktop max-w-container-max mx-auto py-20"
    >
      <div className="grid lg:grid-cols-12 gap-gutter items-center">
        <Reveal className="active lg:col-span-7">
          <span className="font-label-sm text-label-sm tracking-widest text-primary mb-6 block">
            HI, I&apos;M ANDRE
          </span>
          <h1 className="font-display text-display mb-6 text-on-background">
            Full-Stack Developer &amp; AI Engineer
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Passionate about building scalable web applications and intelligent
            AI-powered solutions. Bridging the gap between robust engineering
            and cutting-edge machine learning.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              className="px-8 py-4 bg-on-background text-background font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 font-label-sm text-label-sm"
              href="#work"
            >
              View Projects
            </a>
            <a
              className="px-8 py-4 border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-variant/20 transition-all active:scale-95 font-label-sm text-label-sm"
              href="#"
            >
              Download Resume
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-headline-lg mb-1 text-on-background">
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
          className="active lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-80 h-105 rounded-3xl overflow-hidden z-10 border border-outline-variant/50 shadow-xl bg-white">
            <img
              className="w-full h-full object-cover grayscale brightness-110"
              alt="A professional studio portrait of a young male software engineer with a minimalist aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxfodWjZ55L7m03Ro9fwQOFThy1cUvqHQXDH0D3PKj64-HtyC3E5kmM1gO6X6aSYseIgN5lTvxqJBAOXyXSHB1touDn-oqfqYVaTiHHbfvOPiVxT28Nc-yvGPD0iOadObrj43iMXmsV6uKrcnEZD6sUI-UnRKy6acsFsq87UeZUPbzzkuzT-VZcDdEAkGOHGnx_QzmxJbqO5JAvPVVZMALMWFeGzMHtPw2FiybiRHphH_Dtkr6dGMpwZNCvbP8l2bQtLKtHnUPQw"
            />
          </div>
          <div className="absolute inset-0 -z-10 scale-125 opacity-20 blur-3xl bg-primary" />
        </Reveal>
      </div>
    </section>
  );
}
