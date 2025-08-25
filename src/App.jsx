import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      

      <footer className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-950 text-white text-center py-4 mt-6 max-md:text-sm">
        <p className="w-[80%] m-auto">© 2025 Anshuman Kharbade | Built with ❤️ using React & Tailwind</p>
      </footer>
    </div>
  );
}

