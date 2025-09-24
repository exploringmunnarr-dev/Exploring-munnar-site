"use client";

import React from "react";
import right_arrow from "../assets/right_arrow.svg";
import left_arrow from "../assets/left_arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
const testimonials = [
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Sam",
    role: "Founder at UpSkills",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
  {
    name: "Manzur",
    role: "Founder at Google",
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="relative mt-4 md:mt-8 py-6 md:py-8 mx-4 md:mx-10">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          What Travelers Are Experienced
        </h1>
        <h1 className="text-[#777777] mt-2 mb-8">
          Real experiences from real visitors who explored Munnar with us.
        </h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{
            delay: 2500, // autoplay speed
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile → 1 slide
            },
            768: {
              slidesPerView: 3, // tablet & desktop → 3 slides
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 p-6 shadow-md rounded-2xl relative ${
                    isActive
                      ? "btn-green text-white z-0 scale-100"
                      : "scale-90 bg-[#EEEEEE] text-[#425466] z-0"
                  }`}
                >
                  <div className="flex mb-4` ">
                    {"★"
                      .repeat(5)
                      .split("")
                      .map((star, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          {star}
                        </span>
                      ))}
                  </div>
                  <p className="mb-4 text-lg">{item.text}</p>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-xs">{item.role}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute bottom-[-40px] left-0 right-0 flex items-center justify-center gap-3 bg-[#EEEEEE] w-fit m-auto py-2 px-3 rounded-lg">
          <button className="prev-btn cursor-pointer">
            <Image src={left_arrow} />
          </button>
          <button className="next-btn bg-[#AF4300] text-white py-4 px-4 rounded-lg cursor-pointer">
            <Image src={right_arrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
