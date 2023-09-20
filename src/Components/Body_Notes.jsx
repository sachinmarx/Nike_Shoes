import React from "react";
import Note from "../Json_Files/Notes.json";
export default function Body_Notes() {
  return (
    <div className="flex  mt-28 justify-evenly">
      {Note.map((item) => (
        <div
          className="custom-shadow my-6 p-8 justify-center items-center rounded-xl w-[460px] h-72"
          key={item.id}
        >
          <div className="w-11 my-5 bg-[#FF6452] rounded-full h-11">
            <img src={item.icon} />
          </div>
          <p className="text-3xl my-5 font-display  font-bold">{item.head}</p>
          <p className="text-xl font-display text-color ">{item.msg}</p>
        </div>
      ))}
    </div>
  );
}
