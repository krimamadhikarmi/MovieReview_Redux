import React from "react";

export function Tittle() {
  return (
    <div className="header py-6 bg-amber-950 fixed z-50 w-full">
      <h1 className="text-2xl lg:text-4xl  text-center text-white ml-10 font-bold sedan-font" style={{ fontFamily: "Sedan, serif" }}
      >
        Movie Review App
        <i className="fa-solid fa-film ml-4 mt-2"></i>
      </h1>
    </div>
  );
}
