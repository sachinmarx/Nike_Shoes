import React from "react";
import Review from "../Json_Files/Review.json";
export default function Body_Review() {
  return (
    <div className="bg-blue-100 font-display  mt-28 content-center py-24 justify-center items-center max-w-[ 1440px]">
      <div className="ml-[500px] space-y-8">
        <p className="text-5xl font-bold">
          What Our <span className="text-[#FF6452] ">Customers</span> Say?
        </p>
        <p className="text-xl font-display text-color  ml-9 text-center w-[500px]  align-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experience with us
        </p>
      </div>
      <div className="flex text-center justify-center space-x-44  mt-24">
        {Review.map((item) => (
          <div key={item.id}>
            <img className="w-28 h-28 ml-32  rounded-full" src={item.img} />
            <div className="">
              <p className="w-96 text-xl pt-6 font-display  text-color text-center">
                {item.content}
              </p>
              <div className="flex space-x-2 pt-3 ml-40">
                <img className=" " src={item.star} />
                <p className="text-2xl text-color ">{item.point}</p>
              </div>
              <p className=" pt-2 text-2xl font-display  font-bold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
