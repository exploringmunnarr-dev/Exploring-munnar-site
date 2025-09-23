import Image from 'next/image'
import React from 'react'
import img1 from '../assets/galleryImg1.svg';
import img2 from '../assets/galleryImg2.svg';
import img3 from '../assets/galleryImg3.svg';
import img4 from '../assets/galleryImg4.svg';
import img5 from '../assets/galleryImg5.svg';
const GuestGallerySection = () => {
    return (
        <>
            <section className='md:mx-10 mx-4 mt-8 md:mt-14 md:flex gap-12 items-center justify-between  '>
                <div className="first-container w-[100%] md:w-[40%]">
                    <div className="container-1 w-[90%]">
                        <h1 className='text-[#333333] text-xl md:text-[50px] font-semibold'>Explore Munnar Through Our Guest Lens</h1>
                        <h1 className='text-[#2D2E2E] text-lg mt-2 max-sm:text-[14px]'>From misty tea gardens to mountain treks and cultural moments — discover the beauty of Munnar captured by our travelers and partners.</h1>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:w-[60%] grid grid-cols-10 grid-rows-6 gap-2 ">
                    <div className="col-span-4 row-span-4 ">
                        <Image src={img1} className='h-[100%] object-cover max-sm:rounded-xl rounded-b-xl' />
                    </div>
                    <div className="col-span-4 row-span-2 col-start-1 row-start-5 ">
                        <Image src={img2} className='h-[100%] object-cover rounded-t-xl max-sm:rounded-xl' />
                    </div>
                    <div className="col-span-3 row-span-3 col-start-5 row-start-1 ">
                        <Image src={img3} className='h-[100%] object-cover rounded-b-xl max-sm:rounded-xl' />
                    </div>
                    <div className="col-span-3 row-span-3 col-start-5 row-start-4 ">
                        <Image src={img4} className='h-[100%] object-cover rounded-t-xl max-sm:rounded-xl' />
                    </div>
                    <div className="col-span-3 row-span-6 col-start-8 row-start-1 ">
                        <Image src={img5} className='h-[100%] object-cover rounded-t-xl max-sm:rounded-xl'/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default GuestGallerySection
