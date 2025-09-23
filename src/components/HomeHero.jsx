"use client";
import React from 'react'
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
import SubNavbar from './SubNavbar';
const HomeHero = () => {
    return (
        <>
            <div className="mx-2 h-[220px] md:h-auto md:mx-10 md:mt-4 md:rounded-3xl relative ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:rounded-3xl h-[100%]"
                >
                    <SwiperSlide className='' style={{ width: "100%", }}>
                        <Image src={img1} className=' h-[100%] w-[100%] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img2} className=' h-[100%] w-[100%] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img3} className=' h-[100%] w-[100%] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img4} className=' h-[100%] w-[100%] object-cover' />
                    </SwiperSlide>

                </Swiper>
                <div className="subNav-container w-[100%] absolute top-2  p-2 flex justify-center items-center z-20">
                    <SubNavbar />
                </div>
            </div>
        </>
    )
}

export default HomeHero
