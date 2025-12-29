import React from "react";
import { Info, Ban, Bell, CreditCard, UserRound } from "lucide-react";
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import Image from "next/image";

const iconMap = {
  "General Policies": i1,
  "Guest Guidelines": i5,
  "Payment & Cancellation": i4,
  "Prohibited Activities": i2,
  "Property Usage": i3,
};

const HotelsRulesRegulation = ({ data }) => {
  const rules = data?.rules || [];

  if (!rules || rules.length === 0) {
    return null;
  }

  return (
    <>
      <section className="mt-4 md:mt-14">
        <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
          Rules & regulations
        </h1>
        <h1 className="text-[#777777] mt-2">
          Stay informed. Respect the space. Enjoy your trip worry-free.
        </h1>
        <div className="main-container mt-5 bg-[#eeeeee] p-4 rounded-xl">
          {rules.map((rule, index) => (
            <div key={index} className="">
              <div className="flex items-start gap-3 md:py-4 py-2">
                <Image src={iconMap[rule.key] || i1} alt={rule.key} />
                <div className="md:flex gap-3 items-start">
                  <h3 className="font-semibold text-[#333333] text-sm md:text-lg w-[250px] ">
                    {rule.key}
                  </h3>
                  <div>
                    <p className="text-[#1a1a1a] text-sm mt-2 md:mt-0 md:text-lg">
                      {rule.title}
                    </p>
                    <p className="text-[#777777] mt-2 md:mt-0 text-xs w-[90%] md:text-lg">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < rules.length - 1 && (
                <hr className="border-[#777777]" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HotelsRulesRegulation;
