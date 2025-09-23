"use client";

import Image from "next/image";

export default function NavbarTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "cab", label: "Cab booking", icon: "/icons/cab.svg" },
    { id: "self", label: "Self drive car", icon: "/icons/car.svg" },
    { id: "bike", label: "Bike Rentals", icon: "/icons/bike.svg" },
  ];

  return (
    <div className="flex rounded-lg overflow-hidden shadow-md w-full bg-white">
      {tabs.map((tab, index) => (
        <div key={tab.id} className="flex-1 relative flex items-center">
          <button
            className={`w-full py-3 px-4 font-medium max-sm:text-[11px] cursor-pointer transition flex items-center justify-center gap-3 rounded-none relative ${
              activeTab === tab.id
                ? "bg-[#AF4300] text-white"
                : "bg-white text-black"
            } h-full`}
            style={{
              marginLeft: index === 0 ? 0 : "4px",
              marginRight: index === tabs.length - 1 ? 0 : "4px",
              width: `calc(100% - ${
                index === 0 || index === tabs.length - 1 ? "0px" : "8px"
              })`,
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <Image
              src={tab.icon}
              alt={tab.label}
              width={45}
              height={35}
              className={`transition hidden md:block ${
                activeTab === tab.id ? "invert brightness-0" : ""
              }`}
            />
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#114422]"></span>
            )}
          </button>

          {index < tabs.length - 1 && (
            <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-black z-10"></div>
          )}
        </div>
      ))}
    </div>
  );
}
