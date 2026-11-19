import { lazy, Suspense } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AmbientBackground from "./components/ui/AmbientBackground";
import { ThemeProvider } from "./theme/ThemeProvider";

// Above the fold (header + hero) is bundled normally so the first paint never waits on the network.
// Everything below the fold is code-split, each part with its own Suspense boundary.
const ControlCenter = lazy(() => import("./components/ControlCenter"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// The animation engine is fetched after first paint (see motionFeatures.js)
const loadMotionFeatures = () => import("./motionFeatures").then((mod) => mod.default);

const Lazy = ({ children }) => (
  <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>{children}</Suspense>
);

export default function App() {
  return (
    // reducedMotion="user": people who turned on "reduce motion" in their OS get no transform animations
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <AmbientBackground />
          <Navbar />

          <main id="main">
            <Hero />
            <Lazy>
              <ControlCenter />
            </Lazy>
            <Lazy>
              <Projects />
            </Lazy>
            <Lazy>
              <Contact />
            </Lazy>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
