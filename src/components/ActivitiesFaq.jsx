"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const accordianData = [
  {
    question: "Are activities suitable for families and kids?",
    answer:
      "Yes. We list activities suitable for families, couples, and adventure lovers.",
  },
  {
    question: "Do activities require advance booking?",
    answer:
      "Some popular activities do. We recommend booking in advance during peak season.",
  },
  {
    question: "Are adventure activities safe?",
    answer:
      "Yes. All activities are conducted by trained operators following safety standards.",
  },
  {
    question: "Can I filter activities by type?",
    answer:
      "Yes. You can filter by boating, trekking, zipline, cultural events, wellness, etc.",
  },
  {
    question: "Are activities available all year round?",
    answer:
      "Most are seasonal. Availability depends on weather and local conditions.",
  },
  {
    question: "Can I combine activities with my itinerary?",
    answer:
      "Yes. We can include activities while planning your personalized itinerary.",
  },
];

const ActivitiesFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-14 md:mx-10 mx-4">
      <h1 className="font-semibold text-lg md:text-3xl mb-6">
        Activities – FAQ
      </h1>

      <div className="max-sm:space-y-2 space-y-4">
        {accordianData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-4 cursor-pointer transition-all duration-300"
          >
            {/* Question */}
            <div
              className={`flex justify-between items-center ${
                activeIndex == index ? "border-b" : "border-none"
              } pb-2 border-gray-300`}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-md md:text-xl text-[#333333] md:font-semibold max-sm:w-[80%]">
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

export default ActivitiesFaq;
