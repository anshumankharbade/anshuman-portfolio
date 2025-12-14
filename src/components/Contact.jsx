import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { IoMailOpen, IoCheckmarkCircle } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "anshumankharbade28@gmail.com",
      link: "mailto:anshumankharbade28@gmail.com",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Nagpur, Maharashtra, India",
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/anshumankharbade",
      color: "hover:bg-gray-800 hover:text-white",
      bgColor: "bg-gray-900/50",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/anshuman-kharbade",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-blue-900/30",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      {/* Bg elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#f5c518]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#f5c518]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#f5c518]" />
            <span className="text-[#f5c518] font-semibold tracking-widest text-sm uppercase">
              Get In Touch
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#f5c518]" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-[#f5c518] via-yellow-300 to-[#f5c518] bg-clip-text text-transparent">
              Contact Me
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Let's discuss your project or just say hello!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column*/}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`block group ${!info.link && "cursor-default"}`}
              >
                <div
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${info.color} to-black/50 border border-white/10 backdrop-blur-sm hover:border-[#f5c518]/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                      <div className="text-[#f5c518]">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-black/50 to-black/30 border border-white/10 backdrop-blur-sm"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex-1 p-4 rounded-xl ${social.bgColor} border border-white/10 text-gray-300 ${social.color} transition-all duration-300 flex flex-col items-center justify-center gap-2`}
                  >
                    <div className="text-2xl">{social.icon}</div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f5c518] to-yellow-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm h-full">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <IoCheckmarkCircle className="text-7xl text-[#f5c518] mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-3">
                      Message Sent!
                    </h4>
                    <p className="text-gray-300 mb-8 max-w-md">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-lg border border-[#f5c518] text-[#f5c518] hover:bg-[#f5c518]/10 transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Send me a message
                    </h4>
                    <p className="text-gray-400 mb-8">
                      Fill out the form below and I'll respond promptly
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-[#f5c518] focus:ring-2 focus:ring-[#f5c518]/20 outline-none transition-all duration-300"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-[#f5c518] focus:ring-2 focus:ring-[#f5c518]/20 outline-none transition-all duration-300"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-[#f5c518] focus:ring-2 focus:ring-[#f5c518]/20 outline-none transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                          isSubmitting
                            ? "bg-gray-700 cursor-not-allowed"
                            : "bg-gradient-to-r from-[#f5c518] to-yellow-400 text-black hover:from-yellow-400 hover:to-[#f5c518] hover:shadow-[0_0_30px_rgba(245,197,24,0.5)]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <p className="text-gray-500 text-sm text-center">
                        I typically respond within 24 hours
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp btn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-md mx-auto mt-12"
        >
          <a
            href="https://wa.me/919503081014?text=Hi%20Anshuman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-[#25D366] to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .2 11.8 11.8 0 0 0 3.48 3.48 11.8 11.8 0 0 0 .2 12c0 2.08.54 4.12 1.57 5.93L0 24l6.28-1.64A11.87 11.87 0 0 0 12 23.8a11.8 11.8 0 0 0 8.52-3.48A11.8 11.8 0 0 0 23.8 12a11.8 11.8 0 0 0-3.48-8.52zM12 21.3a9.35 9.35 0 0 1-4.78-1.31l-.34-.2-3.72.98 1-3.63-.22-.37A9.37 9.37 0 0 1 2.7 12C2.7 6.93 6.93 2.7 12 2.7S21.3 6.93 21.3 12c0 5.07-4.23 9.3-9.3 9.3zm5.2-6.93c-.28-.15-1.65-.82-1.9-.9-.26-.1-.45-.15-.64.15-.19.31-.74.9-.91 1.08-.17.19-.34.21-.63.07-1.73-.87-2.86-1.54-4.01-3.46-.3-.52.3-.48.87-1.6.1-.19.05-.35-.03-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.27.28-1 .97-1 2.36 0 1.4 1.02 2.75 1.17 2.94.15.19 2 3.05 4.83 4.28.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.15-1.32-.08-.11-.25-.18-.53-.32z" />
            </svg>
            <span className="relative z-10 font-semibold">
              Message on WhatsApp
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </a>
          <p className="text-gray-400 text-sm text-center mt-3">
            Quick response guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
