"use client";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
  id="home"
  className="
min-h-[80vh]
xl:min-h-screen
flex
items-center
px-6
pt-28
lg:pt-12
"
>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-20 items-center">

  <div className="order-2 lg:order-1">
    <HeroLeft />
  </div>

  <div className="order-1 lg:order-2">
    <HeroRight />
  </div>

</div>

        </div>
      
    </section>
  );
}