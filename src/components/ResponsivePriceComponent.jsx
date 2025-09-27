import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ResponsivePriceComponent = ({ setispriceRange, ispriceRange }) => {
  // states
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(40000);

  // ref's
  const modalRef = useRef(null);

  const min = 0;
  const max = 60450;

  //   useEffect calls

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // click outside handler

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setispriceRange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ispriceRange]);

  return (
    <>
      <section
        ref={modalRef}
        className="fixed bottom-0 h-fit py-3 w-[100%] z-[100] rounded-t-[30px] bg-white"
      >
        <header className="relative text-center h-[45px] px-3 mt-3 border-b border-gray-300">
          <X
            onClick={() => setispriceRange(false)}
            className="absolute left-8 top-[50%] translate-y-[-80%] w-8 h-8"
          />
          <h1 className="font-semibold text-xl text-[#333333]">Budget</h1>
        </header>
        <div className="content-container mt-4 ">
          <div className="w-[90%] m-auto px-4">
            {/* Display values */}
            <p className="text-lg font-semibold mb-4">
              ₹ {minVal.toLocaleString()} - ₹ {maxVal.toLocaleString()}
            </p>

            {/* Slider Container */}
            <div className="relative w-full ">
              {/* Track */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[6px] bg-gray-300 rounded"></div>

              {/* Highlighted range */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[6px] btn-green rounded"
                style={{
                  left: `${(minVal / max) * 100}%`,
                  right: `${100 - (maxVal / max) * 100}%`,
                }}
              ></div>

              {/* Min slider */}
              <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(e) =>
                  setMinVal(Math.min(Number(e.target.value), maxVal - 1000))
                }
                className="absolute w-full h-1 bg-transparent  appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-900 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-green-900 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-green-900 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
              />

              {/* Max slider */}
              <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(e) =>
                  setMaxVal(Math.max(Number(e.target.value), minVal + 1000))
                }
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-900 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-12">
              <button className="px-4 py-2 text-lg border border-green-800 rounded-full font-semibold w-[50%]">
                Clear
              </button>
              <button className="px-4 py-2 text-lg btn-green text-white rounded-full w-[50%] font-semibold">
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="tint fixed top-0 right-0 left-0 bottom-0 z-[90]"></div>
    </>
  );
};

export default ResponsivePriceComponent;
