"use client";
import React from "react";
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
import { Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const HotelListingCard = () => {
  // Router Hooks
  const router = useRouter();
  // functions
  const handleNavigation = (id) => {
    router.push(`/hotels/hotel_listing/${id}`);
  };

  return (
    <section className="space-y-4">
      {listings.map((item, index) => {
        return (
          <div className="card bg-[#EEEEEE] w-[100%] rounded-2xl p-4 flex gap-4">
            <div className="first-container h-[200px] w-[25%] ">
              <div className="img-container  h-[100%] relative">
                <Image
                  src={item.image}
                  className="w-[100%] rounded-lg h-[100%] object-cover"
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
                  {item.title}{" "}
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
                    <div className="label-container mt-2 flex items-center gap-2">
                      <div className="label-1 bg-white flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow">
                        <Image src={eco} />
                        <h1>Eco cottage</h1>
                      </div>
                      <div className="label-1 bg-white flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow">
                        <Image src={wifi} />
                        <h1>Free wifi</h1>
                      </div>
                      <div className="label-1 bg-white flex items-center gap-2 w-fit px-3 py-2 rounded-lg shadow">
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
              <div className="container-2 w-[20%]">
                <div className="content-container">
                  <h1 className="flex items-center text-[#1A1A1A] font-semibold gap-2">
                    {item.ratingLabel} <Image src={star} />{" "}
                    <span>{item.rating}</span>
                  </h1>
                  <h1 className="text-[#777777] mt-1">
                    {item.reviewCount} reviews
                  </h1>

                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="btn-container border btn-green text-white w-[100%] flex items-center justify-center mt-2 rounded-lg py-2 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HotelListingCard;
