import React, { useState } from "react";
import jsonData from "../Json_Files/Three_Shoes.json";
import { Button } from "@mui/material";
export default function Body_Pic() {
  const [selectedImage, setSelectedImage] = useState(jsonData[0].img);

  const handleImageClick = (jsonData) => {
    setSelectedImage(jsonData);
    console.log(jsonData);
  };
  return (
    <div className="w-[850px]  overflow-hidden  ">
      <div
        className="flex ml-14 overflow-hidden absolute"
        style={{ bottom: -100 }}
      >
        {jsonData.map((item) => (
          <div key={item.id} onClick={() => handleImageClick(item.img)}>
            <button className="ml-5 focus:border-red-400 focus:border-2 focus:rounded-xl ">
              <img
                className="bg-[url('public/Back_Small.svg')] bg-no-repeat bg-cover h-40 w-40 "
                src={item.img}
                alt={item.id}
              />
            </button>
          </div>
        ))}
      </div>
      <div className="w-[790px] h-[800px] bg-[url('public/Back_Shoe.svg')]">
        <img
          className="w-[700px] h-[700px] pl-20 pt-24"
          src={selectedImage}
          alt={selectedImage}
        />
      </div>
    </div>
  );
}
