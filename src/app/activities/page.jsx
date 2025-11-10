import BoatingAndLakeTours from "@/components/BoatingAndLakeTours";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
import PopularActivities from "@/components/PopularActivities";
import SubCardNav from "@/components/SubCardNav";
import React from "react";
const page = () => {
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-10 rounded-lg">
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
      <div className="main-container grid grid-cols-12 gap-6 mx-4 md:mx-10">
        <div className="filter-container col-span-3 border mt-4"></div>
        <div className="content-container col-span-9 mt-4">
          <PopularActivities />
          <BoatingAndLakeTours />
        </div>
      </div>
      <ItnearyFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
