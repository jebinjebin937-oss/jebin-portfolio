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
        alt="Jebin"
        fill
        className="object-cover"
      />
    </div>
  );
}