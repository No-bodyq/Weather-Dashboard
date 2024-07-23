import React from "react";

export default function Image({ type }) {
  return (
    <div>
      <img src={`${type}.png`} className="w-60 h-60"></img>
    </div>
  );
}
