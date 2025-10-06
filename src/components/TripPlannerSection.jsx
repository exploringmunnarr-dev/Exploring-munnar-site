import React, { useState } from "react";
import Image from "next/image";
import img1 from "../assets/plannerImg1.svg";
import img2 from "../assets/plannerImg2.svg";
import img3 from "../assets/plannerImg3.svg";
import img4 from "../assets/plannerImg4.svg";

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival and Relaxation",
    active: true,
  },
  {
    day: "Day 2",
    title: "Exploration and Wellness",
    active: false,
  },
  {
    day: "Day 3",
    title: "Scenic Views and Leisure",
    active: false,
  },
  {
    day: "Day 4",
    title: "Local Culture and Adventure",
    active: false,
  },
];

const TripPlannerSection = () => {
  const [data, setData] = useState(itinerary);
  const handleBtnClick = (index) => {
    const manipulatedData = data.map((item, i) => ({
      ...item,
      active: i == index,
    }));
    setData(manipulatedData);
  };
  return (
    <>
      <section className="bg-[#eeeeee] mx-4 md:mx-10 mt-8 md:mt-14 md:flex items-center gap-5 justify-between p-2 md:p-6 rounded-xl">
        <div className="first-container w-[100%] md:w-[60%]">
          <section className="">
            <div className="w-[100%] md:w-[94%]">
              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-semibold text-[#000000]">
                Plan Your Perfect Munnar Trip, Tell us your trip details and
                interests, and we’ll generate a personalized itinerary
              </h2>

              {/* CTA Button */}
              <button className="mt-4 px-6 py-2  bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)]  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer text-white font-medium rounded-md hover:bg-green-900 transition">
                Start Planning Now
              </button>

              {/* Itinerary List */}
              <div className="mt-8 space-y-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleBtnClick(index)}
                    className={`flex items-center cursor-pointer rounded-md overflow-hidden hover:bg-[#b73c00] hover:text-white bg-white text-[#333333]"
                                            }`}
                  >
                    {/* Day Badge */}
                    <div
                      className={`px-6 py-4 font-semibold bg-green-900  text-white `}
                    >
                      {item.day}
                    </div>

                    {/* Title */}
                    <div className="px-6 py-4 text-sm md:text-base font-medium ">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="second-container mt-4 w-[100%] md:w-[40%] ">
          <div className="first-section md:flex gap-2 ">
            <div className="img-container md:w-[400px] overflow-hidden">
              <Image src={img1} className="h-[95%] w-[100%]" />
            </div>
            <div className="second-img-section mt-2 md:mt-0 space-y-3">
              <div className="img-container h-[46%]">
                <Image
                  src={img2}
                  className="w-[100%] md:w-[240px] h-[100%] object-cover rounded-xl"
                />
              </div>
              <div className="img-container h-[46%] ">
                <Image
                  src={img3}
                  className="w-[100%] md:w-[240px]  object-cover rounded-xl h-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="second-section mt-2 md:mt-0 md:ml-2 w-[100%]">
            <Image src={img4} width={100} className="w-[105%] " />
          </div>
        </div>
      </section>
    </>
  );
};

export default TripPlannerSection;
