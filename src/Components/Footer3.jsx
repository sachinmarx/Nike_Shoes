import React from "react";

export default function Footer3() {
  return (
    <div className=" text-lg font-display gap-5 h-72  ">
      <p className="text-2xl font-semibold">Help</p>

      <div className="pt-2 font-thin ">
        <a href="#" className="hover:opacity-50 my-12">
          About us
        </a>
        <br />
      </div>
      <div className="pt-2 font-thin ">
        <a href="#" className="hover:opacity-50">
          FAQs
        </a>

        <br />
      </div>
      <div className="pt-2 font-thin ">
        <a href="#" className="hover:opacity-50">
          How it works
        </a>
        <br />
      </div>
      <div className="pt-2 font-thin ">
        <a href="#" className="hover:opacity-50">
          Privacy policy
        </a>{" "}
        <br />
      </div>
      <div className="pt-2 font-thin ">
        <a href="#" className="hover:opacity-50">
          Payment policy
        </a>
        <br />
      </div>
    </div>
  );
}
