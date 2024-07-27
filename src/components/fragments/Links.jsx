import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Links = ({
  id,
  href,
  value,
  hasOptions,
  options,
  openId,
  onOpen,
}) => {
  const isOpen = openId === id;

  const handleClick = (e) => {
    if (hasOptions) {
      e.preventDefault();
      onOpen(id);
    }
  };


  return (
    <div className="z-50 w-fit">
      <Link
        className="text-white font-semibold capitalize relative z-50"
        to={href}
      >
        <div className="flex justify-center items-center gap-2 w-full">
          {hasOptions ? (
            <span
              onClick={handleClick}
              className=" hover:scale-105 duration-100 flex justify-center items-center"
            >
              <p className="mx-1">{value}</p>
              {isOpen ? <FaCaretRight size={16} /> : <FaCaretDown size={16} />}
            </span>
          ) : (
            <p className="hover:scale-105">{value}</p>
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col absolute left-0  top-9 text-white gap-1 w-[300px] p-1 bg-blue-200 rounded-lg">
            {options.map((item) => (
              <Link
                className="bg-blue-600 w-full rounded-md py-1 px-2 hover:bg-blue-700 duration-100"
                key={item.id}
                to={item.href}
              >
                {item.value}
              </Link>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
};

export default Links;
