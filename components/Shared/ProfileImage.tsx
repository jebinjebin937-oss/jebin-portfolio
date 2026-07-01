"use client";

import Image from "next/image";

interface ProfileImageProps {
  size?: number;
  className?: string;
}

export default function ProfileImage({
  size = 260,
  className = "",
}: ProfileImageProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_60px_rgba(73,34,91,.15)] ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src="/profile.jpg"
        alt="Portrait of Jebin"
        priority
        sizes="(max-width: 768px) 90vw, 40vw"
        fill
        className="object-[center_15%] object-cover"
      />
    </div>
  );
}