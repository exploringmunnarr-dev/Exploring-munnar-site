"use client";
import Image from "next/image";
import icon1 from "../assets/navIvon1.svg";
import icon2 from "../assets/navIcon2.svg";
import icon3 from "../assets/navIcon3.svg";
import icon4 from "../assets/navIcon4.svg";
import icon5 from "../assets/navIcon5.svg";
import logo from "../assets/logo.svg";
import heart from "../assets/heart.svg";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { useContext, useState, useEffect } from "react";
import { X } from "lucide-react";
import LoginModal from "./LoginModal";
import SubNavbar from "./SubNavbar";
const data = [
  { title: "Transports", icon: icon1, link: "transports" },
  { title: "Hotels & stays", icon: icon2, link: "hotels" },
  { title: "Activities", icon: icon3, link: "activities" },
  { title: "Live information", icon: icon4, link: "live_information" },
  {
    title: "Itneary planning",
    icon: icon5,
    link: "itneary_planning",
  },
];
export default function Navbar() {
  // Context Data ------------------------->

  // states ----------------------------->
  const [isSidebar, setIsSidebar] = useState(false);
  const pathname = usePathname();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log("scroll : ", scrollY);

  // console logs  ----------------------->
  // // ( (pathname)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full px-4 md:px-10 ${
          scrollY > 100 ? "bg-white border-b border-gray-300" : ""
        } py-1  bg-[#EBEBEB] sticky top-0 z-50`}
      >
        <div
          className={`main-container transition-all duration-300 flex justify-between ${
            scrollY > 100 ? "hidden" : ""
          }`}
        >
          <div className="flex items-center space-x-2 ">
            <Image
              src={logo}
              alt="explore Munar"
              width={100}
              className=" w-[100px] md:w-[100px]"
            />
          </div>
          <nav className="hidden md:flex items-center w-fit translate-x-[50px]  space-x-6 text-lg text-gray-700 font-medium">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-green-700 font-medium" : ""
              }`}
            >
              {" "}
              Home
            </Link>
            <span>|</span>
            <Link
              href="/our_company"
              className={` ${
                pathname.includes("our_company") ? "text-green-700" : ""
              } `}
            >
              Our Company
            </Link>
            <span>|</span>
            <Link
              href="/contact_us"
              className={` ${
                pathname.includes("contact_us") ? "text-green-700" : ""
              } `}
            >
              Contact us
            </Link>
          </nav>

          <div className="flex items-center space-x-4 ">
            <Image src={heart} className="md:hidden" />
            {/* Favourites */}
            <div className="hidden items-center space-x-2 cursor-pointer md:flex">
              <Image src={heart} alt="icon" />
              <span className="text-lg font-medium">Favourites</span>
            </div>

            {/* Profile Avatar */}
            <div className="bg-white p-2 rounded-lg flex items-center gap-2 relative">
              <div className="icon-container">
                {isSidebar ? (
                  <X
                    onClick={() => setIsSidebar(false)}
                    className="text-gray-700 cursor-pointer"
                  />
                ) : (
                  <Image
                    onClick={() => setIsSidebar(true)}
                    src={menu}
                    alt="menu_icon"
                    width={100}
                    className="h-[12px] w-[22px] cursor-pointer"
                  />
                )}
              </div>
              {isSidebar && (
                <div className="sidebar-container absolute top-full right-4">
                  <Sidebar setIsSidebar={setIsSidebar} />
                </div>
              )}
              <Image
                onClick={() => setShowLoginForm(true)}
                src={profile}
                alt="profile"
                width={100}
                height={22}
                className="h-[26px] w-[30px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        {scrollY > 100 && (
          <div
            className={`hidden md:flex subnavbar-container transition-all duration-300 bg-[#ffffff]  items-center gap-4 py-1 ${
              scrollY > 100 ? "block" : "hidden opacity-0"
            }`}
          >
            <div className="flex items-center transition-all duration-300 space-x-2 ">
              <Image
                src={logo}
                alt="explore Munar"
                width={100}
                className=" w-[100px] md:w-[100px]"
              />
            </div>
            <nav className="md:flex items-center gap-2 w-fit m-auto rounded-xl py-2 px-4 transition-all duration-300">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`nav-item pr-4 pl-2 border-r ${
                      index == 4 ? "border-none" : ""
                    } font-medium text-[#333333] text-lg`}
                  >
                    <Link href={`/${item.link}`} className="flex gap-3">
                      <Image src={item.icon} />
                      <h1>{item.title}</h1>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </header>
      {showLoginForm && <LoginModal setShowLoginForm={setShowLoginForm} />}
    </>
  );
}
