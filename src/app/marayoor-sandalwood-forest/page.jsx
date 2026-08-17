import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Marayoor Sandalwood Forest – Unique Attraction Near Munnar",
  description: "Visit Marayoor Sandalwood Forest, famous for natural sandalwood trees, caves, and scenic landscapes on the Coimbatore to Munnar route.",
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
                Marayoor Sandalwood Forest
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Marayoor Sandalwood Forest is one of the most unique and culturally rich attractions on the Coimbatore to Munnar route.
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
              Marayoor Sandalwood Forest is one of the most unique and culturally rich attractions on the Coimbatore to Munnar route. It is the only place in Kerala where natural sandalwood trees grow in abundance, making it a must-visit destination for tourists searching for Marayoor sandalwood forest, unique places near Munnar, and heritage attractions in Kerala.
              <br /> <br />
              The forest is protected by the Forest Department, and visitors can enjoy guided tours that explain sandalwood conservation, extraction methods, and processing. The sweet fragrance of sandalwood fills the air, creating a relaxing and refreshing environment. Marayoor is also famous for its prehistoric dolmens (Muniyaras), centuries-old rock structures, and ancient cave paintings. These archaeological sites make Marayoor a special destination for history lovers and photographers.
              <br /> <br />
              The drive through the Marayoor Sandalwood Forest is incredibly scenic — with tall trees, open grasslands, mountains, and cool breezes welcoming visitors along the entire route. For travelers heading to Munnar, this forest creates a magical transition from the dry Chinnar landscape to the mist-covered hills of Munnar.
              <br /> <br />
              If you're searching for offbeat places near Munnar, natural sandalwood forests in India, or Coimbatore to Munnar road attractions, Marayoor should definitely be on your list.
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