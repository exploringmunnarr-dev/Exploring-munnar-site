// components/NearByAttractionsTab.jsx
"use client";
import { useState } from "react";

const NearByAttractionsTab2 = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    // You can add scroll behavior or other effects here
    document.querySelector(`[data-route="${route}"]`)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="tab-container flex flex-wrap gap-2 mb-8 bg-white p-4 rounded-xl shadow-md">
      {routes.map((route) => (
        <button
          key={route}
          data-route={route}
          onClick={() => handleRouteSelect(route)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedRoute === route
              ? "bg-[#1e40af] text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
          }`}
        >
          {route}
        </button>
      ))}
    </div>
  );
};

export default NearByAttractionsTab2;
