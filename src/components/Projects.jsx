import React, { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaEye,
  FaServer,
  FaBolt,
  FaMobileAlt,
  FaUsers,
  FaGamepad,
  FaTrophy
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// Project data 
const PROJECTS_DATA = [
  {
    id: 1,
    title: "LockR - Password Manager",
    desc: "A secure password manager with local credential storage, copy/edit/delete functionality.",
    longDesc: "A full-featured password management application that securely stores credentials locally in the browser. Features include AES encryption simulation, password strength analysis, and intuitive UI for managing multiple accounts.",
    tags: ["React", "Local Storage", "Tailwind CSS", "Context API", "Responsive Design"],
    live: "https://lockr-pi.vercel.app/",
    github: "https://github.com/anshumankharbade/lockr",
    featured: true,
    views: 150,
    gradient: "from-purple-500/20 to-blue-500/20",
    metrics: [
      { label: "Load Time", value: "1.2s", icon: <FaBolt />, color: "text-green-400" },
      { label: "Users", value: "50+", icon: <FaUsers />, color: "text-blue-400" },
      { label: "Mobile Score", value: "98%", icon: <FaMobileAlt />, color: "text-yellow-400" }
    ],
    challenges: [
      "Implementing secure local storage without backend",
      "Creating intuitive UI for password management",
      "Ensuring data persistence across sessions"
    ],
    screenshots: [
      "/images/lockr.png",
      "/images/lockr.png"
    ],
    features: [
      "Secure local credential storage",
      "Copy/edit/delete functionality",
      "Password strength indicator",
      "Search and filter capabilities"
    ]
  },
  {
    id: 2,
    title: "Spotify Clone",
    desc: "Front-end clone of Spotify with audio playback, play/pause, progress bar, and responsive design.",
    longDesc: "A fully functional Spotify interface clone with interactive audio player, playlist management, and responsive layout. Implements music playback controls, progress tracking, and a visually accurate UI matching Spotify's design system.",
    tags: ["HTML5", "CSS3", "JavaScript", "Audio API", "Responsive Design"],
    live: "https://spotify-clone-3oxp.vercel.app/",
    github: "https://github.com/anshumankharbade/Spotify-clone",
    featured: true,
    views: 120,
    gradient: "from-green-500/20 to-emerald-500/20",
    metrics: [
      { label: "Performance", value: "95%", icon: <FaBolt />, color: "text-green-400" },
      { label: "Accessibility", value: "100%", icon: <FaEye />, color: "text-blue-400" },
      { label: "Page Speed", value: "A+", icon: <FaServer />, color: "text-yellow-400" }
    ],
    challenges: [
      "Implementing smooth audio playback controls",
      "Recreating Spotify's complex UI accurately",
      "Making it fully responsive across devices"
    ],
    screenshots: [
      "/images/spotify.jpg",
      "/images/spotify.jpg"
    ],
    features: [
      "Interactive audio player",
      "Play/pause/seek controls",
      "Progress bar with time tracking",
      "Responsive grid layout",
      "Simulated playlist functionality"
    ]
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "Responsive web app to convert currencies using real-time exchange rates API.",
    longDesc: "A modern currency conversion tool that fetches real-time exchange rates from external APIs. Features include historical data, favorite currencies, and a clean, intuitive interface for quick conversions.",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API", "Async/Await"],
    live: "https://anshumankharbade.github.io/Currency-Converter/",
    github: "https://github.com/anshumankharbade/Currency-Converter",
    featured: true,
    views: 200,
    gradient: "from-orange-500/20 to-red-500/20",
    metrics: [
      { label: "API Speed", value: "0.8s", icon: <FaServer />, color: "text-green-400" },
      { label: "Accuracy", value: "99.9%", icon: <FaBolt />, color: "text-blue-400" },
      { label: "Countries", value: "150+", icon: <FaUsers />, color: "text-yellow-400" }
    ],
    challenges: [
      "Handling real-time API data fetching",
      "Managing multiple currency conversions",
      "Creating intuitive user interactions"
    ],
    screenshots: [
      "/images/currency.png",
      "/images/currency.png"
    ],
    features: [
      "Real-time exchange rates",
      "150+ currency support",
      "Historical data tracking",
      "Favorite currencies list",
      "Responsive mobile design"
    ]
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    desc: "Interactive Tic Tac Toe game with score tracking, player turns, and win detection logic.",
    longDesc: "A modern implementation of the classic Tic Tac Toe game with enhanced features including score tracking, player statistics, game history, and responsive design. Includes AI opponent option and multiplayer mode.",
    tags: ["HTML5", "CSS3", "JavaScript", "Game Logic", "Responsive Design", "Local Storage"],
    live: "https://anshumankharbade.github.io/Tic-tac-toe--game/",
    github: "https://github.com/anshumankharbade/Tic-tac-toe--game",
    featured: true,
    views: 85,
    gradient: "from-indigo-500/20 to-purple-500/20",
    metrics: [
      { label: "Games Played", value: "500+", icon: <FaGamepad />, color: "text-green-400" },
      { label: "Win Rate", value: "65%", icon: <FaTrophy />, color: "text-yellow-400" },
      { label: "Response Time", value: "0.1s", icon: <FaBolt />, color: "text-blue-400" }
    ],
    challenges: [
      "Implementing accurate win detection algorithm",
      "Creating smooth game state transitions",
      "Storing game history in local storage",
      "Designing responsive game board"
    ],
    screenshots: [
      "/images/tictactoe.png",
      "/images/tictactoe.png"
    ],
    features: [
      "Two-player mode",
      "Score tracking system",
      "Win/draw detection",
      "Game history log",
      "Responsive game board",
      "Player statistics",
      "Restart/reset functionality"
    ]
  }
];

// Statistics
const STATS = [
  { label: "Total Projects", value: "6+", color: "text-[#f5c518]" },
  { label: "Code Hours", value: "500+", color: "text-green-400" },
  { label: "Technologies", value: "13+", color: "text-blue-400" }
];

// Image Component
const OptimizedImage = React.memo(({ src, alt, className, lazy = true, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const optimizedSrc = useMemo(() => {
    if (!src || src.startsWith('http')) return src;
    return src;
  }, [src]);

  useEffect(() => {
    if (!optimizedSrc) return;
    
    const img = new Image();
    img.src = optimizedSrc;
    img.decoding = 'async';
    
    img.onload = () => {
      setLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      setLoaded(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [optimizedSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ contain: 'paint' }}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      )}
      {error ? (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <span className="text-gray-600 text-sm">Image</span>
        </div>
      ) : (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          decoding="async"
          fetchPriority={lazy ? "low" : "high"}
          className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
          style={{ 
            contentVisibility: 'auto',
            willChange: 'opacity'
          }}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Project Card Component
const ProjectCard = React.memo(({ project, index, onOpenDetail, prefersReducedMotion }) => {
  const handleClick = useCallback(() => {
    onOpenDetail(project);
  }, [project, onOpenDetail]);

  const animationProps = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3 }
      };
    }
    
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      whileHover: { y: -8 },
      transition: { 
        duration: 0.3, 
        delay: index * 0.1,
      }
    };
  }, [prefersReducedMotion, index]);

  return (
    <motion.div
      {...animationProps}
      className="group relative cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      style={{ willChange: 'transform' }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="relative">
            <span className="relative z-10 px-3 py-1 text-xs font-bold text-black rounded-full bg-[#f5c518]">
              Featured
            </span>
          </div>
        </div>
      )}

      {/* Project preview image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
        <OptimizedImage 
          src={project.screenshots?.[0]} 
          alt={project.title}
          className="w-full h-full object-cover"
          lazy={index > 1} // Lazy load images below the fold
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Card container */}
      <div className={`relative bg-gradient-to-br ${project.gradient} to-black/90 rounded-xl border border-white/10 group-hover:border-[#f5c518]/50 transition-all duration-300 overflow-hidden`}>
        <div className="p-5">
          {/* Card header */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FaCode className="text-[#f5c518] text-lg" />
                <h4 className="text-lg font-bold text-white group-hover:text-[#f5c518] transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h4>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
              {project.desc}
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-3 grid grid-cols-3 gap-2">
            {project.metrics.slice(0, 3).map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-sm font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 truncate">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full bg-black/50 border border-white/10 text-gray-300 truncate max-w-[100px]"
                title={tag}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-black/50 border border-white/10 text-gray-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* View details btn */}
          <div className="pt-3 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-black/50 to-black/30 border border-white/10 text-gray-300 hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300">
              <FaEye />
              View Details
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Project detail modal component
const ProjectDetailModal = React.memo(({ project, onClose, prefersReducedMotion }) => {
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const animationProps = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 }
      };
    }
    
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    };
  }, [prefersReducedMotion]);

  return (
    <motion.div
      {...animationProps}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl mt-16"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0b0b0b] to-[#111111] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ contain: 'paint' }}
      >
        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-[#f5c518]/10 hover:border-[#f5c518]/30 transition-all duration-300"
          aria-label="Close modal"
        >
          <IoMdClose className="w-5 h-5" />
        </button>

        {/* Project images */}
        <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
          <OptimizedImage 
            src={project.screenshots?.[0]} 
            alt={project.title}
            className="w-full h-full object-cover"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm line-clamp-2">
              {project.longDesc}
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {project.metrics.map((metric, index) => (
              <div key={index} className="p-3 rounded-xl bg-black/30 border border-white/10 text-center">
                <div className="flex justify-center mb-2">
                  <div className={`text-lg ${metric.color}`}>
                    {metric.icon}
                  </div>
                </div>
                <div className={`text-lg font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <FaBolt className="text-[#f5c518]" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518] mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FaCode className="text-[#f5c518]" />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-300 text-sm p-2 rounded-lg bg-black/20 border border-white/10">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div>
              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <FaServer className="text-[#f5c518]" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-black/50 to-black/30 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action btn */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-[#f5c518] transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-gray-300 font-semibold hover:text-[#f5c518] hover:border-[#f5c518]/30 transition-all duration-300"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>

              {/* Additional info */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Views</span>
                  <span className="text-[#f5c518] font-semibold">{project.views}+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectDetailModal.displayName = 'ProjectDetailModal';

// Main Projects Component
const Projects = ({ prefersReducedMotion }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const openProjectDetail = useCallback((project) => {
    setSelectedProject(project);
    setShowDetail(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeProjectDetail = useCallback(() => {
    setShowDetail(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 200);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex items-center bg-gradient-to-b from-[#0b0b0b] to-[#111111] py-16 md:py-20 relative"
        style={{ contain: 'paint' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f5c518]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
              <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
                Portfolio Showcase
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#f5c518]" />
            </div>
            
            <motion.h3
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold mb-4"
            >
              <span className="bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, delay: 0.2 }}
              className="text-gray-400 text-base max-w-2xl mx-auto"
            >
              Interactive projects with real-world applications and detailed metrics
            </motion.p>

            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-6"
            >
              {STATS.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-3 rounded-xl bg-black/30 border border-white/10 text-center"
                  style={{ contain: 'content' }}
                >
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onOpenDetail={openProjectDetail}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          {/* all projects btn */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/anshumankharbade"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold rounded-xl border-2 border-[#f5c518] text-[#f5c518] hover:bg-[#f5c518] hover:text-black transition-all duration-300 group"
              style={{ willChange: 'transform' }}
            >
              <FaGithub className="group-hover:rotate-12 transition-transform duration-300" />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* project detail modal */}
      <AnimatePresence>
        {showDetail && selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={closeProjectDetail}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Projects);
