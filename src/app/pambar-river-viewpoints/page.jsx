import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Pambar River Viewpoints – Scenic Nature Stop Near Marayoor",
  description: "Explore Pambar River Viewpoints on the Coimbatore–Munnar route. Ideal for nature lovers, photography, and peaceful riverside relaxation.",
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
                Pambar River Viewpoints
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Pambar River Viewpoints are peaceful and scenic stops located between Marayoor and Munnar, making them excellent breakpoints for travelers coming from Coimbatore and Pollachi.
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
              Pambar River Viewpoints are peaceful and scenic stops located between Marayoor and Munnar, making them excellent breakpoints for travelers coming from Coimbatore and Pollachi. The river flows beautifully through rocky pathways, small rapids, calm pools, and lush greenery, offering a perfect nature escape for anyone searching for hidden gems near Munnar, riverside viewpoints in Marayoor, or top scenic stops on the Coimbatore–Munnar route.
              <br /> <br />
              The viewpoints along the Pambar River allow travelers to enjoy crystal-clear water, refreshing breezes, and stunning natural landscapes. This area is less crowded compared to other popular attractions, making it an ideal place for peaceful photography, riverside walking, or simply relaxing in nature.
              <br /> <br />
              Some spots along the Pambar River allow visitors to sit near the rocks, dip their feet in the cool water, and experience the untouched beauty of Marayoor's forest region. The river also connects various attractions like Lakkam Waterfalls, Thoovanam Waterfalls (trekking), and Eravikulam National Park, making it a central highlight of the region.
              <br /> <br />
              If you're driving from Coimbatore to Munnar, these viewpoints offer a refreshing break before entering the misty hills of Munnar. For nature lovers and offbeat explorers, Pambar River is one of the most scenic and peaceful attractions along the route.
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