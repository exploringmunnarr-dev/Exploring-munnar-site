"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import hotelCard1 from "../assets/hotelCard1.svg";
import hotelCard2 from "../assets/hotelCard2.svg";
import hotelCard3 from "../assets/hotelCard3.svg";
import hotelCard4 from "../assets/hotelCard4.svg";
import hImg1 from "../assets/hImg1.svg";
import hImg2 from "../assets/hImg2.svg";
import hImg3 from "../assets/hImg3.svg";
import hImg4 from "../assets/hImg4.svg";
import hImg5 from "../assets/hImg5.svg";
import hImg6 from "../assets/hImg6.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useData } from "@/context/ThemeContext";
import Link from "next/link";
const cardData = [
  { img: hImg1, title: "Tents & Camping Grounds" },
  { img: hImg2, title: "Eco Cottages" },
  { img: hImg3, title: "Treehouses" },
  { img: hImg4, title: "Homestays & Guesthouses" },
  { img: hImg5, title: "Boutique Resorts & Hotels" },
  // { img: hImg6, title: "Resorts" },
];
// "Tents & Camping Grounds",
//   "Eco Cottages",
//   "Treehouses",
//   "Homestays & Guesthouses",
//   "Boutique Resorts & Hotels",
const HotelsStayType = () => {
  // context data
  const { stayType, setStayType } = useData();

  const navigate = useRouter();

  // refs
  const cardRef = useRef(null);

  // functions
  const handleNext = () => {
    if (cardRef.current) {
      cardRef.current.scrollLeft += 400;
    }
  };

  const handlePrev = () => {
    if (cardRef.current) {
      cardRef.current.scrollLeft -= 400;
    }
  };

  function handleStay(title) {
    setStayType([title]);
    navigate.push("/hotels/hotel_listing");
  }
  return (
    <>
      <section className="mt-8 md:mt-10">
        <header className="md:flex items-start justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Browse by Stay Type
            </h2>
            <div className="flex items-center justify-between  max-sm:text-[14px]">
              <p className="text-[#999999] mt-2">
                Choose a category that suits your travel style.
              </p>
            </div>
          </div>
          <Link href={`/hotels/hotel_listing`} className="text-[#333333] underline cursor-pointer">
            View all
          </Link>
        </header>
        <div className="relative mt-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 2000, // 3 seconds
              disableOnInteraction: false, // keeps autoplay even after user clicks
            }}
            loop={true} // makes it infinite
            breakpoints={{
              320: { slidesPerView: 1 }, // mobile
              640: { slidesPerView: 3 }, // small screens
              1024: { slidesPerView: 4 }, // md and up
            }}
            className="mt-3"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleStay(item.title)}
                  className="card rounded-lg h-[300px] relative overflow-hidden"
                >
                  <Image
                    src={item.img}
                    alt={`Card ${index}`}
                    className="w-full h-auto object-cover rounded-lg hover:scale-125 transition-all duration-300"
                  />
                  <div className="hoteltextContainer absolute bottom-0 rounded-b-lg w-[100%]">
                    <h3 className="text-center py-2 text-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="button-container grid grid-cols-2 gap-2 mt-4 bg-[#EEEEEE] w-fit m-auto p-2 rounded-lg">
            <button className="custom-prev py-4 flex items-center justify-center rounded bg-[#AF4300] cursor-pointer">
              <Image src={left} alt="Prev" />
            </button>
            <button className="custom-next px-4 py-4 bg-white flex items-center justify-center rounded cursor-pointer">
              <Image src={right} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelsStayType;
