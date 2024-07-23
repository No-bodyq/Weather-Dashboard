import React from "react";
import Image from "./Image";

export default function Overview({
  type,
  errMsg,
  isLoading,
  city,
  lat,
  long,
  temp,
}) {
  return (
    <div>
      {!isLoading ? (
        <div className="grid grid-cols-2 px-10">
          <div>
            <h1 className="font-semibold text-6xl p-2 w-full">{city}</h1>
            <p className="p-2 w-full">{`${lat} ${long}`}</p>
            <div className="w-full p-2 flex items-center font-semibold text-6xl">
              <h1>{temp}℃</h1>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="w-60 h-60">
              <Image type={type} size={60} />
            </div>
          </div>
        </div>
      ) : errMsg ? (
        errMsg
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
