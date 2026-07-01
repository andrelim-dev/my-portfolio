import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        <Reveal>
          <h2 className="font-display text-headline-lg mb-8 text-on-background">
            Architecting the future of web &amp; artificial intelligence.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            I am a Computer Science student driven by the challenge of solving
            complex problems through elegant code. My focus lies at the
            intersection of full-stack performance and intelligent system
            integration.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Whether it&apos;s optimizing a database schema for lightning-fast
            queries or fine-tuning a transformer model for specialized NLP
            tasks, I approach every project with technical rigor and
            user-centric design.
          </p>
        </Reveal>

        <Reveal delay={200} className="space-y-6">
          <div className="glass-card p-8 rounded-xl bento-inner-glow bg-white">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Icon name="construction" />
              <span className="font-label-sm text-label-sm uppercase">
                Currently Building
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="font-headline-md text-body-md text-on-background">
                  AI Resume Analyzer
                </span>
                <span className="text-on-surface-variant text-label-sm font-label-sm">
                  In Progress
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-headline-md text-body-md text-on-background">
                  ILKC Website
                </span>
                <span className="text-on-surface-variant text-label-sm font-label-sm">
                  MVP Phase
                </span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-xl bento-inner-glow bg-white">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Icon name="diamond" />
              <span className="font-label-sm text-label-sm uppercase">
                Core Values
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solver",
                "Communication",
                "Teamwork",
                "Continuous Learner",
                "Clean Code",
                "User-Centered",
              ].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 text-on-surface-variant rounded-full text-label-sm font-label-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
