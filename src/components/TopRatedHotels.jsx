"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import dynamic from "next/dynamic";
import heart from "../assets/treeHouseHeart.svg";
import treeHouse from "../assets/treeHouseImg1.svg";

const TopRatedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchTopRatedHotels = async () => {
      try {
        const res = await axios.post(`${apiUrl}/api/hotels-list`, {
          isTopRated: true,
        });
        setHotels(res.data.data.hotels);
      } catch (err) {
        console.error("Error fetching top-rated hotels:", err.message);
      }
    };

    fetchTopRatedHotels();
  }, [apiUrl]);

  return (
    <>
      <section className="mt-8 md:mt-14">
        <header className="md:flex items-start justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">
              Top-Rated Hotels in Munnar
            </h2>
            <div className="flex items-center justify-between max-sm:text-[14px]">
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
          {hotels.length > 0 ? (
            hotels.map((item) => (
              <Link
                key={item.id}
                href={`/hotels/hotel_listing/${item.id}`}
                className="card min-w-[280px] group hover:shadow-xl transition-all duration-300 shadow-gray-300 cursor-pointer max-w-xs rounded-2xl overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
              >
                <div className="img-container relative group overflow-hidden rounded-lg">
                  <Image
                    src={item?.images?.[0]?.url || treeHouse}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg hover:scale-125 transition-all duration-300"
                  />
                  <button className="absolute group-hover:scale-105 transition-all duration-300 top-2 right-2 bg-[#eeeeee] rounded-full p-2 shadow">
                    <Image src={heart} alt="heart" />
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-center text-sm text-[#333333]">
                    <span className="mr-1">🌟</span>
                    <span className="font-medium">{item.rating}</span>
                    <span className="ml-1">({item.reviews} reviews)</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    {item.name}
                  </h3>
                  <p className="text-[#af4300] font-semibold">
                    ₹ {item.pricePerNight} / night
                  </p>
                  <p className="text-sm text-gray-600">{item.stayType}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full py-10 text-center text-gray-500">
              No top-rated hotels found.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(TopRatedHotels), { ssr: false });
