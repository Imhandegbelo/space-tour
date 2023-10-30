import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover text-white items-center justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-Bellefair">Error 404</h1>
        <p>The requested url could not be found on the server</p>
      </div>
    </div>
  );
}
