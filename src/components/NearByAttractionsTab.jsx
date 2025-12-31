"use client";
import React from "react";

const NearByAttractionsTab = ({ routes, activeRoute, setActiveRoute }) => {
  return (
    <div className="mt-3 sticky top-0 bg-white z-30 py-4">
      <div className="flex flex-wrap gap-3">
        {routes.map((route) => (
          <button
            key={route}
            onClick={() => setActiveRoute(route)}
            className={`px-4 py-1.5 rounded-lg border transition-all
              ${
                activeRoute === route
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-[#EEEEEE] text-green-900 border-green-900"
              }`}
          >
            {route}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NearByAttractionsTab;
