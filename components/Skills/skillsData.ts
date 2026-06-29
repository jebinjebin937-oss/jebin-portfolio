import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiOpencv,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
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
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "AI / ML",
    icon: FaPython,
    items: [
      { name: "Python", icon: FaPython },
      { name: "YOLOv5", icon: FaGitAlt },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
];