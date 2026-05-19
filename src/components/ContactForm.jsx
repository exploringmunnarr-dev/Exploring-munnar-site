"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img from '../assets/contact_us_img.svg'
import icon1 from '../assets/formIcon1.svg'
import icon3 from '../assets/formIcon3.svg'
import icon4 from '../assets/formIcon4.svg'
import axios from 'axios'
import SuccessPopup from './SuccessPopup'
const ContactForm = () => {

  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    notes: ""
  })

  const [errors, setErrors] = useState({})
  const [isModal, setIsModal] = useState(false)

  // functions 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required"
    if (!formData.last_name) newErrors.last_name = "Last name is required"
    if (!formData.phone_number) newErrors.phone_number = "Phone number is required"
    if (!formData.email) newErrors.email = "Mail id is required"
    if (!formData.notes) newErrors.notes = "Notes are required"

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    try {
      const res = await axios.post(`${apiUrl}/api/contact`, formData)
      setIsModal(true);
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        notes: ""
      })
    } catch (err) {
      console.error("Error occured while posting contact form : ", err.message)
    }
  }

  return (
    <>
      <section className="main-container mt-8  mx-4 md:mx-10 md:bg-[#EEEEEE] rounded-xl md:grid grid-cols-2 gap-6  md:p-4">
        <div className="container-1 ">
          <Image src={img} alt="contact-bg" className='h-[100%] w-[100%] rounded-xl object-cover ' />
        </div>
        <div className="container-2  w-[100%] bg-white md:rounded-xl mt-4 md:mt-0 md:p-4">
          <h1 className='font-semibold text-3xl text-[#333333]'>Get In Touch</h1>
          <form onSubmit={onSubmit} className='mt-4 space-y-2'>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon1} className='w-7' /></span>First name</label>
              <input type="text" name='first_name' value={formData.first_name} onChange={(e) => handleInputChange(e)} placeholder='Enter your first name' className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
              {errors.first_name && <p className='mt-1 text-sm text-red-400'>{errors.first_name}</p>}
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon1} className='w-7' /></span>Last name</label>
              <input type="text" placeholder='Enter your last name' name='last_name' value={formData.last_name} onChange={(e) => handleInputChange(e)} className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
              {errors.last_name && <p className='mt-1 text-sm text-red-400'>{errors.last_name}</p>}
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon3} className='w-7 rotate-230' /></span>phone number</label>
              <input type="text" placeholder='Eg ;1234567890' name='phone_number' value={formData.phone_number} onChange={(e) => handleInputChange(e)} className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
              {errors.phone_number && <p className='mt-1 text-sm text-red-400'>{errors.phone_number}</p>}
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon4} className='w-7' /></span>Mail</label>
              <input type="text" placeholder='Eg; abc1234@gmail.com' name='email' value={formData.email} onChange={(e) => handleInputChange(e)} className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none' />
              {errors.email && <p className='mt-1 text-sm text-red-400'>{errors.email}</p>}
            </div>
            <div className="input-container">
              <label className='flex items-center gap-2 text-[#333333] text-lg font-medium'><span><Image src={icon4} className='w-7' /></span>Notes</label>
              <textarea
                placeholder='Type your notes'
                name='notes'
                value={formData.notes}
                onChange={(e) => handleInputChange(e)}
                rows={3}
                className='border-2 border-[#777777] rounded-xl p-3 mt-2 w-full outline-none resize-none'
              />
              {errors.notes && <p className='mt-1 text-sm text-red-400'>{errors.notes}</p>}
            </div>
            <button type='submit' className='btn-green w-full py-2 rounded-xl text-lg cursor-pointer text-white'>Submit</button>
          </form>
        </div>
      </section>
      {isModal && (
        <SuccessPopup
          modalTitle="Your contact request has been submitted."
          onClose={() => setIsModal(false)}
        />
      )}
    </>
  )
}

export default ContactForm
