import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-6 flex flex-col items-center ">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p>📍 Nagpur, Maharashtra, India</p>
      <p>📞 +91-9503081014</p>
      <p className=" cursor-pointer hover:underline">✉️ anshumankharbade28@gmail.com</p>
      <p className="mt-2 flex space-x-6 text-3xl">
        <a className="text-blue-600 hover:text-blue-800 transition-colors duration-300" href="https://www.linkedin.com/in/anshuman-kharbade/" target="_blank" >
          <FaLinkedin /> 
        </a>
        <a className="text-gray-800 dark:text-gray-200 hover:text-gray-500 transition-colors duration-300" href="https://github.com/anshumankharbade" target="_blank" >
          <FaGithub /> 
        </a>
      </p>
    </section>
  );
}
