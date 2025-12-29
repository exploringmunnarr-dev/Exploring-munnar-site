"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import img1 from '../../assets/attractionImg1.svg'
import img2 from '../../assets/attractionImg2.svg'
import img3 from '../../assets/attractionImg3.svg'
import Image from 'next/image';
import Link from 'next/link';

const routes = [
    "Mettupatty to munnar",
    "Coimbatore to munnar",
    "Ernakulam to munnar",
    "Thekady to munnar",
];

const data = [
    { img: img1, title: "Chinnakanal Waterfalls", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img2, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img3, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img1, title: "Chinnakanal Waterfalls", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img2, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img3, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img1, title: "Chinnakanal Waterfalls", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img2, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
    { img: img3, title: "Anayirangal Dam", description: "Chinnakanal Waterfalls, also known as Power House Waterfalls, is a scenic waterfall located near the Chinnakanal village in the Idukki district of Kerala, India, about 16 km from Munnar", overview: "Power House Waterfalls, also known as Chinnakanal Waterfalls, is one of the main attractions of Chinnakanal and a must-visit spot for anyone traveling to Munnar. Located along the Munnar - Thekkady highway, this beautiful waterfall offers stunning natural scenery with roadside-la easy access, making it a perfect stop for families, bikers, and nature lovers. Surrounded by dense green hills, mist, and tall trees, the waterfall provides a refreshing break from the busy hill station crowds.  Chinnakanal Waterfalls is fed by the streams that flow down from the high mountains of the Western Ghats. The sound of rushing water combined with the cool breeze creates a relaxing and peaceful environment. Because the waterfall is literally visible from the road, visitors can enjoy the view without trekking or walking long distances. This is one of the main reasons it has become a “quick-stop attraction” for those driving towards Suryanelli, Kolukkumalai, or the famous Anayirangal Dam." },
]

const page = () => {
    const [activeRoute, setActiveRoute] = useState(routes[0]);
    return (
        <>
            <Navbar />
            <div className="main-container mx-4 md:mx-10 mt-4">
                <div className="heading-container">
                    <h1 className='text-[#333333] font-semibold max-sm:text-sm text-lg sm:text-xl'>Choose nearby attractions by routes</h1>
                    <h1 className='text-[#777777] md:w-[60%] max-sm:text-sm text-lg mt-2'>From misty treehouses to warm homestays — browse handpicked stays for every kind of traveler.</h1>
                </div>
                {/* tab container  */}
                <div className="tab-container mt-3 sticky top-15 py-4 bg-white z-30">
                    <div className="flex flex-p gap-3">
                        {routes.map((route) => (
                            <button
                                key={route}
                                onClick={() => setActiveRoute(route)}
                                className={`px-4 py-1.5 cursor-pointer rounded-lg border transition-all 
                                ${activeRoute === route
                                        ? "bg-green-900 text-white border-green-900"
                                        : "border-green-900 bg-[#EEEEEE] text-green-900"
                                    }`}
                            >
                                {route}
                            </button>
                        ))}
                    </div>
                </div>
                {/* card contaienr  */}
                <div className="card-container grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {data.map((item, index) => {
                        return <Link href={`/nearByAttractions/${item.title}`} className="card relative cursor-pointer">
                            <Image src={item.img} width={100} height={100} className='w-[100%] rounded-lg' />
                            <div className="container-1 absolute bottom-0 left-0 w-full">
                                <div className="content-container relative h-[60px]">
                                    <div className="tint-container rounded-b-lg absolute top-0 bottom-0 left-0 right-0"></div>
                                    <h1 className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{item.title}</h1>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </>
    )
}

export default page