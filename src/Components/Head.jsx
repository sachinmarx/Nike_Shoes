import React from "react";
import "../index.css";
import Nike_Sym from "../Pictures/Nike_Sym";
import "../Css/Font.css";

export default function Head() {
  return (
    <div
      id="Home"
      className="flex font-display pt-8 px-16  text-color overflow-hidden space-x-32 absolute"
    >
      <div className="w-96">
        <a href="#">
          <Nike_Sym />
        </a>
      </div>

      <div className="flex space-x-20  h-9">
        <a href="#Home" className="text-xl">
          Home{" "}
        </a>
        <a href="#AboutUs" className="text-xl">
          About Us{" "}
        </a>
        <a href="#Products" className="text-xl">
          Products{" "}
        </a>
        <a href="#Footer" className="text-xl">
          Contact us
        </a>
      </div>
    </div>
  );
}
