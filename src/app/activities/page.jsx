"use client"
import BoatingAndLakeTours from "@/components/BoatingAndLakeTours";
import Footer from "@/components/Footer";
import ItnearyFaq from "@/components/ItnearyFaq";
import MobileTab from "@/components/MobileTab";
import Navbar from "@/components/Navbar";
import PopularActivities from "@/components/PopularActivities";
import SubCardNav from "@/components/SubCardNav";
import React, { useEffect, useState } from "react";
import ship from '../../assets/ship.png'
import zipline from '../../assets/ship.svg'
import airBalloon from '../../assets/airBalloon.png'
import nature from '../../assets/Nature.svg'
import forest from '../../assets/Forest.svg'
import cabin from '../../assets/cabin.png'
import tourMaps from '../../assets/tourMaps.png'
import spa from '../../assets/spa.png'
import boats from '../../assets/boats.png'
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import axios from "axios";

const sortData = [
  "All of these", "Seasonal Activites", "Regular Activites"
]
const activityType = [{ icon: ship, title: "Boating & Lake Tours" }, { icon: zipline, title: "Ziplines & Adventure Parks" }, { icon: airBalloon, title: "Hot Air Balloon Rides" }, { icon: nature, title: "Farm & Garden Visits" }, { icon: forest, title: "Flower Gardens & Botanical Parks" }, { icon: cabin, title: "Factory Tours" }, { icon: tourMaps, title: "Trekking & Nature Trails" }, { icon: boats, title: "Local Cultural Events" }, { icon: spa, title: "Spas & Ayurvedic Centres" }]

const page = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states 
  const [sortItem, setSortItem] = useState("All of these")
  const [selectedType, setSelectedType] = useState(["Boating & Lake Tours"])
  const [activityData, setAcivityData] = useState([])


  // useEffect call's 
  useEffect(() => {
    async function fetchActivity() {

      try {
        const res = await axios.post(`${apiUrl}/api/activities-list`, {
          search: "",
          pageNumber: 1,
          category: sortItem,
          type: selectedType
        })
        console.log("activity data : ", res.data.data)
      } catch (err) {
        console.error("Error occured while fetching activity data")
      }
    }
    fetchActivity()
  }, [selectedType, sortItem])

  // functions 
  function hanldeActivityType(selectedItem) {
    if (selectedType.includes(selectedItem.title)) {
      setSelectedType((prev) => prev.filter((item, index) => item !== selectedItem.title));
      return
    } else {
      setSelectedType((prev) => [...prev, selectedItem.title])
    }
  }
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-10 rounded-lg">
        <SubCardNav />
        <div className="content-container text-white mt-4 ml-3">
          <h1 className="font-medium text-3xl ">
            Plan Your Perfect Munnar Trip
          </h1>
          <h1 className="text-sm text-[#EEEEEE] mt-2">
            Tell us your preferences, and we’ll craft a personalized itinerary
            just for you
          </h1>
        </div>
      </header>
      <div className="main-container grid grid-cols-12 gap-6 mx-4 md:mx-10">
        <div className="filter-container col-span-3 mt-4 sticky h-fit top-[80px] bg-white">
          <h1 className="text-[#383838] text-2xl font-semibold">Filters</h1>
          <div className="sort-container mt-3">
            <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
              <h1 className="font-semibold text-lg text-[#333333]">Sort by</h1>
              <ChevronDown className="text-[#333333]" />
            </div>
            <div className="input-container mt-3 space-y-4">
              {sortData.map((item, index) => {
                return <div className="input flex gap-3 items-center font-semibold text-[#333333d6]">
                  <input checked={sortItem == item} onChange={() => setSortItem(item)} type="radio" className="scale-120 accent-amber-700" />
                  <h1>{item}</h1>
                </div>
              })}
            </div>
          </div>

          {/* category-container  */}
          <div className="category-container mt-7">
            <div className="header border-b border-[#333333a3] pb-2 flex items-center gap-2 justify-between">
              <h1 className="font-semibold text-lg text-[#333333]">Choose activity type</h1>
              <ChevronDown className="text-[#333333]" />
            </div>
            <div className="input-container mt-3 space-y-6">
              {activityType.map((item, index) => {
                return <div className="input flex gap-3 items-center font-semibold text-[#333333d6]">
                  <input type="checkbox" checked={selectedType.includes(item.title)} onChange={() => hanldeActivityType(item)} className="scale-120 accent-amber-700" />
                  <div className="flex gap-2 items-center">
                    <Image src={item.icon} width={100} height={100} className="w-6 h-6" />
                    <h1>{item.title}</h1>
                  </div>
                </div>
              })}
            </div>
          </div>


        </div>
        <div className="content-container col-span-9 mt-4">
          <PopularActivities />
          <BoatingAndLakeTours />
        </div>
      </div>
      <ItnearyFaq />
      <Footer />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;
