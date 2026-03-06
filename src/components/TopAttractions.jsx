"use client";
import React, { useState } from "react";
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

import attractionImg1 from "../assets/attractionImg1.svg";
import anayirangalDam from "../assets/anayirangalDam.webp";
import lockhartgapviewpoint from "../assets/lockhart-gap-view-point.jpg";
import tataTeaMuseum from "../assets/tataTeaMuseum.jpg";
import roseGarden from "../assets/roseGarden.jpg";
import chitrapuram from "../assets/chitrapuram.webp";
import attractiontesting1 from "../assets/attractiontesting1.jpg";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";


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

  const slidesBySet = {
    setone: [
      {
        title: "Chinnakanal Waterfalls (Power House Falls)",
        subtitle: "2 km from the route",
        image: attractionImg1,
        link: "/chinnakanal-waterfalls-power-house-falls",
      },
      {
        title: "Anayirangal Dam",
        subtitle: "4 km from the route",
        image: anayirangalDam,
        link: "/anayirangal-dam",
      },
      {
        title: "Lockhart Gap Viewpoint",
        subtitle: "4 km from the route",
        image: lockhartgapviewpoint,
        link: "/lockhart-gap-viewpoint",
      },
      {
        title: "Tea Museum (TATA Tea Museum – Nallathanni)",
        subtitle: "4 km from the route",
        image: tataTeaMuseum,
        link: "/tata-tea-museum-nallathanni",
      },
      {
        title: "Rose Garden",
        subtitle: "4 km from the route",
        image: roseGarden,
        link: "/rose-garden-munnar",
      },
      {
        title: "Chithirapuram Viewpoint",
        subtitle: "4 km from the route",
        image: chitrapuram,
        link: "/chithirapuram-viewpoint",
      },
      {
        title: "attraction testing",
        subtitle: "4 km from the route",
        image: attractiontesting1,
        link: "/attraction-testing",
      },
    ],
    settwo: [
      {
        title: "Aliyar Dam",
        subtitle: "Scenic stop on Coimbatore to Munnar route",
        image: cbeToMunnar,
        link: "/aliyar-dam",
      },
      {
        title: "Monkey Falls",
        subtitle: "Refreshing waterfall on Coimbatore route",
        image: cbeToMunnar,
        link: "/monkey-falls",
      },
      {
        title: "Loam's View Point",
        subtitle: "Scenic stop on Valparai Ghat Road",
        image: cbeToMunnar,
        link: "/loams-view-point",
      },
      {
        title: "Chinnar Wildlife Sanctuary",
        subtitle: "Wildlife sanctuary with trekking",
        image: cbeToMunnar,
        link: "/chinnar-wildlife-sanctuary",
      },
      {
        title: "Marayoor Sandalwood Forest",
        subtitle: "Unique sandalwood forest attraction",
        image: cbeToMunnar,
        link: "/marayoor-sandalwood-forest",
      },
      {
        title: "Lakkam Waterfalls",
        subtitle: "Beautiful waterfall near Munnar",
        image: cbeToMunnar,
        link: "/lakkam-waterfalls",
      },
      {
        title: "Pambar River Viewpoints",
        subtitle: "Scenic nature stops on Coimbatore route",
        image: cbeToMunnar,
        link: "/pambar-river-viewpoints",
      },
    ],
    setthree: [
      {
        title: "Cheeyappara Waterfalls",
        subtitle: "Top scenic stop on Ernakulam route",
        image: ernakulamToMunnar,
        link: "/cheeyappara-waterfalls",
      },
      {
        title: "Valara Waterfalls",
        subtitle: "Twin waterfalls on Ernakulam route",
        image: ernakulamToMunnar,
        link: "/valara-waterfalls",
      },
      {
        title: "Neriamangalam Bridge Viewpoint",
        subtitle: "Gateway to Munnar",
        image: ernakulamToMunnar,
        link: "/neriamangalam-bridge-viewpoint",
      },
      {
        title: "Kallar Waterfalls",
        subtitle: "Refreshing stop on Ernakulam route",
        image: ernakulamToMunnar,
        link: "/kallar-waterfalls",
      },
      {
        title: "Karadippara Viewpoint",
        subtitle: "Panoramic stop on Ernakulam route",
        image: ernakulamToMunnar,
        link: "/karadippara-viewpoint",
      },
      {
        title: "Anachal / Dreamland Adventure Park",
        subtitle: "Fun stop on Ernakulam route",
        image: ernakulamToMunnar,
        link: "/anachal-dreamland-adventure-park",
      },
      {
        title: "Attukad Waterfalls",
        subtitle: "Scenic nature spot near Munnar",
        image: ernakulamToMunnar,
        link: "/attukad-waterfalls",
      },
    ],
    setfour: [
      {
        title: "Ramakkalmedu",
        subtitle: "Scenic viewpoint on Thekady route",
        image: thekkadiToMunnar,
        link: "/ramakkalmedu",
      },
      {
        title: "Kalvari Mount (Calvary Mount)",
        subtitle: "Panoramic stop on Thekady route",
        image: thekkadiToMunnar,
        link: "/kalvari-mount",
      },
      {
        title: "Idukki Arch Dam Viewpoint",
        subtitle: "Iconic stop on Thekady route",
        image: thekkadiToMunnar,
        link: "/idukki-arch-dam-viewpoint",
      },
      {
        title: "Panchalimedu",
        subtitle: "Misty hilltop on Thekady route",
        image: thekkadiToMunnar,
        link: "/panchalimedu",
      },
      {
        title: "Parunthumpara Viewpoint",
        subtitle: "Best hill view on Thekady route",
        image: thekkadiToMunnar,
        link: "/parunthumpara-viewpoint",
      },
      {
        title: "Kuttikkanam Viewpoint",
        subtitle: "Scenic stop on Thekady route",
        image: thekkadiToMunnar,
        link: "/kuttikkanam-viewpoint",
      },
      {
        title: "Vagamon Pine Forest",
        subtitle: "Nature spot on Thekady route",
        image: thekkadiToMunnar,
        link: "/vagamon-pine-forest",
      },
    ],
  };

  const [selected, setSelected] = useState(attractions[0].set);
  const currentSlides = selected
    ? slidesBySet[selected] ?? []
    : slidesBySet[attractions[0].set];

  return (
    <>
      <section className="py-4 mx-4 md:mx-10 mt-8 md:mt-14 ">
        <div className="header  md:flex gap-2 justify-between mb-8">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Discover top attractions along each route to Munnar
            </h1>
            <h1 className="description text-[#999999] mt-2 w-[100%] md:w-[60%] text-sm md:text-md">
              Discover handpicked attractions in North, South, East, and West
              Munnar — each offering a unique travel experience
            </h1>
          </div>
          <Link
            href={"/nearByAttractions"}
            className="underline text-[#333333] cursor-pointer"
          >
            View all
          </Link>
        </div>

        {/* tab container  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {attractions.map((item, index) => {
            const isSelected = selected === item.set;
            return (
              <div
                key={item.set || index}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() =>
                  setSelected((prev) => (prev === item.set ? null : item.set))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelected((prev) =>
                      prev === item.set ? null : item.set
                    );
                }}
                className={`card relative w-full h-[60px] md:h-[160px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${isSelected ? "bg-[#114422]" : ""
                  }`}
              >
                {!isSelected && (
                  <>
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt=""
                      className="w-full rounded-xl h-full object-cover"
                    />
                  </>
                )}

                {isSelected && (
                  <div className="absolute inset-0 bg-[#114422] rounded-xl z-0"></div>
                )}

                <div className="content-container absolute top-[50%] left-3 md:left-4 translate-y-[-50%] text-white z-10">
                  <h1 className="font-semibold mb-2 text-md md:text-xl w-[100%] md:w-[50%]">
                    {item.title}
                  </h1>
                  <h1 className="hidden md:block w-[100%] md:w-[90%] ">
                    {item.desc}
                  </h1>
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
              className="h-[320px]"
              key={selected ?? "default"}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={currentSlides.length > 1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
            >
              {currentSlides.map((slide, index) => (
                <SwiperSlide key={index} className="h-full ">
                  <Link
                    href={`${slide.link}`}
                    className="rounded-xl h-[320px] relative overflow-hidden w-full bg-white"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover rounded-lg"
                    />

                    <div className="px-4 py-1 absolute w-full bottom-[60px] left-0 blur-bg">
                      <h3 className="font-semibold text-md text-white">
                        {slide.title}
                      </h3>
                      <p className="text-[#2D4600] text-sm">{slide.subtitle}</p>
                    </div>
                  </Link>
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
