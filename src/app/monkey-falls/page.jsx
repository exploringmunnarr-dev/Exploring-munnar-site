import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Monkey Falls – Refreshing Waterfall on the Coimbatore–Munnar Route",
  description: "Visit Monkey Falls near Pollachi, a natural waterfall perfect for bathing, photography & road-trip breaks on the Coimbatore to Munnar route.",
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
                Monkey Falls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Monkey Falls, located along the scenic Coimbatore to Munnar route, is one of the most refreshing and naturally beautiful waterfalls in the region.
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
              Monkey Falls, located along the scenic Coimbatore to Munnar route, is one of the most refreshing and naturally beautiful waterfalls in the region. Surrounded by thick green forests and the misty Anamalai Hills, the waterfall flows continuously throughout most of the year, creating a soothing and peaceful atmosphere. The cascading water forms natural pools where visitors can enjoy a refreshing bath, making Monkey Falls especially popular among families, bikers, and youngsters on weekend trips.
              <br /> <br />
              One of the main highlights of Monkey Falls is its accessibility—it's located right next to the Pollachi–Valparai highway, making it a convenient and must-visit stop for travelers heading toward Munnar. The cool mountain breeze, lush greenery, and the sound of rushing water offer a perfect nature escape. For tourists searching for natural waterfalls in Tamil Nadu, road trip spots near Coimbatore, or Coimbatore to Munnar travel attractions, Monkey Falls is always a top recommendation.
              <br /> <br />
              The best time to visit is during the cooler months or after light rains when the water flow is strong and the surroundings are vibrant. Safety measures are in place, and forest permissions are usually required, which can be obtained at the check-post near the falls.
              <br /> <br />
              Monkey Falls is not just a waterfall—it's a refreshing break that energizes your entire journey toward Munnar.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;