import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import douglas_hurley from "../assets/images/crew/image-douglas-hurley.webp";
import mark_shuttleworth from "../assets/images/crew/image-mark-shuttleworth.webp";
import victor_glover from "../assets/images/crew/image-victor-glover.webp";
import anoushe_ansari from "../assets/images/crew/image-anousheh-ansari.webp";
import data from "../data/data.json";

export default function Crew() {
  const [active, setActive] = useState(0);

  const images = [
    douglas_hurley,
    mark_shuttleworth,
    victor_glover,
    anoushe_ansari,
  ];

  useEffect(() => {
    const time_out = setTimeout(() => {
      const data_length = data.crew.length;
      setActive((active) => (active + 1) % data_length);
    }, 10000);
    return () => clearTimeout(time_out);
  }, [active]);

  return (
    <div className="xh-screen w-screen pb-10 lg:pt-10 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover overflow-clipp">
      <Navbar />
      <div
        className={`flex flex-col gap-10 ${
          active === 0 ? "xl:gap-36" : ""
        } lg:px-24 xl:px-36 lg:mt-36 items-center justify-between max-w-[1440px] mx-auto text-gray-300`}
      >
        <h1 className="w-full text-white text-base md:text-[1.75rem] font-Barlow+Condensed mt-10 pl-8 lg:my-0 lg:ml-0 lg:mb-20">
          <span className="opacity-30 mr-3">02</span>MEET THE CREW
        </h1>

        <div
          className={`flex flex-col gap-10 md:gap-16 lg:gap-0 lg:flex-row justify-between w-full`}
        >
          <div className="flex flex-col w-full gap-5 md:gap-10 lg:gap-16 xl:gap-20 h-4/5 px-6 justify-">
            <div className="grid lg:gap-6 lg:mt-10 text-center lg:text-left">
              <h2 className="font-Bellefair tracking-[2.7px] leading-[100%] text-base md:text-[2rem] uppercase mb-2">
                {data.crew[active].role}
              </h2>
              <h3 className="text-white font-Bellefair text-2xl md:text-[2.5rem] lg:text-[3.4rem] mb-6 uppercase leading-[3rem]">
                {data.crew[active].name}
              </h3>
              <p className="text-[15px] text-center lg:text-left md:text-base lg:text-lg opacity-60 font-Barlow md:leading-[1.5rem] lg:leading-[2rem] shrink max-w-[29rem] mx-auto lg:mx-0">
                {data.crew[active].bio}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start order-2 md:order-last gap-6 mt-10c">
              {[1, 2, 3, 4].map((_, index) => (
                <button
                  onClick={() => setActive(index)}
                  className={`${
                    active === index ? "bg-white" : "bg-white/20"
                  } h-[15px] w-[15px] rounded-full hover:bg-white/50`}
                ></button>
              ))}
            </div>
          </div>
          <div className="flex order-start w-full px-8 md:px-0 lg:mb-34x relative">
            <img
              src={images[active]}
              alt={"name"}
              className="shrink lg:absolute bottom-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
