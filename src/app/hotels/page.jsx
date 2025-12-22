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

const page = () => {
  return (
    <>
      <Navbar />
      <section className="mx-4 md:mx-10 block">
        <HotelsStayType />
        <StayByDestination />
        <UniqueStays />
        <WhyBookOurStay />
        <FindPerfectStay />
      </section>
      <ItnearyFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 z-100 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
