import React from "react";
import SubCardNav from "@/components/SubCardNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelFilterComponent from "@/components/HotelFilterComponent";
import { ChevronDown } from "lucide-react";
import HotelListingCard from "@/components/HotelListingCard";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="mx:4 md:mx-10">
        <header className="mt-4 btn-green px-4 py-4 md:py-10 rounded-lg">
          <SubCardNav />
          <div className="container-1">
            <div className="content-container text-white mt-4 md:ml-3">
              <h1 className="font-semibold text-lg md:text-3xl ">
                Find the Perfect Stay in Munnar
              </h1>
              <h1 className="text-sm text-[#EEEEEE] mt-2 hidden md:block">
                Discover handpicked attractions in North, South, East, and West
                Munnar — each offering a unique travel experience
              </h1>
            </div>
          </div>
        </header>
        <div className="main-content-container mt-6  grid grid-cols-12 gap-6">
          <div className="filter-component-container py-2 rounded-xl overflow-auto col-span-3 h-fit bg-[#fefefe] shadow sticky top-[68px] ">
            <HotelFilterComponent />
          </div>
          <div className="hotel-card-component-container space-y-4 col-span-9">
            <div className="box w-[100%] bg-white sticky top-[63px] border-none z-20">
              <div className="box w-[100%] rounded-2xl bg-[#EEEEEE] py-3 px-4 shadow-none m-0  grid grid-cols-12 gap-2">
                <div className="container-1 col-span-4  flex items-center">
                  <div className="location-container border-r border-amber-700 pr-3  flex items-center w-[100%] justify-between">
                    <div className="">
                      <h1 className="">Choose your location</h1>
                      <h1 className="text-[10px] text-[#777777]">
                        Click your destination and choose your preference
                      </h1>
                    </div>
                    <ChevronDown className="text-green-700" />
                  </div>
                </div>
                <div className="container-1 col-span-3 ">
                  <div className="date-container border-r border-amber-700  w-[80%] m-auto">
                    <h1>Check-in</h1>
                    <input
                      type="text"
                      placeholder="Eg: 09/08/2025"
                      className="outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="container-1 col-span-3 ">
                  <div className="date-container border-r border-amber-700  w-[80%] m-auto">
                    <h1>Check-out</h1>
                    <input
                      type="text"
                      placeholder="Eg: 09/08/2025"
                      className="outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="container-1 col-span-2 flex items-center">
                  <button className="btn-green text-white w-[100%] py-3 rounded-lg cursor-pointer ">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <HotelListingCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
    //
  );
};

export default page;
