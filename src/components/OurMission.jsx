import React from 'react'
import Image from 'next/image'
import icon1 from '../assets/missionIcon1.svg'
import icon2 from '../assets/missionIcon2.svg'
const OurMission = () => {
    return (
        <>
            <section className='mx-4 md:mx-10 mt-4 md:mt-14 md:flex gap-6 md:space-y-0 space-y-4 '>
                <div className="container-1 bg-[#EEEEEE] rounded-xl p-4 w-[100%] md:w-[50%]">
                    <h1 className='text-xl md:text-3xl font-semibold text-[#333333] flex items-center gap-2'><span><Image src={icon1} /></span>Our mission</h1>
                    <div className="content-container text-[#777777] mt-2 text-justify ">
                        <h1 className=''>Our mission at Exploring Munnar is to make every journey to Munnar truly memorable by offering personalized travel experiences, budget-friendly packages, and authentic local insights. We aim to simplify trip planning with custom itineraries, trusted accommodations, and reliable transport services — so that every traveler can explore Munnar stress-free and in their own way.</h1>
                    </div>
                </div>
                <div className="container-2 bg-[#EEEEEE] rounded-xl p-4 w-[100%] md:w-[50%]">
                    <h1 className='text-xl md:text-3xl font-semibold text-[#333333] flex items-center gap-2'><span><Image src={icon2} /></span>Our Vision</h1>
                    <div className="content-container text-[#777777] mt-2 text-justify ">
                        <h1 className=''>Our vision is to become the most trusted travel partner in Munnar, recognized for creating unique, sustainable, and immersive tourism experiences. We strive to showcase Munnar’s natural beauty — from rolling tea gardens and misty mountains to hidden waterfalls and cultural gems — while promoting eco-friendly travel and supporting local communities.</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurMission