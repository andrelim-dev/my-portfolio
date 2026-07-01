/**
 * Thin wrapper around a Material Symbols glyph so icon usage stays
 * consistent (and easy to swap for an SVG icon set later) across
 * every component.
 */

export default function Icon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
