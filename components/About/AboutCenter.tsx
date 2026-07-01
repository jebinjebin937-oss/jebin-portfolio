"use client";

import ProfileImage from "../Shared/ProfileImage";
import { motion } from "framer-motion";

export default function AboutCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex justify-center -mt-12"
    >
      <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px]">

        {/* Outer Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-[#A56ABD]/20
          "
        />

        {/* Middle Ring */}

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-6
            rounded-full
            border
            border-[#A56ABD]/25
          "
        />

        {/* Inner Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-12
            rounded-full
            border
            border-[#A56ABD]/30
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-16
            rounded-full
            bg-[#A56ABD]/20
            blur-3xl
          "
        />

        {/* Image */}

        <div className="absolute inset-14 flex items-center justify-center">
  <ProfileImage size={230} />
</div>

      </div>
    </motion.div>
  );
}