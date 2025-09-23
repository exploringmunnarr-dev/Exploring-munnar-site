import React from 'react'
import Image from 'next/image'
import img from '../assets/contact_us_img.svg'
import icon1 from '../assets/formIcon1.svg'
import icon3 from '../assets/formIcon3.svg'
import icon4 from '../assets/formIcon4.svg'
const ContactForm = () => {
  return (
    <>
      <section className="main-container mt-8  mx-4 md:mx-10 md:bg-[#EEEEEE] rounded-xl md:flex gap-6 md:h-[550px] md:p-4">
        <div className="container-1 h-[100%] md:h-[100%]  w-[100%] md:w-[50%]">
          <Image src={img} className='h-[100%] w-[100%] rounded-xl object-cover ' />
        </div>
        <div className="container-2  w-[100%] md:w-[50%] bg-white md:rounded-xl mt-4 md:mt-0 md:p-4">
          <h1 className='font-semibold text-3xl text-[#333333]'>Get In Touch</h1>
          <form className='mt-4 space-y-2'>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon1} className='w-7' /></span>First name</label>
              <input type="text" placeholder='Enter your first name' className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon1} className='w-7' /></span>Second name</label>
              <input type="text" placeholder='Enter your second name' className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon3} className='w-7' /></span>phone number</label>
              <input type="text" placeholder='Eg ;1234567890' className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon4} className='w-7' /></span>Mail</label>
              <input type="text" placeholder='Eg; abc1234@gmail.com' className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
            </div>
            <button className='btn-green w-full py-2 rounded-xl text-lg cursor-pointer text-white'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactForm
