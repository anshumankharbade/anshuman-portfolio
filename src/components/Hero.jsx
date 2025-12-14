import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaCode } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

// bg img
const HERO_IMAGE = "https://images.unsplash.com/photo-1562813733-b31f71025d54";

// gen opt image URLs
const getImageUrl = (quality = 40, width = 800, format = "webp") =>
  `${HERO_IMAGE}?ixlib=rb-4.1.0&auto=format&fit=crop&q=${quality}&w=${width}&format=${format}`;

// Social links
const SOCIAL_LINKS = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/anshumankharbade",
    label: "GitHub profile",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/anshumankharbade",
    label: "LinkedIn profile",
  },
];

const Hero = ({ prefersReducedMotion }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  // scroll function
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  // useEffect for all side effects
  useEffect(() => {
    const heroElement = sectionRef.current;

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (heroElement) observer.observe(heroElement);

    // load low quality image first
    const loadImage = (src, callback) => {
      const img = new Image();
      img.src = src;
      img.decoding = "async";
      img.loading = "lazy";
      img.onload = callback;
      img.onerror = () => {
        // Fallback to jpg if WebP fails
        const jpegSrc = src.replace("&format=webp", "");
        const fallbackImg = new Image();
        fallbackImg.src = jpegSrc;
        fallbackImg.onload = callback;
      };
    };

    // load low quality asap
    loadImage(getImageUrl(20, 400), () => {
      setImageLoaded(true);
      // load high quality in bg
      loadImage(getImageUrl(70, 1200));
    });

    return () => {
      if (heroElement) observer.disconnect();
    };
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: prefersReducedMotion
          ? { duration: 0.3 }
          : { staggerChildren: 0.1 },
      },
    }),
    [prefersReducedMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [prefersReducedMotion]
  );

  // bg style
  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: imageLoaded
        ? `linear-gradient(to bottom, rgba(11, 11, 11, 0.95), rgba(11, 11, 11, 0.98)), url(${getImageUrl(
            40,
            800
          )})`
        : `linear-gradient(to bottom, rgba(11, 11, 11, 0.95), rgba(11, 11, 11, 0.98))`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: prefersReducedMotion ? "scroll" : "fixed",
      transition: imageLoaded ? "background-image 0.3s ease-in-out" : "none",
    }),
    [imageLoaded, prefersReducedMotion]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={backgroundStyle}
    >
      {/* loading overlay */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] to-[#111111]" />
      )}

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/90 via-[#0b0b0b]/60 to-[#111111]/90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] py-8"
        >
          {/* left - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2"
            >
              <div className="w-6 h-[2px] bg-gradient-to-r from-[#f5c518] to-transparent" />
              <span className="text-[#f5c518] font-semibold tracking-widest text-xs lg:text-sm uppercase">
                Welcome to my Portfolio
              </span>
              <div className="w-6 h-[2px] bg-gradient-to-l from-[#f5c518] to-transparent" />
            </motion.div>

            {/* name and title */}
            <div className="space-y-3 lg:space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="block bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
                  Anshuman
                </span>
                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Kharbade
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-lg lg:text-xl text-gray-300"
              >
                <IoSparkles className="text-[#f5c518]" />
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
              </motion.div>
            </div>

            {/* description */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Crafting digital experiences with modern web technologies.
              Passionate about building scalable, user-friendly applications
              with clean code and innovative solutions.
            </motion.p>

            {/* navigation buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 lg:px-8 py-3 lg:py-4 rounded-xl bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-[#f5c518] transition-all duration-300 overflow-hidden active:scale-95"
                aria-label="View my projects"
                style={{ willChange: "transform" }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2 text-sm lg:text-base">
                  <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group px-6 lg:px-8 py-3 lg:py-4 rounded-xl border border-[#f5c518] text-[#f5c518] font-semibold hover:bg-[#f5c518] hover:text-black transition-all duration-300 active:scale-95"
                aria-label="Get in touch"
                style={{ willChange: "transform" }}
              >
                <span className="flex items-center gap-2 text-sm lg:text-base">
                  Get In Touch
                  <IoSparkles className="group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 lg:gap-6 pt-6 lg:pt-8"
            >
              <span className="text-gray-500 text-xs lg:text-sm">Connect:</span>
              <div className="flex gap-3 lg:gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-2 lg:p-3 rounded-xl bg-black/50 border border-white/10 text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
                    aria-label={link.label}
                    style={{ willChange: "transform" }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Explore btn */}
        {!prefersReducedMotion && (
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#f5c518] transition-colors duration-300"
            aria-label="Scroll to About section"
            style={{ willChange: "transform" }}
          >
            <FaArrowDown className="w-5 h-5 animate-bounce" />
            <span className="text-sm">Explore More</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default React.memo(Hero);
