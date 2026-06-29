"use client";

import AboutLeft from "./AboutLeft";
import AboutCenter from "./AboutCenter";
import AboutRight from "./AboutRight";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutLeft />

          <AboutCenter />

        </div>

        {/* Bottom */}

        <div className="mt-24">

          <AboutRight />

        </div>

      </div>
    </section>
  );
}