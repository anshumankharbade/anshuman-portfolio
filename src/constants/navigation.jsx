import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaFolderOpen } from "react-icons/fa";

// Order matches the page from top to bottom, which the active-section highlight relies on.
export const links = [
  { id: "hero", name: "Home", icon: <FaHome aria-hidden="true" /> },
  { id: "about", name: "About", icon: <FaUser aria-hidden="true" /> },
  { id: "experience", name: "Experience", icon: <FaBriefcase aria-hidden="true" /> },
  { id: "skills", name: "Skills", icon: <FaCode aria-hidden="true" /> },
  { id: "projects", name: "Projects", icon: <FaFolderOpen aria-hidden="true" /> },
  { id: "contact", name: "Contact", icon: <FaEnvelope aria-hidden="true" /> },
];

export const SECTION_IDS = links.map((l) => l.id);
