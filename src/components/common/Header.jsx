import React, { useState, useEffect, useRef } from "react";
import { headerOptions } from "../../constants/Options";
import Links from "../fragments/Links";
import { DrawerComponent } from "../fragments/DrawerComponent";
import { Link } from "react-router-dom";

const Header = () => {
  const [openId, setOpenId] = useState(null);
  const containerRef = useRef(null);

  const handleOpen = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpenId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-full h-[4rem] bg-[#2f2f2f] py-1 px-5 md:px-16"
      ref={containerRef}
    >
      <div className="flex justify-between items-center h-full w-full">
        <Link href="/">
          <p className="text-3xl font-extrabold ">
            <span className=" bg-gradient-to-t from-blue-900 to-sky-400 bg-clip-text text-transparent">
              MP-
            </span>
            <span className=" bg-gradient-to-t from-orange-700 to-orange-400 bg-clip-text text-transparent">
              TEAS
            </span>
          </p>
        </Link>
        <div className="hidden md:flex gap-7 z-50">
          {headerOptions.map((item) => (
            <Links
              key={item.id}
              id={item.id}
              href={item.href}
              value={item.value}
              hasOptions={item.hasOptions}
              options={item.options}
              openId={openId}
              onOpen={handleOpen}
              onClose={() => setOpenId(null)}
            />
          ))}
        </div>
        <div className="md:hidden block">
          <DrawerComponent />
        </div>
      </div>
    </div>
  );
};

export default Header;
