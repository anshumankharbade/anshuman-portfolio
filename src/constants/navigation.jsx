import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaGraduationCap,
} from "react-icons/fa";

export const links = [
  { id: "hero", name: "Home", icon: <FaHome size={18} /> },
  { id: "about", name: "About", icon: <FaUser size={18} /> },
  { id: "experience", name: "Experience", icon: <FaBriefcase size={18} /> },
  { id: "education", name: "Education", icon: <FaGraduationCap size={18} /> },
  { id: "projects", name: "Projects", icon: <FaFolderOpen size={18} /> },
  { id: "skills", name: "Skills", icon: <FaCode size={18} /> },
  { id: "contact", name: "Contact", icon: <FaEnvelope size={18} /> },
];