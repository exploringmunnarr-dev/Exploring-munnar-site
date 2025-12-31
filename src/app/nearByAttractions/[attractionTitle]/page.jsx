import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import img1 from "../../../assets/ai1.svg";
import img2 from "../../../assets/attractionImg1.svg";
import img3 from "../../../assets/attractionImg3.svg";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Attraction Details – Location, Timings & Travel Guide",
  description:
    "View attraction details with history, location map, best visiting time, entry info, and nearby places to explore.",
};

const page = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="main-container mx-4 md:mx-10 mt-4">
          <div className="header flex justify-between bg-white">
            <div>
              <h1 className="text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl">
                Chinnakanal Waterfalls
              </h1>
              <h1 className="text-[#777777] md:w-[60%] max-sm:text-sm text-sm mt-2 ">
                Chinnakanal Waterfalls, also known as Power House Waterfalls,
                is a scenic waterfall located near the Chinnakanal village in
                the Idukki district of Kerala, India, about 16 km from Munnar
              </h1>
            </div>
            <button className="btn-green text-white cursor-pointer px-3 py-2 w-[200px] h-[40px] rounded-lg">
              Plan your trip now
            </button>
          </div>

          {/* hero section  */}
          <div className="hero-section mt-4 flex gap-4 h-[450px]">
            <div className="first-container w-[60%]">
              <Image
                src={img1}
                width={100}
                height={100}
                className="w-[100%] h-[100%] object-cover rounded-xl "
              />
            </div>
            <div className="second-container w-[40%] flex flex-col gap-4">
              <Image
                src={img2}
                width={100}
                height={100}
                className="w-[100%] h-[48%] object-cover rounded-xl"
              />
              <Image
                src={img3}
                width={100}
                height={100}
                className="w-[100%] h-[48%] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* overview container  */}
          <div className="header mt-4">
            <h1 className="text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl">
              Overview
            </h1>
            <h1 className="max-sm:text-sm text-[15px] text-justify mt-2">
              Power House Waterfalls, also known as Chinnakanal Waterfalls, is
              one of the main attractions of Chinnakanal and a must-visit spot
              for anyone traveling to Munnar. Located along the Munnar -
              Thekkady highway, this beautiful waterfall offers stunning natural
              scenery with roadside-la easy access, making it a perfect stop for
              families, bikers, and nature lovers. Surrounded by dense green
              hills, mist, and tall trees, the waterfall provides a refreshing
              break from the busy hill station crowds. Chinnakanal Waterfalls is
              fed by the streams that flow down from the high mountains of the
              Western Ghats. The sound of rushing water combined with the cool
              breeze creates a relaxing and peaceful environment. Because the
              waterfall is literally visible from the road, visitors can enjoy
              the view without trekking or walking long distances. This is one
              of the main reasons it has become a “quick-stop attraction” for
              those driving towards Suryanelli, Kolukkumalai, or the famous
              Anayirangal Dam. The best time to visit Power House Waterfalls is
              definitely the monsoon season. During monsoon, the flow becomes
              stronger, wider, and more dramatic monsoon time super for photos,
              videos, and nature experiences. Even after the monsoon, the
              waterfall continues to flow beautifully throughout the year, but
              the green surroundings and misty atmosphere are at their peak from
              June to September. Nearby, travelers can explore other Chinnakanal
              attractions like Periyakanal Waterfalls, Anayirangal Dam, Lockhart
              Gap Viewpoint, and Kolukkumalai Tea Estate. Many resorts and
              homestays are located close to the waterfall, offering scenic
              views and peaceful stays. If you're planning a Munnar trip, make
              sure Power House Waterfalls is on your list. With its natural
              beauty, easy roadside access, and year-round flow, it stands out
              as one of the most memorable attractions in the Chinnakanal
              region.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
