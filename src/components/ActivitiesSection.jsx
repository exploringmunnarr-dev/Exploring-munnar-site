import Image from 'next/image'
import React from 'react'
import img1 from '../assets/activityImg1.svg'
import img2 from '../assets/activityImg2.svg'
import img3 from '../assets/activityImg3.svg'
import img4 from '../assets/activityImg4.svg'
const ActivitiesSection = () => {
    return (
        <>
            <section className="main-container mx-4 md:mx-10 mt-8 md:mt-14">
                <header className='header md:flex justify-between'>
                    <div className="container-1">
                        <h1 className='text-xl md:text-3xl font-semibold text-[#333333]'>Experience Munnar, One Activity at a Time</h1>
                        <h1 className="text-lg mt-2 max-sm:text-[14px] text-[#999999]">
                            Adventure, wellness, nature, or culture — discover things to do in Munnar all year round.
                        </h1>
                    </div>
                    <button>
                        <h1 className='font-semibold text-[#333333] underline hover:text-green-600'>View all</h1>
                    </button>
                </header>
                {/* Image container  */}
                <div className="image-container mt-4 md:flex gap-4 h-[540px] ">
                    <div className="first-container w-[100%] md:w-[60%] h-[50%] ">
                        <Image src={img1} className='h-[100%] w-[100%] object-cover rounded-xl' />
                        <div className="first-container-second-img mt-2 md:flex gap-3 h-[100%]" >
                            <Image src={img2} className='h-[100%] w-[100%] md:w-[50%] object-cover rounded-2xl' />
                            <Image src={img3} className='h-[97%] w-[100%] mt-2 md:w-[50%] object-cover rounded-2xl hidden md:block' />
                        </div>
                    </div>
                    <div className="second-container hidden md:block w-[40%] ">
                        <Image src={img4} className='h-[102%] object-cover w-[100%] rounded-xl' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActivitiesSection
