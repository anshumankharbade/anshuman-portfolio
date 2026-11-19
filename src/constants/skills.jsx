import { FaCss3Alt, FaHtml5, FaJs, FaLayerGroup, FaMagic, FaMobileAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBraces } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    category: "Front End",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", description: "Semantic markup, accessibility" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", description: "Flexbox, Grid, responsive design" },
      { name: "JavaScript (ES6+)", icon: <FaJs />, color: "#F7DF1E", description: "ES6+, Async/Await, APIs" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB", description: "Hooks, Context API" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", description: "Utility-first, responsive" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC", description: "State management" },
      { name: "Responsive Web Design", icon: <FaMobileAlt />, color: "#F5C518", description: "Mobile-first, performance" },
    ],
  },
  {
    category: "Back End",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933", description: "REST APIs, NPM" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF", description: "Middleware, routing" },
      { name: "RESTful APIs", icon: <TbApi />, color: "#FF6B6B", description: "Design, documentation" },
      { name: "JWT Authentication", icon: <SiJsonwebtokens />, color: "#D63AFF", description: "Protected routes, role-based access" },
      { name: "Middleware", icon: <FaLayerGroup />, color: "#94A3B8", description: "Request handling, auth guards" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", description: "CRUD operations, Atlas" },
      { name: "Mongoose ODM", icon: <SiMongoose />, color: "#F26B6B", description: "Schemas and models" },
      { name: "MySQL (basics)", icon: <SiMysql />, color: "#4479A1", description: "Relational fundamentals" },
    ],
  },
  {
    category: "AI Integration",
    skills: [
      { name: "Google Gemini API", icon: <SiGooglegemini />, color: "#8E75B2", description: "AI medicine explanations in QikMeds" },
      { name: "Prompt Engineering", icon: <FaMagic />, color: "#A78BFA", description: "Prompts that return reliable output" },
      { name: "Structured JSON Output", icon: <TbBraces />, color: "#F59E0B", description: "Schema-constrained responses" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032", description: "Version control" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF", description: "Collaboration, CI/CD triggers" },
      { name: "Render", icon: <SiRender />, color: "#46E3B7", description: "Back end hosting" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF", description: "Front end hosting" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", description: "Front end hosting, forms" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC", description: "Extensions, debugging" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37", description: "API testing" },
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", description: "Currently learning" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", description: "Currently learning" },
    ],
  },
];
