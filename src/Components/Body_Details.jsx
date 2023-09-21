import { Button } from "@mui/material";
import React from "react";

export default function Body_Details() {
  return (
    <div id="AboutUs" className="ml-14 mt-40 flex py-12  font-display ">
      <div>
        <div className="text-5xl  space-y-3 w-[470px] font-bold">
          <p className="">We Provide You We </p>
          <p>
            {" "}
            Provided You <span className="text-[#FF6452]"> Super</span>
          </p>
          <p>
            {" "}
            <span className="text-[#FF6452]">Quality </span>Shoes
          </p>
        </div>
        <p className="text-xl mt-8 font-display text-color  w-[470px]">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-xl mt-8 text-color font-display ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button
          variant="contained"
          className="bg-[#FF6452] p-3 w-40 mt-10 rounded-s-full btn rounded-e-full"
        >
          View details
        </Button>
      </div>

      <div className="ml-56">
        <img src="public/Model_Shoe.svg" />
      </div>
    </div>
  );
}
