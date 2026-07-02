export default function TimelineDot({ current }) {
  return (
    <div
      className={`absolute -left-8 sm:-left-10.25 top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] sm:border-4 border-background ${
        current ? "bg-on-background" : "bg-outline-variant"
      }`}
    />
  );
}
