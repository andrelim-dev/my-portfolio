export default function TimelineDot({ current }) {
  return (
    <div
      className={`absolute -left-10.25 top-1 w-4 h-4 rounded-full border-4 border-background ${
        current ? "bg-on-background" : "bg-outline-variant"
      }`}
    />
  );
}
