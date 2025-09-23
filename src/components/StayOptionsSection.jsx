"use client"
import React, { useState } from 'react'
import icon1 from '../assets/Icon_tent.svg'
import icon2 from '../assets/Icon_leaf.svg'
import icon3 from '../assets/Icon_tree.svg'
import icon4 from '../assets/Icon_home.svg'
import icon5 from '../assets/Icon_resort.svg'
import icon6 from '../assets/Icon_hotel.svg'
import heart from '../assets/treeHouseHeart.svg'
import treeHouse from '../assets/treeHouseImg1.svg'
import Image from 'next/image'
const tabDatas = [
    { title: "Tents", icon: icon1, categoryName: "tents" },
    { title: "Eco cottages", icon: icon2, categoryName: "eco cottages" },
    { title: "Tree house", icon: icon3, categoryName: "tree house" },
    { title: "Home stays & guest house", icon: icon4, categoryName: "home stays" },
    { title: "Resorts", icon: icon5, categoryName: "resorts" },
    { title: "Hotels", icon: icon6, categoryName: "hotels" },
]

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
        category: "resorts",
        title: "resort",
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

    // states ------------------->
    const [data, setData] = useState(cardData);
    const [activeTab, setActivetab] = useState("");

    // function for filtering the data's --------------->  
    const handleFilter = (categoryName) => {
        if (activeTab == categoryName) {
            setActivetab("");
            setData(cardData);
        } else {
            setActivetab(categoryName);
            const filteredData = cardData.filter((item, index) => {
                return item.category.toLowerCase() == categoryName.toLowerCase();
            })
            // // ( (filteredData);
            setData(filteredData)
        }

    }

    return (
        <>
            <section className='main-container mx-4 md:mx-10 mt-14'>
                <header className='md:flex justify-between'>
                    <div className="container-1">
                        <h1 className='text-[#333333] text-xl md:text-3xl font-semibold'>Find Your Stay Amidst Munnar's Green Escapes</h1>
                        <h1 style={{ fontWeight: 400 }} className="description mt-2 text-[#808080] text-lg">From misty treehouse to warm homestays - browse handpicked stays for every kind of traveler.</h1>
                    </div>
                    <h2 className="font-semibold max-sm:text-[14px]  text-[#333333] underline hover:text-green-700">
                        View all
                    </h2>
                </header>
                <div className="tab-container flex items-center gap-4 mt-4 ">
                    {tabDatas.map((title, index) => {
                        return <div key={index} onClick={() => handleFilter(title.categoryName)} className={`tab  cursor-pointer flex gap-2 items-center md:border border-[#1a552b] rounded-md text-sm md:text-md  md:px-4 py-1 h-[50px] ${activeTab !== title.categoryName ? "md:bg-[#eeeeee] text-[#1a552b]" : "bg-green-800 text-white"}  `}>
                            <Image src={title.icon} />
                            <h1 className='hidden md:block'>{title.title}</h1>
                        </div>

                    })}
                </div>

                <div className="card-container mt-4 flex space-x-4 overflow-x-auto scrollbar-hide">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="card min-w-[280px] max-w-xs rounded-2xl shadow-md overflow-hidden border border-gray-300 p-4 bg-[#eeeeee] flex-shrink-0"
                        >
                            {/* Image */}
                            <div className="img-container relative group ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <button className="absolute group-hover:opacity-0  transition-all duration-500  top-2 right-2 bg-[#eeeeee] rounded-full p-2 shadow hover:scale-110 ">
                                    <Image src={heart} alt="heart" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="mt-2">
                                {/* Rating */}
                                <div className="flex items-center text-sm text-[#333333]">
                                    <span className="mr-1">🌟</span>
                                    <span className="font-medium">{item.rating}</span>
                                    <span className="ml-1">({item.reviews})</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-[#333333]">
                                    {item.title}
                                </h3>

                                {/* Price */}
                                <p className="text-[#af4300] font-semibold">
                                    ₹{item.price} / night
                                </p>

                                {/* Tags */}
                                <p className="text-sm text-gray-600">{item.tags}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default StayOptionsSection