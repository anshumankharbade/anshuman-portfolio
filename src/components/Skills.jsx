export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3 ">
        {[
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript (ES6+)",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Git & GitHub",
          "REST APIs",
        ].map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

