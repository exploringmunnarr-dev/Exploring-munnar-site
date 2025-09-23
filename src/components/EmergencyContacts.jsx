import React from "react";
import h1 from "../assets/h1.svg";
import h2 from "../assets/h2.svg";
import h3 from "../assets/h3.svg";
import h4 from "../assets/h4.svg";
import Image from "next/image";

const data = [
  { img: h1, title: "Hill police" },
  { img: h2, title: "Ambulance" },
  { img: h3, title: "Forest Department" },
  { img: h4, title: "Emergency helpline" },
];
const EmergencyContacts = () => {
  return (
    <>
      <section className="mt-4 md:mt-10">
        <div className="heading-container text-center py-2 rounded-lg bg-[#C9001B] text-white">
          <h1 className="font-bold text-4xl">Emergency contacts</h1>
        </div>
        <div className="card-container grid grid-cols-4 gap-3 mt-4 ">
          {data.map((item, index) => {
            return (
              <div className="card bg-[#EEEEEE] rounded-lg text-center p-4">
                <Image src={item.img} className="w-fit m-auto h-[60px]" />
                <h1 className="text-lg font-semibold text-[#333333] mt-2">
                  {item.title}
                </h1>
                <button
                  className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] cursor-pointer hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] 
     mt-2 w-full text-white rounded-lg py-2"
                >
                  Call now
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default EmergencyContacts;
