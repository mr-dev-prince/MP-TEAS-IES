import React from "react";
import ies from "../../assets/iesUniversity.jpg";

const AboutOrganisers = () => {
  return (
    <div className="md:px-16 md:min-h-screen">
      <div className="mt-4 my-3">
        <p className="text-center md:text-2xl underline font-semibold">
          About Conference Organisers
        </p>
        <div>
          <p className="text-center md:text-5xl text-3xl font-bold mt-3 font-serif">
            IES University, Bhopal
          </p>
          <div className=" h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        </div>
        <div className="flex justify-center items-center md:p-2 mt-4 ">
          <img
            className=" h-[300px] md:h-[500px] w-[90%] shadow-lg shadow-black"
            src={ies}
            alt=""
          />
        </div>
        <div className="text-lg flex flex-col gap-4 px-5 md:px-16 text-justify mt-6 font-semibold tracking-wide">
          <p>
            <span className="font-serif font-bold text-xl">IES University</span>
            , Bhopal has been established under Section 2 (f) of UGC Act 1956.
            In addition to the conventional courses in Engineering and Basic
            sciences the University offers flagship courses in the field of
            Engineering, Agriculture, Pharmacy, Hotel Management,
            Mass Communication & Journalism, Nursing etc.
          </p>
          <p>
            IES University aspires to be a centre of academic research for
            promoting human excellence by imparting knowledge, enhancing skills
            and inculcating an innovative mindset in faculties as well as
            students for contributing to National growth and receiving Global
            acclaim.
          </p>
          <p>
            IES group is well known for its student centric approach and the
            entire focus is on outcome based approach so as to facilitate skill
            building, entrepreneurship development and creation of
            professionals, IES Group continuously strives for academic
            excellence through faculty development programmes, capacity and
            capability building training sessions etc.
          </p>
          <p>
            Following a student centric and faculty friendly approach, IES
            University has been bestowed with the honor of being recipient of
            many awards.
          </p>
          <p>
            For more details about IES University, visit
            <a className="px-2 text-blue-600 underline" href="http://www.iesuniversity.ac.in">http://www.iesuniversity.ac.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOrganisers;
