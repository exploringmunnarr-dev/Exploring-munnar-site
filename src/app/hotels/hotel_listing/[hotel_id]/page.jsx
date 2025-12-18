"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useParams } from "next/navigation";
import SuccessPopup from "@/components/SuccessPopup";
const page = () => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // states
  const [isForm, setIsForm] = useState(false);
  const [selectedtab, setSelectedTab] = useState("overview");
  const [data, setData] = useState({});
  const [modalTitle, setModalTitle] = useState("");
  const [isSuccessPopup, setIsSuccessPopup] = useState(false);
  // params
  const { hotel_id } = useParams();

  // side effects
  useEffect(() => {
    getHotelData();
  }, [hotel_id]);

  // functions
  async function getHotelData() {
    console.log("respomnse ");
    try {
      const response = await axios.get(`${apiUrl}/api/hotel/${hotel_id}`);
      setData(response.data.data);
      console.log("respomnse : ", response);
    } catch (err) {
      console.error(
        "Error occured while fetching singel hotel data : ",
        err.message
      );
    }
  }

  const handleSuccessPopup = () => {
    setIsSuccessPopup(false);
  };

  const handleOpenSuccessPopup = () => {
    setIsSuccessPopup(true);
  };

  return (
    <>
      <Navbar />
      {/* header ---------------------  */}
      <header className="mt-2 py-2 sticky top-[63px] z-10 bg-white md:flex items-start justify-between border-b border-gray-100 px-4 md:px-10">
        <div className="tabs-container text-[#333333] flex items-center gap-6 max-sm:text-sm">
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
        <div className="second-container flex items-center gap-6 mt-4  md:mt-0">
          <div className="review-section text-center">
            <div className="container flex items-center gap-2">
              <Image src={star} />
              <h1>
                {data?.rating}{" "}
                {/* <span className="text-[#777777] text-[14px]">337 reviews</span> */}
              </h1>
            </div>
            <h1 className="font-semibold">₹ {data?.pricePerNight}/ night</h1>
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
        <HotelHero data={data} />
        <div id="overview">
          <HotelOverview
            data={data}
            handleOpenSuccessPopup={handleOpenSuccessPopup}
          />
        </div>
        <div id="facilities">
          <AmenitiesSection data={data} />
        </div>
        <div id="reviews">
          <ReviewsPage />
        </div>

        <HotelsRulesRegulation />
        <div id="location">
          <HotelLocation data={data} />
        </div>
      </section>
      <Footer />
      {isForm && (
        <HotelEnquiryForm
          data={data}
          setIsForm={setIsForm}
          handleOpenSuccessPopup={handleOpenSuccessPopup}
        />
      )}
      {isSuccessPopup && <SuccessPopup onClose={handleSuccessPopup} />}
    </>
  );
};

export default page;
