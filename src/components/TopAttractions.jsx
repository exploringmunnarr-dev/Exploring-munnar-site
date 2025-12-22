"use client";
import React from "react";
import Image from "next/image";
import cbeToMunnar from "../assets/Coimbatore to Munnar.jpg";
import ernakulamToMunnar from "../assets/Ernakulam to Munnar.jpg";
import mettupattiToMunnar from "../assets/Mettupatti to Munnar.jpg";
import thekkadiToMunnar from "../assets/Thekady to Munnar.jpg";
import att1 from "../assets/att1.svg";
import att2 from "../assets/att2.svg";
import att3 from "../assets/att3.svg";
import att0 from "../assets/att0.svg";
import mtp1 from "../assets/mtp1.svg";
import mtp2 from "../assets/mtp2.svg";
import mtp3 from "../assets/mtp3.svg";
import mtp4 from "../assets/mtp4.svg";
import mtp5 from "../assets/mtp5.svg";
import mtp6 from "../assets/mtp6.svg";
import mtp7 from "../assets/mtp7.svg";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    title: "Royal Wildlife Sanctuary",
    subtitle: "2 km from the resort",
    image: mtp1,
  },
  {
    title: "Pritvi Lake",
    subtitle: "4 km from the resort",
    image: mtp2,
  },
  {
    title: "Nature Trail",
    subtitle: "1.5 km from the resort",
    image: mtp3,
  },
  {
    title: "Nature Trail",
    subtitle: "1.5 km from the resort",
    image: mtp4,
  },
  {
    title: "Nature Trail",
    subtitle: "1.5 km from the resort",
    image: mtp5,
  },
  {
    title: "Nature Trail",
    subtitle: "1.5 km from the resort",
    image: mtp6,
  },
  {
    title: "Nature Trail",
    subtitle: "1.5 km from the resort",
    image: mtp7,
  },
];

const TopAttractions = () => {
  const attractions = [
    {
      title: "Mettupatti to Munnar",
      desc: "Scenic tea trails & mountain views",
      img: att0,
      set: "setone",
    },
    {
      title: "Coimbatore to munnar",
      desc: "Scenic tea trails & mountain views",
      img: att1,
      set: "settwo",
    },
    {
      title: "Ernakulam to munnar",
      desc: "Scenic tea trails & mountain views",
      img: att2,
      set: "setthree", // add data later
    },
    {
      title: "Thekady to munnar",
      desc: "Scenic tea trails & mountain views",
      img: att3,
      set: "setfour", // add data later
    },
  ];

  return (
    <>
      <section className="py-4 mx-4 md:mx-10 mt-8 md:mt-14 ">
        <div className="header flex gap-2 justify-between mb-8">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Discover top attractions along each route to Munnar
            </h1>
            <h1 className="description text-[#999999] mt-2 w-[100%] md:w-[60%] text-sm md:text-md">
              Discover handpicked attractions in North, South, East, and West
              Munnar — each offering a unique travel experience
            </h1>
          </div>
          <button className="underline text-[#333333] cursor-pointer">
            View
          </button>
        </div>

        {/* tab container  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {attractions.map((item, index) => {
            return (
              <div className="card relative w-full h-[60px] md:h-[160px]">
                <div className="tint absolute top-0 right-0 left-0 bottom-0 rounded-xl"></div>
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full rounded-xl h-full object-cover"
                />
                <div className="content-container absolute top-[50%] left-3 md:left-4 translate-y-[-50%] text-white">
                  <h1 className="font-semibold mb-2 text-md md:text-xl w-[100%] md:w-[50%]">
                    {item.title}
                  </h1>
                  <h1 className="hidden md:block w-[100%] md:w-[90%] ">{item.desc}</h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* slider  */}
        <section className="w-full py-10 flex items-center">
          <div className="hidden md:block w-[30%]">
            <h2 className="text-4xl  font-semibold mb-6 text-[#114422]">
              Discover the Local Wonders
            </h2>
          </div>

          <div className="w-full md:w-[69%]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1} // mobile = 1 full card
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="
          transition-all duration-500
          [&.swiper-slide-active]:scale-100
        "
                >
                  <div className="rounded-xl h-[320px] relative overflow-hidden w-full bg-white">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="px-4 py-1 absolute w-full bottom-[60px] left-0 blur-bg">
                      <h3 className="font-semibold text-md text-white">
                        {slide.title}
                      </h3>
                      <p className="text-[#2D4600] text-sm">{slide.subtitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default TopAttractions;
