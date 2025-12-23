"use client";
import React, { useState } from "react";
import Image from "next/image";
import bg from "../assets/itnearyBg.svg";
import ItnearyPersonalInfo from "./ItnearyPersonalInfo";
import ItnearyPlanningTripDateForm from "./ItnearyPlanningTripDateForm";
import ItnearyFormHotelRequired from "./ItnearyFormHotelRequired";
import ItnearyTransports from "./ItnearyTransports";
import ItnearyRoutesForm from "./ItnearyRoutesForm";
import ItnearyReviewForm from "./ItnearyReviewForm";
import { useFormData } from "@/context/FormProvider";
const steps = [
  { id: "personal_info", label: "Personal Info" },
  { id: "trip_date", label: "Trip Date" },
  { id: "hotels_required", label: "Hotels" },
  { id: "TransportsForm", label: "Transport" },
];

const ItnearyFormContainer = () => {
  const [step, setStep] = useState("personal_info");
  // const [step, setStep] = useState("Routes");
  const currentIndex = steps.findIndex((s) => s.id === step);
  // ("selected tab : ", step);

  return (
    <>
      <section className="mx-4 md:mx-10 mt-4 bg-[#EEEEEE] rounded-lg px-2 md:px-4 md:py-2 ">
        <section className="mx-4 md:mx-10 bg-[#EEEEEE]  rounded-lg px-2 md:px-4 py-2 md:py-6 ">
          {/* Stepper */}
          {/* <div className="flex items-center justify-between ">
                        {steps.map((s, index) => {
                            const isCompleted = index < currentIndex;
                            const isActive = index === currentIndex;

                            return (
                                <div key={s.id} className="flex items-center  w-full">

                                    <div
                                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300
                  ${isCompleted ? "bg-green-700 text-white" : "bg-gray-200 text-gray-400"}
                  ${isActive ? "border-2 border-green-700" : ""}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full  ${isActive ? "bg-gray-700" : ""} `}></div>
                                        {isCompleted ? "✓" : ""}
                                    </div>


                                    <div
                                        className={`ml-2 text-sm transition-colors duration-300
                  ${isCompleted || isActive ? "text-black" : "text-gray-500"}`}
                                    >
                                        {s.label}
                                    </div>


                                    {index < steps.length - 1 && (
                                        <div
                                            className={`flex-1 h-1 mx-2  transition-colors duration-300
                    ${isCompleted ? "bg-green-700" : "bg-gray-300"}`}
                                        ></div>
                                    )}
                                </div>
                            );
                        })}
                    </div> */}
        </section>
        <header className="relative">
          <Image
            src={bg}
            className="h-[140px] w-[100%] object-cover md:h-auto rounded-md md:rounded-xl"
          />
          <div className="tint absolute top-0 right-0 left-0 bottom-0 rounded-xl"></div>
          <div className="header-text-container max-sm:w-[90%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h1 className="font-semibold max-sm:text-xl text-4xl text-white">
              Your Journey, Perfectly Planned
            </h1>
          </div>
        </header>
        <div className="form-container mt-4 py-2 md:py-0">
          {step == "personal_info" && <ItnearyPersonalInfo setStep={setStep} />}
          {step == "trip_date" && (
            <ItnearyPlanningTripDateForm setStep={setStep} />
          )}
          {step == "hotels_required" && (
            <ItnearyFormHotelRequired setStep={setStep} />
          )}
          {step == "TransportsForm" && <ItnearyTransports setStep={setStep} />}
          {step == "Routes" && <ItnearyRoutesForm setStep={setStep} />}
          {step == "review" && <ItnearyReviewForm setStep={setStep} />}
        </div>
      </section>
    </>
  );
};

export default ItnearyFormContainer;
