"use client";

import ProfileImage from "../Shared/ProfileImage";
import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center lg:justify-end"
    >
      <div className="relative w-[430px] h-[560px]">

        {/* Background Layer 1 */}

        <div
          className="
          absolute
          inset-0

          rounded-[40px]

          bg-[#A56ABD]/10

          border
          border-[#A56ABD]/10
          "
        />

        {/* Background Layer 2 */}

        <div
          className="
          absolute

          top-5
          left-5
          right-5
          bottom-5

          rounded-[36px]

          bg-white/30

          backdrop-blur-xl

          border
          border-white/40
          "
        />

        {/* Main Card */}

        <div
          className="
          absolute

          top-12
          left-12
          right-12
          bottom-12

          rounded-[32px]

          bg-white/50

          backdrop-blur-2xl

          border
          border-white/60

          shadow-xl

          flex
          flex-col
          items-center
          justify-center
          "
        >

          {/* Profile */}

<div className="relative">

  {/* Glow */}

  <div
    className="
    absolute
    inset-0

    rounded-full

    bg-[#A56ABD]/20

    blur-xl

    scale-110
    "
  />

  <ProfileImage size={240} />

</div>

          <h3 className="mt-8 text-2xl font-bold text-[#49225B]">
            Jebin J
          </h3>

          <p className="mt-2 text-[#6E3482]">
            Full Stack Developer
          </p>

          <div
            className="
            mt-8

            px-5
            py-2

            rounded-full

            bg-[#A56ABD]/10

            border
            border-[#A56ABD]/20

            text-[#6E3482]
            text-sm
            "
          >
            🟢 Available for Opportunities
          </div>

        </div>

      </div>
    </motion.div>
  );
}