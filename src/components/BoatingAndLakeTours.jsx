"use client";
import React, { useState } from "react";
import Image from "next/image";
import m1 from "../assets/m1.svg";
import str from "../assets/str.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
const data = [
  {
    img: m1,
    title: "Mattupetty Dam",
    duration: "Just 13 km from Munnar town",
    description: "Calm reservoir surrounded by rolling tea estates and hills",
    ratings: 4.99,
    reviewsCount: "499 reviews",
    id: 1,
  },
  {
    img: m1,
    title: "Mattupetty Dam",
    duration: "Just 13 km from Munnar town",
    description: "Calm reservoir surrounded by rolling tea estates and hills",
    ratings: 4.99,
    reviewsCount: "499 reviews",
    id: 2,
  },
  {
    img: m1,
    title: "Mattupetty Dam",
    duration: "Just 13 km from Munnar town",
    description: "Calm reservoir surrounded by rolling tea estates and hills",
    ratings: 4.99,
    reviewsCount: "499 reviews",
    id: 3,
  },
];
const BoatingAndLakeTours = ({ groupedData }) => {
  return (
    <>
      {groupedData.map((item, index) => {
        return <section className="mt-4 md:mt-10">
          <header>
            <h1 className="font-semibold text-xl md:text-3xl text-[#333333]">
              {item.title}
            </h1>
            <h1 className="text-[#333333]">
              Discover unique experiences across nature, culture and morev
            </h1>
          </header>
          <div className="content-container mt-4 space-y-3">
            {item.cardDatas.map((item, index) => {
              return (
                <div className="card bg-[#eeeeee] rounded-lg px-4 py-3 flex items-center justify-between gap-3">
                  <div className="img-container">
                    <Image
                      src={item?.images[0]?.url}
                      width={1000} height={1000}
                      className="rounded-xl w-[430px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="content-container w-[100%]">
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                    <h1 className="text-[#777777] mt-3">{item.duration}</h1>
                    <h1 className="text-[#777777] ">{item.description.slice(0, 170)}..</h1>
                    <div className="footer-container mt-4 flex items-center justify-between">
                      <div>
                        <h1 className="flex items-center gap-2">
                          Excellent{" "}
                          <span>
                            <Image src={str} />
                          </span>
                          {item.ratings}
                        </h1>
                        <h1 className="text-[#333333] text-xs">
                          {item.reviewsCount}
                        </h1>
                      </div>
                      <Link
                        href={`/activities/${item.id}`}
                        className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                        hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer rounded-lg py-2 px-4 text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      })}
    </>
  );
};

export default BoatingAndLakeTours;
