import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Chinnar Wildlife Sanctuary – Must-Visit Spot Near Munnar",
  description: "Explore Chinnar Wildlife Sanctuary on the Coimbatore–Munnar route. Famous for wildlife, trekking, birds, and forest landscapes.",
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
                Chinnar Wildlife Sanctuary
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Chinnar Wildlife Sanctuary is one of the most unique and wildlife-rich attractions on the Coimbatore to Munnar route.
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
              Chinnar Wildlife Sanctuary is one of the most unique and wildlife-rich attractions on the Coimbatore to Munnar route. Located along the Tamil Nadu–Kerala border, it is known for its dry forest landscape, rare species, and trekking trails. Travelers searching for wildlife sanctuaries near Munnar, Chinnar trekking, and top nature attractions in Kerala always include this spot in their itinerary.
              <br /> <br />
              The sanctuary is home to elephants, deer, giant squirrels, spotted leopards, gaurs, and the rare Grizzled Giant Squirrel, which is found only in select forest regions of India. Birdwatching is another major attraction, with more than 200 species recorded here. Visitors can enjoy guided forest trekking, river walks along the Chinnar River, eco-tourism activities, and cultural visits to tribal settlements in the area. The dry deciduous forest and wide-open valley views make this sanctuary completely different from the lush green forests you see inside Munnar.
              <br /> <br />
              For those traveling from Coimbatore to Munnar, Chinnar Wildlife Sanctuary serves as an unforgettable nature stop that adds adventure and wildlife experiences to the journey.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;