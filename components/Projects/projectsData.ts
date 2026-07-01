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

  stats: {
  value: string;
  label: string;
}[];

  github: string;
  demo: string;
};

export const projectsData: Project[] = [

{
  id: 1,

  slug: "developer-portfolio",

  title: "Personal Portfolio",

  subtitle: "Modern Full Stack Portfolio",

  image: "/projects/portfolio.png",

  description:
    "A modern developer portfolio showcasing my projects, technical skills, and experience with responsive design, smooth animations, and SEO optimization.",

  overview:
    "This portfolio was designed and developed to showcase my projects, technical skills, and development journey. Built using Next.js, TypeScript, and Tailwind CSS, it features responsive layouts, smooth animations powered by GSAP and Framer Motion, project detail pages, SEO optimization, and an interactive contact form using EmailJS.",

  highlights: [
    {
      title: "Responsive Design",
      description:
        "Optimized for desktop, tablet, and mobile devices with a seamless user experience.",
    },
    {
      title: "Modern Animations",
      description:
        "Smooth scrolling and engaging animations implemented using GSAP and Framer Motion.",
    },
    {
      title: "SEO Optimized",
      description:
        "Includes metadata, Open Graph support, sitemap, robots.txt, and accessibility improvements.",
    },
  ],

  gallery: [],

  challenges:
    "Creating a visually appealing portfolio while maintaining responsiveness, performance, accessibility, and SEO best practices across all devices.",

  learnings:
    "Strengthened my skills in Next.js, TypeScript, Tailwind CSS, GSAP animations, responsive design, SEO optimization, and deploying production-ready web applications.",

  features: [
    "Responsive Design",
    "Project Detail Pages",
    "Smooth GSAP Animations",
    "Contact Form with EmailJS",
    "Resume Preview & Download",
    "SEO Optimization",
    "Open Graph Support",
    "Sitemap & robots.txt",
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "EmailJS",
    "Vercel",
  ],

  stats: [
    {
      value: "2026",
      label: "Built In",
    },
    {
      value: "100%",
      label: "Responsive",
    },
    {
      value: "Next.js",
      label: "Framework",
    },
    {
      value: "TypeScript",
      label: "Language",
    },
  ],

  github: "YOUR_GITHUB_REPOSITORY",

  demo: "https://jebin-portfolio-ten.vercel.app/",
},

  {
  id: 2,
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

  stats: [
  {
    value: "2026",
    label: "Built In",
  },
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "Next.js",
    label: "Framework",
  },
  {
    value: "TypeScript",
    label: "Language",
  },
],

  github: "https://github.com/jebinjebin937-oss/solex",
  demo: "https://solex-theta.vercel.app",
},

  {
  id: 3,

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

  gallery: [],

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

stats: [
  {
    value: "2025",
    label: "Built In",
  },
  {
    value: "JavaScript",
    label: "Language",
  },
  {
    value: "HTML/CSS",
    label: "Technology",
  },
  {
    value: "Real-Time",
    label: "Category",
  },
],

  github: "https://github.com/jebinjebin937-oss/digital-clock-dashboard",

  demo: "",
},

];