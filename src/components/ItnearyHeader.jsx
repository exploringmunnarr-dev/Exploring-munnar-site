"use client";
import React from "react";
import icon1 from "../assets/navIvon1.svg";
import icon2 from "../assets/navIcon2.svg";
import icon3 from "../assets/navIcon3.svg";
import icon4 from "../assets/navIcon4.svg";
import icon5 from "../assets/navIcon5.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubCardNav from "./SubCardNav";
const links = [
  { title: "Transports", icon: icon1, link: "transports" },
  { title: "Hotels & stays", icon: icon2, link: "hotels_stays" },
  { title: "Activities", icon: icon3, link: "activities" },
  { title: "Live information", icon: icon4, link: "live_information" },
  {
    title: "Itneary planning",
    icon: icon5,
    link: "itneary_planning",
  },
];
const ItnearyHeader = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <>
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-4 md:py-10 rounded-lg hidden md:block">
        <SubCardNav />
        <div className="content-container text-white mt-4 md:ml-3">
          <h1 className="font-semibold text-lg md:text-3xl ">
            Plan Your Perfect Munnar Trip
          </h1>
          <h1 className="text-sm text-[#EEEEEE] mt-2">
            Tell us your preferences, and we’ll craft a personalized itinerary
            just for you
          </h1>
        </div>
      </header>
    </>
  );
};

export default ItnearyHeader;
