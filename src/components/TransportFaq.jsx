"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const accordianData = [
  {
    question: "What transport options are available in Munnar?",
    answer:
      "Cabs, self-drive cars, bike rentals, and local buses are available.",
  },
  {
    question: "Are drivers local and experienced?",
    answer:
      "Yes. Our drivers are locals who know Munnar’s terrain and routes well.",
  },
  {
    question: "Can I book transport in advance?",
    answer:
      "Yes. Advance booking is recommended, especially during weekends and holidays.",
  },
  {
    question: "Do you provide airport and railway station pickups?",
    answer:
      "Yes. We offer airport, railway, and intercity pickup & drop services.",
  },
  {
    question: "Are transport prices fixed?",
    answer:
      "Prices depend on distance, vehicle type, and duration. No hidden costs.",
  },
  {
    question: "Is customer support available during the journey?",
    answer: "Yes. Our support team is reachable throughout your travel.",
  },
];

const TransportFaq = () => {
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

export default TransportFaq;
