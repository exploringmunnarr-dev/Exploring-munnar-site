"use client";
import Image from "next/image";
import hotImg from "../assets/hotel1.svg";
import hotImg2 from "../assets/hotel2.avif";
import hotImg3 from "../assets/hotel3.avif";
import hotImg4 from "../assets/hotel4.avif";
import redHeart from "../assets/redheart.svg";
import greenHeart from "../assets/greenheart.svg";
import thumb from "../assets/thumb.svg";
import loc from "../assets/loc.svg";
import eco from "../assets/eco.svg";
import star from "../assets/star.svg";
import wifi from "../assets/loc.svg";
import fire from "../assets/loc.svg";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ResponsiveFilterComponent from "./ResponsiveFilterComponent";
import ResponsivePriceComponent from "./ResponsivePriceComponent";
import noData from "../assets/no_data.svg";
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
const ResponsiveHotelListingCard = ({
  listings,
  setStayType,
  setLocation,
  setAmenities,
  setExperiences,
  setBudget,
  stayType,
  loation,
  amenities,
  experiences,
  budget,
}) => {
  // console.log("responsive data : ", listings);

  const [isFilter, setisFilter] = useState(false);
  const [ispriceRange, setispriceRange] = useState(false);
  return (
    <>
      <div className="main-container mt-[-20px] sticky w-[100%] top-[65px] z-40">
        <div className="filter-container px-4 flex items-center py-3 w-fit text-center md:w-[80%] m-auto border shadow-md shadow-gray-400 rounded-full border-gray-50  bg-white ">
          <div
            onClick={() => setisFilter(true)}
            className="filter-container w-[100%] border-r11 border-green-700 px-2 text-center"
          >
            <div className="header flex gap-2 items-center justify-between F">
              <h1 className="text-gray-600 text-lg">Filters</h1>
              <ChevronDown className="text-gray-400" />
            </div>
          </div>
          {/* <div
            onClick={() => setispriceRange(true)}
            className="price-container w-[50%] pl-2"
          >
            <div className="header flex gap-2 items-center justify-between">
              <h1 className="text-gray-600">Price</h1>
              <ChevronDown className="text-gray-400" />
            </div>
          </div> */}
        </div>
      </div>

      <div className="card-container mt-2 flex flex-col gap-3">
        {listings.length > 0 ? (
          listings.map((item, index) => {
            return (
              <div className="card w-[90%] border border-gray-200 m-auto rounded-lg bg-white shadow-md shadow-gray-300 p-4">
                <div className="img-container w-[100%] max-sm:h-[200px] sm:h-[300px] relative">
                  <Image
                    src={item?.images[0].url}
                    width={1000}
                    height={1000}
                    className="w-[100%] h-[100%] rounded-lg object-cover"
                  />
                  <div className="favorite-icon-container absolute top-4 right-4">
                    <button className="cursor-pointer">
                      {item.favorite ? (
                        <Image src={redHeart} alt="red heart" />
                      ) : (
                        <Image src={greenHeart} alt="green heart" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="content-container mt-2">
                  <div className="heading flex items-start justify-between">
                    <h1 className="flex items-center gap-2 text-[#246132] font-semibold">
                      {item.title}{" "}
                      <span>
                        <Image src={thumb} className="w-3 h-3" />
                      </span>
                    </h1>
                    <div>
                      <h1 className="flex items-center text-[#1A1A1A] text-xs">
                        {item.ratingLabel}{" "}
                        <Image src={star} className="w-2 h-2" />{" "}
                        <span>{item.rating}</span>
                      </h1>
                      <h1 className="text-[#777777] text-xs">
                        {item.reviewCount} reviews
                      </h1>
                    </div>
                  </div>
                  <div className="main-content-container mt-2">
                    <div className="content-container ">
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
                        <div className="label-container mt-2  flex items-center flex-wrap gap-2">
                          <div className="label-1 bg-white border border-gray-200 flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow shadow-gray-200">
                            <Image src={eco} />
                            <h1>Eco cottage</h1>
                          </div>
                          <div className="label-1 bg-white border border-gray-200 flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow shadow-gray-200">
                            <Image src={wifi} />
                            <h1>Free wifi</h1>
                          </div>
                          <div className="label-1 bg-white border border-gray-200 flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow shadow-gray-200">
                            <Image src={fire} />
                            <h1>Campfire</h1>
                          </div>
                        </div>
                        <h1 className="font-semibold text-[#246132] mt-2">
                          {item.priceText}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="footer-container">
                    <Link
                      href={`/hotels/hotel_listing/${item.id}`}
                      className="btn-container  bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]  text-white w-[100%] flex items-center justify-center mt-2 rounded-lg py-2 cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-[90%] m-auto text-center">
            <Image src={noData} />
            <h1 className="font-semibold text-xl text-[#333333] mt-[-20px]">
              No data found!
            </h1>
          </div>
        )}
      </div>
      {isFilter && (
        <ResponsiveFilterComponent
          setisFilter={setisFilter}
          // listings={hotelData}
          stayType={stayType}
          loation={loation}
          amenities={amenities}
          experiences={experiences}
          budget={budget}
          setStayType={setStayType}
          setLocation={setLocation}
          setAmenities={setAmenities}
          setExperiences={setExperiences}
          setBudget={setBudget}
        />
      )}
      {ispriceRange && (
        <ResponsivePriceComponent
          setispriceRange={setispriceRange}
          ispriceRange={ispriceRange}
        />
      )}
    </>
  );
};

export default ResponsiveHotelListingCard;
