import React from "react";
import { Info, Ban, Bell, CreditCard, UserRound } from "lucide-react";
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import Image from "next/image";
const policies = [
  {
    icon: i1,
    title: "General Policies",
    subtitle:
      "Check-in at 12 PM, valid ID required, only registered guests allowed.",
    description:
      "Guests are required to show a photo ID and credit card at check-in. You need to let the property know what time you’ll be arriving in advance.",
  },
  {
    icon: i2,
    title: "Prohibited Activities",
    subtitle:
      "Check-in at 12 PM, valid ID required, only registered guests allowed.",
    description:
      "Guests are required to show a photo ID and credit card at check-in. You need to let the property know what time you’ll be arriving in advance.",
  },
  {
    icon: i3,
    title: "Property Usage",
    subtitle:
      "Check-in at 12 PM, valid ID required, only registered guests allowed.",
    description:
      "Guests are required to show a photo ID and credit card at check-in. You need to let the property know what time you’ll be arriving in advance.",
  },
  {
    icon: i4,
    title: "Payment & Cancellation",
    subtitle:
      "100% payment for peak season, cancellations within 48 hrs are non-refundable.",
    description:
      "Guests are required to show a photo ID and credit card at check-in. You need to let the property know what time you’ll be arriving in advance.",
  },
  {
    icon: i5,
    title: "Guest Guidelines",
    subtitle:
      "Children of all ages are welcome, Pets are allowed. Charges may apply.",
    description:
      "To see correct prices and occupancy info, add the number and ages of children in your group to your search.",
  },
];

const HotelsRulesRegulation = () => {
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
          {policies.map((policy, index) => (
            <div key={index} className="">
              <div className="flex items-start gap-3 py-4">
                <Image src={policy.icon} />
                <div className="flex gap-3 items-start">
                  <h3 className="font-semibold text-[#333333] text-lg w-[250px] ">
                    {policy.title}
                  </h3>
                  <div>
                    <p className="text-[#1a1a1a]">{policy.subtitle}</p>
                    <p className="text-[#777777] text-sm w-[90%]">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < policies.length - 1 && (
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
