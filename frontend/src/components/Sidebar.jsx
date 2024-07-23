"use client";

import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen shadow-[0px_0_4px_2px_rgb(3,3,3,0.1)] items-center w-auto pt-6 gap-14 px-1">
      <div className="w-12 h-12 flex justify-center">
        <Link href="/">
          <img src="umbrella.svg"></img>
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <Link href="/">
          <div className="flex flex-col items-center gap-2">
            <img src="/partly_cloudy.svg" alt="current" className="w-6 h-6" />
            <p className="font-semibold text-sm">Current</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center gap-2">
            <img src="/list.svg" alt="current" className="w-6 h-6" />
            <p className="font-semibold text-sm">Explore</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center gap-2">
            <img src="/map.svg" alt="current" className="w-6 h-6" />
            <p className="font-semibold text-sm">Interact</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center gap-2">
            <img src="/settings.svg" alt="current" className="w-6 h-6" />
            <p className="font-semibold text-sm">Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
