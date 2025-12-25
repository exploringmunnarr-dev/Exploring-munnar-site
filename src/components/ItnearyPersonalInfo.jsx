"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import personalInfoIcon from "../assets/personalIcon.svg";
import person from "../assets/person_icon.svg";
import phone from "../assets/phone_icon.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import img1 from "../assets/itnearyPersonalImg1.svg";
import img2 from "../assets/itnearyPersonalImg2.svg";
import img3 from "../assets/itnearyPersonalImg3.svg";
import img4 from "../assets/itnearyPersonalImg4.svg";
import { useFormData } from "@/context/FormProvider";
import axios from "axios";

// working on itneary form 

const ItnearyPersonalInfo = ({ setStep }) => {
  // context data
  const { setItnearyFormData, itnearyFormData } = useFormData();
  console.log("Itneary form : ", itnearyFormData)
  const [peviousData, setPreviousData] = useState({});
  // states
  const [contactMethod, setContactMethod] = useState("");
  const [errors, setErrors] = useState({})
  const [personalInforErrors, setPersonalInfoErrors] = useState({
    fullName: false,
    mobileNumber: false,
    mailId: false,
    comingFrom: false,
  });

  // functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "mobileNumber") {
      if (value.length > 10) {
        setPersonalInfoErrors((prev) => ({
          ...prev,
          [name]: true,
        }));
        return;
      }
    }
    setItnearyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // contact method change handler
  const handleContactMethod = (method) => {
    setItnearyFormData((prev) => ({
      ...prev,
      contactMethod: method,
    }));
  };

  function handleNext() {
    const newErrors = {};
    if (!itnearyFormData.fullName) newErrors.fullName = "Full name is required"
    setErrors(newErrors)

    if (Object.keys(newErrors).length == 0) {
      setStep("trip_date");
      localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
    }

  }

  console.log("")
  async function healthCheck() {
    try {
      const response = await axios.get(
        "https://munnar-backend.onrender.com/api/health"
      );
      const data = await response.text();
      console.log("Fetch Response:", data);
    } catch (err) {
      console.error("Error occured : ", err.message);
    }
  }
  // useEffect(()=>{
  //    healthCheck()
  // }, [])

  // useEffect calls
  useEffect(() => {
    const storedData = localStorage.getItem("itnearyData");
    const parsedData = JSON.parse(storedData);

    setItnearyFormData(parsedData);
    if (parsedData) {
      setContactMethod(parsedData.contactMethod);
    }
  }, []);

  useEffect(() => {
    setItnearyFormData((prev) => ({ 
      ...prev,
      contactMethod: contactMethod,
    }));
  }, [contactMethod]);

  console.log(" data :", itnearyFormData);
  // jsx here👇
  return (
    <>
      {/* <button onClick={healthCheck} className="bg-black px-4 py-2 text-white cursor-pointer">Click</button> */}
      <section className="md:flex gap-12 bg-white rounded-lg  p-4 ">
        <div className="container-1 w-[100%] md:w-[50%] ">
          <h1 className="text-[#3a572d] text-lg flex items-center gap-2 font-semibold">
            {" "}
            <span>
              <Image src={personalInfoIcon} className="w-7" />
            </span>{" "}
            Personal info
          </h1>
          <form className="mt-4 flex flex-col gap-6">
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                <Image src={person} alt="icon" className="w-6 " />
                Full name
              </label>
              <input
                onChange={handleInputChange}
                value={itnearyFormData?.fullName}
                name="fullName"
                type="text"
                placeholder="Eg; ragul dravid"
                className="mt-2 p-2 border border-[#777777] rounded-lg text-black w-full"
              />
              {errors.fullName && <p className="text-red-300 text-sm">{errors.fullName}</p>}
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                <Image src={phone} alt="icon" className="w-6 " />
                Mobile number
              </label>
              <input
                onChange={handleInputChange}
                value={itnearyFormData.mobileNumber}
                name="mobileNumber"
                type="text"
                placeholder="Eg;1234567890"
                maxLength="10"
                className="mt-2 p-2 border border-[#777777] rounded-lg text-black w-full"
              />
              {personalInforErrors.mobileNumber && (
                <p className="text-red-400 text-[12px] md:text-[16px]">
                  Mobile number must be less than 10 characters
                </p>
              )}
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                <Image src={mail} alt="icon" className="w-6 " />
                Mail id
              </label>
              <input
                onChange={handleInputChange}
                value={itnearyFormData.mailId}
                name="mailId"
                type="text"
                placeholder="Eg;abc@gmail.com"
                className="mt-2 p-2 border border-[#777777] rounded-lg text-black w-full"
              />
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                <Image src={location} alt="icon" className="w-6 " />
                Coming form
              </label>
              <input
                onChange={handleInputChange}
                value={itnearyFormData.comingFrom}
                name="comingFrom"
                type="text"
                placeholder="Eg;chennai"
                className="mt-2 p-2 border border-[#777777] rounded-lg text-black w-full"
              />
            </div>
            <div className="input-container">
              <label className="text-[#333333] flex items-center gap-2 text-lg font-medium">
                Prefered contact method
              </label>
              <div className="radio-button-container space-y-2 md:space-y-0 md:flex gap-4 items-center mt-2">
                <label class="relative flex gap-2 items-center cursor-pointer">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setContactMethod("phone")}
                    className={`w-4 md:w-6 h-4 md:h-6 rounded-full ${contactMethod == "phone" ? "bg-gray-200" : "border-2"
                      } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${contactMethod == "phone" ? "bg-green-800" : ""
                        }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Phone call</h1>
                </label>
                <label class="relative flex gap-2 items-center cursor-pointer">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setContactMethod("whatsapp")}
                    className={`w-4 md:w-6 h-4 md:h-6 rounded-full ${contactMethod == "whatsapp" ? "bg-gray-200" : "border-2"
                      } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${contactMethod == "whatsapp" ? "bg-green-800" : ""
                        }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Whatsapp</h1>
                </label>
                <label class="relative flex gap-2 items-center cursor-pointer">
                  <input type="radio" name="option" class="peer hidden" />
                  <span
                    onClick={() => setContactMethod("email")}
                    className={`w-4 md:w-6 h-4 md:h-6 rounded-full ${contactMethod == "email" ? "bg-gray-200" : "border-2"
                      } border-[#AF4300] flex items-center justify-center`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${contactMethod == "email" ? "bg-green-800" : ""
                        }`}
                    ></span>
                  </span>
                  <h1 className="text-[#333333]">Email</h1>
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
              <h1>1 Out of 6 &gt; &gt;</h1>
              <button
                onClick={() => {
                  setStep("trip_date");
                }}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="button-container md:hidden flex items-center justify-end mt-4">
          <div className="container-1 flex items-center gap-4">
            <h1>1 Out of 6 &gt; &gt;</h1>
            <button
              onClick={() => {
                handleNext();

              }}
              className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItnearyPersonalInfo;
