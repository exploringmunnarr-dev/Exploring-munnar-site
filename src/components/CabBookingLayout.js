"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import axios from "axios";

// Custom Dropdown Component
function CustomDropdown({
  label,
  options,
  placeholder,
  value,
  onChange,
  error,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
        <Image src="/icons/location.svg" alt={label} width={18} height={18} />
        {label}
      </label>
      <div
        className={`w-full border rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer ${
          value ? "text-black border-gray-400" : "text-gray-400 border-gray-300"
        } ${error ? "border-red-500" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{value || placeholder}</span>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {open && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10 max-h-40 overflow-y-auto">
          {options.map((opt, i) => (
            <li
              key={i}
              className={`px-3 py-2 cursor-pointer hover:bg-[#114422] hover:text-white ${
                value === opt ? "bg-[#114422] text-white" : "text-black"
              }`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CabBookingLayout() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mobile, setMobile] = useState("");
  const [passengers, setPassengers] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  // Error states
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {};
    if (!pickup) newErrors.pickup = "Pickup point is required";
    if (!drop) newErrors.drop = "Drop point is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!mobile) newErrors.mobile = "Mobile number is required";
    if (!passengers) newErrors.passengers = "Number of passengers is required";
    if (!selectedVehicle) newErrors.vehicle = "Please select a vehicle type";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const queryParams = new URLSearchParams({
      pickup,
      drop,
      date,
      time,
      mobile,
      passengers,
      vehicle: selectedVehicle,
    }).toString();

    const payload = {
      userId : 1,
      pickupLocation: pickup,
      dropLocation: drop,
      date: date,
      time: time,
      mobileNumber: mobile,
      noOfPassengers: passengers,
      vehicleType: selectedVehicle,
    };
      console.log("cab booking payload : ", payload);

    try {
      const response = await axios.post(
        `https://munnar-backend.onrender.com/api/cab-booking`,
        { payload }
      );
      console.log("cab booked successfully : ", response);
    } catch (err) {
      console.error("error occred while posting cab booking form : ", err);
    }
  };

  const locations = [
    "Munnar Town",
    "Kochi Airport",
    "Aluva",
    "Ernakulam",
    "Adimali",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full h-full"
    >
      {/* left layout */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
        <div>
          {/* Pickup and Drop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <CustomDropdown
              label="Pickup point"
              placeholder="Pickup location"
              options={locations}
              value={pickup}
              onChange={setPickup}
              error={errors.pickup}
            />

            <CustomDropdown
              label="Drop point"
              placeholder="Drop location"
              options={locations}
              value={drop}
              onChange={setDrop}
              error={errors.drop}
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Image
                  src="/icons/calendar.svg"
                  alt="date"
                  width={18}
                  height={18}
                />
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full border rounded-lg pl-3  py-2 outline-none text-black ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Image
                  src="/icons/time.svg"
                  alt="time"
                  width={18}
                  height={18}
                />
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full border rounded-lg pl-3  py-2 outline-none text-black ${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Mobile and Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Image
                  src="/icons/mobile.svg"
                  alt="mobile"
                  width={18}
                  height={18}
                />
                Mobile number
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                pattern="^\+?\d{10,15}$"
                placeholder="Eg:+91 55555 55555"
                className={`w-full border rounded-lg pl-3 pr-10 py-2 outline-none placeholder-gray-400 text-black ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Image
                  src="/icons/passengers.svg"
                  alt="passengers"
                  width={18}
                  height={18}
                />
                No of passengers
              </label>
              <input
                type="number"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                min="1"
                placeholder="Enter number of passengers"
                className={`w-full border rounded-lg pl-3 pr-4 py-2 outline-none placeholder-gray-400 text-black ${
                  errors.passengers ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.passengers && (
                <p className="text-red-500 text-xs mt-1">{errors.passengers}</p>
              )}
            </div>
          </div>

          {/* Vehicle Type */}
          <h3 className="text-md font-semibold mt-6 mb-2 text-black">
            Choose Vehicle Type
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {["Sedan", "Hatchback", "Suv", "Van", "Bus"].map((type) => {
              const isSelected = selectedVehicle === type;
              return (
                <div
                  key={type}
                  onClick={() => setSelectedVehicle(type)}
                  className={`flex flex-col items-center justify-center border rounded-lg py-4 cursor-pointer transition ${
                    isSelected
                      ? "bg-[#114422] border-[#114422] text-white"
                      : "bg-gray-50 border-gray-300 text-black"
                  }`}
                >
                  <Image
                    src={`/icons/${type.toLowerCase()}.svg`}
                    alt={type}
                    width={85}
                    height={58}
                    className={isSelected ? "invert" : ""}
                  />
                  <span className="text-sm mt-2">{type}</span>
                </div>
              );
            })}
            {errors.vehicle && (
              <p className="text-red-500 text-xs mt-1 col-span-full">
                {errors.vehicle}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full btn-green cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-[#0d3318] transition"
          >
            Enquire now
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Avoid the hassle of last-minute rides. Pre-book reliable cabs with
            local drivers who know Munnar's terrain. Ideal for airport
            transfers, sightseeing, and intercity travel.
          </p>
        </div>
      </div>

      {/* Right image */}
      <div className="relative bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center w-full h-80 md:h-[400px] lg:h-[550px]">
        <Image
          src="/images/munnar.jpg"
          alt="Munnar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-center leading-snug">
            <span
              style={{ fontFamily: "HelloChristine" }}
              className="italic text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl"
            >
              Explore munnar
            </span>
            <br />
            <span
              style={{ fontFamily: "Berlingo" }}
              className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              By Booking our cabs
            </span>
          </h2>
        </div>
      </div>
    </form>
  );
}
