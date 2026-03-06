import Navbar from "@/components/Navbar";
import Image from "next/image";
import ernakulamToMunnar from "../../assets/Ernakulam to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Valara Waterfalls Munnar – Twin Waterfalls on Kochi–Munnar Highway",
  description: "Visit Valara Waterfalls near Cheeyappara on the Kochi–Munnar Highway. A beautiful twin waterfall perfect for photos, quick stops, and nature lovers. Best time to visit is during monsoon.",
};

const page = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="main-container mx-4 md:mx-10 mt-4">
          <div className="header md:flex justify-between bg-white">
            <div className="mb-4 md:mb-0 ">
              <h1 className="text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl">
                Valara Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Valara Waterfalls is a spectacular waterfall on the Ernakulam to Munnar route, located amidst misty hills and lush tea plantations.
              </h1>
            </div>
            <Link
              href={`/itneary_planning`}
              className="btn-green text-white cursor-pointer px-3 py-2 w-[200px] h-[40px] rounded-lg"
            >
              Plan your trip now
            </Link>
          </div>

          {/* hero section  */}
          <div className="hero-section mt-4 md:flex gap-4 md:h-[450px]">
            <div className="first-container w-[100%] md:w-[60%]">
              <Image
                src={ernakulamToMunnar}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={ernakulamToMunnar}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={ernakulamToMunnar}
                width={100}
                height={100}
                className="w-[100%] h-[48%] object-cover rounded-xl"
              />
            </div>
          </div>
          {/* overview container  */}
          <div className="header mt-4">
            <h1 className="text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl">
              Overview
            </h1>
            <h1 className="max-sm:text-sm text-[15px] text-justify mt-2">
              Valara Waterfalls is a spectacular waterfall on the Ernakulam to Munnar route, located amidst misty hills and lush tea plantations. This waterfall drops from a considerable height, creating a beautiful curtain of water that enchants visitors during both monsoon and post-monsoon months. The surroundings are rich with tea plantations, dense forests, and mist-covered valleys, offering incredible photo opportunities.
              <br /> <br />
              Short treks around the area allow visitors to explore the forested region, making it a popular spot for families, couples, and adventure enthusiasts. Early morning visits provide the best views with sunlight glistening on the water.
              <br /> <br />
              For travelers driving from Ernakulam to Munnar, Valara Waterfalls is a refreshing pit stop to stretch, enjoy the scenic beauty, and experience the Western Ghats' natural charm. The waterfall is easily accessible from the highway and is ideal for quick breaks, tea stops, and photography sessions.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;