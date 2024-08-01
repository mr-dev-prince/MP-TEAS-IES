import React from "react";
import img1 from "../../assets/chancellor.jpeg";
import img2 from "../../assets/pro_chancellor.jpeg";

const Patron = () => {
  return (
    <div className="md:min-h-screen">
      <div className="mt-2">
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Patron
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-12 ">
        <div className="outline p-2 rounded-md shadow-xl shadow-slate-400">
          <img
            className="md:h-96 md:w-96 w-80 object-cover rounded-lg"
            src={img1}
            alt="Er. B. S. Yadav"
          />
          <div className="text-center mt-2">
            <p className="text-3xl font-bold font-serif">Er. B. S. Yadav</p>
            <p className="text-xl font-semibold">Chancellor</p>
            <p className="text-md font-medium">IES University, BHOPAL</p>
          </div>
        </div>
        <div className="outline p-2 rounded-md shadow-xl shadow-slate-400">
          <img
            className="md:h-96 md:w-96 w-80 object-cover rounded-lg"
            src={img2}
            alt="Dr. Sunita Singh"
          />
          <div className="text-center mt-2">
            <p className="text-3xl font-bold font-serif">Dr. Sunita Singh</p>
            <p className="text-xl font-semibold">Pro-Chancellor</p>
            <p className="text-md font-medium">IES University, BHOPAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patron;
