"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  images: string[];
};

export default function GalleryLightbox({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="
              relative
              h-[320px]
              rounded-3xl
              overflow-hidden
              shadow-xl
              group
              cursor-zoom-in
            "
          >
            <Image
              src={image}
              alt={`Screenshot ${index + 1}`}
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            flex
            items-center
            justify-center
            p-6
          "
        >
          <button
  onClick={() => setSelectedImage(null)}
  className="
    absolute
    top-6
    right-6
    text-white
    bg-black/40
    p-3
    rounded-full
    backdrop-blur-md
    hover:bg-black/60
    transition
  "
>
  <X size={28} />
</button>

          <Image
            src={selectedImage}
            alt="Project Screenshot"
            width={1600}
            height={900}
            className="max-w-full max-h-[90vh] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

        <div
  className="
    absolute
    inset-0
    bg-black/0
    group-hover:bg-black/20
    transition-all
    duration-300
    flex
    items-center
    justify-center
    opacity-0
    group-hover:opacity-100
  "
>
  <span
    className="
      bg-white/90
      text-[#49225B]
      px-5
      py-2
      rounded-full
      font-medium
    "
  >
    View Image
  </span>
</div>

<div
  className="
    absolute
    inset-0
    bg-black/0
    group-hover:bg-black/20
    transition-all
    duration-300
    flex
    items-center
    justify-center
    opacity-0
    group-hover:opacity-100
  "
>
  <span
    className="
      bg-white/90
      text-[#49225B]
      px-5
      py-2
      rounded-full
      font-medium
    "
  >
    View Image
  </span>
</div>

        </div>
      )}
    </>
  );
}