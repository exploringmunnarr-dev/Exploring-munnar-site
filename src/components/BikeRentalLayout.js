"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import SuccessPopup from "./SuccessPopup";


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

export default function BikeRentalLayout() {
  // Auth
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mobile, setMobile] = useState("");
  const [days, setDays] = useState("");
  const [notes, setNotes] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [driverNeeded, setDriverNeeded] = useState("");
  const [isModal, setIsModal] = useState(false)

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!pickup) newErrors.pickup = "Pickup location is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!mobile) newErrors.mobile = "Mobile number is required";
    if (!days) newErrors.days = "No of days is required";
    if (!fuelType) newErrors.fuelType = "Select a fuel type";
    if (!driverNeeded) newErrors.driverNeeded = "Specify if driver is needed";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const queryParams = new URLSearchParams({
      pickup,
      drop,
      date,
      time,
      mobile,
      days,
      notes,
      fuelType,
      driverNeeded,
    }).toString();

    try {
      const response = await axios.post(`${apiUrl}/api/bike-rentals`, {
        userId: 1,
        pickupLocation: pickup,
        dropLocation: drop,
        date: date,
        time: time,
        mobileNumber: mobile,
        noOfDays: days,
        fuelType: fuelType,
        notes:notes,
        driverNeeded: driverNeeded.toLowerCase() == "yes" ? true : false,
      });
          setIsModal(true)
    } catch (err) {
      console.error("error occred while posting cab booking form : ", err);
        setIsModal(false)
    }
  };

  const locations = [
    "Munnar Town",
    "Kochi Airport",
    "Aluva",
    "Ernakulam",
    "Adimali",
  ];

   function onClose(){
    window.location.reload()
  }

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
              label="Pickup Location"
              placeholder="Pickup Location"
              options={locations}
              value={pickup}
              onChange={setPickup}
              error={errors.pickup}
            />

            <CustomDropdown
              label="Drop Location"
              placeholder="Drop Location (optional)"
              options={locations}
              value={drop}
              onChange={setDrop}
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
                className={`w-full border rounded-lg pl-3 pr-10 py-2 outline-none text-black ${
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
                className={`w-full border rounded-lg pl-3 pr-10 py-2 outline-none text-black ${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Mobile and No of Days */}
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
                placeholder="Eg:+91 55555 55555"
                className={`w-full border rounded-lg pl-3 pr-4 py-2 outline-none placeholder-gray-400 text-black ${
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
                  src="/icons/calendar.svg"
                  alt="days"
                  width={18}
                  height={18}
                />
                No of Days
              </label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                min="1"
                placeholder="1"
                className={`w-full border rounded-lg pl-3 pr-4 py-2 outline-none placeholder-gray-400 text-black ${
                  errors.days ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.days && (
                <p className="text-red-500 text-xs mt-1">{errors.days}</p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Image src="/icons/note.svg" alt="notes" width={18} height={18} />
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes (optional)"
              rows={3}
              className="w-full border rounded-lg pl-3 pr-4 py-2 outline-none placeholder-gray-400 text-black border-gray-300"
            />
          </div>

          {/* Fuel type and Driver needed */}
          <div className="md:flex items-start gap-12 mb-4">
            <div>
              <h3 className="text-md font-semibold mb-2 text-black">
                Choose fuel type
              </h3>
              <div className="flex gap-4 text-black">
                {["Petrol", "Diesel", "EV"].map((fuel) => (
                  <label
                    key={fuel}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="fuel"
                      value={fuel}
                      checked={fuelType === fuel}
                      onChange={() => setFuelType(fuel)}
                      className="w-4 h-4 accent-[#AF4300]"
                    />
                    {fuel}
                  </label>
                ))}
              </div>
              {errors.fuelType && (
                <p className="text-red-500 text-xs mt-1">{errors.fuelType}</p>
              )}
            </div>

            <div className="mt-2 md:mt-auto">
              <h3 className="text-md font-semibold mb-2 text-black">
                Driver needed?
              </h3>
              <div className="flex gap-4 text-black">
                {["YES", "NO"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="driver"
                      value={option}
                      checked={driverNeeded === option}
                      onChange={() => setDriverNeeded(option)}
                      className="w-4 h-4 accent-[#AF4300]"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.driverNeeded && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.driverNeeded}
                </p>
              )}
            </div>
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
      <div className="relative  bg-white rounded-xl shadow-md overflow-hidden hidden md:flex items-center justify-center w-full h-80 md:h-[400px] lg:h-[550px]">
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
              By a drive
            </span>
          </h2>
        </div>
      </div>
      {isModal && <SuccessPopup onClose={onClose}/>}
    </form>
  );
}
