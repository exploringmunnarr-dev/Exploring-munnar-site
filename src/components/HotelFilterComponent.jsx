"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import stayTypeIcon from "../assets/stayTypeIcon.svg";
import hotelLocationIcon from "../assets/hotelLocationIcon.svg";
import amenitiesIcon from "../assets/amenitiesIcon.svg";
import experienceIcon from "../assets/experienceIcon.svg";

import Image from "next/image";

const stayType = [
  "Tents & Camping Grounds",
  "Eco Cottages",
  "Treehouses",
  "Homestays & Guesthouses",
  "Boutique Resorts & Hotels",
];
const locationFilterData = [
  "Chinnakanal",
  "Devikulam",
  "Anachal",
  "Suryanelli",
  "Munnar Town",
  "Lockhart Gap",
  "Pallivasal",
];
const amenitiesFilterData = [
  "Free Wi-Fi",
  "Parking",
  "Campfire",
  "Room Service",
  "Pet-Friendly",
  "Breakfast Included",
  "Balcony View",
];
const experienceFilterData = [
  "Eco Stay",
  "Scenic Views",
  "Family-Friendly",
  "Couple-Friendly",
  "Offbeat Experience",
];
const priceFilterData = [
  "Under ₹999",
  "₹1,000–₹2,499",
  "₹2,500–₹4,999",
  "₹5,000+",
];

const HotelFilterComponent = () => {
  // states
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [stayTypeDropdown, setStayTypeDropdown] = useState(true);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [amenitiesDropdown, setAmenitiesDropdown] = useState(false);
  const [experienceDropdown, setExperienceDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  return (
    <>
      <section className="w-[100%]   ">
        <div className="header mt-4 w-[90%] m-auto">
          <h1 className="text-[#383838] text-2xl filter-text">Filters</h1>
        </div>
        <div className="filter-content-section mt-4 space-y-6  text-sm h-[75vh] px-2 overflow-y-auto ">
          {/* Stay type ===========================>  */}
          <div className="stay-type ">
            <div className="header flex justify-between border-b border-[#3333339c] pb-2">
              <div className="flex items-center gap-2">
                <Image src={stayTypeIcon} className="" />
                <h1 className="text-[#333333] font-semibold">Stay type</h1>
              </div>
              <ChevronDown
                className={`cursor-pointer  ${
                  stayTypeDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => setStayTypeDropdown(!stayTypeDropdown)}
              />
            </div>
            {stayTypeDropdown && (
              <div className="checkbox-container mt-2 space-y-3">
                {stayType.map((item, index) => {
                  return (
                    <div className="input-container flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="scale-125 accent-[#AF4300]"
                      />
                      <h1 className="text-[#333333]">{item}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Location ===========================>  */}
          <div className="location ">
            <div className="header flex justify-between border-b border-[#3333339c] pb-2">
              <div className="flex items-center gap-2 ">
                <Image src={hotelLocationIcon} alt="icon" className="" />
                <h1 className="text-[#333333] font-semibold">Location</h1>
              </div>
              <ChevronDown
                className={`cursor-pointer  ${
                  locationDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => setLocationDropdown(!locationDropdown)}
              />
            </div>
            {locationDropdown && (
              <div className="checkbox-container mt-2 space-y-3">
                {locationFilterData.map((item, index) => {
                  return (
                    <div className="input-container flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="scale-125 accent-[#AF4300]"
                      />
                      <h1 className="text-[#333333]">{item}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Ameniteis ===========================>  */}
          <div className="amenities ">
            <div className="header flex justify-between border-b border-[#3333339c] pb-2">
              <div className="flex items-center gap-2 ">
                <Image src={amenitiesIcon} alt="icon" className="" />
                <h1 className="text-[#333333] font-semibold">Amenities</h1>
              </div>
              <ChevronDown
                className={`cursor-pointer  ${
                  amenitiesDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => setAmenitiesDropdown(!amenitiesDropdown)}
              />
            </div>
            {amenitiesDropdown && (
              <div className="checkbox-container mt-2 space-y-3">
                {amenitiesFilterData.map((item, index) => {
                  return (
                    <div className="input-container flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="scale-125 accent-[#AF4300]"
                      />
                      <h1 className="text-[#333333]">{item}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Experience ===========================>  */}
          <div className="Experience ">
            <div className="header flex justify-between border-b border-[#3333339c] pb-2">
              <div className="flex items-center gap-2 ">
                <Image src={experienceIcon} alt="icon" className="" />
                <h1 className="text-[#333333] font-semibold">Experiences</h1>
              </div>
              <ChevronDown
                className={`cursor-pointer  ${
                  experienceDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => setExperienceDropdown(!experienceDropdown)}
              />
            </div>
            {experienceDropdown && (
              <div className="checkbox-container mt-2 space-y-3">
                {experienceFilterData.map((item, index) => {
                  return (
                    <div className="input-container flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="scale-125 accent-[#AF4300]"
                      />
                      <h1 className="text-[#333333]">{item}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Price ===========================>  */}
          <div className="Price_Budget ">
            <div className="header flex justify-between border-b border-[#3333339c] pb-2">
              <div className="flex items-center gap-2 ">
                {/* <Image src={experienceIcon} alt='icon' className='' /> */}
                <h1 className="text-[#333333] font-semibold">Price / Budget</h1>
              </div>
              <ChevronDown
                className={`cursor-pointer  ${
                  priceDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => setPriceDropdown(!priceDropdown)}
              />
            </div>
            {priceDropdown && (
              <div className="checkbox-container mt-2 space-y-3">
                {priceFilterData.map((item, index) => {
                  return (
                    <div className="input-container flex gap-2 items-center">
                      <input
                        type="radio"
                        className="scale-125 accent-[#AF4300]"
                      />
                      <h1 className="text-[#333333]">{item}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Price range ===========================>  */}
          <div className="Price_Budget ">
            <div className="header ">
              <h1 className="text-[#333333] font-semibold">Price range</h1>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input
                  type="number"
                  placeholder="₹ Min"
                  className="border border-[#216432] px-3 py-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="₹ Max"
                  className="border border-[#216432] px-3 py-2 rounded-md"
                />
              </div>
              <button className="btn-green text-white px-4 py-3 rounded-lg w-[100%] mt-2 cursor-pointer">
                Apply filter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelFilterComponent;
