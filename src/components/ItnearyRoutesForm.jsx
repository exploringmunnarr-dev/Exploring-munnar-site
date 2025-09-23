import React, { useEffect, useState } from "react";
import img1 from "../assets/adventureImg1.svg";
import img2 from "../assets/adventureImg2.svg";
import img3 from "../assets/adventureImg3.svg";
import compass from "../assets/compass.svg";
import routeImg1 from "../assets/routeImg1.svg";
import Image from "next/image";
import { useFormData } from "@/context/FormProvider";
const attraction_data = [
  {
    img: img1,
    title: "Mattupetty–Topstation–Vattavada",
    description: "Scenic tea trails & mountain views",
  },
  {
    img: img2,
    title: "Eravikulam–Marayoor–Kanthalloor",
    description: "Wildlife ,& view points",
  },
  {
    img: img3,
    title: "Devikulam–Chinnakanal–Poopara",
    description: "Water falls , lakes & scenic routes",
  },
];

const route_data = [
  {
    route: "Munnar rose garden",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden2",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden3",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden4",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden5",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden6",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden7",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden8",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden9",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden10",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden11",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden12",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden13",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden14",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden15",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
  {
    route: "Munnar rose garden16",
    distance: "3km from mettupaty",
    img: routeImg1,
    checked: false,
  },
];

const ItnearyRoutesForm = ({ setStep }) => {
  // Context Data's
  const { itnearyFormData, setItnearyFormData } = useFormData();
  // states
  const [selectedRoutes, setSelectedRoutes] = useState(() => {
    return itnearyFormData.routes ? itnearyFormData.routes : [];
  });

  // functions
  const handleCheck = (r) => {
    console.log("Checked route : ", r);
    setSelectedRoutes((prev) => {
      if (selectedRoutes.includes(r)) {
        0;
        return prev.filter((item) => item != r);
      } else {
        return [...prev, r];
      }
    });
  };

  useEffect(()=>{
    setItnearyFormData((prev)=>({
      ...prev, 
      "routes" : selectedRoutes
    }))
  }, [selectedRoutes])

  // function to store data in localStorage
  const handleNext = () => {
    localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
  };

  return (
    <>
      <section className="bg-white p-4 rounded-lg">
        <header className="text-center mt-6">
          <h1 className="text-[#164d27] font-semibold text-xl">
            Pick your adventure
          </h1>
          <h1 className="text-[#777777] mt-2">
            Select a route and Discover What awaits along the way
          </h1>
        </header>
        <div className="card-container grid  md:grid-cols-2  lg:grid-cols-3 gap-3 mt-4">
          {attraction_data.map((item, index) => {
            return (
              <div key={index} className="card relative w-full">
                <div className="img-container w-[100%]">
                  <Image src={item.img} className="w-[100%] object-cover" />
                </div>
                <div className="content-container absolute top-[50%] translate-y-[-50%] left-6">
                  <h1 className="text-white font-semibold max-sm:text-xl text-3xl w-[65%]">
                    {item.title}
                  </h1>
                  <h1 className="text-white mt-2">{item.description}</h1>
                  <button className="font-semibold text-white flex items-center gap-3 px-3 py-2 rounded-lg bg-[#AF4300] mt-2 cursor-pointer">
                    <Image src={compass} />
                    View Attractions
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="routes-container mt-6">
          <h1 className="font-semibold text-lg text-[#246132]">
            Attraction near Mattupetty–Topstation–Vattavada{" "}
          </h1>
          <div className="root-checbox-container mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {route_data.map((item, index) => {
              return (
                <div key={index} className="card flex  items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(item.route)}
                    checked={selectedRoutes.includes(item.route) ? true : false}
                    className="accent-[#AF4300] scale-150 "
                  />
                  <div className="content-contaiener flex items-center gap-4">
                    <Image src={item.img} className="object-cover" />
                    <div>
                      <h1 className="text-[#333333] text-lg">{item.route}</h1>
                      <h1 className="text-[#216432] ">{item.distance}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container flex items-center justify-end mt-10 ">
          <div className="container-1 md:flex items-center gap-4">
            <h1 className="flex justify-end mb-2">5 Out of 6 &gt; &gt;</h1>
            <div className="btn-container flex gap-2">
              <button
                onClick={() => setStep("TransportsForm")}
                className="bg-gray-300 px-8 py-2 rounded-lg text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setStep("review");
                }}
                className="btn-green px-8 py-2 rounded-lg text-white cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItnearyRoutesForm;
