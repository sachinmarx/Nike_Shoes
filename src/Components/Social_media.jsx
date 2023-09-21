import React from "react";

export default function Social_media() {
  return (
    <div className="flex space-x-8 ">
      <button className="h-12 pl-3 w-12 rounded-full text-center bg-white ">
        <img src="/facebook.svg" />
      </button>
      <button className="h-12 w-12 pl-3 rounded-full text-center bg-white">
        <img src="/twitter.svg" />
      </button>
      <button className="h-12 w-12 pl-3 rounded-full text-center bg-white">
        <img src="/instagram.svg" />
      </button>
    </div>
  );
}
