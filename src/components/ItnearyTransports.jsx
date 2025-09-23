import React, { useEffect, useState } from "react";
import img1 from "../assets/itnearyPersonalImg1.svg";
import img2 from "../assets/itnearyPersonalImg2.svg";
import img3 from "../assets/itnearyPersonalImg3.svg";
import img4 from "../assets/itnearyPersonalImg4.svg";
import car from "../assets/car_icon.svg";
import traveller from "../assets/traveller.svg";
import sedan from "../assets/sedan.svg";
import suv from "../assets/suv.svg";
import hatchback from "../assets/hatchback.svg";
import selectedSedan from "../assets/selectedSedan.svg";
import selectedHatchBack from "../assets/selectedHatchBack.svg";
import selectedSuv from "../assets/selectedSuv.svg";
import selectedTraveller from "../assets/selectedTraveller.svg";
import checkedRadio from "../assets/checkedRadio.svg";
import Image from "next/image";
import { useFormData } from "@/context/FormProvider";
const ItnearyTransports = ({ setStep }) => {
  // context Data's
  const { setItnearyFormData, itnearyFormData } = useFormData();
  // states
  const [selectedCar, setSelectedCar] = useState(()=>{
    return itnearyFormData.carCategory ? itnearyFormData.carCategory : ""
  });
  const [taxiType, setTaxiType] = useState(() => {
    return itnearyFormData.taxiType ? itnearyFormData.taxiType : "private_taxi";
  });
  const [taxiRequirements, setTaxiRequirements] = useState(() => {
    return itnearyFormData.taxiRequirement
      ? itnearyFormData.taxiRequirement
      : [];
  });

  // functions
  
  const handleNext = () => {
    localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
  };

  const handleCarSelect = (selectedItem) => {
    setSelectedCar(selectedItem);
  };

  const handleTaxiRequirements = (requirement) => {
    setTaxiRequirements((prev) => {
      if (prev.includes(requirement)) {
        return prev.filter((item) => item !== requirement);
      } else {
        return [...prev, requirement];
      }
    });
  };

  //  useEffect calls

  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      taxiRequirement: taxiRequirements,
      carCategory: selectedCar,
      taxiType: taxiType,
    }));
  }, [taxiRequirements, selectedCar, taxiType]);

  // logs
  // ("taxi requirements : ", taxiRequirements)

  return (
    <>
      <section className="md:flex gap-12 bg-white rounded-lg  p-4 ">
        <div className="container-1 w-[100%] md:w-[40%]">
          <div className="header ">
            <h1 className="text-[#246132] font-semibold text-lg flex items-center gap-2">
              <span>
                <Image src={car} />
              </span>
              Type of taxi needed
            </h1>
            <div className="radio-btn-container mt-4 flex items-center gap-4 ">
              <div className="input-1 flex items-center gap-2">
                {taxiType == "private_taxi" ? (
                  <Image
                    src={checkedRadio}
                    onClick={() => setTaxiType("")}
                    className="cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => setTaxiType("private_taxi")}
                    className="cursor-pointer border border-[#AF4300] rounded-full w-5 h-5 cursor-pointer"
                  ></div>
                )}
                <h1 className="text-[#333333]">Private taxi</h1>
              </div>
              <div className="input-1 flex items-center gap-2">
                {taxiType == "share_taxi" ? (
                  <Image
                    src={checkedRadio}
                    onClick={() => setTaxiType("")}
                    className="cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => setTaxiType("share_taxi")}
                    className="border border-[#AF4300] rounded-full w-5 h-5 cursor-pointer"
                  ></div>
                )}
                <h1 className="text-[#333333]">
                  Share taxi with fellow travellers
                </h1>
              </div>
            </div>
          </div>
          <div className="input-content-container ">
            <h1 className="flex items-center gap-2 mt-4 text-lg text-[#246132] font-semibold">
              <span>
                <Image src={car} />
              </span>{" "}
              Taxi requirements
            </h1>
            <div className="input-container mt-4 space-y-4">
              <div className="input-1 flex items-center gap-2">
                {/* <div className="border border-[#AF4300] w-6 h-6 rounded-md "></div> */}
                <input
                  type="checkbox"
                  checked={
                    taxiRequirements.includes("pickup from airport")
                      ? true
                      : false
                  }
                  onChange={() => handleTaxiRequirements("pickup from airport")}
                  className="scale-125 w-4 h-4 accent-[#AF4300]"
                />
                <h1 className="text-[#333333]">Pickup from airport</h1>
              </div>
              <div className="input-1 flex items-center gap-2">
                {/* <div className="border border-[#AF4300] w-6 h-6 rounded-md "></div> */}
                <input
                  type="checkbox"
                  checked={
                    taxiRequirements.includes("pickup from railway station")
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleTaxiRequirements("pickup from railway station")
                  }
                  className="scale-125 w-4 h-4 accent-[#AF4300]"
                />
                <h1 className="text-[#333333]">Pickup from railway station</h1>
              </div>
              <div className="input-1 flex items-center gap-2">
                {/* <div className="border border-[#AF4300] w-6 h-6 rounded-md "></div> */}
                <input
                  type="checkbox"
                  checked={
                    taxiRequirements.includes("local sightseeing")
                      ? true
                      : false
                  }
                  onChange={() => handleTaxiRequirements("local sightseeing")}
                  className="scale-125 w-4 h-4 accent-[#AF4300]"
                />
                <h1 className="text-[#333333]">Local sightseeing</h1>
              </div>
              <div className="input-1 flex items-center gap-2">
                {/* <div className="border border-[#AF4300] w-6 h-6 rounded-md "></div> */}
                <input
                  type="checkbox"
                  checked={
                    taxiRequirements.includes("drop at airport") ? true : false
                  }
                  onChange={() => handleTaxiRequirements("drop at airport")}
                  className="scale-125 w-4 h-4 accent-[#AF4300]"
                />
                <h1 className="text-[#333333]">Drop at airport</h1>
              </div>
              <div className="input-1 flex items-center gap-2">
                {/* <div className="border border-[#AF4300] w-6 h-6 rounded-md "></div> */}
                <input
                  type="checkbox"
                  checked={
                    taxiRequirements.includes("drop at railway station")
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleTaxiRequirements("drop at railway station")
                  }
                  className="scale-125 w-4 h-4 accent-[#AF4300]"
                />
                <h1 className="text-[#333333]">Drop at railway station</h1>
              </div>
            </div>
            <div className="mt-4 car-category-container">
              <h1 className="font-semibold text-black">Choose Car category</h1>
              <div className="car-container mt-2 grid grid-cols-2  gap-2  md:w-[60%]">
                <div className="img-container cursor-pointer">
                  {selectedCar == "sedan" ? (
                    <Image
                      onClick={() => handleCarSelect("")}
                      src={selectedSedan}
                    />
                  ) : (
                    <Image
                      onClick={() => handleCarSelect("sedan")}
                      src={sedan}
                    />
                  )}
                </div>
                <div className="img-container cursor-pointer">
                  {selectedCar == "hatchback" ? (
                    <Image
                      src={selectedHatchBack}
                      onClick={() => handleCarSelect("")}
                    />
                  ) : (
                    <Image
                      src={hatchback}
                      onClick={() => handleCarSelect("hatchback")}
                    />
                  )}
                </div>
                <div className="img-container cursor-pointer">
                  {selectedCar == "suv" ? (
                    <Image
                      src={selectedSuv}
                      onClick={() => handleCarSelect("")}
                    />
                  ) : (
                    <Image src={suv} onClick={() => handleCarSelect("suv")} />
                  )}
                </div>
                <div className="img-container cursor-pointer">
                  {selectedCar == "traveller" ? (
                    <Image
                      src={selectedTraveller}
                      onClick={() => handleCarSelect("")}
                    />
                  ) : (
                    <Image
                      src={traveller}
                      onClick={() => handleCarSelect("traveller")}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2 hidden md:block w-[60%] py-2">
          <div className="grid grid-cols-7 grid-rows-6 gap-4 h-[90%]">
            <div className="col-span-2 row-span-6 h-[100%]  ">
              <Image
                src={img1}
                alt="image"
                className="h-[100%] w-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-3 row-span-6 col-start-5 row-start-1">
              <Image
                src={img4}
                alt="image"
                className="h-[100%] w-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-1">
              <Image
                src={img2}
                alt="image"
                className="h-[100%] w-[100%] object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-4">
              <Image
                src={img3}
                alt="image"
                className="h-[100%] w-[100%] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="button-container flex items-center justify-end mt-4 ">
            <div className="container-1 flex items-center gap-4">
              <h1>4 Out of 6 &gt; &gt;</h1>
              <button
                onClick={() => setStep("hotels_required")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setStep("Routes")}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="button-container md:hidden flex items-center justify-end mt-4">
          <div className="container-1 md:flex items-center gap-4">
            <h1 className="flex justify-end mb-2">4 Out of 6 &gt; &gt;</h1>
            <div className="btn-container flex gap-2">
              <button
                onClick={() => setStep("hotels_required")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => {handleNext(); setStep("Routes")}}
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

export default ItnearyTransports;
