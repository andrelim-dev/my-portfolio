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
      className="py-32 px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        <Reveal>
          <h2 className="font-display text-headline-lg mb-8 text-on-background">
            Let&apos;s collaborate on something extraordinary.
          </h2>
          <p className="text-on-surface-variant mb-12">
            I am currently looking for AI engineering internships and freelance
            opportunities. Feel free to reach out via the form or through my
            social networks.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center bg-white border border-outline-variant/30">
                <Icon name="alternate_email" className="text-on-background" />
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                  Email
                </div>
                <div className="font-headline-md text-body-md text-on-background">
                  andrelim865@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center bg-white border border-outline-variant/30">
                <Icon name="location_on" className="text-on-background" />
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                  Location
                </div>
                <div className="font-headline-md text-body-md text-on-background">
                  Medan, Indonesia
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-16">
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
