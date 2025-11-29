import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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
          className="text-5xl font-extrabold text-[#f5c518] text-center mb-12 drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        >
          Contact Me
        </motion.h3>

        {/* Contact Content */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md hover:border-[#f5c518]/40 transition-all duration-300"
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
            <p className="text-gray-300 mb-2 text-lg">
              Let's collaborate or just say hi 👋
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <a
                href="mailto:anshumankharbade28@gmail.com"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <Mail className="w-5 h-5 text-[#f5c518]" />
                <span>anshumankharbade28@gmail.com</span>
              </a>

              <a
                href="https://github.com/anshumankharbade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <Github className="w-5 h-5 text-[#f5c518]" />
                <span>github.com/anshumankharbade</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anshuman-kharbade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#f5c518] transition"
              >
                <Linkedin className="w-5 h-5 text-[#f5c518]" />
                <span>linkedin.com/in/anshuman-kharbade</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
