"use client";
import React from "react";
import Image from "next/image";
import { Media } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VideoPlayer from "./Videoplayer";

export default function Trailer({ product }: { product: Media[] }) {
  if (product?.length === 0) return null;

  const filteredMedia = product.filter(m => m.name === "preview_gallery");

  if (filteredMedia?.length === 0) return null;

  return (
    <div>
      <div className="hidden p-1 md:block">
        <div className="h-full transition-opacity duration-300 ease-in-out">
          <Swiper modules={[Navigation]} navigation height={360} className="w-full">
            {filteredMedia.map((media, index) => (
              <SwiperSlide key={index}>
                {media.resource_type === "video" ? (
                  <VideoPlayer videoId={media.resource_value || ""} thumbnail={media.thumbnail_url || ""}></VideoPlayer>
                ) : (
                  <Image
                    src={media.resource_value || "/placeholder.png"}
                    alt="img"
                    style={{ color: "transparent" }}
                    width={640}
                    height={360}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
