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
          <div className=" grid md:grid-flow-col grid-flow-row md:grid-rows-2 grid-cols-2 gap-3 md:gap-10 mt-4">
            <Link to="/">Home</Link>
            <Link to="/">Committee</Link>
            <Link to="/">Tracks</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">About Conference</Link>
            <Link to="/">Registrations Details</Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-full flex flex-col md:flex-row justify-between items-center md:px-44 text-white py-2">
        <span>Copyright. &#169; All rights reserved.</span>
        <span className="text-center mt-3 md:mt-0">Designed & Developed by IES COLLEGE OF TECHNOLOGY, BHOPAL</span>
      </div>
    </>
  );
};

export default Footer;
