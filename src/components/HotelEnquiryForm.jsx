import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "../assets/enquiryFromImg1.svg";
import person from "../assets/person_icon.svg";
import phone from "../assets/phone_icon.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import calendar from "../assets/calendarIcon.svg";
import kids from "../assets/kids_icon.svg";
import adult from "../assets/adult_icon.svg";
import { X } from "lucide-react";
import axios from "axios";
const HotelEnquiryForm = ({ setIsForm, data }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // refs
  const modalRef = useRef(null);

  // states
  const [formData, setFormData] = useState({
    hotelId: data?.id,
    userId: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    kids: "",
  });

  // functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSave() {
    try {
      const response = await axios.post(
        `${apiUrl}/api/hotel-booking`,
        formData
      );
      alert("Hotel booked successfully");
      setIsForm(false);
    } catch (err) {
      console.error("Error occured while posting form data ");
    }
  }

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

  console.log("formdata : ", formData);
  return (
    <>
      <section
        ref={modalRef}
        className="bg-white max-sm:w-[90%] max-sm:h-[85vh] overflow-auto w-[80%] md:w-[50%] rounded-lg py-5 px-6 fixed z-110 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[#777777] pb-5 ">
          <div className="container-1 flex items-center gap-3 ">
            <div className="img-container w-[70px] ">
              <Image
                src={data?.images?.[0].url}
                width={3000}
                height={3000}
                className="w-[100%] object-cover rounded-lg"
              />
            </div>
            <div className="content-container">
              <h1 className="text-lg font-semibold md:text-3xl text-[#333333]">
                {data?.name}
              </h1>
              <h1 className="text-sm md:text-lg mt-1 text-[#333333]">
                {data?.stayType} - {data?.location}
              </h1>
            </div>
          </div>
          <div
            onClick={() => setIsForm(false)}
            className="icon-container cursor-pointer p-1 bg-gray-300 rounded-full "
          >
            <X className="w-5 h-5" />
          </div>
        </header>
        <div className="form-container  mt-4 flex flex-col max-sm:text-xs sm:grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-6">
          <div className="input-container ">
            <div className="lable-container flex w-full gap-2 items-center">
              <Image src={person} className="w-7 h-7" />
              <h1 className="text-[#333333] font-semibold text-lg">
                First name
              </h1>
            </div>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              placeholder="Enter your first name"
              onChange={(e) => handleInputChange(e)}
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
              value={formData.lastName}
              name="lastName"
              onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => handleInputChange(e)}
              value={formData.phoneNumber}
              name="phoneNumber"
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
              value={formData.email}
              name="email"
              onChange={(e) => handleInputChange(e)}
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
              placeholder=""
              onChange={(e) => handleInputChange(e)}
              value={formData.checkIn}
              name="checkIn"
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
              onChange={(e) => handleInputChange(e)}
              value={formData.checkOut}
              name="checkOut"
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
              onChange={(e) => handleInputChange(e)}
              value={formData.adults}
              name="adults"
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
              onChange={(e) => handleInputChange(e)}
              value={formData.kids}
              name="kids"
              className="border rounded-lg border-[#777777] w-full p-2 mt-2"
            />
          </div>
        </div>
        <button
          onClick={onSave}
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
