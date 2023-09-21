import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Body_first() {
  return (
    <div className=" px-16 pt-28 font-display absolute">
      <div className=" text-xl font-display w-56 text-[#FF6452]">
        Our Summer collections
      </div>
      <div className="pt-8 ">
        <Typography
          className="font-bold font-display bg-white pr-7 py-5"
          variant="h1"
        >
          The New Arrival
        </Typography>
        <div className="flex space-x-5">
          <Typography
            className="text-[#FF6452] font-display font-bold"
            variant="h1"
          >
            Nike
          </Typography>
          <Typography variant="h1" className="font-bold font-display">
            Shoes
          </Typography>
        </div>
      </div>
      <Typography className="text-xl font-light font-display text-color  mt-5">
        Discover stylish Nike arrivals, quality
        <br /> comfort, and innovation for your active life.
      </Typography>
      <Button
        variant="contained"
        endIcon={
          <ArrowForwardOutlinedIcon className="bg-white text-[#FF6452] rounded-full " />
        }
        className=" bg-[#FF6452] font-display text-lg btn rounded-s-full rounded-e-full mt-16 w-48 h-14 pl-5 "
      >
        Shop Now
      </Button>
      <div className="mt-20 flex  space-x-24">
        <Typography variant="h3" className="font-bold font-display grid">
          1k+ <p className="text-lg  font-light">Brands</p>
        </Typography>
        <Typography variant="h3" className="font-bold font-display grid">
          500+ <p className="text-lg  font-light">Shops</p>
        </Typography>
        <Typography variant="h3" className="font-bold font-display grid">
          250k+ <p className="text-lg  font-light">Costumers</p>
        </Typography>
      </div>
    </div>
  );
}
