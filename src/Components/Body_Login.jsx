import { Button, TextField } from "@mui/material";
import React from "react";

export default function Body_Login() {
  return (
    <div className="flex h-96 ">
      <div className="mt-32 flex  space-x-80 justify-around">
        <div className="text-5xl space-y-4 px-12 flex-1 font-bold font-display  items-center">
          Sign Up for <span className="text-[#FF6452]">Updates </span>
          <p>& Newsletter</p>
        </div>
        <div className=" w-[550px] flex h-20 border-black  border rounded-s-full rounded-e-full  mt-10 ">
          <input
            className="ml-6 mt-4 placeholder:text-md outline-none border-none w-96 h-12"
            variant="outlined"
            placeholder="Subscribe@Nike.com"
          />
          <Button
            varient="contained"
            className=" bg-[#FF6452] text-white rounded-s-full   rounded-e-full mt-3 ml-1 w-32 h-14  "
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
