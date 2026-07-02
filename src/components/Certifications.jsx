import { certifications } from "../data/certifications.js";
import Reveal from "./Reveal.jsx";
import CertificationCard from "./CertificationCard.jsx";

export default function Certifications() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
      <h2 className="font-display text-headline-md sm:text-headline-lg mb-10 sm:mb-12 lg:mb-16 reveal text-on-background">
        Certifications
      </h2>
      <Reveal
        as="div"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-gutter"
      >
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </Reveal>
    </section>
  );
}
