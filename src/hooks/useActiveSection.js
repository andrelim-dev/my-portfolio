import { useEffect, useState } from "react";

/**
 * Tracks which <section id="..."> is currently scrolled into view so the
 * navbar can highlight the matching link. Replaces the original
 * `window.addEventListener("scroll", ...)` class-toggling logic with
 * React state.
 */
export function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      let current = activeId;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = id;
        }
      });

      setActiveId((prev) => (prev === current ? prev : current));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
