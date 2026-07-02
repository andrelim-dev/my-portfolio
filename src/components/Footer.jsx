import Icon from "./Icon.jsx";

const socials = [
  { platform: "GitHub", url: "https://github.com/andrelim-dev" },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/andre-lim-28a246285/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-screen py-12 md:py-20 border-t border-outline-variant/20 bg-surface-dim mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8 md:gap-gutter text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
          <a
            className="font-display text-headline-md font-bold text-on-surface"
            href="#hero"
          >
            ANDRE.DEV
          </a>
          <p className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span className="text-lg">&copy;</span> {year} Andre. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 order-2">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-on-background transition-colors font-label-sm text-label-sm"
            >
              {social.platform}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="order-3 w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors text-on-background"
        >
          <Icon name="arrow_upward" />
        </button>
      </div>
    </footer>
  );
}
