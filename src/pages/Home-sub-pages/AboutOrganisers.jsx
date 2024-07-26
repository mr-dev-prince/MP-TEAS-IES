import React from "react";
import ies from "../../assets/iesUniversity.jpg";

const AboutOrganisers = () => {
  return (
    <div className="px-16">
      <div className="mt-4">
        <p className="text-center text-2xl font-semibold">
          About Conference Organisers
        </p>
        <span>
          <p className="text-center text-5xl font-bold mt-3 font-serif">
            IES University, Bhopal
          </p>
        </span>
        <div className="flex justify-center items-center p-2">
          <img className="h-[500px] w-[80%] shadow-xl shadow-black" src={ies} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutOrganisers;
