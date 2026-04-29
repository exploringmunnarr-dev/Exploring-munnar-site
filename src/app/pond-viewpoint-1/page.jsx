import Navbar from "@/components/Navbar";
import Image from "next/image";
import ernakulamToMunnar from "../../assets/Ernakulam to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Pond & Viewpoint 1 – Scenic Nature Stop on Ernakulam Route",
  description: "Explore Pond & Viewpoint 1 on the Ernakulam to Munnar route. Enjoy peaceful nature views, scenic landscapes, and refreshing stops.",
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
                Pond & Viewpoint 1
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Pond & Viewpoint 1 is one of the peaceful and scenic stops located along the Ernakulam to Munnar route.
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
              Pond & Viewpoint 1 is one of the peaceful and scenic stops located along the Ernakulam to Munnar route. These natural ponds and viewpoints offer travelers a chance to enjoy serene water bodies surrounded by lush greenery and misty hills. Perfect for nature lovers, photographers, and families looking for a peaceful break during their journey.
              <br /> <br />
              The calm waters reflect the surrounding hills and tea plantations, creating picture-perfect moments for visitors. These spots are ideal for short walks, photography sessions, and enjoying the fresh mountain air. The tranquil atmosphere makes it a perfect escape from the busy travel route.
              <br /> <br />
              For travelers searching for peaceful nature stops near Munnar, scenic viewpoints on the Ernakulam route, or refreshing breaks during their journey, Pond & Viewpoint 1 offers a serene and beautiful experience.
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