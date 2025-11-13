"use client";
import Navbar from "@/components/Navbar";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import ac1 from "../../../assets/ac1.svg";
import ac2 from "../../../assets/ac2.svg";
import ac3 from "../../../assets/ac3.svg";
import ItnearyFaq from "@/components/ItnearyFaq";
import Footer from "@/components/Footer";
import locationImg from '../../../assets/locationImgcopy.svg'

const tabs = ["Overview", "Location", "FAQ's"];

const data = {
  img: { img1: ac1, img2: ac2, img3: ac3 },
  category: "Regular activity",
  type: "Boating & Lake Tours",
};

const page = () => {
  const location = usePathname();
  const { activity_id } = useParams();

  //   states
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <section>
        <Navbar />
        {/* header ---------------------------------------------- */}
        <div className="header md:flex px-9 mt-4 justify-between items-center border-b border-gray-200 pb-2 ">
          {/* Tabs Section */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 text-[15px] font-semibold  transition-all ${activeTab === tab
                  ? "text-[#333333] after:content-[''] font-medium after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#AF4300]"
                  : "text-gray-600 hover:text-[#333333]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Rating */}
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                <span className="font-medium text-gray-800">4.9</span>
                <span>• 337 reviews</span>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-gray-800 font-semibold text-[15px]">
                  ₹3,200 / night
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="btn-green cursor-pointer text-white font-medium px-5 py-2 rounded-md hover:bg-green-800 transition">
              Reserve
            </button>
          </div>
        </div>

        {/* HERO SECTION -------------------  */}
        <div className="main-container mt-4 mx-9">
          <div className="hero-section  flex gap-2">
            <div className="container-1 h-[510px] w-[58%]">
              <div className="img-1 h-[100%]">
                <Image
                  src={data.img.img1}
                  height={300}
                  className="h-[100%] w-[100%] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="container-2 space-y-2 w-[42%] h-[500px]">
              <Image
                src={data.img.img2}
                height={300}
                className="h-[50%] w-[100%] rounded-lg object-cover"
              />
              <Image
                src={data.img.img3}
                height={300}
                className="h-[50%] w-[100%] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* category-container ---------------------  */}
          <div className="category-tab-container mt-4 flex gap-4 items-center">
            <button className="bg-[#EEEEEE] text-[#333333] px-4 py-2 rounded-full shadow">
              {data.type}
            </button>
            <button className="bg-[#EEEEEE] text-[#333333] px-4 py-2 rounded-full shadow">
              {data.category}
            </button>
          </div>
        </div>

        <div className="overview-container mt-12 mx-9">
          <h1 className='text-lg font-semibold'>Overview</h1>
          <p className='mt-2 text-[#777777]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sapiente voluptatum quidem sint consequuntur exercitationem autem vel distinctio neque nulla necessitatibus quam, blanditiis optio quaerat, provident placeat qui, sunt expedita porro atque vitae. Fugiat amet eius, ipsa mollitia provident quo tempora asperiores nam quod quis corporis perferendis sint doloribus voluptatibus voluptates aliquid ad iste sit velit consequatur quaerat! Adipisci expedita nemo nostrum excepturi nesciunt omnis, delectus rem impedit dolorum reiciendis optio minima consequatur, sint fuga illum esse itaque voluptas minus ratione veniam, iusto nisi nihil? Cum nam obcaecati, placeat consequuntur similique laudantium dolorum tenetur laboriosam dolores ipsa, recusandae libero tempore.</p>
        </div>
        <div className="location-container mx-9 mt-12">
          <Image src={locationImg} width={100} height={100} className="w-[100%] h-[100%]" />
        </div>
        <ItnearyFaq />
        <Footer />
      </section>
    </>
  );
};

export default page;
