"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import c1 from "../assets/c1.svg";
import e1 from "../assets/e1.svg";
import { ChevronDown, ListFilter } from "lucide-react";
import axios from "axios";

const checkboxData = [
  "Roads And Transport Conditions",
  "Emergency Alerts",
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
  // state
  const [newsData, setNewsData] = useState([]);
  const [groupedNews, setGroupedNews] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["Roads And Transport Conditions"]);
  const [respFilter, setRespFilter] = useState(false)
  // functions 

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // uncheck
        : [...prev, category]                 // check
    );
  };

  // helper to group by category -> [{ title, data }]
  const groupByCategory = (items) => {
    const groups = items.reduce((acc, item) => {
      const key = item.category;
      if (!acc[key]) {
        acc[key] = { title: key, data: [] };
      }
      acc[key].data.push(item);
      return acc;
    }, {});

    return Object.values(groups);
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategories]);

  const fetchNews = async () => {
    try {
      setRespFilter(false)
      const response = await axios.get(`${apiUrl}/api/news`, {
        params: {
          categories: selectedCategories.join(','), // 👈 comma-separated
          search: "",
        },
      });

      const raw = response.data.data;
      setNewsData(raw);
      setGroupedNews(groupByCategory(raw));
    } catch (err) {
      console.error(
        "error occurred while fetching news:",
        err.message || err
      );
    }
  };

  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  };


  return (
    <>
      <section className="mt-4 md:mt-10">
        <header className="sticky top-15 py-2 md:py-0 bg-white md:static flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Local news updates of munnar
            </h1>
            <h1 className="text-[#777777] mt-1">
              Stay updated with latest news and events
            </h1>
          </div>
          <ListFilter onClick={() => setRespFilter(true)} className="text-gray-600 md:hidden" />
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
                {checkboxData.map((item, index) => (
                  <div
                    key={index}
                    className="input-container flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="scale-125 accent-amber-800"
                      checked={selectedCategories.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <h1>{item}</h1>
                  </div>
                ))}

                <button
                  onClick={fetchNews}
                  className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                 hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2"
                >
                  Apply Filter
                </button>
              </div>

            </div>
          </div>
          <div className="content-container col-span-12 md:col-span-8 mt-4 ">
            {groupedNews.map((item, index) => {
              return <div className="main-container">
                <h1 className="text-[#333333] font-semibold text-xl mt-6">
                  {item.title}
                </h1>
                {item?.data?.map((i) => {
                  return <div className="card-container mt-6 space-y-3">
                    <div className="card bg-[#EEEEEE] md:flex items-start gap-4 rounded-lg p-3">
                      <Image
                        src={i?.imageUrl}
                        width={1000} height={1000}
                        className="w-[100%] md:w-[340px] rounded-xl h-[200px] object-cover"
                      />
                      <div className="content-container mt-4 md:mt-0">
                        <h1 className="text-lg text-[#333333] font-semibold">
                          {i?.heading}
                        </h1>
                        <h1 className="text-[#333333] mt-4 text-justify">
                          {i?.detail}
                        </h1>
                        <h1 className="text-sm text-[#777777] mt-4">
                          Last updated : {timeAgo(i.createdAt)}
                        </h1>

                      </div>
                    </div>
                  </div>
                })}
              </div>
            })}
          </div>
        </div>
      </section>

      {/* responsive filter container  */}

      {respFilter && <div className="responsive-filter-container md:hidden">
        <div onClick={() => setRespFilter(false)} className="fixed inset-0 bg-black/40 z-60"></div>
        <div className="filter-container h-[100vh] fixed top-0 left-0 bg-white z-70 p-3 md:hidden">
          <h1 className="font-semibold text-lg md:text-2xl">Filters</h1>
          <div className="category-container mt-4">
            <header className="flex items-center justify-between border-b border-gray-400 pb-4 ">
              <h1 className="font-semibold md:text-lg text-[#333333]">
                News categories
              </h1>
              <ChevronDown className="w-6 h-6" />
            </header>
            <div className="checbox-container mt-3 space-y-3">
              {checkboxData.map((item, index) => (
                <div
                  key={index}
                  className="input-container flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    className="scale-125 accent-amber-800"
                    checked={selectedCategories.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <h1 className="text-sm">{item}</h1>
                </div>
              ))}

              <button
                onClick={fetchNews}
                className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                 hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2"
              >
                Apply Filter
              </button>
            </div>

          </div>
        </div>
      </div>}


    </>
  );
};

export default Localnews;
