import React from 'react'
import icon1 from '../assets/navIvon1.svg'
import icon2 from '../assets/navIcon2.svg'
import icon3 from '../assets/navIcon3.svg'
import icon4 from '../assets/navIcon4.svg'
import icon5 from '../assets/navIcon5.svg'
import Image from 'next/image'
import Link from 'next/link'

const data = [
    { title: "Transports", icon: icon1, link: "transports" },
    { title: "Hotels & stays", icon: icon2, link: "hotels" },
    { title: "Activities", icon: icon3, link: "activities" },
    { title: "Live information", icon: icon4, link: "live_information" },
    {
        title: "Itneary planning", icon: icon5, link: "itneary_planning"
    },
]
const SubNavbar = () => {
    return (
        <>
            <nav className='hidden md:flex items-center gap-2 bg-white rounded-xl py-2 px-4'>
                {data.map((item, index) => {
                    return <div key={index} className={`nav-item pr-4 pl-2 border-r ${index == 4 ? "border-none" : ""} font-medium text-[#333333] text-lg`}>
                        <Link href={`/${item.link}`} className='flex gap-3'>
                            <Image src={item.icon} />
                            <h1>{item.title}</h1>
                        </Link>
                    </div>
                })}
            </nav>
        </>
    )
}

export default SubNavbar
