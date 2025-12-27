import Image from "next/image";
import React, { useEffect } from "react";
import banner1 from "../assets/banner1.svg";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.svg";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import axios from "axios";

const bannerData = [
  { img: banner1, id: 123, hotelDetails: {} },
  { img: banner2, id: 123, hotelDetails: {} },
  { img: banner3, id: 123, hotelDetails: {} },
  { img: banner1, id: 123, hotelDetails: {} },
  { img: banner2, id: 123, hotelDetails: {} },
  { img: banner3, id: 123, hotelDetails: {} },
  // { img: banner2, id: 123, hotelDetails: {} },
  // { img: banner3, id: 123, hotelDetails: {} },
];

const PromotionBanner = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPromotedHotels = async () => {
      console.log("Fetching promoted hotels...");
      try {
        const res = await axios.post(
          `${apiUrl}/api/hotels-list`,
          {},
          {
            params: {
              isFeatured: true,
            },
          }
        );
        console.log("Promoted hotels data:", res.data.data.hotels);
      } catch (error) {
        console.error("Error fetching promoted hotels:", error);
      }
    };

    fetchPromotedHotels();
  }, [apiUrl]);

  return (
    <>
      <section className="md:py-4 max-sm:mt-[-30px]  mx-4 md:mx-10 md:mt-8">
        <div className="w-[100%]">
          <Swiper
            className="w-[100%]"
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {bannerData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="transition-all duration-500 cursor-pointer"
              >
                <div className="rounded-xl h-full sm:h-[300px] md:h-[300px] w-full relative  bg-white">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    className="h-full w-full "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PromotionBanner;
