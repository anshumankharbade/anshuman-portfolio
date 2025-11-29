import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-[#070707] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
