import Navbar from "@/components/Navbar";
import Image from "next/image";
import chinnaKanalImg1 from "../../assets/chinnaKanalImg1.jpg";
import chinnaKanalImg2 from "../../assets/chinnaKanalImg2.jpg";

import anayirangal1 from "../../assets/anayirangal1.jpg";
import anayirangal2 from "../../assets/anayirangal2.jpg";
import anayirangal3 from "../../assets/anayirangal3.jpg";

import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";


const page = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="main-container mx-4 md:mx-10 mt-4">
          <div className="header md:flex justify-between bg-white">
            <div className="mb-4 md:mb-0 ">
              <h1 className="text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl">
                Anayirangal Dam
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Anayirangal Dam is one of the most captivating attractions along
                the Mettupatti to Munnar route, known for its calm reservoir,
                mist-covered mountains, and lush tea estates surrounding the
                entire landscape. Travelers searching for Munnar tourist places,
                top viewpoints in Munnar, <and></and>
              </h1>
            </div>
            <Link
              href={`/itneary_planning`}
              className="btn-green text-white cursor-pointer px-3 py-2 w-[300px] h-[40px] rounded-lg"
            >
              Plan your trip now
            </Link>
          </div>

          {/* hero section  */}
          <div className="hero-section mt-4 md:flex gap-4 md:h-[450px]">
            {/* first image  */}
            <div className="first-container w-[100%] md:w-[60%]">
              <Image
                src={anayirangal1}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>

            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              {/* second image  */}
              <Image
                src={anayirangal2}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              {/* third image  */}
              <Image
                src={anayirangal3}
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
              Travelers searching for Munnar tourist places, top viewpoints in
              Munnar, and best places to visit near Munnar often place
              Anayirangal Dam at the top of their itinerary because of its
              serene atmosphere and picture-perfect scenery.
              <br /> <br />
              Located close to Chinnakanal, Anayirangal Dam offers a
              breathtaking panoramic view of the Western Ghats. The still,
              mirror-like water reflecting the dense forest ranges makes this
              destination a paradise for photographers and nature lovers. The
              name “Anayirangal” means “where elephants come to rest,” and even
              today, the region is known for occasional wildlife sightings,
              especially around the forest edges.
              <br />
              The dam is surrounded by tea plantations and cardamom estates,
              making the drive from Mettupatti to Munnar incredibly scenic. Many
              visitors stop here to enjoy peaceful walks, quiet moments by the
              lakeside, or simply to take in the crisp mountain air. For those
              searching for best viewpoints in Munnar or family-friendly places
              in Munnar, Anayirangal Dam is an ideal choice.
              <br /> <br />
              Boating activities are available during certain seasons, offering
              tourists a calm and enjoyable ride across the reservoir. Early
              mornings provide the best view as the mist slowly clears over the
              water, revealing the vast beauty of the lake.
              <br />
              Anayirangal Dam is not just a sightseeing point – it’s a place
              where you can relax, unwind, and connect with nature in its purest
              form.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
