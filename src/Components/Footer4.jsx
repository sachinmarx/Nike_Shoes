import React from "react";

export default function Footer4() {
  return (
    <div className=" text-lg  gap-5 h-72  ">
      <p className="text-2xl font-semibold">Get in touch</p>

      <div className="pt-2 font-thin">
        <a href="#" className="hover:opacity-50 my-12">
          customer@nike.com
        </a>
        <br />
      </div>
      <div className="pt-2 font-thin">
        <a href="#" className="hover:opacity-50">
          +92554862354
        </a>

        <br />
      </div>
      <a href="#">
        <p className="mt-52 font-thin">Terms & Conditions</p>
      </a>
    </div>
  );
}
