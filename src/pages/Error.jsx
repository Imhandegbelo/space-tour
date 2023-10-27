import React from "react";

export default function Error() {
  return (
    <div className="w-screen h-screen bg-crew-desktop">
      <div className="flex flex-col">
        <h1 className="text-4xl">Error 404</h1>
        <p>The requested url could not be found on the server</p>
      </div>
    </div>
  );
}
