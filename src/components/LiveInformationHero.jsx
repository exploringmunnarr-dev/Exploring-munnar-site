"use client";

import React, { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import sunIcon from "../assets/sunIcon.svg";
import Image from "next/image";
import lo from "../assets/lo.svg";
import sun1 from "../assets/sun1.svg";

const LiveInformationHero = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Fetch weather data from OpenWeatherMap API
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=10.0447&lon=77.0593&appid=fa326c0afa6b076f26ef0c3e3dede571&units=metric`
        );
        const data = await response.json();
        console.log("Weather data:", data);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    return { day, formattedDate };
  };

  const { day, formattedDate } = formatDate(currentTime);

  // Get weather values with fallbacks
  const temperature = weatherData?.main ? Math.round(weatherData.main.temp) : '--';
  const feelsLike = weatherData?.main ? Math.round(weatherData.main.feels_like) : '--';
  const tempMax = weatherData?.main ? Math.round(weatherData.main.temp_max) : '--';
  const tempMin = weatherData?.main ? Math.round(weatherData.main.temp_min) : '--';
  const weatherCondition = weatherData?.weather?.[0]?.main || '--';
  const weatherDescription = weatherData?.weather?.[0]?.description || '--';

  // Generate hourly forecast (next 6 hours) - using same temperature as approximation
  const hourlyForecast = [];
  for (let i = 1; i <= 6; i++) {
    const hour = new Date();
    hour.setHours(hour.getHours() + i);
    hourlyForecast.push({
      time: hour.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
      temp: temperature !== '--' ? temperature : '--',
    });
  }

  // Calculate sunrise and sunset times
  const sunrise = weatherData?.sys?.sunrise
    ? new Date(weatherData.sys.sunrise * 1000)
    : null;
  const sunset = weatherData?.sys?.sunset
    ? new Date(weatherData.sys.sunset * 1000)
    : null;

  // Calculate day length
  let dayLength = null;
  if (sunrise && sunset) {
    const diff = sunset - sunrise;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    dayLength = `${hours}h ${minutes}m`;
  }

  return (
    <>
      <section className="">
        <header>
          <h1 className="text-[#333333] text-lg sm:text-xl font-semibold md:text-3xl">
            Current weather of munnar
          </h1>
        </header>
        <div className="main-container mt-4">
          <main className=" bg-[#EEEEEE] rounded-xl flex items-center justify-center p-6">
            <div className="md:grid md:grid-cols-12 gap-6 w-full max-sm:space-y-4">
              {/* Left Card - Current Weather */}
              <div className="bg-white rounded-2xl col-span-12  lg:col-span-5 shadow px-6 flex justify-between py-4  gap-14">
                <div className="first-container ">
                  <button className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] flex items-center gap-2 text-white px-4 text-sm py-2 rounded-full">
                    <span>
                      {" "}
                      <Image src={lo} className="" />{" "}
                    </span>{" "}
                    Munnar
                  </button>
                  <div className="content-container mt-4 ">
                    <h1 className="text-[#333333] text-md sm:text-xl font-semibold md:text-4xl">
                      {loading ? '...' : day}
                    </h1>
                    <h1 className="text-[#333333] text-sm sm:text-md">{loading ? '...' : formattedDate}</h1>
                    <div className="content-2-container mt-4 sm:mt-16">
                      <h1 className="font-semibold text-xl sm:text-5xl text-[#333333]">
                        {loading ? '...' : `${temperature}° C`}
                      </h1>
                      <h1 className="text-[#333333] text-sm ">
                        High: {loading ? '...' : tempMax} Low: {loading ? '...' : tempMin}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="second-container flex flex-col justify-center items-center">
                  <Image
                    src={sunIcon}
                    className="w-[70px] h-[70px] sm:w-[180px] sm:h-[140px] object-cover "
                  />
                  <h1 className="text-2xl sm:text-3xl text-[#333333] mt-2">{loading ? '...' : weatherCondition}</h1>
                  <h1 className="text-sm text-[#333333] ">{loading ? '...' : `Feels Like ${feelsLike}`}</h1>
                </div>
              </div>

              {/* Middle Card - Hourly Forecast */}
              <div className="bg-white col-span-12 lg:col-span-5 rounded-2xl shadow p-6">
                <h3 className="font-semibold text-[#333333] text-3xl mb-4">
                  Today
                </h3>
                <div className="grid grid-cols-6 gap-2 ">
                  {loading ? (
                    Array(6).fill(0).map((_, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-2 border border-gray-100 items-center p-2 bg-white shadow-xl rounded-lg"
                      >
                        <p className="text-sm text-[#333333]">...</p>
                        <Image src={sun1} className="w-6 h-6" />
                        <p className="text-sm text-[#333333]">--°</p>
                      </div>
                    ))
                  ) : (
                    hourlyForecast.map((hour, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-2 border border-gray-100 items-center p-2 bg-white shadow-xl rounded-lg"
                      >
                        <p className="text-sm text-[#333333]">{hour.time}</p>
                        <Image src={sun1} className="w-6 h-6" />
                        <p className="text-sm text-[#333333]">{hour.temp}°</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)]   text-white rounded-xl mt-6 px-4 py-2 flex gap-3 items-center">
                  <div className="container-1 flex gap-5">
                    <div>
                      <p className="text-sm ">Tomorrow </p>
                      <p className="text-sm">{loading ? '...' : weatherDescription}</p>
                    </div>
                    <span className="text-2xl font-">{loading ? '...' : `${tempMin}°`}</span>
                  </div>
                </div>
              </div>

              {/* Right Card - Sunrise / Sunset */}
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between col-span-12 lg:col-span-2">
                <div>
                  <p className=" text-lg">Sunrise</p>
                  <p className="text-2xl font-bold text-[#246132] mt-3">
                    {loading ? '...' : sunrise ? sunrise.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false }).replace(':', ':') : '--'} <span className="text-sm text-black">{loading ? '...' : sunrise ? sunrise.getHours() < 12 ? 'AM' : 'PM' : '--'}</span>
                  </p>
                </div>
                <div>
                  <p className=" text-lg">Sunset</p>
                  <p className="text-2xl font-bold text-[#246132]  mt-3">
                    {loading ? '...' : sunset ? sunset.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false }).replace(':', ':') : '--'} <span className="text-sm text-black">{loading ? '...' : sunset ? sunset.getHours() < 12 ? 'AM' : 'PM' : '--'}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#333333]">Length of day</p>
                  <p className="text-xl font-semibold mt-3 text-[#246132]">
                    {loading ? '...' : dayLength || '--'}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default LiveInformationHero;
