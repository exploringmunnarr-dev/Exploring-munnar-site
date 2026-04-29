import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Loam's View Point – Scenic Stop on Valparai Ghat Road",
  description: "Enjoy breathtaking valley views at Loam's View Point, the gateway to Valparai Ghat Road. A must-stop on the Coimbatore to Munnar travel route.",
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
                Loam's View Point
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Loam's View Point, located at the starting point of the Valparai Ghat Road, is one of the most breathtaking stops on the Coimbatore to Munnar route.
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
                src={cbeToMunnar}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={cbeToMunnar}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={cbeToMunnar}
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
              Loam's View Point, located at the starting point of the Valparai Ghat Road, is one of the most breathtaking stops on the Coimbatore to Munnar route. Famous for its stunning valley views, steep hairpin bends, and lush green hills, this viewpoint attracts road-trip lovers, bikers, and nature enthusiasts searching for best viewpoints near Pollachi, Valparai ghat viewpoints, and Coimbatore to Munnar scenic stops.
              <br /> <br />
              From the viewpoint, you can witness the dramatic landscapes of the Anamalai Tiger Reserve, misty mountains, and deep forest valleys. The beauty of the famous 40 Hairpin Bends can also be enjoyed from here, making it a favorite spot for photographers and adventure travelers.
              <br /> <br />
              The fresh mountain breeze, calm surroundings, and panoramic visuals make Loam's View Point a refreshing stop before climbing towards Valparai or continuing the scenic drive toward Munnar. Early mornings are the best, offering clear views and golden sunrise light across the hills.
              <br /> <br />
              For travelers searching for top places to visit near Coimbatore, Valparai road viewpoints, and must-see spots before Munnar, Loam's View Point is always a top recommendation.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default page;