export default function Projects() {
  const projects = [
    {
      title: "🎵 Spotify Clone",
      desc: "Front-end clone of Spotify with audio playback, play/pause, progress bar, and responsive design.",
      demo: "https://spotify-clone-3oxp.vercel.app/",
      code: "https://github.com/anshumankharbade/Spotify-clone",
    },
    {
      title: "💱 Currency Converter",
      desc: "Responsive web app to convert currencies using real-time exchange rates API.",
      demo: "https://anshumankharbade.github.io/Currency-Converter/",
      code: "https://github.com/anshumankharbade/Currency-Converter",
    },
    {
      title: "🔐 LockR",
      desc: "A secure and responsive password manager built with React, offering local credential storage with copy, edit, and delete functionality.",
      demo: "https://lockr-pi.vercel.app/",
      code: "https://github.com/anshumankharbade/lockr",
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="shadow-lg rounded-2xl p-5 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.desc}
            </p>
            <a
              href={project.demo}
              target="_blank"
              className="text-blue-600 font-medium mr-3 hover:underline"
            >
              Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
