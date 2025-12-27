import Navbar from "@/components/Navbar";
import Image from "next/image";
import chinnaKanalImg1 from "../../assets/chinnakanalImg1.jpg";
import chinnaKanalImg2 from "../../assets/chinnakanalImg2.jpg";
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
                Chinnakanal Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Chinnakanal Waterfalls, popularly known as Power House Falls, is
                one of the most breathtaking attractions you must visit on the
                Mettupatti to Munnar route.
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
                src={chinnaKanalImg1}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[100%] md:w-[40%] flex flex-col gap-4">
              <Image
                src={chinnaKanalImg2}
                width={100}
                height={100}
                className="w-[100%] h-full md:h-[48%] object-cover rounded-xl mt-4 md:mt-0"
              />
              <Image
                src={chinnaKanalImg2}
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
              Chinnakanal Waterfalls, popularly known as Power House Falls, is
              one of the most breathtaking attractions you must visit on the
              Mettupatti to Munnar route. Surrounded by lush green hills, misty
              valleys, and the soothing sound of falling water, this location is
              a perfect escape into nature. For many travelers searching for top
              Munnar tourist places, Chinnakanal consistently ranks as a
              must-see spot. Located just a few kilometers before Munnar, the
              waterfall originates from the Devikulam Hills, making it a natural
              wonder with crystal-clear mountain water. <br /> <br /> This
              scenic location is also a popular stop for travelers who want to
              experience the real beauty of the Western Ghats. Whether you’re on
              a road trip, a family vacation, or a couple’s getaway, Chinnakanal
              Waterfalls offers the ideal backdrop for memorable photos and
              peaceful moments. One of the reasons this spot gets high footfall
              is because tourists often search for best waterfalls in Munnar,
              places to visit near Munnar, and Power House Falls Munnar, all of
              which lead them here. The cool breeze, mist-filled air, and
              panoramic valley views attract both nature lovers and
              photographers. <br /> <br /> The area around the waterfall is also
              home to tea plantations, making the drive from Mettupatti to
              Munnar even more scenic. <br /> Early mornings and late afternoons
              are the best times to visit if you want to enjoy the waterfall at
              its most beautiful. For anyone planning a Munnar trip, adding
              Chinnakanal Waterfalls to your itinerary ensures you don’t miss
              one of the region’s most iconic attractions. It is easily
              accessible, safe for families, and the perfect natural stop before
              reaching the busy town of Munnar.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
