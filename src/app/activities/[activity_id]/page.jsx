"use client";
import Navbar from "@/components/Navbar";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import ac1 from "../../../assets/ac1.svg";
import ac2 from "../../../assets/ac2.svg";
import ac3 from "../../../assets/ac3.svg";
import ItnearyFaq from "@/components/ItnearyFaq";
import Footer from "@/components/Footer";
import locationImg from "../../../assets/locationImgcopy.svg";
import axios from "axios";
import { act } from "react";
import { Link, Element } from "react-scroll";

const tabs = ["Overview", "Location", "FAQ's"];

const data = {
  img: { img1: ac1, img2: ac2, img3: ac3 },
  category: "Regular activity",
  type: "Boating & Lake Tours",
};

const page = () => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const location = usePathname();
  const { activity_id } = useParams();

  //   states
  const [activeTab, setActiveTab] = useState("Overview");
  const [activityData, setActivityData] = useState({});

  console.log("activity data : ", activityData);

  // side effects
  useEffect(() => {
    getData();
  }, []);

  // functions
  async function getData() {
    try {
      const res = await axios.get(`${apiUrl}/api/activity/${activity_id}`);
      setActivityData(res.data.data);
      console.log("activity data : ", res.data.data);
    } catch (err) {
      console.error(
        "Error occured while fetching activity data : ",
        err.message
      );
    }
  }

  return (
    <>
      <section>
        <Navbar />
        {/* header ---------------------------------------------- */}
        <div className="header sticky top-15 py-2 bg-white md:flex px-9 mt-4 justify-between items-center border-b border-gray-200 pb-2 ">
          {/* Tabs Section */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {tabs.map((tab) => (
              <Link
                key={tab}
                to={tab} // MUST match Element name
                spy={true}
                smooth={true}
                offset={-100} // adjust if you have sticky header
                duration={500}
                onSetActive={() => setActiveTab(tab)}
                className="cursor-pointer"
              >
                <button
                  className={`relative pb-1 text-[15px] font-semibold transition-all ${activeTab === tab
                    ? "text-[#333333] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#AF4300]"
                    : "text-gray-600 hover:text-[#333333]"
                    }`}
                >
                  {tab}
                </button>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-between md:justify-start gap-6">
            {/* Rating */}
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                <span className="font-medium text-gray-800">4.9</span>
                <span>• 337 reviews</span>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-gray-800 font-semibold text-[15px]">
                  ₹ {activityData?.price}
                </p>
              </div>
            </div>

            {/* Button */}
            {/* <button className="btn-green cursor-pointer text-white font-medium px-5 py-2 rounded-md hover:bg-green-800 transition">
              Reserve
            </button> */}
          </div>
        </div>

        {/* HERO SECTION -------------------  */}
        <div className="main-container mt-4 mx-4 md:mx-9">
          <div className="hero-section  md:flex gap-2">
            <div className="container-1 h-[220px] md:h-[510px] w-[100%] md:w-[58%]">
              <div className="img-1 h-[100%]">
                <Image
                  src={activityData?.images?.[0]?.url}
                  height={3000}
                  width={3000}
                  className="h-[100%] w-[100%] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="container-2 space-y-2 w-[100%] mt-2 md:mt-0 md:w-[42%] h-[320px] md:h-[500px]">
              <Image
                src={activityData?.images?.[1]?.url}
                height={300}
                width={3000}
                className="h-[50%] w-[100%] rounded-lg object-cover"
              />
              <Image
                src={activityData?.images?.[2]?.url}
                height={300}
                width={3000}
                className="h-[50%] w-[100%] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* category-container ---------------------  */}
          <div className="category-tab-container  mt-4 flex gap-4 items-center">
            <button className="bg-[#EEEEEE] text-[#333333] text-sm md:text-md px-4 py-2 rounded-full shadow">
              {activityData?.type}
            </button>
            <button className="bg-[#EEEEEE] text-[#333333] text-sm md:text-md px-4 py-2 rounded-full shadow">
              {activityData?.category}
            </button>
          </div>
        </div>

        <Element name="Overview">
          <div className="overview-container mt-4 md:mt-12 mx-4 md:mx-9">
            <h1 className="text-lg font-semibold">Overview</h1>
            <div className="text-justify text-md ">
              {activityData?.description?.split(". ").map((item, i) => (
                <p key={i} className="mt-2 text-[#777777] text-sm md:text-md">
                  {item}.
                </p>
              ))}
            </div>
          </div>
        </Element>

        <Element name="Location">
          <div className="location-container mx-4 mt-4 md:mx-9 md:mt-12 md:h-[300px]">
            {/* <Image src={locationImg} width={100} height={100} className="w-[100%] h-[100%]" /> */}
            <iframe
              src={activityData?.location_url}
              frameborder="0"
              className="w-[100%] h-[100%]"
            ></iframe>
          </div>
        </Element>
        <Element name="FAQ's">
          <ItnearyFaq />
        </Element>
        <Footer />
      </section>
    </>
  );
};

export default page;
