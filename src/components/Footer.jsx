import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-black/50 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto py-4">
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#f5c518] font-semibold">
            Anshuman Kharbade
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
