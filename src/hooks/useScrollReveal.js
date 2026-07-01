import { useEffect } from "react";

/**
 * Observes every element with the `.reveal` class inside the document and
 * toggles the `.active` class on when it scrolls into view. Mirrors the
 * original vanilla-JS IntersectionObserver behavior, but is safe to call
 * from multiple components since it only attaches once and cleans up
 * after itself.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
