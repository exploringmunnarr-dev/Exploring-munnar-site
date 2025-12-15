import Image from 'next/image'
import React from 'react'
import banner1 from '../assets/banner1.svg'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.svg'

// swiper imports 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";

const bannerData = [
    { img: banner1, id: 123, hotelDetails: {} },
    { img: banner2, id: 123, hotelDetails: {} },
    { img: banner3, id: 123, hotelDetails: {} },
    { img: banner1, id: 123, hotelDetails: {} },
    { img: banner2, id: 123, hotelDetails: {} },
    { img: banner3, id: 123, hotelDetails: {} },
    // { img: banner2, id: 123, hotelDetails: {} },
    // { img: banner3, id: 123, hotelDetails: {} },
]

const PromotionBanner = () => {
    return (
        <>
            <section className='py-4 mx-4 md:mx-10 mt-8 md:mt-8'>
                <div className='w-[100%]'>
                    <Swiper
                        className="w-[100%]"
                        modules={[Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1},
                            1024: { slidesPerView: 1 },
                        }}
                    >
                        {bannerData.map((slide, index) => (
                            <SwiperSlide key={index} className="
                                                    transition-all duration-500 
                                             
                                                    ">
                                <div className="rounded-xl h-[300px] w-full relative overflow-hidden  bg-white">
                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        className="h-full w-full object-cover"
                                    />
                                    {/* <div className="px-4 py-1 absolute w-[100%] bottom-[60px] left-0 blur-bg ">
                                    <h3 className="font-semibold text-md text-white">{slide.title}</h3>
                                    <p className="text-[#2D4600] text-sm">{slide.subtitle}</p>
                                </div> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* {bannerData.map((item, index) => {
                    return <div className="card w-[100%]">
                        <Image src={item.img} alt='banner_img' width={100} height={100} className='w-full h-[320px]' />
                    </div>
                })} */}
            </section>
        </>
    )
}

export default PromotionBanner
