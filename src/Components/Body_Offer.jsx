import { Button } from "@mui/material";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
export default function Body_Offer() {
  return (
    <div className="flex mt-24">
      <div>
        <img className="w-[650px] ml-24  " src="/offer00.svg" />
      </div>
      <div className="ml-12 w-[450px] mt-20 space-y-8">
        <p className="text-5xl font-display  font-bold">
          <span className="text-[#FF6452] ">Special</span> Offer
        </p>
        <p className="text-xl font-display text-color">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-xl font-display  text-color">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <Button
          variant="contained"
          endIcon={
            <ArrowForwardOutlinedIcon className="bg-white text-[#FF6452] rounded-full " />
          }
          className=" bg-[#FF6452]  rounded-s-full rounded-e-full mt-16 w-48 h-14 pl-5 "
        >
          Shop Now
        </Button>
        <Button
          className="rounded-s-full ml-4 font-display   rounded-e-full mt-16 w-40 h-14 pl-5 border-black text-black opacity-70"
          variant="outlined"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
