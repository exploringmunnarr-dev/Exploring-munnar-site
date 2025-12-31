"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const accordianData = [
  {
    question: "Are all hotels and stays verified?",
    answer:
      "Yes. All listed stays are personally verified by our team or trusted local partners.",
  },
  {
    question: "Can I choose stays based on location in Munnar?",
    answer:
      "Yes. You can filter stays by areas like Munnar Town, Chinnakanal, Devikulam, Suryanelli, and more.",
  },
  {
    question: "Do you list homestays, treehouses, and eco stays?",
    answer:
      "Absolutely. We feature homestays, treehouses, eco cottages, tents, and unique stays.",
  },
  {
    question: "Are prices transparent?",
    answer:
      "Yes. No hidden charges. Final price will be clearly shared before confirmation.",
  },
  {
    question: "Can I cancel or change my stay booking?",
    answer:
      "Yes, as per the property’s cancellation policy. We’ll inform you in advance.",
  },
  {
    question: "Is local support available during my stay?",
    answer:
      "Yes. Our Exploring Munnar support team is available throughout your trip.",
  },
];

const HotelsFaq = () => {
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

export default HotelsFaq;
