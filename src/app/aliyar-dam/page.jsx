import Navbar from "@/components/Navbar";
import Image from "next/image";
import cbeToMunnar from "../../assets/Coimbatore to Munnar.jpg";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import MobileTab from "@/components/MobileTab";

export const metadata = {
  title: "Aliyar Dam – Scenic Stop on the Coimbatore to Munnar Route",
  description: "Visit Aliyar Dam, a beautiful reservoir near Pollachi. A top stop on the Coimbatore to Munnar route for boating, views, gardens & peaceful nature.",
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
                Aliyar Dam
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Aliyar Dam is one of the most popular and scenic attractions on the Coimbatore to Munnar route, making it an essential stop for travelers heading toward the hills.
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
              Aliyar Dam is one of the most popular and scenic attractions on the Coimbatore to Munnar route, making it an essential stop for travelers heading toward the hills. Located near Pollachi, this dam is known for its peaceful reservoir, well-maintained park area, boating facilities, and stunning views of the Anamalai Hills. Tourists searching for places to visit near Pollachi, best attractions on the way to Munnar, or Coimbatore to Munnar tourist spots often have Aliyar Dam on their bucket list.
              <br /> <br />
              Built across the Aliyar River, the dam offers a calm and relaxing environment, perfect for families, couples, bikers, and road-trip travelers. The lush greenery around the reservoir, combined with the cool breeze and scenic sunset views, makes this spot ideal for photography and relaxation. The backdrop of the Western Ghats adds a dramatic charm to the entire landscape.
              <br /> <br />
              One of the major attractions here is the Aliyar Park, which includes children's play areas, garden paths, and shaded seating spots. Boating is another highlight, giving visitors a chance to enjoy the serene water while taking in the panoramic beauty of the dam. For nature lovers searching for quiet picnic spots near Coimbatore, Aliyar Dam is a perfect choice.
              <br /> <br />
              The dam is also the gateway to the famous Pollachi – Valparai hill route, making it a natural stopover for travelers driving from Coimbatore to Munnar. Early mornings and late evenings are the best times to visit, offering the most beautiful views and pleasant weather.
              <br /> <br />
              If you're looking for top attractions on the Coimbatore to Munnar drive, Aliyar Dam is a refreshing and must-visit location.
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