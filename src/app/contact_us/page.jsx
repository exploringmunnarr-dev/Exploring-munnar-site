import React from "react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactUsMapSection from "@/components/ContactUsMapSection";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Contact Exploring Munnar – Support & Travel Assistance",
  description:
    "Reach out to us for hotel bookings, cab services, itinerary planning, and travel support. We’re here to help you plan your Munnar trip.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 md:mt-14">
        <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
          We’d Love to Hear from you
        </h1>
        <h1 className="text-[#777777] w-[100%] md:w-[48%] mt-2">
          Have questions,need help planning your trip,or want a custom itneary?
          Our team is here for you.
        </h1>
      </header>
      <ContactForm />
      <ContactUsMapSection />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
