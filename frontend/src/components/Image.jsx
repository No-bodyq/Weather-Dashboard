import React from "react";

export default function Image({ type, size }) {
  return (
    <div>
      <img src={`${type}.png`} className={`w-${size} h-${size}`}></img>
    </div>
  );
}
