"use client";
import React, { useEffect, useState } from 'react'
import img1 from '../assets/heroImg1.svg';
import img2 from '../assets/heroImg2.svg';
import img3 from '../assets/heroImg.svg';
import img4 from '../assets/heroImg4.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import axios from 'axios';
import SubNavbar from './SubNavbar';

const fallbackImages = [img1, img2, img3, img4];
const HomeHero = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchSlides = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/homepage-slides`);
                const data = response.data.data || [];
                // Keep only active slides, ordered by position
                const activeSlides = data
                    .filter((slide) => slide.is_active !== false)
                    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
                if (isMounted) setSlides(activeSlides);
            } catch (err) {
                console.error("Error fetching homepage slides : ", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchSlides();

        return () => {
            isMounted = false;
        };
    }, [apiUrl]);

    // Use API slides when available, otherwise fall back to the static images
    const displaySlides = slides.length > 0 ? slides : fallbackImages;

    return (
        <>
            <div className="mx-2 h-[260px]  md:h-[560px] md:mx-10 mt-2 md:mt-4 md:rounded-3xl relative ">
                {loading ? (
                    <div className="h-[100%] w-[100%] bg-gray-300 animate-pulse rounded-2xl max-sm:rounded-xl" />
                ) : (
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:rounded-3xl h-[100%]"
                >
                    {displaySlides.map((slide, index) => (
                        <SwiperSlide
                            key={slide.id ?? index}
                            className=''
                            style={{ width: "100%" }}
                        >
                            <Image
                                src={slide.imageUrl ?? slide}
                                alt={slide.title || slide.subtitle || "Hero slide"}
                                width={1920}
                                height={1080}
                                className=' h-[100%] w-[100%] object-cover max-sm:rounded-xl'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                )}
                <div className="subNav-container w-[100%] absolute top-2  p-2 flex justify-center items-center z-20">
                    <SubNavbar />
                </div>
            </div>
        </>
    )
}

export default HomeHero
