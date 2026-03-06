import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Lakkam Waterfalls – Scenic Stop on Coimbatore–Munnar Route",
  description: "Visit Lakkam Waterfalls near Munnar on the Coimbatore route. Perfect for nature lovers, photography, trekking & refreshing waterfall views.",
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
                Lakkam Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Lakkam Waterfalls, located on the way from Coimbatore to Munnar via Marayoor, is one of the most beautiful and refreshing waterfalls in the region.
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
              Lakkam Waterfalls, located on the way from Coimbatore to Munnar via Marayoor, is one of the most beautiful and refreshing waterfalls in the region. Surrounded by dense forests, rocky terrains, and crystal-clear water streams, this waterfall is a must-visit for travelers searching for best waterfalls near Munnar, places to visit via Marayoor, and top nature attractions on the Coimbatore–Munnar route.
              <br /> <br />
              The waterfall flows from the Eravikulam National Park region, making the water extremely pure and cool. Visitors can enjoy the stunning view from the entry point or walk further down to reach the base area, which offers a closer and more thrilling experience. The natural pool below the waterfall is a popular spot for photography and relaxation, especially during monsoon and winter seasons.
              <br /> <br />
              The area around Lakkam is rich with wildlife, bamboo forests, sandalwood trees, and unique flora. A short trekking trail is also available, making it a great adventure for those who enjoy nature walks.
              <br /> <br />
              Travelers coming from Coimbatore, Pollachi, Udumalpet, and Marayoor often stop here to enjoy a refreshing break before entering Munnar's cooler climate. If you're looking for scenic waterfalls near Munnar, nature attractions in Marayoor, or must-visit spots on the Coimbatore–Munnar drive, Lakkam Waterfalls is an ideal choice.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;