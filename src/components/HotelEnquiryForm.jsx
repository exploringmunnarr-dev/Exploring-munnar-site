import React, { useEffect, useRef } from "react";
import Image from "next/image";
import img from "../assets/enquiryFromImg1.svg";
import person from "../assets/person_icon.svg";
import phone from "../assets/phone_icon.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import calendar from "../assets/calendarIcon.svg";
import kids from "../assets/kids_icon.svg";
import adult from "../assets/adult_icon.svg";
const HotelEnquiryForm = ({ setIsForm }) => {
  // refs
  const modalRef = useRef(null);

  // useEffect call's

  // handling outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsForm]);

  // useEffect to restrict scrolling the page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <section
        ref={modalRef}
        className="bg-white max-sm:w-[90%] w-[80%] md:w-[50%] rounded-lg py-5 px-6 fixed z-110 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
      >
        <header className="flex items-center gap-4 border-b border-[#777777] pb-5">
          <div className="img-container w-[70px] ">
            <Image src={img} className="w-[100%] rounded-lg" />
          </div>
          <div className="content-container">
            <h1 className="text-xl font-semibold md:text-3xl text-[#333333]">
              Misty Hill Eco Retreat
            </h1>
            <h1 className="text-lg mt-1 text-[#333333]">
              Tree house - Chinnakal
            </h1>
          </div>
        </header>
        <div className="form-container mt-4 sm:grid grid-cols-2 gap-x-4 gap-y-6">
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={person} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                First name
              </h1>
            </div>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={person} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                Second name
              </h1>
            </div>
            <input
              type="text"
              placeholder="Enter your second name"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={phone} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                Phone number
              </h1>
            </div>
            <input
              type="number"
              placeholder="Eg; 1234567890"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={mail} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">Mail</h1>
            </div>
            <input
              type="text"
              placeholder="Eg; abc1234@gmail.com"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={calendar} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">Check in</h1>
            </div>
            <input
              type="date"
              placeholder="Enter your first name"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={calendar} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                Check Out
              </h1>
            </div>
            <input
              type="date"
              placeholder="Enter your first name"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={adult} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">Adults</h1>
            </div>
            <input
              type="number"
              placeholder="1"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={kids} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                Kids (age below 14)
              </h1>
            </div>
            <input
              type="number"
              placeholder="2"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
        </div>
        <button
          className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] w-full mt-3 text-white rounded-lg p-3 cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
      </section>
      <div className="form-tint fixed top-0 right-0 left-0 bottom-0 z-100"></div>
    </>
  );
};

export default HotelEnquiryForm;
