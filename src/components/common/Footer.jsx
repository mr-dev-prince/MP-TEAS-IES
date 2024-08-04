import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/ies.png";
import logo2 from "../../assets/icot.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center py-5 bg-[#212121]">
        <div className="flex md:flex-row flex-col  justify-center items-center md:gap-24 gap-4 text-white">
          <span className="hidden md:block">
            <p className="font-semibold text-2xl">Useful Links</p>
          </span>
          <div className=" hidden md:grid md:grid-flow-col grid-flow-row md:grid-rows-2 grid-cols-2 gap-3 md:gap-6 mt-4">
            <Link to="/">Home</Link>
            <Link to="/tracks">Tracks</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/mpteas">About Conference</Link>
          </div>
          <div className="h-[90px] outline outline-1 hidden md:block"/>
          <div className="text-center space-y-5">
            <p className="text-xl font-bold font-serif">In Association with:</p>
            <div className="flex gap-10  px-1 ">
              <img className="md:h-12 h-8" src={logo1} alt="" />
              <img className="md:h-12 h-8" src={logo2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-full flex flex-col md:flex-row justify-between items-center md:px-44 text-white py-2">
        <span>Copyright. &#169; All rights reserved.</span>
        <span className="text-center mt-3 md:mt-0">
          Developed by  
          <Link className=" hover:scale-105" to="https://www.linkedin.com/in/princechaurasia/"> Prince,</Link>
          <Link className=" hover:scale-105" to="https://www.linkedin.com/in/anshu-pandey-b08860258/"> Anshu,</Link>
          <Link className=" hover:scale-105" to="https://www.linkedin.com/in/himi04/"> Himanshi </Link>
            & Team
        </span>
      </div>
    </>
  );
};

export default Footer;
