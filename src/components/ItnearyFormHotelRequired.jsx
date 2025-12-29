"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import personalInfoIcon from "../assets/personalIcon.svg";
import calendar from "../assets/calendarIcon.svg";
import light from "../assets/light_icon.svg";
import person from "../assets/person_icon.svg";
import phone from "../assets/Phone_icon.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import img1 from "../assets/itnearyPersonalImg1.svg";
import img2 from "../assets/itnearyPersonalImg2.svg";
import img3 from "../assets/itnearyPersonalImg3.svg";
import img4 from "../assets/itnearyPersonalImg4.svg";
import smile from "../assets/smile.svg";
import bell from "../assets/bell_icon.svg";
import DatePicker from "./DatePicker";
import EndDateItneary from "./EndDateItnearyForm";
import checkedRadio from "../assets/checkedRadio.svg";
import star from "../assets/star_icon.svg";
import tent from "../assets/tent_icon.svg";
import three_star from "../assets/three_star_icon.svg"; 
import home_icon from "../assets/home_icon.svg";
import leaf_icon from "../assets/leaf_icon.svg";
import tree from "../assets/tree.svg";
import resort from "../assets/resort_icon.svg";
import hotel from "../assets/hotel.svg";
import { useFormData } from "@/context/FormProvider";
import treeActive from '../assets/treeActive.svg'
import EcoActive from '../assets/ecoCottageActive.svg'
import homeActive from '../assets/homeActive.svg'
import tentActive from '../assets/tentActive.svg'
import resortActive from '../assets/resortActive.svg'
import star3 from '../assets/active3star.svg'
import star5 from '../assets/fivestarActive.svg'

