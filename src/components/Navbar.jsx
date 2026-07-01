import { navLinks } from "../data/navLinks.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useTheme } from "../hooks/useTheme.js";
import Icon from "./Icon.jsx";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 h-20">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <a
          className="font-display text-headline-md font-bold tracking-tighter text-on-surface"
          href="#hero"
        >
          ANDRE.DEV
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-on-background font-bold border-b-2 border-on-background pb-1 font-body-md text-body-md transition-all"
                    : "text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex items-center p-2 text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 duration-200"
          >
            <Icon name={theme === "light" ? "light_mode" : "dark_mode"} />
          </button>
          <a
            className="px-6 py-2.5 bg-on-background text-background font-bold rounded-lg hover:opacity-80 transition-opacity active:scale-95 duration-200 font-label-sm text-label-sm"
            href="#"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
