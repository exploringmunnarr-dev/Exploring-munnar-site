// app/reviews/page.tsx (Next.js App Router)
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Toast from "./Toast";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";
import r4 from "../assets/r4.svg";
import r5 from "../assets/r5.svg";
import str from "../assets/str.svg";
import logo from "../assets/logo.svg";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
  {
    id: 2,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
  {
    id: 3,
    title: "best hotel in Munnar",
    rating: 4.0,
    user: "Ashok Kumar · couple",
    date: "April 14th, 2023",
    room: "Double Room",
    review:
      "Absolutely loved the peaceful surroundings. The tea estate view from the balcony was magical during sunrise. Very clean and cozy stay!",
  },
];

const categories = [
  { name: "Cleanliness", rating: 4.99, icon: r1 },
  { name: "Food", rating: 4.99, icon: r2 },
  { name: "Value", rating: 4.99, icon: r3 },
  { name: "Facilities", rating: 4.99, icon: r4 },
  { name: "Location", rating: 4.99, icon: r5 },
];
const ratings = [
  { label: "Excellent", value: 90 },
  { label: "Very good", value: 60 },
  { label: "Average", value: 30 },
  { label: "Poor", value: 10 },
  { label: "Bad", value: 5 },
];
export default function ReviewsPage({ data }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { isAuthenticated, token, setShowLoginForm } = useAuth();

  const [showAll, setShowAll] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    travelledMonth: "",
    roomType: data?.roomType || "",
  });
  const [categoryRatings, setCategoryRatings] = useState({
    cleanliness: 0,
    food: 0,
    value: 0,
    facilities: 0,
    location: 0,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsReviewModalOpen(false);
    };

    if (isReviewModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isReviewModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryRating = (key, value) => {
    setCategoryRatings((prev) => ({ ...prev, [key]: value }));
  };

  const formatTravelledMonth = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return dateStr;
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${month} ${day}${suffix}, ${date.getFullYear()}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};
    if (!selectedRating) newErrors.rating = "Please select a rating";
    if (!formData.title.trim()) newErrors.title = "Review title is required";
    if (!formData.description.trim())
      newErrors.description = "Please tell us about your stay";
    if (!formData.roomType.trim()) newErrors.roomType = "Room type is required";
    if (!formData.travelledMonth)
      newErrors.travelledMonth = "Please select when you travelled";
    ["cleanliness", "food", "value", "facilities", "location"].forEach(
      (key) => {
        if (!categoryRatings[key]) {
          newErrors[key] = "Please rate this category (1-5 stars)";
        }
      }
    );
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Require login before posting
    if (!isAuthenticated || !token) {
      setShowLoginForm(true);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        hotelId: data?.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        rating: selectedRating,
        travelledMonth: formatTravelledMonth(formData.travelledMonth),
        roomType: formData.roomType.trim(),
        cleanliness: categoryRatings.cleanliness,
        food: categoryRatings.food,
        value: categoryRatings.value,
        facilities: categoryRatings.facilities,
        location: categoryRatings.location,
      };

      const response = await axios.post(`${apiUrl}/api/reviews`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setToast({ message: "Review posted successfully!", type: "success" });
        setIsReviewModalOpen(false);
        // Reset the form
        setFormData({
          title: "",
          description: "",
          travelledMonth: "",
          roomType: data?.roomType || "",
        });
        setSelectedRating(0);
        setCategoryRatings({
          cleanliness: 0,
          food: 0,
          value: 0,
          facilities: 0,
          location: 0,
        });
        setErrors({});
      } else {
        setToast({
          message: response.data.message || "Failed to post review",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error while posting review : ", err);
      setToast({
        message:
          err.response?.data?.message ||
          "Failed to post your review. Please try again.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const closeToast = () => setToast(null);

  return (
    <section className="mt-4 md:mt-10 ">
      <div className="">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h2 className="text-xl md:text-3xl font-semibold text-[#333333]">Ratings and reviews</h2>
          <button
            type="button"
            onClick={() => setIsReviewModalOpen(true)}
            className="w-fit cursor-pointer rounded-md bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] px-4 py-2 text-white transition hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]"
          >
            Write a review
          </button>
        </header>
        <div className="main-container md:flex gap-12 mt-8">
          <div className="container-1 w-[100%] md:w-[20%]">
            <h1 className="font-semibold text-lg">overall rating</h1>
            <div className="ing-container bg-[#EEEEEE] w-fit px-4 rounded-lg mt-2">
              <div className="container-1 rounded-lg p-2 ">
                <div className="container-1 flex gap-3 items-center justify-center">
                  <Image src={str} className="w-10 h-10" />
                  <h1 className="font-semibold text-xl">4.99</h1>
                </div>
                <h1 className="text-[#777777] w-fit m-auto mt-2">
                  337 reviews
                </h1>
              </div>
            </div>
            <div className="space-y-3 mt-4 ">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Label */}
                  <span className="w-[90px] text-[#222222]">
                    {rating.label}
                  </span>

                  {/* Bar */}
                  <div className="flex-1 h-2 bg-[#DDDDDD] rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${rating.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Overall rating */}
          <div className="container-2 w-[100%] mt-4 md:mt-0 md:w-[80%]">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-3 ">
                {categories.map((cat) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 border-1 border-[#246132d3] rounded-lg text-sm flex items-center gap-2 bg-gray-50"
                  >
                    <Image src={cat.icon} />{" "}
                    <span className="">{cat.name}</span>{" "}
                    <span className="bg-[#EEEEEE] text-[#333333] p-1 rounded-xl">
                      {cat.rating}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="mt-6 space-y-4 ">
              {(showAll ? reviews : reviews.slice(0, 3)).map((r) => (
                <div
                  key={r.id}
                  className="bg-[#EEEEEE] p-4 rounded-lg shadow-sm"
                >
                  <div className="header flex items-center gap-4">
                    <h3 className="font-semibold text-xl text-[#4A4A4A]">
                      {r.title}
                    </h3>
                    <div className="rating-container border rounded-lg w-10 flex items-center justify-center font-semibold border-[#246132]">
                      <h1 className="text-[#246132]">{r.rating}</h1>
                    </div>
                  </div>
                  <div className="items-center gap-2 text-sm text-gray-500">
                    <div className="star-container flex items-center gap-2">
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                      <Image src={str} className="w-4 h-4" />
                    </div>
                    <h1>{r.user}</h1>
                  </div>
                  <p className="mt-2">{r.review}</p>
                  <p className="mt-2">
                    <span>Travelled Month :</span>{" "}
                    <span className="text-[#4A4A4A]">{r.date}</span>
                  </p>
                  <p className="mt-2">
                    <span>Room :</span>{" "}
                    <span className="text-[#4A4A4A]">{r.room}</span>
                  </p>
                </div>
              ))}
            </div>
            {/* Show More */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-[#AF4300] underline cursor-pointer font-medium hover:underline"
            >
              {showAll ? "Show less reviews" : "Show all reviews"}
            </button>
          </div>
        </div>
      </div>

      {isReviewModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e2016]/70 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={() => setIsReviewModalOpen(false)}
        >
          <div
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto  rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-[#246132] transition hover:bg-[#eef5ef]"
              aria-label="Close review form"
            >
              &times;
            </button>

            <div className="flex justify-center border-b border-[#e5ebe6] pb-2">
              <Image src={logo} alt="Exploring Munnar" className="h-12 w-auto" priority />
            </div>

            <form className="mt-2" onSubmit={handleSubmit} noValidate>
              <h2 id="review-modal-title" className="text-xl font-semibold text-[#173a22]">
                Share your experience
              </h2>
              <p className="mt-1 text-sm text-[#66756b]">
                How was your stay in {data?.name || "Munnar"}?
              </p>

              {/* Overall rating */}
              <fieldset className="mt-5">
                <legend className="text-sm font-medium text-[#304536]">
                  Your overall rating <span className="text-[#AF4300]">*</span>
                </legend>
                <div className="mt-2 flex gap-1" aria-label="Choose a rating from 1 to 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedRating(star)}
                      className={`text-4xl leading-none transition hover:scale-110 ${star <= selectedRating ? "text-[#AF4300]" : "text-[#d7dfd8]"
                        }`}
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      aria-pressed={star === selectedRating}
                    >
                      &#9733;
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <p className="mt-1 text-xs text-red-500">{errors.rating}</p>
                )}
              </fieldset>

              <div className="mt-5 space-y-3">
                <div>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Review title"
                    className="w-full rounded-lg border border-[#dfe7e1] px-4 py-3 text-[#263b2b] outline-none transition placeholder:text-[#89968d] focus:border-[#246132] focus:ring-2 focus:ring-[#246132]/15"
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us about your stay"
                    rows={3}
                    className="w-full resize-none rounded-lg border border-[#dfe7e1] px-4 py-3 text-[#263b2b] outline-none transition placeholder:text-[#89968d] focus:border-[#246132] focus:ring-2 focus:ring-[#246132]/15"
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-500">{errors.description}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <input
                      type="date"
                      name="travelledMonth"
                      value={formData.travelledMonth}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-[#dfe7e1] px-4 py-3 text-[#263b2b] outline-none transition focus:border-[#246132] focus:ring-2 focus:ring-[#246132]/15"
                    />
                    <p className="mt-1 text-xs text-[#89968d]">When did you travel?</p>
                    {errors.travelledMonth && (
                      <p className="mt-1 text-xs text-red-500">{errors.travelledMonth}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      placeholder="Room type (e.g. Double Room)"
                      className="w-full rounded-lg border border-[#dfe7e1] px-4 py-3 text-[#263b2b] outline-none transition placeholder:text-[#89968d] focus:border-[#246132] focus:ring-2 focus:ring-[#246132]/15"
                    />
                    {errors.roomType && (
                      <p className="mt-1 text-xs text-red-500">{errors.roomType}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Category ratings */}
              <fieldset className="mt-5 rounded-lg border border-[#e5ebe6] bg-[#fafbfa] p-4">
                <legend className="px-2 text-sm font-medium text-[#304536]">
                  Rate the categories
                </legend>
                <div className="space-y-3">
                  {[
                    { key: "cleanliness", label: "Cleanliness" },
                    { key: "food", label: "Food" },
                    { key: "value", label: "Value" },
                    { key: "facilities", label: "Facilities" },
                    { key: "location", label: "Location" },
                  ].map((cat) => (
                    <div key={cat.key}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-[#304536]">{cat.label}</span>
                        <div className="flex gap-1" role="group" aria-label={`${cat.label} rating`}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleCategoryRating(cat.key, star)}
                              className={`text-2xl leading-none transition hover:scale-110 ${star <= categoryRatings[cat.key] ? "text-[#AF4300]" : "text-[#d7dfd8]"
                                }`}
                              aria-label={`${cat.label} ${star} star${star > 1 ? "s" : ""}`}
                              aria-pressed={star === categoryRatings[cat.key]}
                            >
                              &#9733;
                            </button>
                          ))}
                        </div>
                      </div>
                      {errors[cat.key] && (
                        <p className="mt-1 text-right text-xs text-red-500">
                          {errors[cat.key]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>

              <p className="mt-4 text-xs leading-5 text-[#718076]">
                By submitting, you agree to our <a href="/terms-and-conditions" className="text-[#246132] underline">Terms &amp; Conditions</a> and <a href="/privacy-policy" className="text-[#246132] underline">Privacy Policy</a>.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] px-4 py-3 font-semibold text-white transition hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] focus:outline-none focus:ring-2 focus:ring-[#246132] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-5 w-5 animate-spin" />}
                {submitting ? "Posting..." : "Submit review"}
              </button>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </section>
  );
}
