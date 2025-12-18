"use client";
import React, { useEffect, useState } from "react";
import car4 from "../assets/car4.svg";
import shareIcon from "../assets/shareIcon.svg";
import heartLike from "../assets/heartLike.svg";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img22.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const HotelHero = ({ data }) => {
  const images = [img1, img2, img3, img4];

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    const responsiveImgData = data?.images?.filter((item) => {
      return item.url;
    });
    setImgData(responsiveImgData);
    console.log("image data : ", responsiveImgData);
  }, [data]);

  return (
    <>
      <section className="mt-8 md:mt-6 ">
        <header className="flex items-center gap-2 justify-between">
          <div className="container-1">
            <h1 className="">
              <span className="text-xl md:text-3xl font-semibold text-[#333333]">
                {" "}
                {data?.name}
              </span>
              {/* <span className="text-[#AF4300] ">(8 more rooms left)</span> */}
            </h1>
          </div>
          <div className="container-2  hidden md:flex items-center gap-6 ">
            <div className="container flex items-center gap-2">
              <Image src={shareIcon} />
              <h1>Share</h1>
            </div>
            <div className="container flex items-center gap-2">
              F
              <Image src={heartLike} />
              <h1>Save</h1>
            </div>
          </div>
        </header>
        <div className="img-container mt-6 hidden md:flex items-start gap-4 ">
          <div className="first-container w-[60%] ">
            <div className="img-contianer-1 h-[250px] overflow-hidden hover:rounded-xl">
              <Image
                src={data?.images?.[0]?.url}
                width={1000}
                height={1000}
                className="h-[100%] object-cover w-full rounded-xl hover:scale-125 transition-all duration-300"
              />
            </div>
            <div className="second-img-container mt-4 flex gap-4">
              <div className="container-1 h-[230px] w-[50%] overflow-hidden hover:rounded-xl">
                <Image
                  src={data?.images?.[3]?.url}
                  width={1000}
                  height={1000}
                  className="w-full h-[100%] rounded-xl object-cover hover:scale-125 transition-all duration-300 "
                />
              </div>
              <div className="container-1 w-[50%] h-[230px] overflow-hidden hover:rounded-xl">
                <Image
                  src={data?.images?.[4]?.url}
                  width={1000}
                  height={1000}
                  className="w-full object-cover rounded-xl h-[100%] hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="second-container w-[40%] h-[497px] overflow-hidden hover:rounded-xl">
            <Image
              src={data?.images?.[2]?.url}
              width={1000}
              height={1000}
              className="w-[100%] object-cover h-[100%] rounded-xl hover:scale-125 transition-all duration-300"
            />
          </div>
        </div>
      </section>
      {/* ---------- responsive  */}
      <div className="container-1 mb-3 border hidden">
        <h1 className="">
          <span className="text-xl md:text-3xl font-semibold text-[#333333]">
            {" "}
            Misty Hill Eco Retreat{" "}
          </span>
          <span className="text-[#AF4300] ">(8 more rooms left)</span>
        </h1>
      </div>
      <div className="h-[220px] md:hidden mt-4 rounded-3xl ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper md:rounded-3xl h-full w-full"
        >
          {imgData?.map((item, index) => {
            console.log("Res data : ", item.url);
            return (
              <SwiperSlide>
                <Image
                  src={item?.url}
                  width={1000}
                  height={1000}
                  alt="slide 1"
                  className="h-full w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HotelHero;
