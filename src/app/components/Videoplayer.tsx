import React, { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  thumbnail: string;
}

export default function VideoPlayer({ videoId, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <Image
            src={thumbnail || "/placeholder.png"}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-black text-2xl">
              ▶
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
