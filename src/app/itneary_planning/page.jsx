"use client";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import ItnearyFormContainer from "@/components/ItnearyFormContainer";
import ItnearyHeader from "@/components/ItnearyHeader";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
import { FormDataProvider } from "@/context/FormProvider";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <ItnearyHeader />
      <FormDataProvider>
        <ItnearyFormContainer />
      </FormDataProvider>
      <ItnearyFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 z-100 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
