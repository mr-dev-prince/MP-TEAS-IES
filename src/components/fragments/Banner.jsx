import React from "react";
import mpteas from "../../assets/MP-TEAS.jpeg";

const Banner = () => {
  return (
    <div className="py-2">
      <div className="shadow-md shadow-black py-4 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <span>
            <img className="w-[20rem]" src={mpteas} alt="Mp-teas banner" />
          </span>
          <span className="flex flex-col gap-2 justify-between items-center md:justify-start md:items-start mt-2 md:mt-0">
            <p className="font-bold text-xl">Schedule:</p>
            <span>
              <p className="font-semibold font-serif md:text-xl text-base">MP-TEAS : 22nd-24th Nov 2024</p>
              <p>At: IES UNIVERSITY, BHOPAL</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
