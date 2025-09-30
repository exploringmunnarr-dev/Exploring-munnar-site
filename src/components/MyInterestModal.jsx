import {
  X,
  Landmark,
  Utensils,
  Globe,
  Music,
  Trophy,
  Building,
  Trees,
  Camera,
  BookOpen,
  ShoppingBag,
  Theater,
  Waves,
  Wine,
  Yoga,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const categories = [
  { title: "Architecture", icon: Landmark },
  { title: "Food scenes", icon: Utensils },
  { title: "History", icon: Globe },
  { title: "Live music", icon: Music },
  { title: "Live sports", icon: Trophy },
  { title: "Museums", icon: Building },
  { title: "Outdoors", icon: Trees },
  { title: "Photography", icon: Camera },
  { title: "Reading", icon: BookOpen },
  { title: "Shopping", icon: ShoppingBag },
  { title: "Theatre", icon: Theater },
  { title: "Water sports", icon: Waves },
  { title: "Wine", icon: Wine },
  { title: "Yoga", icon: Yoga },
];

const MyInterestModal = ({ isMyInterestModal, setIsMyInterestModal }) => {
  // states
  const [selectedItem, setSelectedItem] = useState([]);

  // ref's
  const modalRef = useRef(null);

  // useEffect call's

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsMyInterestModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMyInterestModal]);

  // functions

  const handleSelectedItem = (value) => {
    const lists = [...selectedItem];
    if (lists.includes(value)) {
      const filteredList = lists.filter((item, index) => {
        return item != value;
      });
      setSelectedItem(filteredList);
    } else {
      setSelectedItem((prev) => [...prev, value]);
    }
  };

  console.log("selected Items : ", selectedItem);

  return (
    <>
      <section
        ref={modalRef}
        className="bg-white fixed top-[50%] left-[50%] translate-y-[-50%] z-10 translate-x-[-50%] w-[600px] h-[460px] py-2 rounded-lg border border-gray-200"
      >
        <div className="main-container-1 relative">
          <header className="py-1 border-b border-gray-300 px-2 flex justify-end">
            <X
              onClick={() => setIsMyInterestModal(false)}
              className="w-8 h-8 cursor-pointer"
            />
          </header>
          <div className="header-container mt-3 px-4">
            <h1 className="font-semibold text-[#333333] text-2xl">
              What are you into?
            </h1>
            <h1 className="text-gray-500 text-lg mt-1">
              Pick some interests that you enjoy and that you want to show on
              your profile.
            </h1>
          </div>
          <div className="content-container flex flex-wrap gap-3 mt-3 px-4">
            {categories.map((item, index) => {
              return (
                <div
                  onClick={() => handleSelectedItem(item.title)}
                  className={`tab w-fit px-4 py-2  cursor-pointer rounded-full border border-gray-200  ${
                    selectedItem.includes(item.title)
                      ? "bg-gray-200 text-black"
                      : "bg-gray-50 text-[#333333]"
                  }`}
                >
                  <h1 className="">{item.title}</h1>
                </div>
              );
            })}
          </div>
          <div className="footer-container fixed bottom-0 flex justify-end w-[100%] px-4 py-2 ">
            <button className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white text-xl px-6 cursor-pointer py-2 rounded-xl">
              Add
            </button>
          </div>
        </div>
      </section>
      <div className="form-tint fixed top-0 right-0 left-0 bottom-0"></div>
    </>
  );
};

export default MyInterestModal;
