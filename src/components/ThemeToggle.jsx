import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detect saved theme or system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full 
                 bg-gray-200 dark:bg-gray-700
                 text-gray-800 dark:text-yellow-300
                 shadow-md
                 transition-all duration-500 ease-in-out
                 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
