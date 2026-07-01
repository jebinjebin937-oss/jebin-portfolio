"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Eye, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      resumeRef.current &&
      !resumeRef.current.contains(event.target as Node)
    ) {
      setResumeOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <h1
            className="text-2xl font-bold tracking-tight text-[#6E3482]"
          >
            Jebin<span className="text-[#49225B]">.</span>
          </h1>

          {/* Navigation */}

          <nav
            className="
            hidden
            md:flex

            items-center
            gap-10

            px-8
            py-4

            rounded-full

            bg-white/[0.04]
            backdrop-blur-xl

            border
            border-white/10
            "
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                relative
                text-[#A56ABD]
                hover:text-[#6E3482]

                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#A56ABD]

                after:transition-all
                hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume */}

          {/* Desktop Resume */}

        <div
  ref={resumeRef}
  className="hidden md:block relative"
>

  <button
  aria-label="Resume options"
  onClick={() => setResumeOpen(!resumeOpen)}
    className="
      flex
      items-center
      gap-2
      rounded-full
      px-6
      py-3
      bg-[#6E3482]
      hover:bg-[#A56ABD]
      transition-all
      duration-300
      text-white
      font-medium
    "
  >
    Resume
    <ChevronDown
  size={18}
  aria-hidden="true"
  className={`transition-transform ${
    resumeOpen ? "rotate-180" : ""
  }`}
/>
  </button>

  {resumeOpen && (
    <div
      className="
        absolute
        right-0
        mt-3
        w-56
        rounded-2xl
        bg-white
        shadow-2xl
        overflow-hidden
        border
        border-[#E6D5F1]
      "
    >
      <a
        href="/Jebin_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          gap-3
          px-5
          py-4
          hover:bg-[#F8F4FB]
          transition-colors
          text-[#49225B]
        "
      >
        <Eye size={18} />
        View Resume
      </a>

      <a
        href="/Jebin_Resume.pdf"
        download
        className="
          flex
          items-center
          gap-3
          px-5
          py-4
          hover:bg-[#F8F4FB]
          transition-colors
          text-[#49225B]
        "
      >
        <Download size={18} />
        Download Resume
      </a>
    </div>
  )}

</div>

{/* Mobile Menu Button */}

<button
  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-[#49225B]"
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>

        </div>

      </div>

            {isOpen && (
  <div
    className="
      md:hidden
      mt-4
      absolute
      top-16
      left-4
      right-4
      rounded-2xl
      bg-white
      shadow-xl
      p-6
    "
  >
    <div className="flex flex-col gap-5">

      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setIsOpen(false)}
          className="text-[#49225B] font-medium"
        >
          {item}
        </a>
      ))}

      <a
  href="/Jebin_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-3
    rounded-full
    bg-[#49225B]
    text-white
    py-3
    text-center
  "
>
  View Resume
</a>

    </div>
  </div>
)}

    </motion.header>
  );
}