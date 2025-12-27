"use client";
import React, { useEffect, useState } from "react";
import heart from "../assets/treeHouseHeart.svg";
import treeHouse from "../assets/treeHouseImg1.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


const UniqueStays = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // functions
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${apiUrl}/api/hotels-list`, {
        isUniqueStays: true,
      });
      console.log("Response for featured hotel : ", res.data);
      if (res.data && res.data.data && res.data.data.hotels) {
        setData(res.data.data.hotels);
        console.log("Data for unique stays : ", res.data.data.hotels);
      } 
      setIsLoading(false);
    } catch (err) {
      console.error(
        "Error occured while fetching featured hotels data : ",
        err.message
      );
      setIsLoading(false);
    }
  };

  // side effects 
  useEffect(() => {
    getData()
  }, [apiUrl])


  return (
    <>
      <section className="mt-8 md:mt-14">
        <header className="flex items-start justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Unique Stays in Munnar
            </h2>
            <div className="flex items-center justify-between  max-sm:text-[14px]">
              <p className="text-[#999999] mt-2">
                Handpicked properties offering unforgettable experiences.
              </p>
            </div>
          </div>
          <Link
            href={"/hotels/hotel_listing"}
            className="text-[#333333] underline cursor-pointer"
          >
            View all
          </Link>
        </header>
        <div className="card-container mt-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {data.map((item, index) => (
            <Link
              href={`/hotels/hotel_listing/${item.id}`}
              key={index}
              className="card min-w-[280px] group hover:shadow-xl transition-all duration-300 shadow-gray-300 cursor-pointer max-w-xs rounded-2xl overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
            >
              {/* Image */}
              <div className="img-container relative group overflow-hidden rounded-lg">
                <Image
                  src={item?.images?.[0]?.url || treeHouse}
                  alt={item.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg hover:scale-125 transition-all duration-300"
                />
                <button className="absolute group-hover:scale-105 transition-all duration-300  top-2 right-2 bg-[#eeeeee] rounded-full p-2 shadow hover:scale-110 ">
                  <Image src={heart} alt="heart" className="" />
                </button>
              </div>

              {/* Content */}
              <div className="mt-2">
                {/* Rating */}
                <div className="flex items-center text-sm text-[#333333]">
                  <span className="mr-1">🌟</span>
                  <span className="font-medium">{item.rating || 4.5}</span>
                  {/* <span className="ml-1">({item.reviews})</span> */}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#333333]">
                  {item.name}
                </h3>

                {/* Price */}
                <p className="text-[#af4300] font-semibold">
                  ₹{item.pricePerNight} / night
                </p>

                {/* Tags */}
                <p className="text-sm text-gray-600">
                  {item.stayType || "Unique Stay"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default UniqueStays;
