export default function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Resume</h2>
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">

        <div>
          <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"></span>
          <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-gray-600 dark:text-gray-400">St. Francis De Sales College, Nagpur – 2024</p>
          <p className="text-sm mt-1">Focused on programming, database management, and web development fundamentals.</p>
        </div>

        <div>
          <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-500"></span>
          <h3 className="text-xl font-bold">Self-Learning & Projects</h3>
          <p className="text-gray-600 dark:text-gray-400">2025 – Present</p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Developed Spotify Clone, Currency Converter, and developing MERN E-Commerce Cart.</li>
            <li>Deployed applications on Netlify and Vercel for live demos.</li>
            <li>Strong in React.js, Node.js, Express, and MongoDB.</li>
          </ul>
        </div>

        <div>
          <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-500"></span>
          <h3 className="text-xl font-bold">Future Internship/Job Experience</h3>
          <p className="text-gray-600 dark:text-gray-400">Coming Soon 🚀</p>
        </div>
      </div>
    </section>
  );
}
