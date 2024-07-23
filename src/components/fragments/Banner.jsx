import React from "react";
import mpteas from "../../assets/MP-TEAS.jpeg";

const Banner = () => {
  return (
    <div className="px-9 py-2">
      <div className="shadow-sm shadow-black rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-12">
          <span>
            <img className="w-[20rem]" src={mpteas} alt="Mp-teas banner" />
          </span>
          <span className=" flex flex-col justify-center items-center">
            <p className="font-serif font-bold text-3xl">
              Proceedings of MP-TEAS 2024
            </p>
            <p className="font-semibold text-2xl font-serif">IES UNIVERSITY</p>
            <p className="font-bold text-xl">BHOPAL</p>
          </span>
          <span className="flex flex-col gap-2">
            <p className="font-bold text-xl">Schedule:</p>
            <span>
              <p className="font-semibold">
                MP-TEAS Part 1 : 6th-7th July 2024
              </p>
              <p>At: IES UNIVERSITY, BHOPAL</p>
            </span>
            <span>
              <p className="font-semibold">
                MP-TEAS Part 2 : 16th-17th July 2024
              </p>
              <p>At: IES UNIVERSITY, BHOPAL</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
