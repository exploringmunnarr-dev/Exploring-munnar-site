"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import star from "../../../../assets/star.svg";
import Image from "next/image";
import { Dot } from "lucide-react";
import HotelHero from "@/components/HotelHero";
import HotelOverview from "@/components/HotelOverview";
import AmenitiesSection from "@/components/AmenitiesSection";
import HotelLocation from "@/components/HotelLocation";
import Footer from "@/components/Footer";
import ReviewsPage from "@/components/ReviewsPage";
import HotelEnquiryForm from "@/components/HotelEnquiryForm";
import HotelsRulesRegulation from "@/components/HotelsRulesRegulation";
import { Link, Element } from "react-scroll";
const page = () => {
  const [isForm, setIsForm] = useState(false);
  const [selectedtab, setSelectedTab] = useState("overview");
  return (
    <>
      <Navbar />
      {/* header ---------------------  */}
      <header className="mt-2 py-2 sticky top-[63px] bg-white flex items-start justify-between border-b border-gray-100 px-4 md:px-10">
        <div className="tabs-container text-[#333333] flex items-center gap-6">
          <Link
            onClick={() => setSelectedTab("overview")}
            to="overview" // the ID of the section you want to scroll to
            smooth={true} // smooth scroll
            duration={500} // scroll duration in ms
            offset={-130}
            className={`cursor-pointer font-semibold ${
              selectedtab === "overview" ? "border-b-2 border-[#AF4300]" : ""
            }`}
          >
            OverView
          </Link>
          <Link
            onClick={() => setSelectedTab("facilities")}
            to="facilities" // ID of the section you want to scroll to
            smooth={true} // smooth scroll
            duration={500} // scroll duration in ms
            offset={-130} // adjust for header height
            className={`cursor-pointer font-semibold ${
              selectedtab === "facilities" ? "border-b-2 border-[#AF4300]" : ""
            }`}
          >
            Facilities
          </Link>

          <Link
            onClick={() => setSelectedTab("reviews")}
            to="reviews" // ID of the Reviews section
            smooth={true}
            duration={500}
            offset={-130} // adjust if you have a fixed header
            className={`cursor-pointer font-semibold ${
              selectedtab === "reviews" ? "border-b-2 border-[#AF4300]" : ""
            }`}
          >
            Reviews
          </Link>

          <Link
            onClick={() => setSelectedTab("location")}
            to="location" // ID of the Location section
            smooth={true}
            duration={500}
            offset={-130}
            className={`cursor-pointer font-semibold ${
              selectedtab === "location" ? "border-b-2 border-[#AF4300]" : ""
            }`}
          >
            Location
          </Link>
        </div>
        <div className="second-container flex items-center gap-6">
          <div className="review-section text-center">
            <div className="container flex items-center gap-2">
              <Image src={star} />
              <h1>
                4.99{" "}
                <span className="text-[#777777] text-[14px]">337 reviews</span>
              </h1>
            </div>
            <h1 className="font-semibold">₹3,200 / night</h1>
          </div>
          <button
            onClick={() => setIsForm(true)}
            className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Reserve
          </button>
        </div>
      </header>
      <section className="mx-4 md:mx-10">
        {/* hero section ---------------  */}
        <HotelHero />
        <div id="overview">
          <HotelOverview />
        </div>
        <div id="facilities">
          <AmenitiesSection />
        </div>
        <div id="reviews">
          <ReviewsPage />
        </div>

        <HotelsRulesRegulation />
        <div id="location">
          <HotelLocation />
        </div>
      </section>
      <Footer />
      {isForm && <HotelEnquiryForm setIsForm={setIsForm} />}
    </>
  );
};

export default page;