const filterTabs = [
  { icon: star, title: "5 star Hotels", active: star5 },
  { icon: three_star, title: "3 star Hotels", active: star3 },
  { icon: tent, title: "Tents", active: tentActive },
  { icon: home_icon, title: "Home stays & geust house", active: homeActive },
  { icon: leaf_icon, title: "Eco cottages", active: EcoActive },
  { icon: tree, title: "Tree house", active: treeActive },
  { icon: resort, title: "Resorts", active: resortActive },
  { icon: hotel, title: "Hotels", active: "" },
];
const ItnearyFormHotelRequired = ({ setStep }) => {
  // context Data
  const { setItnearyFormData, itnearyFormData } = useFormData();

  // states
  const [priceRange, setPriceRange] = useState(() => {
    return itnearyFormData.roomBudget ? itnearyFormData.roomBudget : ""
  });
  const [hotelsRequired, setHotelRequired] = useState(() => {
    return itnearyFormData.hotelRequired ? itnearyFormData.hotelRequired : [];
  });

  // functions
  const handleHotelRequired = (hotel) => {
    setHotelRequired((prev) => {
      if (prev.includes(hotel)) {
        return prev.filter((item) => item !== hotel);
      } else {
        return [...prev, hotel];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItnearyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
  };

  // useEffect calls
  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      ["hotelRequired"]: hotelsRequired,
    }));
  }, [hotelsRequired]);

  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      ["roomBudget"]: priceRange,
    }));
  }, [priceRange]);

  return (
    <>
      <section className="md:flex gap-12 bg-white rounded-lg  p-4 ">
        <div className="container-1 w-[100%] md:w-[50%]">
          <h1 className="text-[#246132] font-semibold text-lg">
            Types of Hotels Required <span className="text-[#AF4300]">*</span>
          </h1>

          <div className="filter-container flex items-center gap-2 flex-wrap mt-3">
            {filterTabs.map((item, index) => {
              return (
                <div
                  onClick={() => handleHotelRequired(item.title)}
                  className={`bg-[#EEEEEE] cursor-pointer flex items-center gap-2 text-[#246132] border-1 border-[#246232] w-fit px-4 py-2 rounded-lg  ${hotelsRequired.includes(item.title)
                    ? "btn-green text-white"
                    : ""
                    } `}
                >
                  {hotelsRequired.includes(item.title)
                    ? <Image src={item.active} />
                    : <Image src={item.icon} />
                  }

                  <button className={`cursor-pointer  `}>{item.title}</button>
                </div>
              );
            })}
          </div>
          <h1 className="text-[#246132] mt-4 font-semibold text-lg">
            Expected room budget <span className="text-[#AF4300]">*</span>
          </h1>
          <div className="radio-btn-container mt-2 space-y-4">
            <div className="input-container flex items-center gap-2">
              {priceRange === "under999" ? (
                <div
                  onClick={() => setPriceRange("under999")}
                  className="checked-btn cursor-pointer"
                >
                  <Image src={checkedRadio} alt="checked" />
                </div>
              ) : (
                <div
                  onClick={() => setPriceRange("under999")}
                  className="radio-container"
                >
                  <div className="w-6 h-6 rounded-full border border-[#AF4300] cursor-pointer"></div>
                </div>
              )}

              <h1 className="text-[#383838]">Under ₹999</h1>
            </div>

            <div className="input-container flex items-center gap-2">
              {priceRange === "1000 - 2499" ? (
                <div
                  onClick={() => setPriceRange("1000 - 2499")}
                  className="checked-btn cursor-pointer"
                >
                  <Image src={checkedRadio} alt="checked" />
                </div>
              ) : (
                <div
                  onClick={() => setPriceRange("1000 - 2499")}
                  className="radio-container"
                >
                  <div className="w-6 h-6 rounded-full border border-[#AF4300] cursor-pointer"></div>
                </div>
              )}

              <h1 className="text-[#383838]">₹1,000–₹2,499</h1>
            </div>
            <div className="input-container flex items-center gap-2">
              {priceRange === "2500 - 4999" ? (
                <div
                  onClick={() => setPriceRange("2500 - 4999")}
                  className="checked-btn cursor-pointer"
                >
                  <Image src={checkedRadio} alt="checked" />
                </div>
              ) : (
                <div
                  onClick={() => setPriceRange("2500 - 4999")}
                  className="radio-container"
                >
                  <div className="w-6 h-6 rounded-full border border-[#AF4300] cursor-pointer"></div>
                </div>
              )}

              <h1 className="text-[#383838]">₹2,500–₹4,999</h1>
            </div>
            <div className="input-container flex items-center gap-2">
              {priceRange === "5000" ? (
                <div
                  onClick={() => setPriceRange("5000")}
                  className="checked-btn cursor-pointer"
                >
                  <Image src={checkedRadio} alt="checked" />
                </div>
              ) : (
                <div
                  onClick={() => setPriceRange("5000")}
                  className="radio-container"
                >
                  <div className="w-6 h-6 rounded-full border border-[#AF4300] cursor-pointer"></div>
                </div>
              )}

              <h1 className="text-[#383838]">₹5,000+</h1>
            </div>
          </div>
          <h1 className="text-[#333333] mt-4 flex items-center gap-3 text-lg">
            {" "}
            <span>
              <Image src={bell} className="h-6 w-6" />
            </span>{" "}
            No of Rooms required *
          </h1>
          <input
            type="text"
            placeholder="Eg; 2"
            name="roomsRequired"
            onChange={handleInputChange}
            value={itnearyFormData.roomsRequired}
            className="mt-2 p-2 border border-[#777777] rounded-lg text-[#131111]w-full"
          />
        </div>
        <div className="container-2 hidden md:block w-[50%] py-2">
          <div className="grid grid-cols-7 grid-rows-6 gap-4 h-[90%]">
            <div className="col-span-2 row-span-6 h-[100%]  ">
              <Image
                src={img1}
                alt="image"
                className="h-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-3 row-span-6 col-start-5 row-start-1">
              <Image
                src={img4}
                alt="image"
                className="h-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-1">
              <Image
                src={img2}
                alt="image"
                className="h-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-4">
              <Image
                src={img3}
                alt="image"
                className="h-[100%] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="button-container flex items-center justify-end mt-4 ">
            <div className="container-1 flex items-center gap-4">
              <h1>3 Out of 6 &gt; &gt;</h1>
              <button
                onClick={() => setStep("trip_date")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setStep("TransportsForm")}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="button-container md:hidden flex items-center justify-end mt-4">
          <div className="container-1 md:flex items-center gap-4">
            <h1 className="flex justify-end mb-2">3 Out of 6 &gt; &gt;</h1>
            <div className="btn-container flex gap-2">
              <button
                onClick={() => setStep("trip_date")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setStep("TransportsForm");
                }}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItnearyFormHotelRequired;
