import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import Icon from "./Icon.jsx";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar({ theme, toggleTheme }) {
  const activeId = useActiveSection(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu whenever the route/hash changes (i.e. the
  // person tapped a link) and on resize back up to desktop width.
  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [isMenuOpen]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <a
          className="font-display text-headline-md font-bold tracking-tighter text-on-surface"
          href="#hero"
          onClick={closeMenu}
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

        <div className="flex items-center gap-2 md:gap-6">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex items-center p-2 text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors active:scale-95 duration-200"
          >
            <Icon name={theme === "light" ? "dark_mode" : "light_mode"} />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center p-2 text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 duration-200"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-6 gap-2">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={
                  isActive
                    ? "py-3 px-2 rounded-lg bg-surface-container-low text-on-background font-bold font-body-md text-body-md transition-colors"
                    : "py-3 px-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-body-md"
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
