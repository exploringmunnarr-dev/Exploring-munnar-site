import React from "react";
import icon1 from "../assets/whyChooseUsIcon1.svg";
import icon2 from "../assets/whyChooseUsIcon2.svg";
import icon3 from "../assets/whyChooseIcon3.svg";
import icon4 from "../assets/whyChooseIcon4.svg";
import Image from "next/image";
const cardData = [
  {
    title: "Local Expertise",
    description: "Curated by locals and travel pros who know Munnar inside out",
    icon: icon1,
  },
  {
    title: "Personalized Itineraries",
    description:
      "Tell us your interests and budget — we’ll build your ideal trip.",
    icon: icon2,
  },
  {
    title: "Real-Time Info",
    description:
      "Get live updates on weather, roads, transport, and attractions.",
    icon: icon3,
  },
  {
    title: "Customer Support",
    description:
      "Got a question? Our support team is always just a message away.",
    icon: icon4,
  },
];
const WhyChooseUs = () => {
  return (
    <>
      <section className="md:mx-10 max-sm:mt-[-60px]  md:mt-30 mx-4 md:flex items-center justify-between gap-4 ">
        <div className="first-container w-[100%] md:w-[40%] ">
          <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
            Why Travelers Choose Exploring Munnar
          </h1>
          <h1 className="text-lg mt-2 max-sm:text-[14px] text-[#999999]">
            We’re more than a travel guide — we’re your local companion for a
            hassle-free, personalized, and unforgettable Munnar experience.
          </h1>
        </div>
        <div className="second-container w-[100%] mt-4 md:mt-0 md:w-[55%] space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4 rounded-lg">
          {cardData.map((item, index) => {
            return (
              <div className=" bg-[#eeeeee] p-4 rounded-xl  gap-4 flex items-center">
                <div className="icon-container bg-white flex items-center justify-center rounded-full w-24 h-[50px]">
                  <Image src={item.icon} className="w-10 h-10" />
                </div>
                <div className="content-container">
                  <h1 className="font-medium text-lg">{item.title}</h1>
                  <h1 className="text-[#777777]">{item.description}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
