"use client";

import { motion } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
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

          <button
            className="
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
          </button>

        </div>

      </div>
    </motion.header>
  );
}