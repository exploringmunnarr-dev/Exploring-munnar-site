import Navbar from "@/components/Navbar";
import Image from "next/image";
import lockhartgapviewpoint from "../../assets/lockhart-gap-view-point.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Lockhart Gap Viewpoint – Must-Visit Scenic Spot Near Munnar",
  description: "Explore Lockhart Gap Viewpoint on the Mettupatti to Munnar route. Famous for misty mountains, trekking trails, sunset views, and breathtaking landscapes.",
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
                Lockhart Gap Viewpoint
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Lockhart Gap Viewpoint is one of the most stunning places to visit on the Mettupatti to Munnar route, known for its sweeping valley views, dramatic cloud formations, and refreshing mountain breeze.
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
                src={lockhartgapviewpoint}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={lockhartgapviewpoint}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={lockhartgapviewpoint}
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
              Lockhart Gap Viewpoint is one of the most stunning places to visit on the Mettupatti to Munnar route, known for its sweeping valley views, dramatic cloud formations, and refreshing mountain breeze. This viewpoint gets its name from a gap resembling a lock in the surrounding hills, making it a unique geological formation and a favorite stop among travelers searching for best viewpoints in Munnar and top Munnar tourist places.
              <br /> <br />
              Perched at a high altitude, Lockhart Gap offers a spectacular panorama of the Western Ghats. On most days, the hills are wrapped in thick mist, creating a dreamy landscape perfect for photography. Travelers who love adventure often choose this spot for trekking in Munnar, sunrise views, and peaceful nature walks. It's also a popular location for couples, thanks to its romantic atmosphere and quiet surroundings.
              <br /> <br />
              The drive from Mettupatti to Munnar becomes even more scenic as you approach Lockhart Gap, with rolling tea plantations, cool winds, and viewpoints at every turn. For tourists searching for places to visit near Munnar, sunset points in Munnar, and hill viewpoints, Lockhart Gap consistently ranks among the top recommendations.
              <br /> <br />
              Early mornings offer crystal-clear views of the valley, while evenings are perfect for watching the sun slowly dip behind the mountains. Whether you're a photographer, nature lover, or someone who simply wants to enjoy a peaceful escape, Lockhart Gap Viewpoint is a must-visit destination.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;