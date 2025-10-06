import React, { useState } from "react";
import down from "../assets/down.svg";
import Image from "next/image";
import HotelEnquiryForm from "./HotelEnquiryForm";
const HotelOverview = () => {
  const [isForm, setIsForm] = useState(false);
  return (
    <>
      <section className="mt-4 md:mt-10 md:flex items-end gap-2">
        <div className="container-1 w-[100%] md:w-[70%] border-b border-gray-200 pb-2">
          <h1 className="text-xl font-semibold md:text-3xl text-[#333333]">Overview</h1>
          <div className="content-container mt-3 max-sm:text-sm">
            <h1 className="text-[#777777]">
              Tucked away in the tranquil tea estates of Devikulam, Misty Hill
              Eco Retreat is a locally managed eco-stay perfect for couples,
              nature lovers, and offbeat explorers. Wake up to birdsong and
              mist, sip freshly brewed cardamom tea on your balcony, and enjoy
              an unplugged experience surrounded by green.
            </h1>
            <h1 className="text-[#777777] mt-2">
              Designed using sustainable materials, the cottage features bamboo
              walls, handwoven linens, and an open-sky shower. It offers the
              ideal balance of raw nature and modern comfort.{" "}
              <span className="text-[#AF4300]">Read more</span>
            </h1>
          </div>
        </div>
        <div className="container-1 mt-2 md:mt-0 md:w-[30%]">
          <div className="w-full rounded-xl p-4 bg-[#EEEEEE]">
            {/* Price and Rating */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">
                ₹3,200 <span className="text-gray-600 text-sm">/ night</span>
              </p>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span>4.99</span>
                <span className="text-gray-500">· 337 reviews</span>
              </div>
            </div>

            {/* Check-in / Checkout */}
            <div className="grid grid-cols-2 mt-4 border rounded-md divide-x border-[#777777]  bg-white">
              <div className="px-3 py-2">
                <p className="text-xs font-semibold">CHECK-IN</p>
                <p className="text-sm text-gray-500">2/6/2023</p>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs font-semibold">CHECKOUT</p>
                <p className="text-sm text-gray-500">2/11/2023</p>
              </div>
            </div>

            {/* Guests */}
            <div className="mt-2 border border-[#777777] rounded-md px-3 py-2 bg-white flex justify-between items-center cursor-pointer">
              <div>
                <p className="text-xs font-semibold">GUESTS</p>
                <p className="text-sm text-gray-500">1 guest</p>
              </div>
              <div className="ing-container">
                <Image src={down} />
              </div>
            </div>

            {/* Reserve Button */}
            <button
              onClick={() => setIsForm(true)}
              className="mt-3 w-full  bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Reserve
            </button>
          </div>
        </div>
      </section>
      {isForm && <HotelEnquiryForm setIsForm={setIsForm} />}
    </>
  );
};

export default HotelOverview;
