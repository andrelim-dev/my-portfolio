import Experience from "./Experience.jsx";
import Education from "./Education.jsx";

export default function ExperienceEducation() {
  return (
    <section
      id="journey"
      className="py-32 px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-24">
        <Experience />
        <Education />
      </div>
    </section>
  );
}
