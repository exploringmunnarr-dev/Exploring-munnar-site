import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import stayTypeIcon from "../assets/stayTypeIcon.svg";
import hotelLocationIcon from "../assets/hotelLocationIcon.svg";
import amenitiesIcon from "../assets/amenitiesIcon.svg";
import experienceIcon from "../assets/experienceIcon.svg";

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
const ResponsiveFilterComponent = ({ setisFilter }) => {
  return (
    <>
      <section className="fixed h-[100vh] z-[100] top-0 right-0 left-0 bottom-0 bg-white ">
        <header className="btn-green w-[100%] py-3 px-4 flex items-center justify-between">
          <div className="container-1 flex items-center gap-4">
            <ArrowLeft
              onClick={() => setisFilter(false)}
              className="text-white"
            />
            <h1 className="text-white text-xl">Filter</h1>
          </div>
          <button className="bg-white px-4 py-2 rounded text-green-900">
            Apply Filter
          </button>
        </header>
        <div className="filter-content-section h-[90%] pb-2 mt-4 space-y-6 text-sm px-6 overflow-y-scroll">
          {/* Stay type ===========================> */}
          <div className="stay-type">
            <div className="header flex justify-between pb-2">
              <div className="flex items-center gap-2">
                <Image src={stayTypeIcon} alt="icon" />
                <h1 className="text-[#333333] text-lg font-semibold">
                  Stay type
                </h1>
              </div>
            </div>
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
          </div>

          {/* Location ===========================> */}
          <div className="location">
            <div className="header flex justify-between pb-2">
              <div className="flex items-center gap-2">
                <Image src={hotelLocationIcon} alt="icon" />
                <h1 className="text-[#333333] text-lg font-semibold">
                  Location
                </h1>
              </div>
            </div>
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
          </div>

          {/* Amenities ===========================> */}
          <div className="amenities">
            <div className="header flex justify-between pb-2">
              <div className="flex items-center gap-2">
                <Image src={amenitiesIcon} alt="icon" />
                <h1 className="text-[#333333] text-lg font-semibold">
                  Amenities
                </h1>
              </div>
            </div>
            <div className="checkbox-container mt-2 space-y-3">
              {amenitiesFilterData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="input-container flex gap-2 items-center"
                  >
                    <input
                      type="checkbox"
                      className="scale-125 accent-[#AF4300]"
                    />
                    <h1 className="text-[#333333]">{item}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experiences ===========================> */}
          <div className="experience">
            <div className="header flex justify-between pb-2">
              <div className="flex items-center gap-2">
                <Image src={experienceIcon} alt="icon" />
                <h1 className="text-[#333333] text-lg font-semibold">
                  Experiences
                </h1>
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponsiveFilterComponent;
