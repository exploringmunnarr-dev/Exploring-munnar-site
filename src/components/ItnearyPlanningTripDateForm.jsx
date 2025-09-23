"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import personalInfoIcon from "../assets/personalIcon.svg";
import calendar from "../assets/calendarIcon.svg";
import light from "../assets/light_icon.svg";
import person from "../assets/person_icon.svg";
import phone from "../assets/phone_icon.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import img1 from "../assets/itnearyPersonalImg1.svg";
import img2 from "../assets/itnearyPersonalImg2.svg";
import img3 from "../assets/itnearyPersonalImg3.svg";
import img4 from "../assets/itnearyPersonalImg4.svg";
import smile from "../assets/smile.svg";
import DatePicker from "./DatePicker";
import EndDateItneary from "./EndDateItnearyForm";
import { useFormData } from "@/context/FormProvider";

const ItnearyPlanningTripDateForm = ({ setStep }) => {
  // states
  const [groupType, setGroupType] = useState("boys");

  // Context Data
  const { setItnearyFormData, itnearyFormData } = useFormData();

  // functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // ("name : ", name)
    // ("value : ", value)

    setItnearyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    console.log("trip date running");
    localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
  };

  //  useEffect calls
  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      ["typeOfGroup"]: groupType,
    }));
  }, [groupType]);

  return (
    <>
      <section className="md:flex gap-12 bg-white rounded-lg  p-4 ">
        <div className="container-1 w-[100%] md:w-[50%] ">
          <h1 className="text-[#3a572d] text-lg font-semibold flex items-center gap-2">
            {" "}
            <span>
              <Image src={calendar} className="w-7" />
            </span>{" "}
            Trip dates & group details
          </h1>
          <form className="mt-4 flex flex-col gap-4">
            <div className="input-container ">
              <label className="text-[#333333] mb-2 flex items-center gap-2 text-lg font-medium ">
                <Image src={calendar} alt="icon" className="w-6 " />
                Start date *
              </label>
              <DatePicker />
            </div>
            <div className="input-container">
              <label className="text-[#333333] mb-2 flex items-center gap-2 text-lg font-medium">
                <Image src={calendar} alt="icon" className="w-6 " />
                End date *
              </label>
              <EndDateItneary />
            </div>
            <div className="input-container space-y-4 md:space-y-0 md:grid grid-cols-2 gap-4">
              <div className="container-1">
                <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                  <Image src={person} className="w-6 " />
                  No of adults
                </label>
                <input
                  type="text"
                  value={itnearyFormData?.adult}
                  placeholder="Eg; 2"
                  onChange={handleInputChange}
                  name="adult"
                  className="mt-2 p-2 border border-[#777777] rounded-lg text-[#777777] w-full"
                />
              </div>
              <div className="container-2">
                <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                  <Image src={smile} className="w-6 " />
                  No of child
                </label>
                <input
                  type="text"
                  placeholder="Eg; 1"
                  value={itnearyFormData.child}
                  name="child"
                  onChange={handleInputChange}
                  className="mt-2 p-2 border border-[#777777] rounded-lg text-[#131111]  w-full"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                <Image src={light} alt="icon" className="w-6 " /> No of night
                stays required *{" "}
              </label>
              <input
                type="text"
                placeholder="Eg; 2"
                value={itnearyFormData.nightStays}
                name="nightStays"
                onChange={handleInputChange}
                className="mt-2 p-2 border border-[#777777] rounded-lg text-[#131111] w-full"
              />
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg ">
                Type of group
              </label>
              <div className="radio-button-container flex flex-wrap gap-4 items-center mt-2">
                <label class="relative flex gap-2 items-center ">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setGroupType("boys")}
                    className={`w-4 cursor-pointer md:w-6 h-4 md:h-6 rounded-full ${
                      groupType == "boys" ? "bg-gray-200" : "border-2"
                    } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        groupType == "boys" ? "bg-green-800" : ""
                      }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Boys</h1>
                </label>
                <label class="relative flex gap-2 items-center ">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setGroupType("girls")}
                    className={`w-4 cursor-pointer md:w-6 h-4 md:h-6 rounded-full ${
                      groupType == "girls" ? "bg-gray-200" : "border-2"
                    } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        groupType == "girls" ? "bg-green-800" : ""
                      }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Girls</h1>
                </label>
                <label class="relative flex gap-2 items-center ">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setGroupType("mixed")}
                    className={`w-4 cursor-pointer md:w-6 h-4 md:h-6 rounded-full ${
                      groupType == "mixed" ? "bg-gray-200" : "border-2"
                    } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        groupType == "mixed" ? "bg-green-800" : ""
                      }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Mixed</h1>
                </label>
                <label class="relative flex gap-2 items-center ">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setGroupType("family")}
                    className={`w-4 cursor-pointer md:w-6 h-4 md:h-6 rounded-full ${
                      groupType == "family" ? "bg-gray-200" : "border-2"
                    } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        groupType == "family" ? "bg-green-800" : ""
                      }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Family</h1>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="container-2 hidden md:block w-[50%]">
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
          <div className="button-container flex items-center justify-end mt-4">
            <div className="container-1 flex items-center gap-4">
              <h1>2 Out of 6 &gt; &gt;</h1>
              <button
                onClick={() => setStep("personal_info")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setStep("hotels_required");
                }}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="button-container md:hidden flex items-center justify-end mt-4">
          <div className="container-1 md:flex items-center gap-4">
            <h1 className="flex justify-end mb-2">2 Out of 6 &gt; &gt;</h1>
            <div className="btn-container flex gap-2">
              <button
                onClick={() => setStep("personal_info")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setStep("hotels_required")}
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

export default ItnearyPlanningTripDateForm;
