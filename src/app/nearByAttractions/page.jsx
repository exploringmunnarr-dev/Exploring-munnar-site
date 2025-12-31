"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NearByAttractionsFaq from "@/components/NearByAttractionsFaq";
import NearByAttractionsTab from "@/components/NearByAttractionsTab";

import { routes, attractionsByRoute } from "@/data/attractionsData";



const Page = () => {
  const [activeRoute, setActiveRoute] = useState(routes[0]);

  const attractions = attractionsByRoute[activeRoute] || [];

  return (
    <>
      <Navbar />

      <div className="mx-4 md:mx-10 mt-4">
        <div className="mb-4">
          <h1 className="text-lg font-semibold text-[#333]">
            Choose nearby attractions by routes
          </h1>
          <p className="text-[#777] mt-1 md:w-[60%]">
            Explore waterfalls, viewpoints and scenic spots on your way to
            Munnar.
          </p>
        </div>

        <NearByAttractionsTab
          routes={routes}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {attractions.map((item, index) => (
            <Link
              key={index}
              href={item.link || "#"}
              className="relative cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-full rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full">
                <div className="relative h-[60px]">
                  <div className="absolute inset-0 bg-black/50 rounded-b-lg" />
                  <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-sm font-medium">
                    {item.title}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <NearByAttractionsFaq />
      <Footer />
    </>
  );
};

export default Page;
