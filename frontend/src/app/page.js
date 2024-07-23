"use client";

import Searchbar from "@/components/Searchbar";
import Overview from "@/components/Overview";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "@/components/Image";
import HourlyCard from "@/components/HourlyCard";

export default function Home() {
  const [currWeather, setCurrWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [city, setCity] = useState("Madrids");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [temp, setTemp] = useState(null);

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    console.log(data);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5555/api/v1/weather/"
        );
        const data = response.data;
        const currData = data.list[0];
        console.log(data);
        const coord = data.city.coord;
        setCurrWeather(currData.weather[0].main);
        setCity(data.city.name);
        setLat(coord.lat);
        setLong(coord.lon);
        setTemp(Math.floor(currData.main.temp));
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-11">
      <main className="w-full h-screen col-span-6 grid grid-rows-[1fr_4fr_4fr_4fr] gap-5">
        <div className="">
          <Searchbar onSearch={handleSearch} />
        </div>
        <Overview
          type={currWeather}
          isLoading={isLoading}
          errMsg={errMsg}
          city={city}
          lat={lat}
          long={long}
          temp={temp}
        />
        <div className="w-full h-full shadow-[0px_0_4px_2px_rgb(3,3,3,0.1)] border border-gray-200">
          <div className="w-full px-6 pt-6">
            <p className="text-sm font-bold">Today's Forecast Details</p>
            <div className="w-full grid grid-cols-6 text-gray-900 p-6 gap-3">
              <HourlyCard time={1721768400} condition={"clear sky"} temp={25} />
              <HourlyCard time={1721768400} condition={"clear sky"} temp={25} />
              <HourlyCard time={1721768400} condition={"clear sky"} temp={25} />
              <HourlyCard time={1721768400} condition={"clear sky"} temp={25} />
              <HourlyCard time={1721768400} condition={"clear sky"} temp={25} />
              <HourlyCard
                time={1721768400}
                condition={"clear sky"}
                temp={25}
                isEnd={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full shadow-[0px_0_4px_2px_rgb(3,3,3,0.1)] border border-gray-200"></div>
      </main>
      <side className="w-full h-full col-span-5 px-6 pt-10">
        <div className="w-full h-full shadow-[0px_0_4px_2px_rgb(3,3,3,0.1)] border border-gray-200"></div>
      </side>
    </div>
  );
}
