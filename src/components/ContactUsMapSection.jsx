import React from 'react'
import Image from 'next/image'
import img1 from '../assets/contact_img1.svg'
import img2 from '../assets/contact_img2.svg'
import img3 from '../assets/contact_img3.svg'
import map_img from '../assets/map_img.svg'

    const data = [
        {icon : img1, title : "Bus Stand,Munnar, Idukki District, Kerala - 685612, India"},
        {icon : img2, title : "+2034 4040 3030"},
        {icon : img3, title : "enquiry@exploringmuunnar.com"},
    ]

const ContactUsMapSection = () => {
  return (
    <>
      <section className='mt-14 mx-4 md:mx-10 md:flex gap-6 md:h-[420px] '>
            <div className="container-1 w-[100%] md:w-[50%]  grid grid-cols-1 space-y-4">
                    {data.map((item, index)=>{
                        return <div key={index} className='card bg-[#EEEEEE] rounded-xl p-4 flex gap-4 items-center'>
                            <Image src={item.icon} alt='icon' className=' w-4 md:w-12'/>
                            <h1 className='w-[100%] text-[#333333] md:text-lg '>{item.title}</h1>
                        </div>
                    })}
            </div>
            <div className="container-2 max-sm:mt-2 w-[100%] md:w-[50%] h-[100%]">
                <Image src={map_img} alt='map-image' className="h-[100%] object-cover rounded-xl"/>
            </div>
      </section>
    </>
  )
}

export default ContactUsMapSection
