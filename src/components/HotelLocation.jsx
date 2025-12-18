import Image from "next/image";
import React from "react";
import locationImg from "../assets/loc1.svg";
const HotelLocation = ({ data }) => {
  return (
    <>
      <section className="mt-4 md:mt-10">
        <header>
          <h1 className="text-xl font-semibold md:text-3xl text-[#333333]">
            Location
          </h1>
          <div className="img-container mt-4">
            {/* <Image src={locationImg} /> */}
            <iframe
              src={data?.location_url}
              frameborder="0"
              className="w-[100%] h-[180px] md:h-[360px] rounded-md md:rounded-xl"
            ></iframe>
          </div>
        </header>
      </section>
    </>
  );
};

export default HotelLocation;
