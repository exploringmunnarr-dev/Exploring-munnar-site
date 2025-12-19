import React from 'react'
import icon1 from '../assets/whyTravelerIcon1.svg'
import icon2 from '../assets/whyTravelerIcon2.svg'
import icon3 from '../assets/whyTravelerIcon3.svg'
import icon4 from '../assets/whyTravelerIcon4.svg'
import Image from 'next/image'
const data = [
    { icon: icon1, title: "Local Expertise", description: "Curated by locals and travel pros who know Munnar inside out" },
    { icon: icon2, title: "Personalized Itineraries", description: "Tell us your interests and budget — we’ll build your ideal trip." },
    { icon: icon3, title: "Real-Time Info", description: "Get live updates on weather, roads, transport, and attractions." },
    { icon: icon4, title: "Customer Support", description: "Got a question? Our support team is always just a message away." }
]
const WhyTravelerChooseSection = () => {
    return (
        <>
            <section className='mx-4 md:mx-10 mt-4 md:mt-14 md:flex gap-6 items-center '>
                <div className="container-1 w-[100%] md:w-[40%] ">
                    <h1 className='text-xl md:text-3xl font-semibold text-[#333333] w-[100%] md:w-[80%] '>Why Travelers Choose Exploring Munnar</h1>
                    <div className="content-container text-[#777777] mt-2 text-justify w-[100%]  md:w-[85%] ">
                        <h1>We’re more than a travel guide — we’re your local companion for a hassle-free, personalized, and unforgettable Munnar experience.</h1>
                    </div>
                </div>
                <div className="container-1 w-[100%] mt-4 md:mt-0 space-y-2 md:space-y-0 md:w-[60%] md:grid grid-cols-2 gap-4 ">
                    {data.map((item, index) => {
                        return <div key={index} className='card bg-[#EEEEEE] p-4 flex gap-4 items-center rounded-xl'>
                            <div className="icon-container bg-white w-fit p-2 rounded-full">
                                <Image src={item.icon} />
                            </div>
                            <div className="content-container ">
                                <h1 className='text-xl mb-2'>{item.title}</h1>
                                <h1 className='description text-[#777777]'>{item.description}</h1>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default WhyTravelerChooseSection