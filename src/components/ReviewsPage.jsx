// app/reviews/page.tsx (Next.js App Router)
"use client";
import { useState } from "react";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";
import r4 from "../assets/r4.svg";
import r5 from "../assets/r5.svg";
import str from "../assets/str.svg";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
  {
    id: 2,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
  {
    id: 3,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
];

const categories = [
  { name: "Cleanliness", rating: 4.99, icon: r1 },
  { name: "Food", rating: 4.99, icon: r2 },
  { name: "Value", rating: 4.99, icon: r3 },
  { name: "Facilities", rating: 4.99, icon: r4 },
  { name: "Location", rating: 4.99, icon: r5 },
];
const ratings = [
  { label: "Excellent", value: 90 },
  { label: "Very good", value: 60 },
  { label: "Average", value: 30 },
  { label: "Poor", value: 10 },
  { label: "Bad", value: 5 },
];
export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="mt-4 md:mt-10 ">
      <div className="">
        {/* Header */}
        <h2 className="text-xl font-semibold ">Ratings and reviews</h2>
        <div className="main-container flex gap-12 mt-8">
          <div className="container-1 w-[20%]">
            <h1 className="font-semibold text-lg">overall rating</h1>
            <div className="ing-container bg-[#EEEEEE] w-fit px-4 rounded-lg mt-2">
              <div className="container-1 rounded-lg p-2 ">
                <div className="container-1 flex gap-3 items-center justify-center">
                  <Image src={str} className="w-10 h-10" />
                  <h1 className="font-semibold text-xl">4.99</h1>
                </div>
                <h1 className="text-[#777777] w-fit m-auto mt-2">
                  337 reviews
                </h1>
              </div>
            </div>
            <div className="space-y-3 mt-4 ">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Label */}
                  <span className="w-[90px] text-[#222222]">
                    {rating.label}
                  </span>

                  {/* Bar */}
                  <div className="flex-1 h-2 bg-[#DDDDDD] rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${rating.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Overall rating */}
          <div className="container-2 w-[80%]">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-3 ">
                {categories.map((cat) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 border-1 border-[#246132d3] rounded-lg text-sm flex items-center gap-2 bg-gray-50"
                  >
                    <Image src={cat.icon} />{" "}
                    <span className="">{cat.name}</span>{" "}
                    <span className="bg-[#EEEEEE] text-[#333333] p-1 rounded-xl">
                      {cat.rating}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="mt-6 space-y-4 ">
              {(showAll ? reviews : reviews.slice(0, 3)).map((r) => (
                <div
                  key={r.id}
                  className="bg-[#EEEEEE] p-4 rounded-lg shadow-sm"
                >
                  <div className="header flex items-center gap-4">
                    <h3 className="font-semibold text-xl text-[#4A4A4A]">
                      {r.title}
                    </h3>
                    <div className="rating-container border rounded-lg w-10 flex items-center justify-center font-semibold border-[#246132]">
                      <h1 className="text-[#246132]">{r.rating}</h1>
                    </div>
                  </div>
                  <div className="items-center gap-2 text-sm text-gray-500">
                    <div className="star-container flex items-center gap-2">
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                    </div>
                    <h1>{r.user}</h1>
                  </div>
                  <p className="mt-2">{r.review}</p>
                  <p className="mt-2">
                    <span>Travelled Month :</span>{" "}
                    <span className="text-[#4A4A4A]">{r.date}</span>
                  </p>
                  <p className="mt-2">
                    <span>Room :</span>{" "}
                    <span className="text-[#4A4A4A]">{r.room}</span>
                  </p>
                </div>
              ))}
            </div>
            {/* Show More */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-[#AF4300] underline cursor-pointer font-medium hover:underline"
            >
              {showAll ? "Show less reviews" : "Show all reviews"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
