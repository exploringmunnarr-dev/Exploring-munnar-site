import Navbar from "@/components/Navbar";
import Image from "next/image";
import ernakulamToMunnar from "../../assets/Ernakulam to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Neriamangalam Bridge Viewpoint – Gateway to Munnar",
  description: "Stop at Neriamangalam Bridge Viewpoint on the Ernakulam → Munnar route. Enjoy scenic river views, misty hills, and photography opportunities.",
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
                Neriamangalam Bridge Viewpoint
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Neriamangalam Bridge Viewpoint is famously called the "Gateway to Munnar," situated on the Periyar River along the Ernakulam → Munnar route.
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
              Neriamangalam Bridge Viewpoint is famously called the "Gateway to Munnar," situated on the Periyar River along the Ernakulam → Munnar route. This viewpoint is renowned for its sweeping river views, misty hills, and serene atmosphere. Travelers searching for best viewpoints near Munnar, scenic stops on the Ernakulam–Munnar drive, and top photo spots in Kerala often visit this landmark.
              <br /> <br />
              The bridge, flanked by lush forests and river valleys, provides travelers with a peaceful spot to pause, take pictures, or simply enjoy the flowing Periyar River below. Early mornings are especially magical, with clouds drifting over the hills and soft sunlight reflecting off the water.
              <br /> <br />
              This viewpoint also marks the beginning of the climb into the hills, giving travelers their first glimpse of Munnar's mist-covered mountains. Families, road-trippers, and photographers love this stop for its accessibility and natural beauty.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;