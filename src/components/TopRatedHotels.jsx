"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import heart from "../assets/treeHouseHeart.svg";
import treeHouse from "../assets/treeHouseImg1.svg";

const cards = [
  {
    id: 1,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 2,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 3,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 4,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 4,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 4,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 4,
    title: "Evergreen Treehouse Retreat",
    image: treeHouse,
    rating: 4.9,
    reviews: 337,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
];

const TopRatedHotels = () => {
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
          {cards.map((item) => (
            <div
              key={item.id}
              className="card min-w-[280px] group hover:shadow-xl transition-all duration-300 shadow-gray-300 cursor-pointer max-w-xs rounded-2xl overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
            >
              <div className="img-container relative group overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
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
                  {item.title}
                </h3>
                <p className="text-[#af4300] font-semibold">
                  ₹ {item.price} / night
                </p>
                <p className="text-sm text-gray-600">{item.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedHotels;
