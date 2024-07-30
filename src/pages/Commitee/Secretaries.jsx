import React from "react";

const Secretaries = () => {
  return (
    <div className="md:px-16 px-5 my-3 min-h-screen">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">Organizing Secretary and Publicity Chair</p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <div>
          <p className="font-bold md:font-semibold">Organizing Secretary</p>
          <ul className="list-disc list-inside">
            <li>Dr. Manmohan Singh, Professor, CSE, IES University, Bhopal</li>
          </ul>
        </div>
        <div>
          <p className="font-bold md:font-semibold">Publicity Chair</p>
          <ul className="list-disc list-inside">
            <li>Prof. Zdzislaw Polkowski, Professor, Jan Wyzykowski University, Poland</li>
            <li>Prof. Rosalina Babo, Professor, Polytechnic Institute of Porto, Portugal</li>
            <li>Prof. M. Hanumanthappa, Professor, University of Bangalore, Bangalore</li>
            <li>Prof. Paresh Virparia, Professor, Sardar Patel University, VallabhVidyanagar, Gujarat</li>
            <li>Prof. Vibhakar Mansotra, Professor & Director, University of Jammu, Jammu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Secretaries;
