"use client";
import React, { useState } from "react";
import { Section } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import Image from "next/image";
import VideoPlayer from "./Videoplayer";
import ReadMore from "./ReadMore";

export default function Testimonials({ data }: { data: Section[] }) {
  const testimonials = data.find((item) => item.type === "testimonials");
  const testimonialsValues = testimonials?.values || [];

  return (
    <div id="testimonials">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{testimonials?.name}</h2>
      <div className="relative w-full overflow-visible z-0">
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation
          spaceBetween={24}
          slidesPerView={"auto"}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.5 },
          }}
          mousewheel={true}
          className="w-full min-h-[380px]"
        >
          {testimonialsValues.map((media, index) => (
            <SwiperSlide key={index} className="!w-[320px] md:!w-[360px] lg:!w-[400px]">
              <div>
                <div className="border border-gray-200 p-8 rounded-lg relative overflow-visible z-0">
                  <div
                    className="absolute -top-4 left-5 z-50 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                    id="quote"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 20 30"
                      >
                        <path
                          fill="#D33242"
                          d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 20 30"
                      >
                        <path
                          fill="#D33242"
                          d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    {media.video_url ? (
                      <div className="w-full mb-4 overflow-hidden rounded-md aspect-video">
                        <VideoPlayer
                          key={index}
                          videoId={media.video_url || ""}
                          thumbnail={media.thumb || ""}
                        />
                      </div>
                    ) : (
                      <div className="w-full mb-4 overflow-hidden rounded-md h-[200px] relative">
                        <ReadMore text={media.testimonial} maxChars={250} />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={media.profile_image}
                      alt={media.name}
                      width={40}
                      height={40}
                      className="rounded-full border object-cover"
                    />
                    <div>
                      <p>{media.name}</p>
                      <p className="text-sm text-gray-600">
                        {media.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
