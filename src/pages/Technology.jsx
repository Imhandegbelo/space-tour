import React from "react";
import Navbar from "../components/Navbar";
import vehicle from "../assets/images/technology/image-launch-vehicle-portrait.jpg";

export default function Technology() {
  return (
    <div className="pt-6 md:pt-10 h-screen w-screen bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-no-repeat overflow-x-clip">
      <Navbar />
      <div className="pl-36 max-w-[1440px]">
        <h1 className="text-white text-[1.75rem] font-Barlow+Condensed mt-36">
          <span className="opacity-30 mr-3">03</span>SPACE LAUNCH 101
        </h1>
        <div className="flex text-white gap-36">
          <div className="flex items-center w-3/5">
            <div className="flex gap-12">
              <div className="flex flex-col justify-around font-Bellefair">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-white bg-white text-black ">
                  <p className="text-[1.9rem]">1</p>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-white bg-white text-black">
                  <p className="text-[1.9rem]">2</p>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-white bg-white text-black">
                  <p className="text-[1.9rem]">3</p>
                </div>
              </div>
              <div className="text-gray-300">
                <h2 className="text-base font-Barlow+Condensed tracking-[2.7px]">
                  THE TERMINOLOGY ...
                </h2>
                <h3 className="text-white font-Bellefair text-[3.5rem]">LAUNCH VEHICLE</h3>
                <p className="text-lg opacity-60 font-Barlow leading-[2rem] w-[30rem]">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src={vehicle}
              alt="space launch vehicle"
              className="align-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
