"use client"
import React, { useState } from 'react'

const NearByAttractionsTab = ({routes}) => {
     const [activeRoute, setActiveRoute] = useState(routes[0]);
  return (
     <div className="tab-container mt-3 sticky top-0 md:top-15 py-4 bg-white z-30">
                    <div className="flex flex-wrap gap-3">
                        {routes.map((route) => (
                            <button
                                key={route}
                                onClick={() => setActiveRoute(route)}
                                className={`px-4 py-1.5 cursor-pointer rounded-lg border transition-all 
                                ${activeRoute === route
                                        ? "bg-green-900 text-white border-green-900"
                                        : "border-green-900 bg-[#EEEEEE] text-green-900"
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
