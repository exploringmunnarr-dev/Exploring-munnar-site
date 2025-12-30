import React from "react";
import a1 from "../assets/a1.svg";
import a2 from "../assets/a2.svg";
import a3 from "../assets/a3.svg";
import a4 from "../assets/a4.svg";
import l from "../assets/l.svg";
import Image from "next/image";
import { Filter, ListFilter } from "lucide-react";
const PopularActivities = ({ setIsResponsiveFilter, isResponsiveFilter }) => {
  return (
    <>
      <section className=" w-[100%]">
        <header className="">
          <div className="flex items-center justify-between sticky top-0 bg-white ">
            <h1 className="font-semibold text-lg md:text-3xl text-[#333333] flex items-center gap-2">
              Popular activites{" "}
              <span className="hidden md:block">of munnar</span>
            </h1>
            <div
              onClick={() => setIsResponsiveFilter(!isResponsiveFilter)}
              className="filter-btn md:hidden cursor-pointer flex items-center gap-2 border border-green-900 px-2 py-1 rounded-md"
            >
              <span className="text-green-900">Filter</span>
              <ListFilter className="text-green-900" />
            </div>
          </div>
          <h1 className="text-[#333333] mt-2">
            Discover unique experiences across nature, culture and more
          </h1>
        </header>
        {/* responsive img container */}
        <div className="img-container mt-4 relative  md:hidden">
          <Image src={a2} className="w-full h-[230px] object-cover" />
          <div className="content-container text-center  text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-3xl font-semibold mb-2">Zip line</h1>
            <h1 className="font-semibold mb-2 flex items-center gap-2">
              <span>
                <Image src={l} />
              </span>
              Panniyarkutty, Munnar
            </h1>
            {/* <button
                    className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                      hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2 "
                  >
                    View details
                  </button> */}
          </div>
          <div className="img-tint absolute top-0 rounded-xl right-0 bottom-0 left-0"></div>
        </div>
        <div className="content-container mt-4 w-[100%] hidden md:block ">
          <div className="grid w-[100%] md:grid-cols-4 grid-rows-6 gap-4">
            <div className="col-span-2 row-span-4 ">
              <div className="img-container relative h-[100%] w-[100%] rounded-xl">
                <Image
                  src={a1}
                  className="h-[100%] w-[100%] object-cover rounded-xl"
                />
                <div className="content-container text-center  text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h1 className="text-3xl font-semibold mb-2">Boating</h1>
                  <h1 className="font-semibold mb-2 flex items-center gap-2">
                    <span>
                      <Image src={l} />
                    </span>
                    Mattupetty Dam, Munnar
                  </h1>
                  {/* <button
                    className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2 "
                  >
                    View details
                  </button> */}
                </div>
                <div className="img-tint absolute top-0 rounded-xl right-0 bottom-0 left-0"></div>
              </div>
            </div>
            <div className="col-span-2 row-span-6 col-start-3">
              <div className="img-container relative">
                <Image src={a2} className="w-[100%] h-[100%] object-cover" />
                <div className="content-container text-center  text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h1 className="text-3xl font-semibold mb-2">Zip line</h1>
                  <h1 className="font-semibold mb-2 flex items-center gap-2">
                    <span>
                      <Image src={l} />
                    </span>
                    Panniyarkutty, Munnar
                  </h1>
                  {/* <button
                    className="text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
                      hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] cursor-pointer w-full rounded-lg py-2 "
                  >
                    View details
                  </button> */}
                </div>
                <div className="img-tint absolute top-0 rounded-xl right-0 bottom-0 left-0"></div>
              </div>
            </div>
            <div className="row-span-2 row-start-5">
              <div className="img-container relative h-[100%] w-[100%] rounded-xl">
                <Image
                  src={a3}
                  className="w-[100%] h-[100%] object-cover rounded-xl"
                />
                <div className="img-tint absolute top-0 rounded-xl right-0 bottom-0 left-0"></div>
              </div>
            </div>
            <div className="row-span-2 row-start-5 ">
              <div className="img-container relative h-[100%] w-[100%] rounded-xl">
                <Image
                  src={a4}
                  className="w-[100%] h-[100%] object-cover rounded-xl"
                />
                <div className="img-tint absolute top-0 rounded-xl right-0 bottom-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularActivities;
