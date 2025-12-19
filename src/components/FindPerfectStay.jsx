import React from "react";
import perfectStayBg from "../assets/perfectStayBg.svg";
import Image from "next/image";
import Link from "next/link";
const FindPerfectStay = () => {
  return (
    <>
      <section className="mt-8 md:mt-14 h-[200px] md:h-[340px]">
        <div className="img-container relative h-[100%]">
          <Image
            src={perfectStayBg}
            alt="bg-img"
            className="h-[100%] object-cover rounded-2xl"
          />
          <div className="tint absolute top-0 right-0 left-0 bottom-0 rounded-2xl"></div>
          <div className="content-container md:w-[40%] absolute top-[45%] translate-y-[-50%] left-[7%] text-white">
            <h1 className="text-xl md:text-4xl">
              Ready to find your perfect stay in Munnar?
            </h1>
            <div className="btn-container mt-3">
              <Link
                href={`/hotels/hotel_listing`}
                className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white rounded-lg px-4 py-2  cursor-pointer"
              >
                Browse Hotels Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindPerfectStay;
