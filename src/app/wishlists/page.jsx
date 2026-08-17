"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Search, MapPin, Star, Check, Loader2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileTab from "@/components/MobileTab";
import { useAuth } from "@/context/AuthContext";

import noData from "@/assets/no_data.svg";
import fallbackHotelImg from "@/assets/hotel1.svg";
import redHeart from "@/assets/redheart.svg";

// Base URL of the backend API
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://munnar-backend.onrender.com";

// Helper: pick the best available image for a hotel
const getHotelImage = (hotel) => {
  return hotel.featuredImageUrl || hotel.images?.[0]?.url || fallbackHotelImg;
};

// A single favourite hotel card
const FavoriteHotelCard = ({ hotel, isRemoving, onUnfavorite }) => {
  return (
    <Link
      href={`/hotels/hotel_listing/${hotel.id}`}
      className="card bg-[#EEEEEE] w-[100%] rounded-2xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Hotel image */}
      <div className="relative w-full sm:w-[280px] h-[200px]  shrink-0 overflow-hidden rounded-xl">
        <Image
          src={getHotelImage(hotel)}
          alt={hotel.name || "Hotel image"}
          width={1000}
          height={1000}
          className="w-[100%] h-[100%] object-cover"
        />
        {isRemoving && (
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center z-10">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
        <div className="favorite-icon-container absolute top-4 right-4 z-20">
          <button
            type="button"
            onClick={(e) => onUnfavorite(e, hotel.id)}
            className="cursor-pointer"
            disabled={isRemoving}
            aria-label={`Remove ${hotel.name || "hotel"} from favorites`}
          >
            <Image src={redHeart} alt="red heart" />
          </button>
        </div>
      </div>

      {/* Hotel details */}
      <div className="flex-1 flex flex-col">
        {/* Name + verified badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-[#246132] font-semibold text-lg">{hotel.name}</h1>
          {hotel.isVerified && (
            <span className="border bg-white/50 w-fit py-1 px-2 rounded-lg border-emerald-900/10 text-xs flex items-center gap-2">
              <span className="bg-emerald-800 rounded-sm w-4 h-4 flex items-center justify-center">
                <Check size={12} className="text-white" />
              </span>
              Verified
            </span>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-[#333333] mt-2">
          <MapPin size={16} className="text-[#AF4300]" />
          <span>{hotel.location || "Munnar"}</span>
        </div>

        {/* Stay type + rating */}
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          {hotel.stayType && (
            <span className="bg-white w-fit px-3 py-2 rounded-lg shadow text-sm text-[#333333]">
              {hotel.stayType}
            </span>
          )}
          {hotel.rating != null && (
            <span className="flex items-center gap-1 text-[#1A1A1A] font-semibold">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              {hotel.rating}
            </span>
          )}
        </div>

        {/* Price */}
        {hotel.pricePerNight != null && (
          <h1 className="font-semibold text-[#246132] mt-3">
            From ₹{hotel.pricePerNight} / night
          </h1>
        )}

        {/* View details */}
        <span className="btn-green text-white w-full sm:w-fit flex items-center justify-center mt-4 sm:mt-auto rounded-lg py-2 px-6">
          View Details
        </span>
      </div>
    </Link>
  );
};

// Empty state - same style used across the project
const EmptyState = ({ message }) => {
  return (
    <div className="w-fit m-auto flex items-center justify-center">
      <div className="text-center">
        <Image
          src={noData}
          width={1000}
          height={1000}
          className="w-[300px] h-[300px]"
          alt="No data"
        />
        <h1 className="font-medium text-xl mt-[-30px] text-gray-600">
          {message}
        </h1>
      </div>
    </div>
  );
};

const WishlistPage = () => {
  // Auth
  const { isAuthenticated, token, setShowLoginForm } = useAuth();

  // State
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingFavorites, setLoadingFavorites] = useState({});

  // Fetch the favourite hotels of the logged-in user
  const fetchFavorites = useCallback(
    async (showLoader = true) => {
      if (showLoader) setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites(response.data.data || []);
        setError("");
      } catch (err) {
        console.error("Error while fetching favourites : ", err);
        setError(
          err.response?.data?.message || "Failed to load your favourites"
        );
      } finally {
        if (showLoader) setLoading(false);
      }
    },
    [token]
  );

  useEffect(() => {
    // If the user is not logged in, ask them to login first
    if (!isAuthenticated || !token) {
      setShowLoginForm(true);
      setLoading(false);
      return;
    }

    fetchFavorites();
  }, [isAuthenticated, token, setShowLoginForm, fetchFavorites]);

  // Unfavourite a hotel and refresh the list
  const handleUnfavorite = async (e, hotelId) => {
    e.preventDefault();
    e.stopPropagation();

    setLoadingFavorites((prev) => ({ ...prev, [hotelId]: true }));
    try {
      const response = await axios.post(
        `${API_URL}/api/favorites/toggle`,
        { hotelId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        await fetchFavorites(false);
      }
    } catch (err) {
      console.error("Error while unfavouriting hotel : ", err);
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [hotelId]: false }));
    }
  };

  // Search filter - matches name, location, stay type and description
  const filteredFavorites = favorites.filter((hotel) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    return [hotel.name, hotel.location, hotel.stayType, hotel.description]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query));
  });

  return (
    <>
      <Navbar />

      {/* Header */}
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-3 md:py-4 rounded-lg">
        <h1 className="font-semibold text-2xl md:text-2xl text-white">
          My Wishlist
        </h1>
        <p className="text-sm text-[#EEEEEE] mt-2">
          All your favourite stays, saved in one place
        </p>
      </header>

      {/* Search bar */}
      <div className="mx-4 md:mx-10  mt-6">
        <div className="relative max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-[50%] translate-y-[-50%] text-gray-400"
          />
          <input
            type="text"
            placeholder="Search your favourite hotels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border w-[80%] pl-11 pr-4 py-2 focus:ring-1 ring-green-900 text-base outline-none border-gray-300 rounded-xl"
          />
        </div>
      </div>

      {/* Content */}
      <section className="mx-4 md:mx-10 mt-6 space-y-4 pb-10  overflow-y-auto min-h-[calc(100vh-280px)]">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <EmptyState message={error} />
        ) : filteredFavorites.length > 0 ? (
          filteredFavorites.map((hotel) => (
            <FavoriteHotelCard
              key={hotel.favoriteId ?? hotel.id}
              hotel={hotel}
              isRemoving={!!loadingFavorites[hotel.id]}
              onUnfavorite={handleUnfavorite}
            />
          ))
        ) : (
          <EmptyState
            message={
              favorites.length > 0 && searchQuery.trim()
                ? "No hotels match your search"
                : "No data found!"
            }
          />
        )}
      </section>

      <Footer />
      <div className="tab-container w-full fixed bottom-0 z-100 md:hidden">
        <MobileTab />
      </div>
    </>
  );
};

export default WishlistPage;
