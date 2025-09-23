import React from 'react'
import Image from 'next/image'
import img1 from '../assets/whoWeAreImg1.svg'
import img2 from '../assets/whoWeAreImg2.svg'
import img3 from '../assets/whoWeAreImg3.svg'
const WhoWeAreSection = () => {
    return (
        <>
            <section className='mx-4 mt-4 md:mt-14 md:mx-10 md:flex gap-6 justify-between md:h-[390px] '>
                <div className="container-1 w-[100%] md:w-[50%] " >
                    <h1 className='text-xl md:text-3xl font-semibold text-[#333333] '>Who we are</h1>
                    <div className="content-container text-[#777777] mt-2 text-justify w-[98%] md:w-[95%]  ">
                        <h1 className=''>At Exploring Munnar, we are passionate storytellers of Kerala’s crown jewel — Munnar. Our mission is to create memorable travel experiences that go beyond just sightseeing. We believe every journey should be a blend of comfort, adventure, and discovery.
                            With a team of dedicated travel experts and local partners, we curate customized itineraries, handpicked stays, reliable transport options, and authentic experiences that help travelers explore Munnar like never before. From misty hills to tea gardens, from thrilling treks to serene lakes — we ensure your trip is planned with precision and With a team of dedicated travel experts and local partners, we curate customized itineraries, handpicked stays, reliable transport options, anda personal touch.Whether you’re a solo traveler, a couple, a family, or a group of friends, Exploring Munnar is your trusted companion in crafting unforgettable memories.</h1>
                    </div>
                </div>
                <div className="container-2 w-[100%] mt-4 md:mt-0 md:w-[50%] h-[94%] md:flex gap-3">
                    <div className="img-container-1 h-[100%]  ">
                        <Image src={img1} className='h-[100%] object-cover rounded-xl' />
                    </div>
                    <div className="img-container-2 space-y-2 mt-4 md:mt-0  ">
                        <div className="img-1 h-[49%] ">
                            <Image src={img2} className='object-cover h-[100%] rounded-xl' />
                        </div>
                        <div className="img-2 h-[49%] ">
                            <Image src={img3} className='object-cover h-[100%] rounded-xl' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAreSection 