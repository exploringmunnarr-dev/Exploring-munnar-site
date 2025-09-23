import Image from 'next/image'
import React from 'react'
import one from '../assets/one.svg'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
import four from '../assets/four.svg'

    const data = [
        {title : "Handpicked Hotels Only", description : "Explore stays based on what you love — lake views, plantation cottages, or treetop escapes.Easily filter by destination, vibe, or travel mood.", img : one},
        {title : "Search by Region or Experience", description : "Every stay is locally verified by our team to ensure comfort, cleanliness, and charm.No random listings — only stays we’d recommend to friends.", img : two},
        {title : "Local 24/7 Customer Support", description : "Our support team is based right here in Munnar and available anytime.From booking help to on-trip queries — we’re just a message away.", img : three},
        {title : "Real Munnar Experience", description : "We highlight hidden gems and offbeat spots travelers often miss.Stay closer to nature, culture, and real local experiences.", img : four},
    ]

const WhyBookOurStay = () => {
    return (
        <>
            <section className='mt-8 md:mt-14'>
                <header className='flex items-start justify-between'>
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
                            Why Book Your Stay with Exploring Munnar?
                        </h2>
                        <div className="flex items-center justify-between  max-sm:text-[14px]">
                            <p className="text-[#999999] mt-2">
                                Handpicked stays, local support, and a hassle-free experience — <br /> all designed for the perfect Munnar getaway.
                            </p>
                        </div>
                    </div>
                </header>
                <div className="content-container mt-8 space-y-4 sm:space-y-0 sm:grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.map((item, index)=>{
                        return <div className='text-center'>
                            <div className="img-container">
                                <Image src={item.img} alt="img" className='w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] m-auto'/>
                            </div>
                            <div className="content-container mt-3">
                                <h1 className='font-semibold text-[#333333] text-md sm:text-lg'>{item.title}</h1>
                                <h1 className='mt-3 text-[#777777] text-sm sm:text-md:'>{item.description}</h1>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default WhyBookOurStay
