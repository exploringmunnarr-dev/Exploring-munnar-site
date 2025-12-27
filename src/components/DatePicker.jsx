"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import calendar from "../assets/calendarIcon.svg";
import Image from "next/image";
import { useFormData } from "@/context/FormProvider";
export default function DatePicker() {
  // context Data's
  const { setItnearyFormData, itnearyFormData } = useFormData();
  console.log("selected start date : ", new Date(itnearyFormData.startDate));
  // states
  const [selectedDate, setSelectedDate] = useState(() => {
    return itnearyFormData.startDate
      ? new Date(itnearyFormData.startDate)
      : null;
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef();

  useEffect(() => {
    setItnearyFormData((prev) => ({
      ...prev,
      startDate: selectedDate ? selectedDate.toISOString() : null,
    }));
  }, [selectedDate]);

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // logs

  // Generate days in the month
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();
  const days = daysInMonth(month, year);
  const startDay = firstDayOfMonth(month, year);

  const handleDateClick = (day) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="relative " ref={calendarRef}>
      {/* Input */}
      <div className="input-container bg-white flex items-center justify-between pr-2  border border-[#777777] rounded-lg">
        <input
          type="text"
          readOnly
          onClick={() => setShowCalendar(true)}
          value={selectedDate ? selectedDate.toDateString() : ""}
          placeholder="Select date"
          className="w-full px-4 py-2 rounded-lg cursor-pointer outline-none"
        />

        <Image src={calendar} onClick={() => setShowCalendar(true)} />
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="absolute z-50 mt-2  md:w-[50%] right-0 bg-white  rounded-lg border-1 border-gray-200 shadow-lg p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setCurrentMonth(new Date(year, month - 1, 1));
              }}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded"
            >
              <ChevronLeft />
            </button>
            <span className="font-semibold">
              {months[month]} {year}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setCurrentMonth(new Date(year, month + 1, 1));
              }}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center font-medium text-gray-500 text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-2 text-center mt-2 ">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="" />
            ))}
            {Array.from({ length: days }, (_, i) => i + 1).map((day) => {
              const isSelected =
                selectedDate &&
                day === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear();
              return (
                <button
                  type="button"
                  key={day}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDateClick(day);
                  }}
                  className={`py-1  rounded-full  hover:bg-green-900 hover:text-white ${isSelected ? "bg-green-800 text-white" : ""
                    }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
