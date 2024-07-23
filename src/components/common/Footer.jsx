import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center py-5 bg-[#212121]">
        <div className="flex flex-col justify-center items-start text-white">
          <span>
            <p className="font-semibold text-2xl">Useful Links</p>
          </span>
          <div className=" grid grid-flow-col grid-rows-2 gap-10 font-semibold mt-4">
            <Link to="/">Home</Link>
            <Link to="/">About Conference</Link>
            <Link to="/">Committee</Link>
            <Link to="/">Tracks</Link>
            <Link to="/">Registrations Details</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-full flex justify-between items-center px-44 text-white py-2">
        <span>Copyright. &#169; All rights reserved.</span>
        <span>Designed & Developed by IES COLLEGE OF TECHNOLOGY, BHOPAL</span>
      </div>
    </>
  );
};

export default Footer;
