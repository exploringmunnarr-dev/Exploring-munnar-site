"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
const accordianData = [
  {
    question: "Is the itinerary fully personalized?",
    answer:
      "Yes. We design itineraries based on your dates, interests, and travel style.",
  },
  {
    question: "How many days can you plan for?",
    answer: "From short 1-day trips to extended multi-day vacations.",
  },
  {
    question: "Do you include stays, transport, and activities?",
    answer: "Yes. Everything can be included in one seamless plan.",
  },
  {
    question: "Is itinerary planning free?",
    answer:
      "Initial planning assistance is free. Charges apply only if bookings are confirmed.",
  },
  {
    question: "Can I modify the itinerary later?",
    answer: "Yes. You can request changes before final confirmation.",
  },
  {
    question: "Who will assist me during the trip?",
    answer: "Our local Munnar team will assist you throughout your journey.",
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
              className={`flex justify-between items-center ${
                activeIndex == index ? "border-b" : "border-none"
              } pb-2 border-gray-300`}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className={`text-md md:text-xl md:font-semibold max-sm:w-[80%] ${
                activeIndex === index ? "text-[#1a552b]" : "text-[#333333]"
              }`}>
                {item.question}
              </h2>
              <span className="w-8 h-8 bg-[#eeeeee] rounded-full cursor-pointer flex items-center justify-center">
                {activeIndex === index ? (
                  <Image src={minus} />
                ) : (
                  <Image src={plus} />
                )}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`mt-2 max-sm:text-sm text-[#777777] transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40" : "max-h-0"
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
