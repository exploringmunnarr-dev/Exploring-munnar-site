"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import GetAroundSection from "@/components/GetAroundSection";
import TripPlannerSection from "@/components/TripPlannerSection";
import StayOptionsSection from "@/components/StayOptionsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GuestGallerySection from "@/components/GuestGallerySection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import { useState } from "react";

const Home = ({ scroll }) => {
  return (
    <>
      <Navbar scroll={scroll} />
      <HomeHero />
      <GetAroundSection />
      <TripPlannerSection />
      <StayOptionsSection />
      <ActivitiesSection />
      <WhyChooseUs />
      <Testimonials />
      <div className="footer-container pt-8">
        <GuestGallerySection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
