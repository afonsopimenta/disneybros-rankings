"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const MovieCard = ({ src }: { src: string }) => {
  const router = useRouter();

  return (
    <button
      className="max-w-xs overflow-hidden rounded-lg shadow-xl transition-all duration-200 hover:scale-105"
      onClick={router.refresh}
    >
      <Image src={src} alt="" width={1280} height={1920} />
    </button>
  );
};
