import React from "react";
import Shoe from "../Json_Files/Shoe_Rate.json";

export default function Body_Rate() {
  return (
    <div id="Products" className="px-16 mt-24">
      <p className="text-5xl font-bold font-display">
        <span className=" text-[#FF6452]">Popular</span> Products
      </p>
      <p className="mt-7 font-display text-color text-lg ">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design and value
      </p>
      <div className="flex justify-between mt-10">
        {Shoe.map((item) => (
          <div key={item.id}>
            <div className="space-y-3">
              <img src={item.img} />
              <div className="flex space-x-3">
                <img src={item.star} />
                <p className="text-lg font-thin">{item.rating}</p>
              </div>
              <p className="font-bold font-display  text-2xl">{item.name}</p>
              <p className="text-3xl font-bold text-[#FF6452]">{item.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
