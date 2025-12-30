import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";

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
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchPromotedHotels = async () => {
    // console.log("Fetching promoted hotels...");
      try {
        const res = await axios.post(
          `${apiUrl}/api/hotels-list`,
          { isFeatured: true, },
        );
        // console.log("Promoted hotels data:", res.data.data.hotels);
        setData(res.data.data.hotels)
      } catch (error) {
        console.error("Error fetching promoted hotels:", error);
      }
    };

    fetchPromotedHotels();
  }, [apiUrl]);

  return (
    <>
      <section className="md:py-4   mx-4 md:mx-10 mt-8">
        <div className="w-[100%]">
          <Swiper
            className="w-[100%]"
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {data.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="transition-all duration-500 cursor-pointer"
              >
                <Link href={`/hotels/hotel_listing/${slide.id}`} className="rounded-xl h-[250px] sm:h-[300px] md:h-[300px] w-full relative  bg-white">
                  <Image
                    src={slide.featuredImageUrl}
                    width={1000}                                        
                    height={1000}
                    alt={slide.title}
                    className="md:h-[300px] w-full "
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PromotionBanner;
