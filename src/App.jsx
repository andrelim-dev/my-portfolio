import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <TechMarquee />
      </main>
    </>
  );
}
