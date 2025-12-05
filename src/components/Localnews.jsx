"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import c1 from "../assets/c1.svg";
import e1 from "../assets/e1.svg";
import { ChevronDown } from "lucide-react";
import axios from "axios";

const checkboxData = [
  "Roads and transport conditions",
  "Emergency alerts",
  "Local Events & Festivals",
  "Travel Restrictions & Health Guidelines",
  "Emergency Contacts",
];
const emergencyAlert = [
  {
    img: e1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
  {
    img: e1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
  {
    img: e1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
];
const data = [
  {
    img: c1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
  {
    img: c1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
  {
    img: c1,
    title: "Traffic Diverion",
    description:
      "Road to Mattupetty Dam will remain closed for maintenance from 10 AM to 2 PM today.",
    updated: "Last updated : 34mins ago",
  },
];
const Localnews = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states 
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews()
  }, [])
  // functions 
  const fetchNews = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/news`);
      console.log("response : ", response.data.data)
    } catch (err) {
      console.error("error occured while fetchinig news : ", err.message || err)
    }
  }

  return (
    <>
      <section className="mt-4 md:mt-10">
        <header>
          <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
            Local news updates of munnar
          </h1>
          <h1 className="text-[#777777] mt-1">
            Stay updated with latest news and events
          </h1>
        </header>
        <div className="main-container grid grid-cols-12 gap-8 ">
          <div className="filter-container col-span-4 mt-4 sticky top-20 h-fit hidden md:block">
            <h1 className="font-semibold text-2xl">Filters</h1>
            <div className="category-container mt-4">
              <header className="flex items-center justify-between border-b border-gray-400 pb-4 ">
                <h1 className="font-semibold text-lg text-[#333333]">
                  News categories
                </h1>
                <ChevronDown className="w-6 h-6" />
              </header>
              <div className="checbox-container mt-3 space-y-3">
                {checkboxData.map((item, index) => {
                  return (
                    <div className="input-container flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="scale-125 accent-amber-800"
                      />
                      <h1>{item}</h1>
                    </div>
                  );
                })}
                <button
                  className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          <div className="content-container col-span-12 md:col-span-8 mt-4">
            <h1 className="text-[#333333] font-semibold text-xl">
              Road and transport condition
            </h1>
            <div className="card-container mt-4 space-y-3">
              {data.map((item, index) => {
                return (
                  <div className="card bg-[#EEEEEE] md:flex items-center gap-4 rounded-lg p-3">
                    <Image
                      src={item.img}
                      className="w-[100%] md:w-[340px] rounded-xl h-[200px] object-cover"
                    />
                    <div className="content-container mt-4 md:mt-0">
                      <h1 className="text-lg text-[#333333] font-semibold">
                        {item.title}
                      </h1>
                      <h1 className="text-[#333333] mt-4">
                        {item.description}
                      </h1>
                      <h1 className="text-sm text-[#777777] mt-4">
                        Last updated : 34mins ago
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="emergency-alerts-container">
              <header className="my-6">
                <h1 className="text-xl font-semibold text-[#333333]">
                  Emergency alerts
                </h1>
              </header>
              <div className="container-1 space-y-3">
                {emergencyAlert.map((item, index) => {
                  return (
                    <div className="card bg-[#EEEEEE] md:flex items-center gap-4 rounded-lg p-3">
                      <Image
                        src={item.img}
                        className="w-[100%] md:w-[340px] rounded-xl h-[200px] object-cover"
                      />
                      <div className="content-container">
                        <h1 className="text-lg text-[#333333] font-semibold">
                          {item.title}
                        </h1>
                        <h1 className="text-[#333333] mt-4">
                          {item.description}
                        </h1>
                        <h1 className="text-sm text-[#777777] mt-4">
                          Last updated : 34mins ago
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Localnews;
