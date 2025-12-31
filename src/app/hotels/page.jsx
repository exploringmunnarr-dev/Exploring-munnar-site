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
import MobileTab from "@/components/MobileTab";
import TopRatedHotels from "@/components/TopRatedHotels";
import HotelsFaq from "@/components/HotelsFaq";

export const metadata = {
  title: "Best Hotels in Munnar – Resorts, Cottages & Homestays",
  description:
    "Find top-rated hotels, resorts, treehouses, and cottages in Munnar. Compare locations, amenities, and reviews to choose the perfect stay.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <section className="mx-4 md:mx-10 block">
        <HotelsStayType />
        <StayByDestination />
        <UniqueStays />
        <TopRatedHotels />
        <WhyBookOurStay />
        <FindPerfectStay />
      </section>
      {/* <ItnearyFaq /> */}
      <HotelsFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 z-100 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
