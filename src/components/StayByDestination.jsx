import React from 'react'
import Image from 'next/image'
import destinationImg from '../assets/destinationImg.svg'
import locationImg from '../assets/locationImg.svg'

const locationData = [
    { img: locationImg, title: "Chinnakanal", top: "24%", left: "20%" },
    { img: locationImg, title: "Devikulam", top: "44%", left: "35%" },
    { img: locationImg, title: "Munnar Town", top: "25%", left: "56%" },
    { img: locationImg, title: "Lockhart Gap", top: "22%", left: "80%" },
    { img: locationImg, title: "Anachal", top: "65%", left: "14%" },
    { img: locationImg, title: "Pallivasal", top: "58%", left: "75%" },
    { img: locationImg, title: "Suryanelli", top: "86%", left: "35%" },
    { img: locationImg, title: "Mangulam", top: "75%", left: "90%" },
];

const StayByDestination = () => {
    return (
        <>
            <section className='mt-8 md:mt-14'>
                <header className='flex items-start justify-between'>
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
                            Find Stays by Destination
                        </h2>
                        <div className="flex items-center justify-between  max-sm:text-[14px]">
                            <p className="text-[#999999] mt-2">
                                Select your favourite Munnar spot and browse available stays.
                            </p>
                        </div>
                    </div>
                    <button className='text-[#333333] underline cursor-pointer'>View hotels</button>
                </header>
                <div className="content-container h-[500px] mt-4">
                    <div className="relative h-[500px] mt-3 rounded-xl overflow-hidden">
                        <Image
                            src={destinationImg}
                            alt="Munnar Map"
                            className="h-full w-full object-cover"
                        />

                        {/* Location Pins will go here */}
                        {locationData.map((loc, index) => (
                            <div
                                key={index}
                                className="absolute flex flex-col items-center "
                                style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                            >
                                <div className="w-[130px] h-[160px] text-center ">
                                    <span className="mt-1 text-xs w-[200%] text-black font-semibold group-hover:scale-125  bg-[#EEEEEE]  px-4 py-2 rounded-full">
                                        {loc.title}
                                    </span>
                                    <Image src={loc.img} alt={loc.title} className="w-full cursor-pointer hover:scale-115 group transition-all duration-300 h-full mt-2 object-cover " />
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default StayByDestination
