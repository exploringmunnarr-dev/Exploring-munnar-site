import AboutUsHeroSection from '@/components/AboutUsHeroSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OurMission from '@/components/OurMission'
import Testimonials from '@/components/Testimonials'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import WhyTravelerChooseSection from '@/components/WhyTravelerChooseSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <AboutUsHeroSection />
      <WhoWeAreSection />
      <OurMission />
      <WhyTravelerChooseSection />
      <Testimonials />
      <div className="footer-container pt-8">
        <Footer />
      </div>
    </>
  )
}

export default page
