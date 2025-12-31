import AboutUsHeroSection from "@/components/AboutUsHeroSection";
import Footer from "@/components/Footer";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import Testimonials from "@/components/Testimonials";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyTravelerChooseSection from "@/components/WhyTravelerChooseSection";
import React from "react";

export const metadata = {
  title: "About Exploring Munnar – Trusted Travel & Tourism Partner",
  description:
    "Learn about Exploring Munnar, our mission, services, and commitment to offering the best travel experiences in Munnar",
};

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
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
