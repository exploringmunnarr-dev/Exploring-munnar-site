"use client";
import React, { useEffect, useState } from "react";
import location from "../assets/location_icon.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import clockIcon from "../assets/clock_icon.svg";
import left_arrow from "../assets/left_arrow copy.svg";
import busIcon from "../assets/bus_icon_table.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ResponsiveBusTimeTable from "./ResponsiveBusTimeTable";
import axios from "axios";

const tableHeadData = [
  "Route",
  "Depature",
  "Arrival time",
  "Bus type",
  "Duration",
  "Price",
];
const tableData = [
  {
    route: "Munnar - Coimbatore",
    depature: "7.30 AM",
    arraival_time: "7.30 PM",
    bus_type: { name: "Kerala RTC", category: "AC SLEEPER" },
    duration: "Duration 5.30 hours",
    price: "Price RS 280",
  },
  {
    route: "Munnar - Coimbatore",
    depature: "7.30 AM",
    arraival_time: "7.30 PM",
    bus_type: { name: "Kerala RTC", category: "AC SLEEPER" },
    duration: "Duration 5.30 hours",
    price: "Price RS 280",
  },
  {
    route: "Munnar - Coimbatore",
    depature: "7.30 AM",
    arraival_time: "7.30 PM",
    bus_type: { name: "Kerala RTC", category: "AC SLEEPER" },
    duration: "Duration 5.30 hours",
    price: "Price RS 280",
  },
  {
    route: "Munnar - Coimbatore",
    depature: "7.30 AM",
    arraival_time: "7.30 PM",
    bus_type: { name: "Kerala RTC", category: "AC SLEEPER" },
    duration: "Duration 5.30 hours",
    price: "Price RS 280",
  },
  {
    route: "Munnar - Coimbatore",
    depature: "7.30 AM",
    arraival_time: "7.30 PM",
    bus_type: { name: "Kerala RTC", category: "AC SLEEPER" },
    duration: "Duration 5.30 hours",
    price: "Price RS 280",
  },
];
const BusTimeTable = () => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // states
  const [isLoading, setIsLoading] = useState([]);
  const [data, setData] = useState([]);

  // functions
  const fetchBusTimings = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/bus-timing`);
      setData(res.data.data);
    } catch (err) {
      console.error("Error occured while fetching bus timings : ", err.message);
    }
  };

  // side effects
  useEffect(() => {
    fetchBusTimings();
  }, [apiUrl]);
  return (
    <>
      <section className="mx-4 md:mx-10 mt-8">
        <header className="">
          <h1 className="text-[#333333] text-xl md:text-3xl">
            Plan your journey with realtime bus schedules
          </h1>
          <h1 className="text-[#777777] mt-2 text-lg">
            Select your favourite Munnar spot and browse available stays.
          </h1>
        </header>
        {/* ------------------------------- root container  --------------------------------  */}
        <div className="root-container mt-4 bg-[#EEEEEE] grid sm:grid-cols-2 md:grid-cols-2 gap-1 md:gap-3 md:p-4 rounded-lg">
          <div className="p-2  ">
            <div className="label-container items-center gap-1 hidden md:flex">
              <Image src={location} alt="location_image" className="w-5 h-5" />
              <h1 className="text-[#333333]">From</h1>
            </div>
            <div className="input-container border-2 border-[#777777] bg-white rounded-lg px-4 py-2 flex items-center justify-between mt-2">
              <h1 className="text-[#777777] sm:hidden ">From</h1>
              <input
                type="text"
                placeholder="Munnar"
                className="w-[100%] outline-none ml-2"
              />
            </div>
          </div>
          <div className="p-2 ">
            <div className="label-container items-center gap-1 hidden md:flex">
              <Image src={location} alt="location_image" className="w-5 h-5" />
              <h1 className="text-[#333333] ">To</h1>
            </div>
            <div className="input-container border-2 border-[#777777] bg-white rounded-lg px-4 py-2 flex items-center justify-between mt-2">
              <h1 className="text-[#777777] sm:hidden ">To</h1>
              <input
                type="text"
                placeholder="Kochi"
                className="w-[100%] outline-none ml-2"
              />
            </div>
          </div>
          {/* <div className="p-2 col-span-2 sm:col-span-12 md:col-span-1 ">
            <div className="label-container items-center gap-1 hidden md:flex">
              <Image src={location} alt="location_image" className="w-5 h-5" />
              <h1 className="text-[#333333] ">Bus type</h1>
            </div>
            <div className="input-container border-2 border-[#777777] bg-white rounded-lg px-4 py-2 flex items-center justify-between mt-2">
              <h1 className="text-[#777777] hidden sm:block">Sleeper</h1>
              <h1 className="text-[#777777] sm:hidden">Bus Type</h1>
              <Image src={dropdownIcon} className="w-7 h-7" />
            </div>
          </div> */}
        </div>
        {/* -------------------------------- table-container  -------------------------------------------  */}
        <div className="table-container">
          <div className="overflow-auto hidden md:block">
            <table className="w-full mt-4 max-sm:text-[10px]   overflow-auto ">
              <thead>
                {tableHeadData.map((item, index) => {
                  return <td className="font-semibold pl-3 py-5">{item}</td>;
                })}
              </thead>
              <tbody className="bg-[#EEEEEE] rounded-lg">
                {data.map((item, index) => {
                  return (
                    <tr className="">
                      <td className="font-semibold pt-2 pb-2 pl-3">
                        {item.from} - {item.to}
                      </td>
                      <td className="pt-2 pb-2 pl-3">
                        <div className="relative">
                          <div className="flex items-center gap-2">
                            <Image src={clockIcon} className="w-6" />
                            <h1>{item.departure_time}</h1>
                          </div>
                          <div className="absolute right-2 top-[50%] translate-y-[-50%] ">
                            <Image src={left_arrow} />
                          </div>
                        </div>
                      </td>
                      <td className="pt-2 pb-2 pl-3">{item.arrival_time}</td>
                      <td className="py-4 pl-3 flex items-center gap-2">
                        {" "}
                        <Image src={busIcon} /> {item.bus_type}{" "}
                        <span className="text-gray-500">
                          {item.bus_type.category}
                        </span>{" "}
                      </td>
                      {/* <td className='py-4 pl-3 flex items-center gap-2'> <Image src={busIcon}/> {item.bus_type.name} <span className='text-gray-500'>{item.bus_type.category}</span> </td> */}
                      <td className="pl-3 ">{item.duration}</td>
                      <td className="pl-3">{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ResponsiveBusTimeTable data={data} />
        </div>
      </section>
    </>
  );
};

export default BusTimeTable;
