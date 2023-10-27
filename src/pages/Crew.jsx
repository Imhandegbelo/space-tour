import React from "react";
import Navbar from "../components/Navbar";

export default function Crew() {
  return (
    <div className="h-screen w-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover overflow-x-clip">
      <Navbar />
      <div>Crew</div>
    </div>
  );
}
