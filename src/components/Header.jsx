import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white py-10 text-center relative">
      <h1 className="text-4xl max-md:text-xl font-bold">ANSHUMAN KHARBADE</h1>
      <p className="mt-2 text-lg max-md:text-sm">Web Developer | MERN Stack Enthusiast</p>
      <nav className="mt-4 space-x-4 max-md:text-xs">
        <a href="#skills" className=" hover:text-blue-500 px-4 py-2 bg-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-2xl text-gray-900 dark:text-white">Skills</a>
        <a href="#projects" className=" hover:text-blue-500 px-4 py-2 bg-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-2xl text-gray-900 dark:text-white">Projects</a>
        <a href="#resume" className=" hover:text-blue-500 px-4 py-2 bg-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-2xl text-gray-900 dark:text-white">Resume</a>
        <a href="#contact" className=" hover:text-blue-500 px-4 py-2 bg-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-2xl text-gray-900 dark:text-white">Contact</a>
      </nav>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </header>
  );
}


