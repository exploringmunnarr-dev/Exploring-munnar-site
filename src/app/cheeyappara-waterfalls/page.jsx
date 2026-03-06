import Navbar from "@/components/Navbar";
import Image from "next/image";
import ernakulamToMunnar from "../../assets/Ernakulam to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cheeyappara Waterfalls – Top Scenic Stop on Ernakulam–Munnar Route",
  description: "Explore Cheeyappara Waterfalls, a stunning multi-layered cascade on the Ernakulam to Munnar route. Perfect for photography, nature lovers, and road-trip travelers.",
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
                Cheeyappara Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Cheeyappara Waterfalls is one of the most iconic and scenic attractions on the Ernakulam to Munnar route, making it a must-visit stop for all travelers heading toward the hills.
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
              Cheeyappara Waterfalls is one of the most iconic and scenic attractions on the Ernakulam to Munnar route, making it a must-visit stop for all travelers heading toward the hills. Surrounded by dense forests and misty valleys, this multi-tiered waterfall offers a spectacular view as water cascades down in seven beautiful steps. Tourists searching for best waterfalls near Munnar, road trip attractions on Kochi to Munnar route, or top nature spots in Kerala often make Cheeyappara their first major stop.
              <br /> <br />
              Located along the Kochi–Dhanushkodi Highway (NH 85), the waterfall is easily accessible and visible from the main road, making it a perfect place for photography, short breaks, and refreshing nature moments. The cool breeze, misty spray, and the sound of falling water create a peaceful ambiance for travelers taking a break from the long drive.
              <br /> <br />
              Cheeyappara is also popular among adventure enthusiasts because the surrounding area offers trekking opportunities and scenic forest landscapes. During monsoon and post-monsoon months, the waterfall flows at its fullest, offering breathtaking views and lush greenery all around.
              <br /> <br />
              Families, couples, bikers, and road-trip travelers love stopping here to enjoy tea, snacks, and natural beauty. Cheeyappara also marks the beginning of the true hill-climb experience toward Munnar, making it a symbolic starting point for the mountain journey.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;