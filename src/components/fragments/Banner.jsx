import React from "react";
import mpteas from "../../assets/MP-TEAS.jpeg";

const Banner = () => {
  return (
    <div className="md:px-9 md:py-2 p-2">
      <div className="shadow-sm shadow-black rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-around items-center px-12">
          <span>
            <img className="w-[20rem]" src={mpteas} alt="Mp-teas banner" />
          </span>
          <span className="flex flex-col gap-2 justify-between items-center md:justify-start md:items-start mt-2 md:mt-0">
            <p className="font-bold text-xl">Schedule:</p>
            <span>
              <p className="font-semibold font-serif md:text-xl text-base">MP-TEAS : 22th-24th Nov 2024</p>
              <p>At: IES UNIVERSITY, BHOPAL</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
