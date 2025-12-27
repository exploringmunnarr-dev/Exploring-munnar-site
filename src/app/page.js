"use client";
import Home from "@/view/Home";
import React, { useEffect, useState } from "react";
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
    </>
  );
};

export default Page;
