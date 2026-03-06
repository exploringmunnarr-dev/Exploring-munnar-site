import Navbar from "@/components/Navbar";
import Image from "next/image";
import tataTeaMuseum from "../../assets/tataTeaMuseum.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "TATA Tea Museum Munnar – Nallathanni Estate Tourist Attraction",
  description: "Visit the TATA Tea Museum at Nallathanni Estate, Munnar. Explore tea history, processing, exhibits & heritage. A must-visit stop on the Mettupatti to Munnar route.",
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
                TATA Tea Museum (Nallathanni Estate)
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                The TATA Tea Museum, located in the historic Nallathanni Estate, is one of the most iconic tourist attractions you must explore on your journey from Mettupatti to Munnar.
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
                src={tataTeaMuseum}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={tataTeaMuseum}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={tataTeaMuseum}
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
              The TATA Tea Museum, located in the historic Nallathanni Estate, is one of the most iconic tourist attractions you must explore on your journey from Mettupatti to Munnar. For travelers searching for best places to visit in Munnar, Munnar Tea Museum, or heritage museums in Kerala, this destination stands out as a top choice.
              <br /> <br />
              This museum beautifully showcases the evolution of tea production in Munnar, dating back to the early days of the British plantations. Visitors can witness antique tea-processing equipment, old photographs, and machinery that highlight the rich history of the tea industry. The live demonstration of tea processing, from withering to drying, is one of the museum's biggest attractions and offers a unique learning experience for all age groups.
              <br /> <br />
              One of the most popular highlights here is the tea-tasting session, where visitors can sample different varieties of freshly brewed Kerala tea. Travelers who love photography, culture, and history find the Tea Museum a rewarding stop, making it one of the most visited tourist places in Munnar.
              <br /> <br />
              Located close to the Munnar town center, the TATA Tea Museum – Nallathanni is easily accessible, making it a convenient stop for families, students, and tourists seeking an educational and enjoyable experience. The museum's lush green surroundings and estate views add to the charm of your visit.
              <br /> <br />
              If you're searching for top attractions in Munnar, tea plantations in Munnar, or things to do in Munnar, this museum offers a perfect blend of history, culture, and nature.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;