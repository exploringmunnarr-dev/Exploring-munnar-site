import Image from 'next/image'
import React from 'react'
import banner1 from '../assets/banner1.svg'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.svg'
const bannerData = [
    { img: banner1, id: 123, hotelDetails: {} },
    // { img: banner2, id: 123, hotelDetails: {} },
    // { img: banner3, id: 123, hotelDetails: {} },
]

const PromotionBanner = () => {
    return (
        <>
            <section className='py-4 mx-4 md:mx-10 mt-8 md:mt-8'>
                {bannerData.map((item, index) => {
                    return <div className="card w-[100%]">
                        <Image src={item.img} alt='banner_img' width={100} height={100} className='w-full h-[320px]' />
                    </div>
                })}
            </section>
        </>
    )
}

export default PromotionBanner
