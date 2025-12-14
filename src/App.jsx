import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

// Lazy load
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Preload bg image
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1920";
    img.onload = () => {
      setBgLoaded(true);
      setTimeout(() => setLoading(false), 800);
    };

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="relative bg-[#070707] text-white min-h-screen overflow-x-hidden">
      <div
        className={`app-background ${bgLoaded ? "opacity-100" : "opacity-0"}`}
      />

      <Navbar />

      <main className="overflow-x-hidden relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <section id="hero" data-reduce-motion={prefersReducedMotion}>
            <Hero />
          </section>

          <section id="about" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/80 via-transparent to-[#111111]/80" />
            <About />
          </section>

          <section id="experience" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/90 via-transparent to-[#111111]/90" />
            <Experience />
          </section>

          <section id="education" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/85 via-transparent to-[#111111]/85" />
            <Education />
          </section>

          <section id="projects" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/95 via-transparent to-[#111111]/95" />
            <Projects />
          </section>

          <section id="skills" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/80 via-transparent to-[#111111]/80" />
            <Skills />
          </section>

          <section id="contact" data-reduce-motion={prefersReducedMotion}>
            <div className="section-overlay bg-gradient-to-b from-[#0b0b0b]/90 via-transparent to-[#111111]/90" />
            <Contact />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
