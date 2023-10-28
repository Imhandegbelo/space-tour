import React from "react";
import Navbar from "../components/Navbar";
import titan from "../assets/images/destination/image-titan.png"
import mars from "../assets/images/destination/image-mars.png"
import moon from "../assets/images/destination/image-moon.png"
import europa from "../assets/images/destination/image-europa.png"
import data from "../data/data.json"

export default function Destination() {

  return (
    <div className="flex justify-center h-screen w-screen bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-no-repeat overflow-x-clip">
      <div className="h-screen">
        <Navbar />
        <div className="pdx-6 ldg:px-24">
          <h1 className="text-white text-[1.75rem] font-Barlow+Condensed">
            <span className="opacity-30 mr-3">01</span>PICK YOUR DESTINATION
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex">
                <img src="" alt="" />
            </div>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
