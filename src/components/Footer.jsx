import React from 'react'
import fb from '../assets/fb.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import pinterest from '../assets/pinterest.svg'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <section className='btn-green text-white mt-14 px-4 md:px-10 py-20  '>
                <section className='  grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                    <div className="container-1">
                        <h1 className='font-medium text-2xl'>Exploring munnar</h1>
                        <div className="list-container mt-6  w-[70%]">
                            <h1>Discover the beauty of Munnar with curated stays,local experiences, and real-time travel insights.  </h1>
                            <div className="icon-container gap-3 items-center mt-6 hidden md:flex">
                                <Image src={fb} alt='social_media_icon' className='w-5 h-5'/>
                                <Image src={twitter} alt='social_media_icon' className='w-5 h-5'/>
                                <Image src={linkedin} alt='social_media_icon' className='w-5 h-5'/>
                                <Image src={pinterest} alt='social_media_icon' className='w-5 h-5'/>
                            </div>
                        </div>
                    </div>
                    <div className="container-2">
                        <h1 className='font-medium text-2xl'>Company</h1>
                        <div className="list-container mt-6 ">
                            <h1>About Us </h1>
                            <h1>Contact</h1>
                            <h1>Our Blogs </h1>
                            <h1>Careers </h1>
                            <h1>FAQs </h1>
                        </div>
                    </div>
                    <div className="container-3">
                        <h1 className='font-medium text-2xl'>Explore</h1>
                        <div className="list-container mt-6  ">
                            <h1>Hotels </h1>
                            <h1>Activities</h1>
                            <h1>Attractions</h1>
                            <h1>Transport</h1>
                            <h1>Travel Packages</h1>
                        </div>
                    </div>
                    <div className="container-4">
                        <h1 className='font-medium text-2xl'>Support</h1>
                        <div className="list-container mt-6 ">
                            <h1>Help Center</h1>
                            <h1>Chat Support</h1>
                            <h1>FAQs</h1>
                            <h1>Terms & Conditions</h1>
                            <h1>Privacy Policy</h1>
                        </div>
                    </div>
                    <div className="container-5 ">
                        <h1 className='font-medium text-2xl'>Office</h1>
                        <div className="list-container mt-6 ">
                            <h1>Tea County Road, <br />Opp. KSRTC Bus Stand,Munnar, Idukki District,  Kerala - 685612, India <br />📞 +91 98765 43210 <br />
                            </h1>
                            <h1>contact@exploringmunnar.com</h1>
                        </div>
                    </div>
                </section>
                <div className="footer-container mt-16 w-[100%] border-t pt-8 border-[#D9D9D9] text-center  text-[#EEEEEE] ">
                    <h1>🌐 www.exploringmunnar.com</h1>
                    <h1>© 2025 Wexoraa infotech. All rights reserved.</h1>
                </div>
            </section>
        </>
    )
}

export default Footer 