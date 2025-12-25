import React, { useState } from "react";
import personalInfoIcon from "../assets/personalIcon.svg";
import edit_icon from "../assets/edit_icon.svg";
import calendar from "../assets/calendarIcon.svg";
import accomodation from "../assets/accomodation_icon.svg";
import routes_icon from "../assets/routes_icon.svg";
import car_icon from "../assets/car_icon.svg";
import routeImg1 from "../assets/routeImg1.svg";
import bell from "../assets/bell_icon.svg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useFormData } from "@/context/FormProvider";
import axios from "axios";
import SuccessPopup from "./SuccessPopup";

const routes_data = [
  {
    route: "Munnar rose garden",
    distance: "3km from mettupaty",
    img: routeImg1,
  },
  {
    route: "Munnar rose garden",
    distance: "4km from mettupaty",
    img: routeImg1,
  },
  {
    route: "Munnar rose garden",
    distance: "6km from mettupaty",
    img: routeImg1,
  },
  {
    route: "Munnar rose garden",
    distance: "3km from mettupaty",
    img: routeImg1,
  },
];

const ItnearyReviewForm = ({ setStep }) => {
  // Context Data's
  const { itnearyFormData, setItnearyFormData } = useFormData();

  console.log("itneary form data : ", itnearyFormData)
  // states
  const [isModal, setIsModal] = useState(false);
  // functions

  // API call
  const handleSubmit = async () => {
    try {
      // Convert values before sending
      const formattedPayload = {
        ...itnearyFormData,
        hotelRequired: Array.isArray(itnearyFormData.hotelRequired)
          ? itnearyFormData.hotelRequired
          : itnearyFormData.hotelRequired.split(",").map((item) => item.trim()),

        taxiRequirement: Array.isArray(itnearyFormData.taxiRequirement)
          ? itnearyFormData.taxiRequirement
          : itnearyFormData.taxiRequirement
            .split(",")
            .map((item) => item.trim()),

        routes: itnearyFormData.routes || [],

        notes: itnearyFormData.notes || "",
        userId: 1,
      };

      const response = await axios.post(
        "https://munnar-backend.onrender.com/api/itinerary",
        formattedPayload
      );
      setItnearyFormData({
        fullName: "",
        mobileNumber: "",
        mailId: "",
        comingFrom: "",
        contactMethod: "",
        startDate: "",
        endDate: "",
        adult: "",
        child: "",
        nightStays: "",
        typeOfGroup: "",
        hotelRequired: "",
        roomBudget: "",
        roomsRequired: "",
        taxiType: "",
        taxiRequirement: "",
        carCategory: "",
        routes: [],
      })

      setIsModal(true);
      localStorage.removeItem("itnearyData")
    } catch (error) {
      setIsModal(false);
      console.error("Error sending data:", error);
    }
  };

  function onclose() {
    // setIsModal(false);
    window.location.reload();
  }

  return (
    <>
      <section className="bg-white rounded-xl p-6 space-y-8">
        <div className="container-1 border-b md:border-none pb-2 md:pb-0 border-gray-300 flex items-center justify-between">
          <header className="w-[100%]">
            <h1 className="text-[#246132] text-lg font-semibold flex items-center gap-2">
              <span>
                <Image src={personalInfoIcon} />
              </span>
              Personal info
            </h1>
            <div className="content-container text-[#333333] md:flex items-center justify-between md:w-[60%] mt-2 md:mt-3 text-lg">
              <h1>{itnearyFormData?.fullName}</h1>
              <h1>{itnearyFormData?.mobileNumber}</h1>
              <h1>{itnearyFormData?.comingFrom}</h1>
              <h1>Contact preference : By {itnearyFormData.contactMethod}</h1>
            </div>
          </header>
          <Image
            onClick={() => setStep("personal_info")}
            src={edit_icon}
            className="cursor-pointer"
          />
        </div>
        <div className="container-2 border-b md:border-none pb-2 md:pb-0 border-gray-300 flex items-center justify-between">
          <header className="w-[100%]">
            <h1 className="text-[#246132] text-lg font-semibold flex items-center gap-2">
              <span>
                <Image src={calendar} />
              </span>
              Trip dates & group details
            </h1>
            <div className="content-container text-[#333333] md:flex items-center justify-between w-[100%] md:w-[50%] mt-2 md:mt-3 text-lg">
              <h1>{itnearyFormData?.startDate} – {itnearyFormData?.endDate}</h1>
              <h1> {itnearyFormData?.adult} Adults</h1>
              <h1>{itnearyFormData?.typeOfGroup}</h1>
            </div>
          </header>
          <Image
            src={edit_icon}
            onClick={() => setStep("trip_date")}
            className="cursor-pointer"
          />
        </div>
        <div className="container-2 border-b md:border-none pb-2 md:pb-0 border-gray-300 flex items-center justify-between">
          <header className="w-[100%]">
            <h1 className="text-[#246132] text-lg font-semibold flex items-center gap-2">
              <span>
                <Image src={accomodation} className="w-7" />
              </span>
              Accomodation
            </h1>
            <div className="content-container text-[#333333] md:flex items-center justify-between md:w-[50%] mt-2 md:mt-3 text-lg">
              <h1>{itnearyFormData?.hotelRequired}</h1>
              <h1> Type: {itnearyFormData?.roomsRequired} Room</h1>
              <h1>Budget: Rs {itnearyFormData.roomBudget}/room</h1>
            </div>
          </header>
          <Image src={edit_icon} className="cursor-pointer" />
        </div>
        <div className="container-2 border-b md:border-none pb-2 md:pb-0 border-gray-300 flex items-center justify-between">
          <header className="w-[100%]">
            <h1 className="text-[#246132] text-lg font-semibold flex items-center gap-2">
              <span>
                <Image src={car_icon} className="w-7" />
              </span>
              Transports
            </h1>
            <div className="content-container text-[#333333] md:flex items-center justify-between  md:w-[50%] mt-2 md:mt-3 text-lg">
              <h1>{itnearyFormData?.taxiType}</h1>
              <h1>Requirement: {itnearyFormData?.taxiRequirement}</h1>
              <h1>{itnearyFormData?.carCategory}</h1>
            </div>
          </header>
          <Image src={edit_icon} className="cursor-pointer" />
        </div>
        <div className="container-2 md:border-none pb-2 md:pb-0 border-gray-300 flex items-center justify-between">
          <header className="w-[100%]">
            <h1 className="text-[#246132] text-lg font-semibold flex items-center gap-2">
              <span>
                <Image src={routes_icon} className="w-7" />
              </span>
              Routes
            </h1>
            {/* <div className="container-1 text-[#333333] md:flex items-center  gap-6 mt-2 text-lg ">
              <h1>Mattupetty–Topstation–Vattavada</h1>
              <h1>Requirement: Local Sightseeing</h1>
            </div> */}
          </header>
          <Image src={edit_icon} className="cursor-pointer" />
        </div>
        <div className="routes-container space-y-2 md:grid grid-cols-4">
          {itnearyFormData?.routes.map((item, index) => {
            return (
              <>
                <div className="main-container flex gap-4 items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    className="scale-125 accent-[#AF4300]"
                  />
                  <div className="flex items-center gap-3">
                    <Image src={item.img} />
                    <div className="text-lg">
                      <h1 className="text-black md:text-[#333333] text-sm md:text-lg ">
                        {item}
                      </h1>
                      {/* <h1 className="text-[#333333] text-sm md:text-lg">
                        {item}
                      </h1> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="text-box-container ">
          <h1 className="flex items-center gap-3 text-[#333333] font-semibold text-lg">
            <span>
              <Image src={bell} className="w-4" />
            </span>
            Notes
          </h1>
          <textarea className="min-h-[100px] max-h-[100px] p-2 border-1 outline-none border-[#777777] rounded-lg w-[100%] mt-4"></textarea>
        </div>
        <footer className="md:text-center flex md:items-center md:justify-center">
          <div className="w-[100%]">
            <h1 className="flex items-center md:justify-center gap-2 text-[15px] md:text-lg">
              <input type="checkbox" className="scale-125 accent-[#AF4300]" />I
              confirm all the details are correct
            </h1>
            <h1 className="flex items-center md:w-fit md:m-auto mt-2 md:mt-0 justify-end ">
              6 Out of 6 <ChevronRight className="h-5" />{" "}
            </h1>
            <div className="btn-container flex justify-end md:block">
              <button
                onClick={handleSubmit}
                className="btn-green px-10 mt-2 py-2 font-semibold text-white rounded-lg cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </footer>
        {isModal && <SuccessPopup onClose={onclose} />}
      </section>
    </>
  );
};

export default ItnearyReviewForm;
