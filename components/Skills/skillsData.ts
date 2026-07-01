import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
  
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skills = [
{
  title: "Core Technologies",
  icon: FaCode,
  items: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ],
},

{
  title: "Frameworks & Libraries",
  icon: FaReact,
  items: [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
},

  {
    title: "Backend",
    icon: FaNodeJs,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaGitAlt },
    ],
  },

  {
    title: "Database",
    icon: SiMongodb,
    items: [
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
  title: "Tools",
  icon: FaGitAlt,
  items: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "npm", icon: FaNpm },
  ],
},
];