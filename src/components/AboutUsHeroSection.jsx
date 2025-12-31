import React from 'react'
import Image from 'next/image'
import about_us_img from '../assets/abput_us_img.svg'
const AboutUsHeroSection = () => {
    console.log("about us hero section rendered")
    return (
        <>
            <section className='mt-4 h-[200px] md:h-auto md:mx-10 mx-4 relative'>
                <Image src={about_us_img} className='h-[100%] w-[100%] object-cover rounded-lg'/>
                <div className="tint absolute top-0 right-0 left-0 bottom-0 rounded-2xl"></div>
                <div className="content-container text-white absolute top-[20%] left-[5%]  ">
                    <h1 className='font-semibold text-lg md:text-3xl'>About exploring munnar</h1>
                    <h1 className='w-[100%] md:w-[80%] mt-3'>Your trusted travelling partner in discovering the beauty of munnar</h1>
                    <button className='btn-green mt-4 cursor-pointer px-4 py-2 rounded-lg hover:red'>Plan your trip now</button>
                </div>
            </section>
        </>
    )
}

export default AboutUsHeroSection
