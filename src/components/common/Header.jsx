import React, { useState } from "react";
import { headerOptions } from "../../constants/Options";
import Links from "../fragments/Links";
import { DrawerComponent } from "../fragments/DrawerComponent";

const Header = () => {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full h-[3rem] bg-[#212121] py-1 px-4 ">
      <div className="flex justify-between items-center h-full w-full">
        <div></div>
        <div className="md:flex gap-7 z-50 hidden">
          {headerOptions.map((item) => (
            <Links
              key={item.id}
              id={item.id}
              href={item.href}
              value={item.value}
              hasOptions={item.hasOptions}
              options={item.options}
              openId={openId}
              onOpen={() => handleOpen(item.id)}
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
