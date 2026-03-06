import Navbar from "@/components/Navbar";
import Image from "next/image";
import chitrapuram from "../../assets/chitrapuram.webp";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Chithirapuram Viewpoint – Scenic Stop Near Munnar Entry",
  description: "Visit Chithirapuram Viewpoint on the Mettupatti–Munnar route. Enjoy misty hills, tea estates & serene valley views. A perfect photo spot near Munnar entry.",
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
                Chithirapuram Viewpoint
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Chithirapuram Viewpoint is one of the most refreshing and scenic places you will find just before entering Munnar town.
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
                src={chitrapuram}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={chitrapuram}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={chitrapuram}
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
              Chithirapuram Viewpoint is one of the most refreshing and scenic places you will find just before entering Munnar town. Located on the Mettupatti to Munnar route, this viewpoint is surrounded by sweeping tea estates, rolling green hills, and mist-covered valleys—making it a must-visit stop for travellers, photographers, and nature lovers.
              <br /> <br />
              As you approach Munnar, Chithirapuram Viewpoint welcomes you with its peaceful ambience and crystal-clear mountain air. This spot is especially famous for its panoramic valley views, lush tea plantations, and the gentle mist that settles during early mornings and late evenings. Many travellers consider this viewpoint a hidden gem because it offers the same breathtaking scenery as top Munnar attractions but without crowds.
              <br /> <br />
              The surrounding tea gardens add to the charm, giving visitors a chance to enjoy the true essence of Munnar even before reaching the main town. Chithirapuram Viewpoint is also close to several popular attractions like Dreamland Adventure Park, Attukad Waterfalls, and various tea factory experiences. Whether you're on a family trip, couple vacation, or solo ride, this stop makes your Mettupatti → Munnar journey even more memorable.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;