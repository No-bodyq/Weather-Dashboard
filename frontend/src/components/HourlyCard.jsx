import React from "react";
import Image from "./Image";

export default function HourlyCard({ time, condition, temp, isEnd }) {
  const date = new Date(time * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center justify-between">
        <p className="text-sm font-bold">{formattedTime} AM -</p>
        <div className="p-2 w-20 h-20">
          <Image type={condition} />
        </div>
        <h3 className="text-2xl font-bold">{temp}℃</h3>
      </div>
      <div className={`${isEnd && "hidden"} w-[1px] h-full bg-black/20`}></div>
    </div>
  );
}
