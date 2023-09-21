import React from "react";
import Social_media from "./Social_media";
import { Link } from "@mui/material";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";

export default function Footer() {
  return (
    <div
      id="Footer"
      className="h-[500px] bg-black text-white pt-24 px-14  flex"
    >
      <div>
        <Link className=" w-max block" href="/">
          <img className="w-36 " src="/Nike_White.svg" />
        </Link>
        <p className="text-lg py-8 font-display font-thin w-96">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          Perfect Size in Store. Get Rewards.
        </p>
        <Social_media />
        <div className=" mt-24">
          <a href="#" className="text-lg font-display font-thin flex ">
            <img src="/copyright.svg" className="pr-2" />
            Copyright. All Rights Reserved.
          </a>
        </div>
      </div>
      <div className="flex ml-20 space-x-64">
        <Footer2 />
        <Footer3 />
        <Footer4 />
      </div>
    </div>
  );
}
