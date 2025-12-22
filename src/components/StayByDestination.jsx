"use client";
import React from "react";
import Image from "next/image";
import destinationImg from "../assets/destinationImg.svg";
import locationImg from "../assets/locationImg.svg";
import { useFormData } from "@/context/FormProvider";
import { useData } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const locationData = [
  {
    img: locationImg,
    title: "Chinnakanal",
    top: "24%",
    left: "20%",
    resTop: "20%",
  },
  { img: locationImg, title: "Devikulam", top: "44%", left: "35%" },
  { img: locationImg, title: "Munnar Town", top: "25%", left: "56%" },
  { img: locationImg, title: "Lockhart Gap", top: "22%", left: "80%" },
  { img: locationImg, title: "Anachal", top: "65%", left: "14%" },
  { img: locationImg, title: "Pallivasal", top: "58%", left: "75%" },
  { img: locationImg, title: "Suryanelli", top: "86%", left: "35%" },
  { img: locationImg, title: "Mangulam", top: "75%", left: "90%" },
];

const StayByDestination = () => {
  // conext
  const { loation, setLocation } = useData();

  // naigation hooks
  const router = useRouter();

  // functions

  // setting Location
  const handleLocation = (loc) => {
    if (loation.includes(loc)) {
      setLocation((prev) => prev.filter((item) => item !== loc));
      return;
    } else {
      setLocation((prev) => [...prev, loc]);
    }
    router.push(`/hotels/hotel_listing`)
  };

  return (
    <>
      <section className="mt-8 md:mt-14">
        <header className="flex items-start justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Find Stays by Destination
            </h2>
            <div className="flex items-center justify-between  max-sm:text-[14px]">
              <p className="text-[#999999] mt-2">
                Select your favourite Munnar spot and browse available stays.
              </p>
            </div>
          </div>
          <Link
            href={`/hotels/hotel_listing`}
            className="text-[#333333] underline cursor-pointer"
          >
            View hotels
          </Link>
        </header>
        <div className="content-container h-[500px] mt-4">
          <div className="relative h-[500px] mt-3 rounded-xl overflow-hidden">
            <Image
              src={destinationImg}
              alt="Munnar Map"
              className="h-full w-full object-cover "
            />

            {/* Location Pins will go here */}
            {locationData.map((loc, index) => (
              <div
                onClick={() => handleLocation(loc.title)}
                key={index}
                className="absolute flex flex-col items-center "
                style={{
                  top: loc.top,
                  left: loc.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="md:w-[130px] w-[100px] h-[80px]  md:h-[160px] text-center ">
                  <span className="mt-1 text-[10px] md:text-xs  md:w-[200%] border text-black font-semibold group-hover:scale-125  bg-[#EEEEEE]  px-2 md:px-4 py-1 md:py-2 rounded-full">
                    {loc.title}
                  </span>
                  <Image
                    src={loc.img}
                    alt={loc.title}
                    className="w-full  cursor-pointer hover:scale-115 group transition-all duration-300 h-full mt-2 object-cover "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StayByDestination;
