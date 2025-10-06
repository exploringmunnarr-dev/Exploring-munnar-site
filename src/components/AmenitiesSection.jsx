"use client";
// import { Wifi, Flame, Heart, Bath, Coffee } from "lucide-react";
import wifi from "../assets/wifiIcon.svg";
import breakfastIcon from "../assets/breakfasticon.svg";
import bathtub from "../assets/bathtubicon.svg";
import fireicon from "../assets/fireicon.svg";
import coupleIcon from "../assets/c.svg";
import check from "../assets/check.svg";
import roomIcon from "../assets/roomIcon.svg";
import car from "../assets/car.svg";
import view from "../assets/view.svg";
import familyIcon from "../assets/f.svg";
import Image from "next/image";

const popularFacilities = [
  { label: "Free wifi", icon: wifi },
  { label: "Campfire", icon: fireicon },
  { label: "Couple friendly", icon: coupleIcon },
  { label: "Private bath", icon: bathtub },
  { label: "Breakfast", icon: breakfastIcon },
];

const amenities = [
  {
    title: "Room comfort",
    icon : roomIcon,
    items: [
      "Comfortable beds (Double/Queen/King)",
      "Clean linens and blankets",
      "Attached private bathrooms",
      "Hot water supply (solar/geyser)",
      "Room heater",
    ],
  },
  {
    title: "Travel convinece",
    icon : car,
    items: [
      "Free parking",
      "Paid cab or taxi assistance",
      "Two-wheeler rental",
      "Nearby KSRTC bus stand info",
    ],
  },
  {
    title: "Food & beverage",
    icon : breakfastIcon,
    items: [
      "Breakfast included",
      "Room service",
      "On-site restaurant or dining area",
      "Campfire snacks or BBQ (in tent/eco stays)",
      "Kitchen access (for homestays)",
    ],
  },
  {
    title: "View and nature",
    icon : view,
    items: [
      "Balcony with valley/mountain/lake views",
      "Garden or plantation view",
      "Tea estate surroundings",
      "Birdwatching or sunrise points nearby",
    ],
  },
  {
    title: "Connectivity",
    icon : wifi,
    items: ["Free Wi-Fi", "Mobile signal support"],
  },
  {
    title: "Family & safety",
    icon : familyIcon,
    items: [
      "Family-friendly environment",
      "CCTV surveillance",
      "Fire safety measures",
      "Doctor on call",
      "Kitchen access (for homestays)",
    ],
  },
];

export default function AmenitiesSection() {
  return (
    <section className="mt-4 md:mt-10">
      <div className="">
        {/* Popular Facilities */}
        <h2 className="text-xl md:text-3xl text-[#333333] font-semibold mb-3">
          Popular Facilities available
        </h2>
        <div className="flex flex-wrap gap-3 mb-8 mt-4 ">
          {popularFacilities.map((facility, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm bg-[#EEEEEE]"
            >
              <Image src={facility.icon} className="w-7 h-7" />
              <span>{facility.label}</span>
            </div>
          ))}
        </div>

        {/* All Amenities */}
        <h2 className="text-xl md:text-3xl font-semibold text-[#333333] mb-3">
          All Amenities
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-6">
          {amenities.map((category, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-6 flex items-center gap-2"> <span><Image src={category.icon}/></span> {category.title}</h3>
              <ul className="space-y-1 text-gray-700">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="">
                      <Image src={check}/>
                    </span>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
