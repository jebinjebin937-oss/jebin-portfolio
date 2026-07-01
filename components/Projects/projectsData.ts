export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  overview: string;

  highlights: {
    title: string;
    description: string;
  }[];

  gallery: string[];

  challenges: string;
  learnings: string;

  features: string[];
  tech: string[];

  github: string;
  demo: string;
};

export const projectsData: Project[] = [
  {
  id: 1,
  slug: "solex",
  title: "SOLEX",
  subtitle: "Modern Footwear Ecommerce",
  image: "/projects/solex.png",

  description:
    "A modern footwear ecommerce website built with Next.js, TypeScript and Tailwind CSS.",

  overview:
    "The goal of SOLEX was to create a visually appealing ecommerce website with smooth shopping experience.",

  highlights: [
    {
      title: "Responsive Design",
      description: "Optimized for desktop, tablet and mobile devices."
    },
    {
      title: "Modern UI",
      description: "Premium ecommerce interface with clean layouts."
    },
    {
      title: "Smooth Animations",
      description: "Interactive animations built using Framer Motion."
    }
  ],

  gallery: [
    "/projects/solex-1.png",
    "/projects/solex-2.png",
    "/projects/solex-3.png",
  ],

  challenges:
    "Building a responsive ecommerce application while maintaining smooth animations and reusable components.",

  learnings:
    "Improved my understanding of Next.js routing, TypeScript, reusable React components and responsive UI development.",

  features: [
    "Responsive Design",
    "Modern UI",
    "Product Detail Page",
    "Shopping Experience",
    "Smooth Animations",
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],

  github: "https://github.com/jebinjebin937-oss/solex",
  demo: "https://solex-theta.vercel.app",
},

  {
  id: 2,

  slug: "digital-clock",

  title: "Digital Clock",

  subtitle: "Interactive Dashboard",

  image: "/projects/clock.png",

  description:
    "A modern digital clock dashboard with clean UI and responsive layout.",

  overview:
    "A lightweight digital clock application developed using HTML, CSS and JavaScript. The focus was creating a minimal interface with accurate real-time updates.",

  highlights: [
    {
      title: "Real-Time Clock",
      description: "Displays the current time with live updates."
    },
    {
      title: "Responsive UI",
      description: "Adapts beautifully across different screen sizes."
    },
    {
      title: "Minimal Design",
      description: "Simple interface focused on readability."
    }
  ],

  gallery: [
    "/projects/clock-1.png",
    "/projects/clock-2.png",
    "/projects/clock-3.png",
  ],

  challenges:
    "Keeping the clock synchronized while maintaining a clean and responsive interface.",

  learnings:
    "Improved my JavaScript fundamentals, DOM manipulation, and responsive UI development.",

  features: [
    "Real Time Clock",
    "Responsive Layout",
    "Minimal UI",
    "Smooth Updates",
  ],

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  github: "https://github.com/jebinjebin937-oss/digital-clock-dashboard",

  demo: "",
},
];