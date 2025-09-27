"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import heart from "../assets/heart.svg";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { useContext, useState } from "react";
import { X } from "lucide-react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  // Context Data ------------------------->

  // states ----------------------------->
  const [isSidebar, setIsSidebar] = useState(false);
  const pathname = usePathname();
  const [showLoginForm, setShowLoginForm] = useState(false);
  // console logs  ----------------------->
  // // ( (pathname)

  return (
    <>
      <header className="w-full px-4 md:px-10 py-1  bg-[#EBEBEB] sticky top-0 z-50">
        <div className="main-container flex justify-between ">
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
                  <Sidebar setIsSidebar={setIsSidebar}/>
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
      </header>
      {showLoginForm && <LoginModal setShowLoginForm={setShowLoginForm} />}
    </>
  );
}
