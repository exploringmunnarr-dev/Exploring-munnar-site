"use client";
import React, { useEffect, useState } from "react";
import heart from "../assets/treeHouseHeart.svg";
import treeHouse from "../assets/treeHouseImg1.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const data = [
  {
    id: 1,
    category: "tents",
    title: "Tent",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "eco cottages",
    title: "Eco cottage",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "tree house",
    title: "Tree house",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "home stays",
    title: "Home stays",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "resorts",
    title: "resort",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "hotels",
    title: "Hotel",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
];
const UniqueStays = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states
  const [isLoading, setIsLoading] = useState([])
  // const [data, setData] = useState([])


  // functions
  const getData = async () => {
    try {
      const res = await axios.post(`${apiUrl}/api/hotels-list`, { isHighlighted: true });
      console.log("Response for featured hotel : ", res.data)
    } catch (err) {
      console.error("Error occured while fetching featured hotels data : ", err.message)
    }
  }

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
            <div
              key={index}
              className="card min-w-[280px] group hover:shadow-xl transition-all duration-300 shadow-gray-300 cursor-pointer max-w-xs rounded-2xl overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
            >
              {/* Image */}
              <div className="img-container relative group overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
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
                  <span className="font-medium">{item.rating}</span>
                  <span className="ml-1">({item.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#333333]">
                  {item.title}
                </h3>

                {/* Price */}
                <p className="text-[#af4300] font-semibold">
                  ₹{item.price} / night
                </p>

                {/* Tags */}
                <p className="text-sm text-gray-600">{item.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UniqueStays;
