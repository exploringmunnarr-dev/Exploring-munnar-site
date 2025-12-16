"use client";
import React, { useEffect, useState } from "react";
import hotImg from "../assets/hotel1.svg";
import hotImg2 from "../assets/hotel2.avif";
import hotImg3 from "../assets/hotel3.avif";
import hotImg4 from "../assets/hotel4.avif";
import redHeart from "../assets/redHeart.svg";
import greenHeart from "../assets/greenHeart.svg";
import thumb from "../assets/thumb.svg";
import loc from "../assets/loc.svg";
import eco from "../assets/eco.svg";
import star from "../assets/star.svg";
import wifi from "../assets/loc.svg";
import fire from "../assets/loc.svg";
import Image from "next/image";
import {
  Flame,
  FlameIcon,
  Heart,
  Heater,
  ParkingCircle,
  RotateCcw,
  Utensils,
  Waves,
  Wifi,
  Wine,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import noData from "../assets/no_data.svg";
const amenityIcons = {
  "Free WiFi": Wifi,
  Breakfast: Utensils,
  "Hot Water": Flame,
  Parking: ParkingCircle,
  Heater: Heater,
  "24/7 Room service": RotateCcw,
  Spa: Waves,
  Campfire: FlameIcon,
  "Couple Friendly": Wine,
};
const loadingCount = [1, 2, 3];
const listings = [
  {
    id: "misty-hill-eco-retreat-1",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: false,
    image: hotImg,
  },
  {
    id: "misty-hill-eco-retreat-2",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: true,
    image: hotImg2,
  },
  {
    id: "misty-hill-eco-retreat-2",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: true,
    image: hotImg3,
  },
  {
    id: "misty-hill-eco-retreat-2",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: false,
    image: hotImg4,
  },
  {
    id: "misty-hill-eco-retreat-3",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: true,
    image: hotImg2,
  },
  {
    id: "misty-hill-eco-retreat-2",
    title: "Misty Hill Eco Retreat",
    location: "Devikulam",
    locationActionText: "Show on map",
    rating: 4.99,
    ratingLabel: "Excellent",
    reviewCount: 479,
    description:
      "Nestled amidst the rolling tea estates of Devikulam, Misty Hill Eco Retreat offers a peaceful, eco-conscious escape from the usual. Built with sustainable materials and surrounded by mist-covered hills, the retreat promises both serenity and style. Wake up to the sounds of nature, sip fresh cardamom tea on your balcony, and enjoy evenings by the campfire.",
    amenities: ["Eco cottage", "Free wifi", "Campfire"],
    pricePerNight: 3200,
    currency: "INR",
    priceText: "From ₹3,200 / night",
    actions: ["View Details"],
    favorite: true,
    image: hotImg3,
  },
];

const HotelListingCard = ({ listings, loading }) => {
  // Router Hooks
  const router = useRouter();

  // functions
  const handleNavigation = (id) => {
    router.push(`/hotels/hotel_listing/${id}`);
  };

  if (loading) {
    return loadingCount.map((item, index) => (
      <div
        role="status"
        class="space-y-8 animate-pulse md:flex gap-4 md:items-center"
      >
        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded-lg sm:w-96">
          <svg
            class="w-11 h-11 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>

        <div class="w-full">
          <div class="h-6 bg-gray-300 rounded w-48 mb-4"></div>
          <div class="h-4 bg-gray-300 rounded  max-w-[98%] mb-2.5"></div>
          <div class="h-4 bg-gray-300 rounded mb-2.5 w-[100%]"></div>
          <div class="h-4 bg-gray-300 rounded max-w-[90%] mb-2.5"></div>
          <div class="h-4 bg-gray-300 rounded max-w-[80%] mb-2.5"></div>
          <div class="h-4 bg-gray-300 rounded max-w-[60%]"></div>
        </div>
      </div>
    ));
  }

  return (
    <section className="space-y-4">
      {listings.length !== 0 ? (
        listings.map((item, index) => {
          return (
            <div className="card bg-[#EEEEEE] w-[100%] rounded-2xl p-4 flex gap-4">
              <div className="first-container h-[200px] w-[25%] ">
                <div className="img-container  h-[100%] relative overflow-hidden hover:rounded-lg">
                  <img
                    src={item?.images?.[0]?.url}
                    alt="image"
                    className="w-[100%] rounded-lg h-[100%] object-cover hover:scale-125 transition-all duration-300"
                  />
                  <div className="favorite-icon-container absolute top-4 right-4">
                    <button
                      onClick={() => handleFavorite(index)}
                      className="cursor-pointer"
                    >
                      {item.favorite ? (
                        <Image src={redHeart} alt="red heart" />
                      ) : (
                        <Image src={greenHeart} alt="green heart" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="second-container w-[75%] flex gap-2">
                <div className="container-1 w-[80%] ">
                  <h1 className="text-[#246132] font-semibold text-lg flex items-center gap-2">
                    {item.name}{" "}
                    <span>
                      <Image src={thumb} />
                    </span>
                  </h1>
                  <div className="content-container mt-3">
                    <h1 className="flex items-center gap-1 text-[#333333]">
                      <Image src={loc} />
                      {item.location}{" "}
                      <span className="underline cursor-pointer text-sm text-[#AF4300]">
                        Show on map
                      </span>{" "}
                    </h1>
                    <div className="main-content mt-2">
                      <h1 className="text-[#1A1A1A] text-sm ">
                        {item.description.slice(0, 130)}...
                      </h1>
                      <div className="label-container mt-2 flex flex-wrap items-center gap-2">
                        {item.experiences.map((amenity, index) => {
                          const Icon = amenityIcons[amenity?.name];
                          return (
                            <div className="label-1 bg-white flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow">
                              {Icon && (
                                <Icon size={18} className="text-amber-800" />
                              )}
                              {/* <div className="text-amber-800">{icons[amenity.name]}</div> */}
                              <h1>{amenity.name}</h1>
                            </div>
                          );
                        })}
                      </div>
                      <h1 className="font-semibold text-[#246132] mt-2">
                        From {item.pricePerNight} / night
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="container-2 w-[20%]">
                  <div className="content-container">
                    <h1 className="flex items-center text-[#1A1A1A] font-semibold gap-2">
                      {item.ratingLabel} <Image src={star} />{" "}
                      <span>{item.rating}</span>
                    </h1>
                    <h1 className="text-[#777777] mt-1">
                      {item.reviewCount} reviews
                    </h1>

                    <Link
                      href={`/hotels/hotel_listing/${item.id}`}
                      // onClick={() => handleNavigation(item.id)}
                      className="btn-container  bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]  text-white w-[100%] flex items-center justify-center mt-2 rounded-lg py-2 cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="w-fit m-auto flex items-center justify-center">
            <div className="text-center">
              <Image
                src={noData}
                width={100}
                height={100}
                className="w-[340px] h-[340px]"
              />
              <h1 className="font-medium text-xl mt-[-40px] text-gray-600">
                No data found!
              </h1>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HotelListingCard;
