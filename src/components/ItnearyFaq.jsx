"use client"
import React, { useState } from "react";
import Image from "next/image";
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
const accordianData = [
    {
        question: "Are all stays listed verified?",
        answer:
            "Yes. Every stay listed on Exploring Munnar is personally verified by our team or trusted local partners for quality, safety, and authenticity.",
    },
    {
        question: "Do you charge any booking fees or hidden charges?",
        answer:
            "No. We do not charge any hidden fees. The price you see is the final price.",
    },
    {
        question: "Can I cancel or modify my booking?",
        answer:
            "Yes, cancellations and modifications are possible. Policies may vary based on the stay.",
    },
    {
        question: "How do I find stays based on my travel route or destination?",
        answer:
            "You can search stays by location, filters, or directly on the interactive map.",
    },
    {
        question: "What if I need help during my stay?",
        answer:
            "Our support team and local partners are available 24/7 to assist you.",
    },
    {
        question: "Do you list eco stays, treehouses, or camping options?",
        answer:
            "Yes, we list a variety of unique stays including eco stays, treehouses, and camping options.",
    },
];

const ItnearyFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="mt-14 md:mx-10 mx-4">
            <h1 className="font-semibold text-lg md:text-3xl mb-6">
                Got Questions? We've Got Answers
            </h1>

            <div className="max-sm:space-y-2 space-y-4">
                {accordianData.map((item, index) => (
                    <div
                        key={index}
                        className=" rounded-xl  p-4 cursor-pointer transition-all duration-300"
                    >
                        {/* Question */}
                        <div
                            className={`flex justify-between items-center ${activeIndex == index ? "border-b" : "border-none"} pb-2 border-gray-300`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className=" text-md md:text-xl text-[#333333] md:font-semibold max-sm:w-[80%] ">{item.question}</h2>
                            <span className="w-8 h-8 bg-[#eeeeee] rounded-full cursor-pointer flex items-center justify-center">
                                {activeIndex === index ? <Image src={minus} /> : <Image src={plus} />}
                            </span>
                        </div>

                        {/* Answer */}
                        <div
                        className={`mt-2 max-sm:text-sm text-[#777777] transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-40" : "max-h-0"
                                }`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItnearyFaq;
