import Image from "next/image";
import React from "react";
import img1 from "../assets/activityImg1.svg";
import img2 from "../assets/activityImg2.svg";
import img3 from "../assets/activityImg3.svg";
import img4 from "../assets/act1.svg";
import Link from "next/link";

const ActivitiesSection = () => {
  return (
    <>
      <section className="main-container mx-4 md:mx-10 mt-8 md:mt-14">
        <header className="header md:flex justify-between">
          <div className="container-1">
            <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Experience Munnar, One Activity at a Time
            </h1>
            <h1 className="text-lg mt-2 max-sm:text-[14px] text-[#999999]">
              Adventure, wellness, nature, or culture — discover things to do in
              Munnar all year round.
            </h1>
          </div>
          <button>
            <h1 className="font-semibold text-[#333333] underline hover:text-green-600">
              View all
            </h1>
          </button>
        </header>
        {/* Image container  */}
        <div className="image-container mt-4 md:flex gap-4 h-[540px] ">
          <div className="first-container w-[100%] md:w-[60%] h-[50%] ">
            <div className="img-container overflow-hidden rounded-xl">
              <Image
                src={img1}
                className="h-[100%] w-[100%] object-cover rounded-xl hover:scale-125 transition-all duration-300"
              />
            </div>
            <div className="first-container-second-img mt-2 md:flex gap-3 h-[100%]">
              <div className="img-container w-[100%] h-[100%] overflow-hidden rounded-2xl">
                <Image
                  src={img2}
                  className="h-[100%] w-[100%] md:w-[100%] object-cover rounded-2xl hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="img-container  w-[100%]  h-[100%] overflow-hidden rounded-2xl">
                <Image
                  src={img3}
                  className="h-[100%] w-[100%] md:w-[100%] object-cover rounded-2xl hidden md:block  hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="second-container hidden md:block w-[40%] ">
            <div className="img-container relative overflow-hidden rounded-xl">
              <Image
                src={img4}
                className="h-[90%] object-cover w-[100%] rounded-xl hover:scale-125 transition-all duration-300"
              />
              <div className="content-container text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-4xl text-white font-bold">
                  Trekking and Guided Nature Trails
                </h1>
                <div className="btn-container mt-4">
                  <Link
                    href={`/activities`}
                    className="px-6 py-2 bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)]  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer text-white font-medium rounded-md hover:bg-green-900 transition"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivitiesSection;
