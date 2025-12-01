import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0b0b0b] py-20 text-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#f5c518] text-center mb-12 drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        >
          Contact Me
        </motion.h3>

        {/* Contact Content */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 justify-center gap-10 p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md hover:border-[#f5c518]/40 transition-all duration-300"
        >
          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (demo)");
            }}
            className="space-y-4"
          >
            <input
              className="w-full p-3 rounded-md bg-transparent border border-white/10 focus:border-[#f5c518] outline-none text-gray-200 placeholder-gray-400 transition"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full p-3 rounded-md bg-transparent border border-white/10 focus:border-[#f5c518] outline-none text-gray-200 placeholder-gray-400 transition"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full p-3 rounded-md bg-transparent border border-white/10 focus:border-[#f5c518] outline-none text-gray-200 placeholder-gray-400 transition"
              rows="5"
              placeholder="Message"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 w-full md:w-auto rounded-md border border-[#f5c518] text-[#f5c518] hover:bg-[#f5c518]/20 font-medium tracking-wide transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
            <p className="text-gray-300 mb-2 text-base md:text-lg">
              Let's collaborate or just say hi 👋
            </p>

            <div className="flex flex-col gap-4 mt-4 text-sm md:text-base">
              <a
                href="mailto:anshumankharbade28@gmail.com"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <FaEnvelope className="w-5 h-5 text-[#f5c518]" />
                <span>anshumankharbade28@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anshuman-kharbade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <FaLinkedin className="w-5 h-5 text-[#f5c518]" />
                <span>linkedin.com/in/anshuman-kharbade</span>
              </a>
              <a
                href="https://github.com/anshumankharbade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <FaGithub className="w-5 h-5 text-[#f5c518]" />
                <span>github.com/anshumankharbade</span>
              </a>
              <a
                href="https://wa.me/919503081014?text=Hi%20Anshuman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-fit flex items-center justify-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-black font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-[0_0_14px_rgba(37,211,102,0.45)] hover:shadow-[0_0_22px_rgba(37,211,102,0.7)] hover:scale-[1.03] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .2 11.8 11.8 0 0 0 3.48 3.48 11.8 11.8 0 0 0 .2 12c0 2.08.54 4.12 1.57 5.93L0 24l6.28-1.64A11.87 11.87 0 0 0 12 23.8a11.8 11.8 0 0 0 8.52-3.48A11.8 11.8 0 0 0 23.8 12a11.8 11.8 0 0 0-3.48-8.52zM12 21.3a9.35 9.35 0 0 1-4.78-1.31l-.34-.2-3.72.98 1-3.63-.22-.37A9.37 9.37 0 0 1 2.7 12C2.7 6.93 6.93 2.7 12 2.7S21.3 6.93 21.3 12c0 5.07-4.23 9.3-9.3 9.3zm5.2-6.93c-.28-.15-1.65-.82-1.9-.9-.26-.1-.45-.15-.64.15-.19.31-.74.9-.91 1.08-.17.19-.34.21-.63.07-1.73-.87-2.86-1.54-4.01-3.46-.3-.52.3-.48.87-1.6.1-.19.05-.35-.03-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.27.28-1 .97-1 2.36 0 1.4 1.02 2.75 1.17 2.94.15.19 2 3.05 4.83 4.28.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.15-1.32-.08-.11-.25-.18-.53-.32z" />
                </svg>

                <span className="text-sm sm:text-base">
                  Message on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
