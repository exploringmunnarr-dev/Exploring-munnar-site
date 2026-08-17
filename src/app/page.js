"use client";
import Home from "@/view/Home";
import React, { useEffect, useState } from "react";
import MobileTab from "@/components/MobileTab";



const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  // // ( ("scroll : ", scrollY)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get vertical scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Home scroll={scrollY} />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default Page;
