import BusTimeTable from "@/components/BusTimeTable";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
// import ResponsiveTab from "@/components/responsiveTab";
import SubCardNav from "@/components/SubCardNav";
import SubNavbar from "@/components/SubNavbar";
import Testimonials from "@/components/Testimonials";
import TransportFaq from "@/components/TransportFaq";
import TransportFormComponent from "@/components/TransportFormComponent";
import WhyTravelerChooseSection from "@/components/WhyTravelerChooseSection";
import React from "react";

export const metadata = {
  title: "Munnar Cab Services – Airport, Local & Outstation Rides",
  description:
    "Book reliable cab services in Munnar for sightseeing, airport pickup, and outstation travel. Clean cars, expert drivers, and best prices.",
};

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
      {/* <ItnearyFaq /> */}
      <TransportFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 z-100 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
