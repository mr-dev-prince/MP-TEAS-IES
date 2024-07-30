import React from "react";

const EminentSpeakers = () => {
  return (
    <div className="md:min-h-screen md:px-16">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Eminent Speakers
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <p className="mt-4 text-xl font-semibold animate-pulse">To be announced soon ! </p>
      </div>
    </div>
  );
};

export default EminentSpeakers;
