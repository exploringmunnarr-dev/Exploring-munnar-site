import React from "react";
import Navbar from "@/components/Navbar";
import SubCardNav from "@/components/SubCardNav";
import { ChevronDown } from "lucide-react";
import HotelsStayType from "@/components/HotelsStayType";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import StayByDestination from "@/components/StayByDestination";
import UniqueStays from "@/components/UniqueStays";
import FindPerfectStay from "@/components/FindPerfectStay";
import WhyBookOurStay from "@/components/WhyBookOurStay";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="mx-4 md:mx-10">
        <header className="mt-4 btn-green px-4 py-4 md:py-10 rounded-lg">
          <SubCardNav />
          <div className="container-1 md:flex items-center justify-between">
            <div className="content-container text-white mt-4 md:ml-3">
              <h1 className="font-semibold text-lg md:text-3xl ">
                Find the Perfect Stay in Munnar
              </h1>
              <h1 className="text-sm text-[#EEEEEE] mt-2 hidden md:block">
                Discover handpicked attractions in North, South, East, and West
                Munnar — each offering a unique travel experience
              </h1>
            </div>
            <div className="search-container mt-3 md:mt-0 bg-[#EEEEEE] rounded-lg p-3 w-[100%] md:w-[360px] grid grid-cols-12 gap-2">
              <div className="input-container text-sm md:text-sm bg-white px-4 py-3 rounded-lg flex gap-2 justify-between items-center col-span-9">
                <h1>Select location in munnar</h1>
                <ChevronDown />
              </div>
              <button
                className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]  px-4 text-white rounded-lg cursor-pointer text-sm md:text-sm  col-span-3"
              >
                Search
              </button>
            </div>
          </div>
        </header>
        <HotelsStayType />
        <StayByDestination />
        <UniqueStays />
        <WhyBookOurStay />
        <FindPerfectStay />
      </section>
      <ItnearyFaq />
      <Footer />
    </>
  );
};

export default page;
