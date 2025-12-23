import React, { useEffect, useState } from "react";
import img1 from "../assets/adventureImg1.svg";
import img2 from "../assets/adventureImg2.svg";
import img3 from "../assets/adventureImg3.svg";
import compass from "../assets/compass.svg";
import routeImg1 from "../assets/routeImg1.svg";
import Image from "next/image";
import { useFormData } from "@/context/FormProvider";
import axios from "axios";

const attraction_data = [
  {
    img: img1,
    title: "Mattupetty – Topstation – Vattavada",
    description: "Scenic tea trails & mountain views",
  },
  {
    img: img2,
    title: "Eravikulam  Marayoor – Kanthalloor",
    description: "Wildlife ,& view points",
  },
  {
    img: img3,
    title: "Devikulam – Chinnakanal – Poopara",
    description: "Water falls , lakes & scenic routes",
  },
];

const ItnearyRoutesForm = ({ setStep }) => {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Context Data's
  const { itnearyFormData, setItnearyFormData } = useFormData();

  // States
  const [selectedRoutes, setSelectedRoutes] = useState(() => {
    return itnearyFormData.routes ? itnearyFormData.routes : [];
  });

  const [selectedTab, setSelectedTab] = useState(
    "Mattupetty – Topstation – Vattavada"
  );
  const [fetchedRoutes, setFetchedRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const handleCheck = (r) => {
    console.log("Checked route : ", r);
    setSelectedRoutes((prev) => {
      if (prev.includes(r)) {
        return prev.filter((item) => item !== r);
      } else {
        return [...prev, r];
      }
    });
  };

  const handleTabChange = (tabTitle) => {
    setSelectedTab(tabTitle);
    setSelectedRoutes([]); // Reset selections for new tab
  };

  // Update form data when selected routes change
  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      routes: selectedRoutes,
    }));
  }, [selectedRoutes, setItnearyFormData]);

  // Fetch routes when tab changes
  useEffect(() => {
    fetchRoutes();
  }, [selectedTab]);

  // Function to store data in localStorage
  const handleNext = () => {
    localStorage.setItem("itnearyData", JSON.stringify(itnearyFormData));
  };

  console.log("fetched routes : ", fetchedRoutes);

  const normalizeRoute = (value) =>
    value.replace(/–/g, "-").replace(/\s+/g, " ").trim();

  async function fetchRoutes() {
    if (!selectedTab) return;

    setIsLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/api/attractions`, {
        params: {
          route: normalizeRoute(selectedTab),
        },
      });

      console.log("Fetched data : ", res.data.data);

      // Transform API data to match route_data structure
      // Adjust these fields based on your actual API response structure
      const formattedRoutes = res.data.data.map((item) => ({
        route:  item.spot_name,
        distance: item.distance || item.location || "Distance unavailable",
        img: routeImg1, // Use default image or map from API if available
        checked: false,
      }));

      setFetchedRoutes(formattedRoutes.length > 0 ? formattedRoutes : []);
    } catch (err) {
      console.error("Error fetching routes:", err.message);
      setFetchedRoutes([]); // Clear routes on error
    } finally {
      setIsLoading(false);
    }
  }

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

        <div className="card-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {attraction_data.map((item, index) => {
            const isActive = selectedTab === item.title;
            return (
              <div
                key={index}
                className={`card relative w-full cursor-pointer transition-all duration-200 ${
                  isActive ? "" : ""
                }`}
                onClick={() => handleTabChange(item.title)}
              >
                <div className="img-container w-[100%]">
                  <Image
                    src={item.img}
                    className="w-[100%] object-cover rounded-lg"
                    alt={item.title}
                  />
                </div>
                <div className="content-container absolute top-[50%] translate-y-[-50%] left-6">
                  <h1
                    className={`font-semibold max-sm:text-xl text-3xl w-[65%] transition-all duration-200 ${
                      isActive ? "text-white drop-shadow-lg" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <h1 className="text-white mt-2">{item.description}</h1>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTabChange(item.title);
                    }}
                    className={`font-semibold text-white flex items-center gap-3 px-3 py-2 rounded-lg bg-[#AF4300] mt-2 cursor-pointer transition-all duration-200 ${
                      isActive ? "bg-[#8A3700] scale-105" : ""
                    }`}
                  >
                    <Image src={compass} className="w-5 h-5" alt="compass" />
                    View Attractions
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="routes-container mt-6">
          <h1 className="font-semibold text-lg text-[#246132]">
            Attractions near {selectedTab}
          </h1>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="text-gray-500">Loading attractions...</div>
            </div>
          ) : fetchedRoutes.length === 0 ? (
            <div className="flex justify-center py-8 text-gray-500">
              No attractions found for this route. Try another route.
            </div>
          ) : (
            <div className="root-checbox-container mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {fetchedRoutes.map((item, index) => (
                <div
                  key={`${item.route}-${index}`}
                  className="card flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    id={`route-${selectedTab}-${index}`}
                    onChange={() => handleCheck(item.route)}
                    checked={selectedRoutes.includes(item.route)}
                    className="accent-[#AF4300] scale-120 w-3 h-3"
                  />
                  <label
                    htmlFor={`route-${selectedTab}-${index}`}
                    className="content-contaiener flex items-center gap-4 cursor-pointer flex-1"
                  >
                    <Image
                      src={item.img}
                      className="object-cover w-12 h-12 rounded-md flex-shrink-0"
                      alt={item.route}
                    />
                    <div className="">
                      <h1 className="text-[#333333] text-lg font-medium">
                        {item.route}
                      </h1>
                      <h1 className="text-[#216432] text-sm">
                        {item.distance}
                      </h1>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="button-container flex items-center justify-end mt-10">
          <div className="container-1 md:flex items-center gap-4">
            <h1 className="flex justify-end mb-2 text-sm text-gray-600">
              {selectedRoutes.length} Out of {fetchedRoutes.length} selected
              &gt;&gt;
            </h1>
            <div className="btn-container flex gap-2">
              <button
                onClick={() => setStep("TransportsForm")}
                className="bg-gray-300 hover:bg-gray-400 px-8 py-2 rounded-lg text-black font-medium transition-colors cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setStep("review");
                }}
                className="bg-[#AF4300] hover:bg-[#8A3700] px-8 py-2 rounded-lg text-white font-medium transition-colors cursor-pointer"
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
