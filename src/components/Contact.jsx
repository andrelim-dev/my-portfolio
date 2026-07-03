import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import ContactForm from "./ContactForm.jsx";

const socials = [
  { platform: "GitHub", link: "https://github.com/andrelim-dev" },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/andre-lim-28a246285/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20">
        <Reveal>
          <h2 className="font-display text-headline-md sm:text-headline-lg mb-6 sm:mb-8 text-on-background">
            Let&apos;s collaborate on something extraordinary.
          </h2>
          <p className="text-on-surface-variant mb-8 sm:mb-10 lg:mb-12">
            I am currently looking for AI engineering internships and freelance
            opportunities. Feel free to reach out via the form or through my
            social networks.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 glass-card rounded-full flex items-center justify-center bg-white border border-outline-variant/30">
                <Icon name="alternate_email" className="text-on-background" />
              </div>
              <div className="min-w-0">
                <div className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                  Email
                </div>
                <div className="font-headline-md text-body-md text-on-background wrap-break-words">
                  andrelim765@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 glass-card rounded-full flex items-center justify-center bg-white border border-outline-variant/30">
                <Icon name="location_on" className="text-on-background" />
              </div>
              <div className="min-w-0">
                <div className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                  Location
                </div>
                <div className="font-headline-md text-body-md text-on-background">
                  Medan, Indonesia
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-10 sm:mt-12 lg:mt-16">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-outline-variant/50 rounded-lg hover:bg-on-background hover:text-background transition-colors active:scale-95 duration-200 text-on-background"
              >
                <span className="font-label-sm text-label-sm uppercase px-2">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
