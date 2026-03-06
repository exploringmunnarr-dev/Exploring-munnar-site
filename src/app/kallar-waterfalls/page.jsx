import Navbar from "@/components/Navbar";
import Image from "next/image";
import ernakulamToMunnar from "../../assets/Ernakulam to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Kallar Waterfalls – Refreshing Stop on Ernakulam to Munnar Route",
  description: "Discover Kallar Waterfalls near Munnar. Ideal for trekking, family visits, photography, and enjoying Kerala's lush landscapes.",
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
                Kallar Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Kallar Waterfalls, situated along the Ernakulam → Munnar route, is a mesmerizing cascade amidst dense forested hills.
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
              Kallar Waterfalls, situated along the Ernakulam → Munnar route, is a mesmerizing cascade amidst dense forested hills. This waterfall attracts travelers searching for top waterfalls near Munnar, trekking spots in Kerala, and nature-based attractions in Idukki.
              <br /> <br />
              The waterfall flows into crystal-clear pools, ideal for a refreshing break during the drive. The surrounding region features dense forests, tea plantations, and peaceful rivers, offering a perfect mix of adventure and relaxation. Many tourists take short treks to explore the nearby forested areas, making it a favorite for families, couples, and photographers.
              <br /> <br />
              A hidden gem on this route, Kallar Waterfalls is nestled amidst lush forests and hills. Travelers can enjoy the cascading water, crystal-clear pools, and the surrounding greenery. It's ideal for a refreshing break during your journey and short treks into the nearby forest areas. Families and solo travelers alike appreciate the peaceful ambiance and photographic opportunities.
              <br /> <br />
              Kallar Waterfalls is easily accessible from the highway, making it a convenient stop to enjoy tea, snacks, and nature photography. The best time to visit is during or just after monsoon, when the waterfall is at its fullest and the greenery is most vibrant.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;