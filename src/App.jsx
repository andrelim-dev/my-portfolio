import { useState } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import About from "./components/About.jsx";
import SkillsGrid from "./components/SkillsGrid.jsx";
import Projects from "./components/Projects.jsx";
import ExperienceEducation from "./components/ExperienceEducation.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // Attaches the IntersectionObserver once at the app root so every
  // `.reveal` element rendered by any section gets animated in on scroll.
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <TechMarquee />
        <About />
        <SkillsGrid />
        <Projects />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={theme}
        transition={Bounce}
      />
    </>
  );
}
