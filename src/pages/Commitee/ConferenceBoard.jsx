import React from "react";

const ConferenceBoard = () => {
  return (
    <div className="md:px-16 px-5 my-3 md:min-h-screen">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">Conference Board</p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <div>
          <p className="font-bold md:font-semibold">Conference Organizers and Conference Boards</p>
          <ul className="list-disc list-inside">
            <li>Department of Computer Science Engineering, IES University, Bhopal</li>
            <li>Department of Computer Science Engineering, IES College of Technology, Bhopal</li>
          </ul>
        </div>
        <div>
          <p className="font-bold md:font-semibold">Societies Supporting the Conference</p>
          <ul className="list-disc list-inside">
            <li>IEEE M.P. SECTION</li>
            <li>ACM Student Chapter, IES College of Technology, Bhopal</li>
            <li>Institution of Electronics and Telecommunication Engineers Chapter, (IETE), Bhopal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBoard;
