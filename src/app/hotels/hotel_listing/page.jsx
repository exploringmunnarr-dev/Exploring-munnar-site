"use client";
import React, { useEffect, useState } from "react";
import SubCardNav from "@/components/SubCardNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelFilterComponent from "@/components/HotelFilterComponent";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import HotelListingCard from "@/components/HotelListingCard";
import ResponsiveHotelListingCard from "@/components/ResponsiveHotelListingCard";
import axios from "axios";
import { useForkRef } from "@mui/material";
import { useFormData } from "@/context/FormProvider";
import { useData } from "@/context/ThemeContext";

const page = () => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // console.log("Changes made in Dec 2nd code");
  const { stayType, setStayType, loation, setLocation } = useData();

  console.log("selected location : ", loation);

  // states
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberList, setPageNumberList] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(false);
  // filter inputStates
  // const [stayType, setStayType] = useState([]);
  // const [loation, setLocation] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [budget, setBudget] = useState({ startingFrom: 0, to: 0 });

  // useEffect call's
  useEffect(() => {
    async function fetchHotel() {
      try {
        setLoading(true);
        const response = await axios.post(`${apiUrl}/api/hotels-list`, {
          stayType: stayType,
          location: loation,
          amenities: amenities,
          experiences: experiences,
          budget: budget,
          pageNumber: pageNumber,
        });

        setHotelData(response.data.data.hotels);
        const totalPages = Array.from(
          { length: response.data.data.totalPages },
          (_, i) => i + 1
        );
        setPageNumberList(totalPages);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Error while fetching hotel list : ", err);
        setLoading(false);
      }
    }
    fetchHotel();
  }, [pageNumber, stayType, loation, amenities, experiences, budget]);

  // functions
  const handleNext = () => {
    const lastPageNumber = pageNumberList[pageNumberList.length - 1];
    if (pageNumber == lastPageNumber) {
      return;
    }
    setPageNumber(pageNumber + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (pageNumber == 1) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageNumber(pageNumber - 1);
  };

  return (
    <>
      <Navbar />
      <section className="mx:4 md:mx-10">
        <header className="mt-4 btn-green px-4 py-4 md:py-10 rounded-lg hidden md:block">
          <SubCardNav />
          <div className="container-1">
            <div className="content-container text-white mt-4 md:ml-3">
              <h1 className="font-semibold text-lg md:text-3xl ">
                Find the Perfect Stay in Munnar
              </h1>
              <h1 className="text-sm text-[#EEEEEE] mt-2 hidden md:block">
                Discover handpicked attractions in North, South, East, and West
                Munnar — each offering a unique travel experience
              </h1>
            </div>
          </div>
        </header>
        <div className="main-content-container mt-6  grid grid-cols-12 gap-6">
          <div className="filter-component-container py-2 rounded-xl overflow-auto hidden md:block md:col-span-3 h-fit bg-[#fefefe] shadow sticky top-[68px] ">
            <HotelFilterComponent
              stayType={stayType}
              loation={loation}
              amenities={amenities}
              experiences={experiences}
              budget={budget}
              setStayType={setStayType}
              setLocation={setLocation}
              setAmenities={setAmenities}
              setExperiences={setExperiences}
              setBudget={setBudget}
            />
          </div>
          <div className="hotel-card-component-container space-y-4 col-span-12 md:col-span-9">
            <div className="box hidden w-[100%] bg-white sticky top-[63px] border-none z-20">
              <div className="box w-[100%] rounded-2xl bg-[#EEEEEE] py-3 px-4 shadow-none m-0  grid grid-cols-12 gap-2">
                <div className="container-1 col-span-4  flex items-center">
                  <div className="location-container border-r border-amber-700 pr-3  flex items-center w-[100%] justify-between">
                    <div className="">
                      <h1 className="">Choose your location</h1>
                      <h1 className="text-[10px] text-[#777777]">
                        Click your destination and choose your preference
                      </h1>
                    </div>
                    <ChevronDown className="text-green-700" />
                  </div>
                </div>
                <div className="container-1 col-span-3 ">
                  <div className="date-container border-r border-amber-700  w-[80%] m-auto">
                    <h1>Check-in</h1>
                    <input
                      type="text"
                      placeholder="Eg: 09/08/2025"
                      className="outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="container-1 col-span-3 ">
                  <div className="date-container border-r border-amber-700  w-[80%] m-auto">
                    <h1>Check-out</h1>
                    <input
                      type="text"
                      placeholder="Eg: 09/08/2025"
                      className="outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="container-1 col-span-2 flex items-center">
                  <button
                    className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                    hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]  text-white w-[100%] py-3 rounded-lg cursor-pointer "
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="hotel-listing-card hidden md:block">
              <HotelListingCard listings={hotelData} loading={loading} />

              {hotelData.length !== 0 && (
                <div className="flex items-center gap-3 justify-end mt-2">
                  <button onClick={handlePrev} className={``}>
                    <ChevronLeft />
                  </button>
                  <div className="number-container flex items-center gap-2">
                    {pageNumberList.map((item, index) => {
                      return (
                        <button
                          className={`${
                            item == pageNumber
                              ? "bg-amber-800 text-white px-2 py-1"
                              : ""
                          } text-sm rounded w-7 h-7`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>

                  <button onClick={handleNext}>
                    <ChevronRight />
                  </button>
                </div>
              )}
            </div>
            <div className="responsiveCard md:hidden">
              <ResponsiveHotelListingCard
                listings={hotelData}
                stayType={stayType}
                loation={loation}
                amenities={amenities}
                experiences={experiences}
                budget={budget}
                setStayType={setStayType}
                setLocation={setLocation}
                setAmenities={setAmenities}
                setExperiences={setExperiences}
                setBudget={setBudget}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    //
  );
};

export default page;
