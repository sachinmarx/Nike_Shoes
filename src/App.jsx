import React from "react";
import Head from "./Components/Head";
import Body_first from "./Components/Body_first";
import Body_Pic from "./Components/Body_Pic";
import Body_Rate from "./Components/Body_Rate";
import Body_Details from "./Components/Body_Details";
import Body_Notes from "./Components/Body_Notes";
import Body_Offer from "./Components/Body_Offer";
import Body_Review from "./Components/Body_Review";
import Body_Login from "./Components/Body_Login";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="overflow-y-auto  h-screen relative">
      {" "}
      <div className="flex ">
        <div className="flex-1 overflow-hidden">
          <Body_first />
        </div>
        <Head />

        <Body_Pic />
      </div>
      <Body_Rate />
      <Body_Details />
      <Body_Notes />
      <Body_Offer />
      <Body_Review />
      <Body_Login />
      <Footer />
    </div>
  );
}
