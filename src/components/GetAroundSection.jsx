// src/components/sections/GetAroundSection.jsx
import Image from "next/image";
import car1 from "../assets/car1.svg";
import car2 from "../assets/car2.svg";
import car3 from "../assets/car3.svg";
import car4 from "../assets/car4.svg";
import carIcon1 from "../assets/carIcon1.svg";
import carIcon2 from "../assets/carIcon2New.svg";
import carIcon3 from "../assets/bikeIconNew.svg";
import carIcon4 from "../assets/carIcon4.svg";
import { useRouter } from "next/navigation";
import { useData } from "@/context/ThemeContext";
import { useState } from "react";
import LoadingPage from "@/Pages/LoadingPage";

const transports = [
  {
    title: "Cab Booking",
    description:
      "Comfortable cab rides with experienced local drivers — perfect for sightseeing, transfers, and day trips around Munnar.",
    image: car1, // place this image in public/cab.jpg
    icon: carIcon1,
    state: "cab",
  },
  {
    title: "Self-Drive Car",
    description:
      "Comfortable cab rides with experienced local drivers — perfect for sightseeing, transfers, and day trips around Munnar.",
    image: car2, // place in public/
    icon: carIcon2,
    state: "self",
  },
  {
    title: "Bike Rental",
    description:
      "Comfortable cab rides with experienced local drivers — perfect for sightseeing, transfers, and day trips around Munnar.",
    image: car3,
    icon: carIcon3,
    state: "bike",
  },
  {
    title: "Bus timings",
    description:
      "Comfortable cab rides with experienced local drivers — perfect for sightseeing, transfers, and day trips around Munnar.",
    image: car4,
    icon: carIcon4,
    state: "cab",
  },
];

export default function GetAroundSection() {
  // context
  const { activeTab, setActiveTab } = useData();

  // states
  const [isLoading, setIsLoadingPage] = useState(false);

  // navigation hooks
  const router = useRouter();

  // functions
  const handleNavigation = (state) => {
    try {
      setIsLoadingPage(true);
      setActiveTab(state);
      router.push("/transports");
      setIsLoadingPage(false);
    } catch (err) {
      console.error(
        "error occured while navigating to transports page : ",
        err
      );
      setIsLoadingPage(false);
    }
  };
  return (
    <>
      <section className="py-4 mx-4 md:mx-10 mt-8 md:mt-14">
        {/* Heading */}
        <div className="md:flex gap-4 justify-between">
          <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
            Get Around Munnar with Ease
          </h2>
          <h2 className="font-medium max-sm:text-[14px] text-[#333333] underline hover:text-green-700 ">
            Explore all transports
          </h2>
        </div>
        <div className="flex items-center justify-between mb-8 max-sm:text-[14px]">
          <p className="text-[#999999] mt-2">
            From scenic bike rides to comfortable cab journeys — choose your
            transport mode and explore Munnar your way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {transports.map((item, index) => (
            <div key={index} className="bg-[#EEEEEE] rounded-xl p-4">
              {/* Image */}
              <div className="h-40 w-[100%] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-[100%] h-[100%] rounded-xl "
                />
                <div className="absolute bottom-[-20px] left-[50%]  translate-x-[-50%] bg-[#144925] rounded-full p-3 ">
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt="car_icon"
                    className="w-[40px] h-[40px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className=" flex flex-col flex-grow mt-2">
                {/* Icon Badge */}

                <h3 className="text-lg font-semibold text-center mt-3">
                  {item.title}
                </h3>
                <p className="text-[#7e7e7e] max-sm:text-sm text-center mt-2 flex-grow">
                  {item.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => handleNavigation(item.state)}
                  className="
                    mt-4 
                    bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                    hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] 
                    text-white py-2 rounded-lg cursor-pointer transition-all duration-800
                  "
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isLoading && <LoadingPage />}
    </>
  );
}
