import React from "react";

const PcChairs = () => {
  return (
    <div className="md:px-16 px-5 my-3 md:min-h-screen">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">PC Chair(s) Convenor(s)/Co Chairs/Publicity Chairs</p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <div>
          <p className="font-bold md:font-semibold">PC Chair & Convener</p>
          <ul className="list-disc list-inside">
            <li>Prof. Vijay Singh Rathore, Professor-CSE & Director-Research and International Relations, IES University, Bhopal</li>
            <li>Dr. Nikhat Raza Khan, HoD, CSE, IES University, Bhopal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PcChairs;
