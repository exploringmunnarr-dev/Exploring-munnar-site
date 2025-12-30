"use client";
import React, { useEffect, useState } from "react";
import icon1 from "../assets/Icon_tent.svg";
import icon2 from "../assets/Icon_leaf.svg";
import icon3 from "../assets/Icon_tree.svg";
import icon4 from "../assets/Icon_home.svg";
import icon5 from "../assets/Icon_resort.svg";
import icon6 from "../assets/Icon_hotel.svg";
import heart from "../assets/treeHouseHeart.svg";
import treeHouse from "../assets/treeHouseImg1.svg";
import activeTent from "../assets/activeTent.svg";
import activeLeaf from "../assets/activeLeaf.svg";
import activeResort from "../assets/activeResort.svg";
import activeHotel from "../assets/activeHotel.svg";
import activeHome from "../assets/activeHome.svg";
import activeTree from "../assets/activeTree.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
const tabDatas = [
  {
    title: "Tents",
    icon: icon1,
    categoryName: "tents",
    activeIcon: activeTent,
  },
  {
    title: "Eco cottages",
    icon: icon2,
    categoryName: "eco cottages",
    activeIcon: activeLeaf,
  },
  {
    title: "Tree house",
    icon: icon3,
    categoryName: "tree house",
    activeIcon: activeTree,
  },
  {
    title: "Home stays & guest house",
    icon: icon4,
    categoryName: "home stays",
    activeIcon: activeHome,
  },
  {
    title: "Resorts",
    icon: icon5,
    categoryName: "resorts",
    activeIcon: activeResort,
  },
  {
    title: "Hotels",
    icon: icon6,
    categoryName: "hotels",
    activeIcon: activeHotel,
  },
];

const cardData = [
  {
    id: 1,
    category: "tents",
    title: "Tent",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "eco cottages",
    title: "Eco cottage",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "tree house",
    title: "Tree house",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
   {
    id: 1,
    category: "resort",
    title: "resort",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "home stays",
    title: "Home stays",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
  {
    id: 1,
    category: "hotels",
    title: "Hotel",
    image: treeHouse,
    rating: 4.8,
    reviews: 120,
    price: 2200,
    tags: "Eco Stay | Couple Favourite",
  },
];

const StayOptionsSection = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states ------------------->
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [activeTab, setActivetab] = useState("");

  // side effects 
  useEffect(() => {
    getData()
  }, [])

  // function

  const handleFilter = (categoryName) => {
    // Toggle selection: deselect if same tab clicked
    if (activeTab === categoryName) {
      setActivetab("");
      setData(allData);
    } else {
      setActivetab(categoryName);
      const filteredData = allData.filter((item) => {
        return (
          item?.stayType &&
          item.stayType.toLowerCase().includes(categoryName.toLowerCase())
        );
      });
      setData(filteredData);
    }
  };

  async function getData() {
    try {
      const res = await axios.post(`${apiUrl}/api/hotels-list`, {
        isHighlighted: true
      })
      setData(res.data.data.hotels)
      setAllData(res.data.data.hotels)
      console.log("Highlighted hotels data : ", res.data.data.hotels)
    } catch (err) {
      console.error("Error occured while fetching highlighted hotel : ", err.message)
    }
  }

  function handleNavigate(item) {
    const router = useRouter();
    router.push(``)
  }
  return (
    <>
      <section className="main-container mx-4 md:mx-10 mt-14">
        <header className="md:flex justify-between">
          <div className="container-1">
            <h1 className="text-[#333333] text-xl md:text-3xl font-semibold">
              Find Your Stay Amidst Munnar's Green Escapes
            </h1>
            <h1
              style={{ fontWeight: 400 }}
              className="description mt-2 text-[#808080] text-lg"
            >
              From misty treehouse to warm homestays - browse handpicked stays
              for every kind of traveler.
            </h1>
          </div>
          <Link href={`/hotels/hotel_listing`} className="font-semibold max-sm:text-[14px]  text-[#333333] underline hover:text-green-700">
            View all
          </Link>
        </header>
        <div className="tab-container flex items-center flex-wrap gap-4 mt-4 ">
          {tabDatas.map((title, index) => {
            return (
              <div
                key={index}
                onClick={() => handleFilter(title.categoryName)}
                className={`tab  cursor-pointer flex gap-2  items-center border border-[#1a552b] rounded-md text-sm md:text-md  px-4 py-1 h-[50px] ${activeTab !== title.categoryName
                  ? "md:bg-[#eeeeee] text-[#1a552b]"
                  : "bg-green-800 text-white"
                  }  `}
                role="button"
                aria-pressed={activeTab === title.categoryName}
              >
                {activeTab !== title.categoryName ? (
                  <Image src={title.icon} />
                ) : (
                  <Image src={title.activeIcon} />
                )}

                <h1 className="block">{title.title}</h1>
              </div>
            );
          })}
        </div>

        <div className="card-container mt-4">
          {data.length === 0 && allData.length > 0 ? (
            <div className="w-full py-10 text-center text-gray-500">No stays found for the selected category.</div>
          ) : (
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide ">
              {data.map((item, index) => (
                <Link
                  href={`/hotels/hotel_listing/${item.id}`}
                  key={index}
                  className="card min-w-[280px] hover:shadow-lg shadow-gray-500 transition-all duration-300  max-w-xs rounded-2xl  overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
                >
                  {/* Image */}
                  <div className="img-container relative group ">

                    <Image
                      src={item?.images?.[0].url}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button className="absolute transition-all duration-500  top-2 right-2 bg-[#eeeeee] rounded-full p-2 shadow hover:scale-110 ">
                      <Image src={heart} alt="heart" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="mt-2">
                    {/* Rating */}
                    <div className="flex items-center text-sm text-[#333333]">
                      <span className="mr-1">🌟</span>
                      <span className="font-medium">{item.rating}</span>
                      {/* <span className="ml-1">({item.reviews})</span> */}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#333333]">
                      {item?.name?.slice(0, 26)}..
                    </h3>

                    {/* Price */}
                    <p className="text-[#af4300] font-semibold">
                      ₹{item?.pricePerNight} / night
                    </p>

                    {/* Tags */}
                    <p className="text-sm text-gray-600">{item?.stayType}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section >
    </>
  );
};

export default StayOptionsSection;
