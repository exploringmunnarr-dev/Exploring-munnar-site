// components/AttractionsDisplay.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NearByAttractionsTab from "./NearByAttractionsTab";

const AttractionsDisplay = ({ routes, groupedData }) => {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const currentAttractions = groupedData[selectedRoute] || [];

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
  };

  return (
    <>
      {/* Tabs */}
      <NearByAttractionsTab
        routes={routes}
        selectedRoute={selectedRoute}
        onRouteSelect={handleRouteSelect}
      />

      {/* Dynamic Header */}
      <div className="route-header mt-8 mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-[#1e40af] mb-2">
          {currentAttractions.length} Attractions on{" "}
          <span className="text-[#333333]">{selectedRoute}</span>
        </h2>
        <p className="text-gray-600">
          Perfect stops for your journey to Munnar
        </p>
      </div>

      {/* Show ONLY selected route cards */}
      <div className="card-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentAttractions.length > 0 ? (
          currentAttractions.map((item, index) => (
            <Link
              key={`${selectedRoute}-${item.title}-${index}`}
              href={item.link || "#"}
              className="card relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1e40af] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Quick Stop
                  </span>
                  <span className="text-sm font-medium text-[#1e40af]">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl mb-4">🌄</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No attractions yet
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Attractions for this route will be added soon. Choose another
              route to explore!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AttractionsDisplay;
