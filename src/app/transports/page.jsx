import BusTimeTable from "@/components/BusTimeTable";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import Navbar from "@/components/Navbar";
import ResponsiveTab from "@/components/responsiveTab";
import SubCardNav from "@/components/SubCardNav";
import SubNavbar from "@/components/SubNavbar";
import Testimonials from "@/components/Testimonials";
import TransportFormComponent from "@/components/TransportFormComponent";
import WhyTravelerChooseSection from "@/components/WhyTravelerChooseSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-10 rounded-lg hidden md:block">
        <SubCardNav />
        <div className="content-container text-white mt-4 ml-3">
          <h1 className="font-medium text-3xl ">
            Plan Your Perfect Munnar Trip
          </h1>
          <h1 className="text-sm text-[#EEEEEE] mt-2">
            Tell us your preferences, and we’ll craft a personalized itinerary
            just for you
          </h1>
        </div>
      </header>
      <TransportFormComponent />
      <BusTimeTable />
      <Testimonials />
      <ItnearyFaq />
      <Footer />
      {/* <div className="tab-container w-full fixed bottom-0 md:hidden">
        <ResponsiveTab/>
      </div> */}
    </>
  );
};

export default page;
