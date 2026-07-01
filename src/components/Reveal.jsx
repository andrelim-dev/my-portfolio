/**
 * Marks a section of the page as a scroll-reveal target. Pair with the
 * `useScrollReveal` hook, which attaches the IntersectionObserver that
 * toggles the `.active` class defined in index.css.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}) {
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
