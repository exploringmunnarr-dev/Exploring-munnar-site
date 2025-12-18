"use client";
import BoatingAndLakeTours from "@/components/BoatingAndLakeTours";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
import PopularActivities from "@/components/PopularActivities";
import SubCardNav from "@/components/SubCardNav";
import React, { useEffect, useState, useTransition } from "react";
import ship from "../../assets/ship.png";
import zipline from "../../assets/ship.svg";
import airBalloon from "../../assets/airBalloon.png";
import nature from "../../assets/Nature.svg";
import forest from "../../assets/Forest.svg";
import cabin from "../../assets/cabin.png";
import tourMaps from "../../assets/tourMaps.png";
import spa from "../../assets/spa.png";
import boats from "../../assets/boats.png";
import { ChevronDown, Filter, X } from "lucide-react";
import Image from "next/image";
import axios from "axios";

const sortData = ["All of these", "Seasonal Activities", "Regular Activities"];
const activityType = [
  { icon: ship, title: "Boating & Lake Tours" },
  { icon: zipline, title: "Ziplines & Adventure Parks" },
  { icon: airBalloon, title: "Hot Air Balloon Rides" },
  { icon: nature, title: "Farm & Garden Visits" },
  { icon: forest, title: "Flower Gardens & Botanical Parks" },
  { icon: cabin, title: "Factory Tours" },
  { icon: tourMaps, title: "Trekking & Nature Trails" },
  { icon: boats, title: "Local Cultural Events" },
  { icon: spa, title: "Spas & Ayurvedic Centres" },
];

const page = () => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // states
  const [sortItem, setSortItem] = useState("All of these");
  const [selectedType, setSelectedType] = useState([]);
  const [activityData, setAcivityData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [isResponsiveFilter, setIsResponsiveFilter] = useState(false);

  // console.log("grouped data's : ", groupedData)

  useEffect(() => {
    if (activityData.length > 0) {
      const result = Object.values(
        activityData.reduce((acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = {
              title: item.type,
              cardDatas: [],
            };
          }
          acc[item.type].cardDatas.push(item);
          return acc;
        }, {})
      );

      setGroupedData(result);
    }
  }, [activityData]);

  // useEffect call's
  useEffect(() => {
    setGroupedData([]);
    async function fetchActivity() {
      try {
        const res = await axios.post(`${apiUrl}/api/activities-list`, {
          search: "",
          pageNumber: 1,
          category: sortItem,
          type: selectedType,
        });
        // console.log("activity data : ", res.data.data.activities)
        setAcivityData(res.data.data.activities);
      } catch (err) {
        console.error("Error occured while fetching activity data");
      }
    }
    fetchActivity();
  }, [selectedType, sortItem]);

  // functions
  function hanldeActivityType(selectedItem) {
    if (selectedType.includes(selectedItem.title)) {
      setSelectedType((prev) =>
        prev.filter((item, index) => item !== selectedItem.title)
      );
      return;
    } else {
      setSelectedType((prev) => [...prev, selectedItem.title]);
    }
  }
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-10 rounded-lg hidden md:block">
        <SubCardNav />
        <div className="content-container text-white mt-4 ml-3">
          <div className="header flex items-center justify-between">
            <h1 className="font-medium text-md md:text-3xl ">
              Plan Your Perfect Munnar Trip
            </h1>
          </div>
          <h1 className="text-sm text-[#EEEEEE] mt-2">
            Tell us your preferences, and we’ll craft a personalized itinerary
            just for you
          </h1>
        </div>
      </header>
      <div className="main-container grid grid-cols-12 gap-6 mx-4 md:mx-10">
        <div className="filter-container col-span-3 mt-4 sticky h-fit top-[80px]  bg-white hidden md:block">
          <h1 className="text-[#383838] text-2xl font-semibold">Filters</h1>
          <div className="sort-container mt-3">
            <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
              <h1 className="font-semibold text-lg text-[#333333]">Sort by</h1>
              <ChevronDown className="text-[#333333]" />
            </div>
            <div className="input-container mt-3 space-y-4">
              {sortData.map((item, index) => {
                return (
                  <div className="input flex gap-3 items-center font-semibold text-[#333333d6]">
                    <input
                      checked={sortItem == item}
                      onChange={() => setSortItem(item)}
                      type="radio"
                      className="scale-120 accent-amber-700"
                    />
                    <h1>{item}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          {/* category-container  */}
          <div className="category-container mt-7">
            <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
              <h1 className="font-semibold text-lg text-[#333333]">
                Choose activity type
              </h1>
              <ChevronDown className="text-[#333333]" />
            </div>
            <div className="input-container mt-3 space-y-6">
              {activityType.map((item, index) => {
                return (
                  <div className="input flex gap-3 items-center font-semibold text-[#333333d6]">
                    <input
                      type="checkbox"
                      checked={selectedType.includes(item.title)}
                      onChange={() => hanldeActivityType(item)}
                      className="scale-120 accent-amber-700"
                    />
                    <div className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        className="w-6 h-6"
                      />
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-container col-span-12  md:col-span-9  mt-4">
          <PopularActivities
            setIsResponsiveFilter={setIsResponsiveFilter}
            isResponsiveFilter={isResponsiveFilter}
          />
          <BoatingAndLakeTours groupedData={groupedData} />
        </div>
        {/* ------------- responsive filter container -------------------- */}
        {isResponsiveFilter && (
          <div className="responsive-filter-container md:hidden">
            <div className="resp-tint fixed inset-0 bg-black/20 z-30"></div>
            <div className="filter-container w-fit overflow-auto p-4 absolute top-0 left-0 z-100 h-[100vh]   bg-white">
              <div className="header flex items-center justify-between">
                <h1 className="text-[#383838] text-xl font-medium">Filters</h1>
                <X onClick={() => setIsResponsiveFilter(false)} />
              </div>
              <div className="sort-container mt-3">
                <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
                  <h1 className="font-medium text-lg text-[#333333]">
                    Sort by
                  </h1>
                  <ChevronDown className="text-[#333333]" />
                </div>
                <div className="input-container mt-3 space-y-4">
                  {sortData.map((item, index) => {
                    return (
                      <div className="input flex gap-3 items-center font-medium text-[#333333d6]">
                        <input
                          checked={sortItem == item}
                          onChange={() => setSortItem(item)}
                          type="radio"
                          className="scale-120 accent-amber-700"
                        />
                        <h1 className="text-sm">{item}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* category-container  */}
              <div className="category-container mt-7">
                <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
                  <h1 className="font-medium text-lg text-[#333333]">
                    Choose activity type
                  </h1>
                  <ChevronDown className="text-[#333333]" />
                </div>
                <div className="input-container mt-3 space-y-6">
                  {activityType.map((item, index) => {
                    return (
                      <div className="input flex gap-3 items-center font-medium text-[#333333d6]">
                        <input
                          type="checkbox"
                          checked={selectedType.includes(item.title)}
                          onChange={() => hanldeActivityType(item)}
                          className="scale-120 accent-amber-700"
                        />
                        <div className="flex gap-2 items-center">
                          <Image
                            src={item.icon}
                            width={100}
                            height={100}
                            className="w-6 h-6"
                          />
                          <h1 className="text-sm">{item.title}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ItnearyFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>

      {/* responsive-filter container  */}
    </>
  );
};

export default page;
