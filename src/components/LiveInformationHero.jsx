import React from "react";
import { Sun } from "lucide-react";
import sunIcon from "../assets/sunIcon.svg";
import Image from "next/image";
import lo from "../assets/lo.svg";
import sun1 from "../assets/sun1.svg";
const LiveInformationHero = () => {
  return (
    <>
      <section className="">
        <header>
          <h1 className="text-[#333333] text-lg sm:text-xl font-semibold md:text-3xl">
            Current weather of munnar
          </h1>
        </header>
        <div className="main-container mt-4">
          <main className=" bg-[#EEEEEE] rounded-xl flex items-center justify-center p-6">
            <div className="md:grid md:grid-cols-12 gap-6 w-full max-sm:space-y-4">
              {/* Left Card - Current Weather */}
              <div className="bg-white rounded-2xl col-span-12  lg:col-span-5 shadow px-6 flex justify-between py-4  gap-14">
                <div className="first-container ">
                  <button className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] flex items-center gap-2 text-white px-4 text-sm py-2 rounded-full">
                    <span>
                      {" "}
                      <Image src={lo} className=""/>{" "}
                    </span>{" "}
                    Munnar
                  </button>
                  <div className="content-container mt-4 ">
                    <h1 className="text-[#333333] text-md sm:text-xl font-semibold md:text-4xl">
                      Monday
                    </h1>
                    <h1 className="text-[#333333] text-sm sm:text-md">24 Dec, 2025</h1>
                    <div className="content-2-container mt-4 sm:mt-16">
                      <h1 className="font-semibold text-xl sm:text-5xl text-[#333333]">
                        26° C
                      </h1>
                      <h1 className="text-[#333333] text-sm ">
                        High: 27 Low: 10
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="second-container flex flex-col justify-center items-center">
                  <Image
                    src={sunIcon}
                    className="w-[70px] h-[70px] sm:w-[180px] sm:h-[140px] object-cover "
                  />
                  <h1 className="text-2xl sm:text-3xl text-[#333333] mt-2">Cloudy</h1>
                  <h1 className="text-sm text-[#333333] ">Feels Like 26</h1>
                </div>
              </div>

              {/* Middle Card - Hourly Forecast */}
              <div className="bg-white col-span-12 lg:col-span-5 rounded-2xl shadow p-6">
                <h3 className="font-semibold text-[#333333] text-3xl mb-4">
                  Today
                </h3>
                <div className="grid grid-cols-6 gap-2 ">
                  {["1PM", "2PM", "3PM", "4PM", "5PM", "6PM"].map((hour, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 border border-gray-100 items-center p-2 bg-white shadow-xl rounded-lg"
                    >
                      <p className="text-sm text-[#333333]">{hour}</p>
                      <Image src={sun1} className="w-6 h-6" />
                      <p className="text-sm text-[#333333]">32°</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)]   text-white rounded-xl mt-6 px-4 py-2 flex gap-3 items-center">
                  <div className="container-1 flex gap-5">
                    <div>
                      <p className="text-sm ">Tomorrow </p>
                      <p className="text-sm">Thunder storm</p>
                    </div>
                    <span className="text-2xl font-">14°</span>
                  </div>
                </div>
              </div>

              {/* Right Card - Sunrise / Sunset */}
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between col-span-12 lg:col-span-2">
                <div>
                  <p className=" text-lg">Sunrise</p>
                  <p className="text-2xl font-bold text-[#246132] mt-3">
                    6:45 <span className="text-sm text-black">AM</span>
                  </p>
                </div>
                <div>
                  <p className=" text-lg">Sunset</p>
                  <p className="text-2xl font-bold text-[#246132]  mt-3">
                    5:30 <span className="text-sm text-black">PM</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#333333]">Length of day</p>
                  <p className="text-xl font-semibold mt-3 text-[#246132]">
                    10h 23m
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default LiveInformationHero;
