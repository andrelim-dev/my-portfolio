import Experience from "./Experience.jsx";
import Education from "./Education.jsx";

export default function ExperienceEducation() {
  return (
    <section
      id="journey"
      className="py-20 sm:py-24 lg:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24">
        <Experience />
        <Education />
      </div>
    </section>
  );
}
