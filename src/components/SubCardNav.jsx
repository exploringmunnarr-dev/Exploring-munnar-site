"use client";
import React from "react";
import transportIcon from "../assets/transport_icon.svg";
import cloudIcon from "../assets/cloud_icon.svg";
import hotelIcon from "../assets/hotel_icon.svg";
import activitiesIcon from "../assets/activities_icon.svg";
import active_transport from "../assets/active_transport.svg";
import active_hotel from "../assets/active_hotel.svg";
import active_activity from "../assets/active_activity.svg";
import active_itneary from "../assets/active_itneary.svg";
import active_live_information from "../assets/active_live_information.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
const data = [
  {
    title: "Transports",
    icon: transportIcon,
    activeIcon: active_transport,
    location: "transports",
  },
  {
    title: "Hotels & stays",
    icon: hotelIcon,
    activeIcon: active_hotel,
    location: "hotels",
  },
  {
    title: "Activities",
    icon: activitiesIcon,
    activeIcon: active_activity,
    location: "activities",
  },
  {
    title: "Live information",
    icon: cloudIcon,
    activeIcon: active_live_information,
    location: "live_information",
  },
  {
    title: "Itneary planning",
    icon: "",
    activeIcon: active_itneary,
    location: "itneary_planning",
  },
];
const SubCardNav = () => {
  const pathname = usePathname();
  const location = pathname.replace("/", "");
  return (
    <>
      <section className="flex items-center overflow-auto gap-3  md:gap-6 text-white">
        {data.map((item, index) => {
          return (
            <div
              className={`flex items-center gap-2 border-r pr-2 ${
                data.length - 1 == index ? "border-none" : ""
              }  ${
                location.toLowerCase().includes(item.location.toLowerCase())
                  ? "bg-white text-[#333333]  font-semibold rounded-md md:rounded-xl px-3 py-2"
                  : ""
              } `}
            >
              {location.toLowerCase().includes(item.location.toLowerCase()) ? (
                <Image src={item.activeIcon} className="hidden md:block" />
              ) : (
                <Image src={item.icon} className="hidden md:block" />
              )}
              <Link
                href={`/${item.location}`}
                className="text-lg whitespace-nowrap  "
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SubCardNav;
