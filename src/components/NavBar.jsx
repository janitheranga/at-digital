import React, { useState } from "react";

const NAV_ITEMS = ["SERVICES", "ABOUT US", "CONTACT US", "CAREERS"];

const NavBar = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <nav className="px-[26px] py-[20px] md:px-[40px] md:py-[26px] lg:px-[80px] lg:py-[26px] bg-[#6B3CC9] z-50 flex flex-col justify-between sticky top-0 font-inter">
      <div className="flex flex-row justify-between">
        <a href="/">
          <img
            src="/Logo.png"
            alt="AT Digital logo"
            className="h-[25px] object-cover"
          />
        </a>
        <ul className="hidden list-none md:flex md:flex-row text-white">
          {NAV_ITEMS.map((item, i) => (
            <li key={item} className="pr-5">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div
          className="flex flex-col md:hidden justify-center transition-transform"
          onClick={handleSelect}
        >
          <div
            className={`w-[28px] h-[3px] bg-white ${
              selected ? "-mb-[1.5px] origin-center rotate-45 " : "mb-[4px]"
            } rounded`}
          />
          <div
            className={`w-[28px] h-[3px] bg-white my-[3px] rounded ${
              selected ? "hidden" : "block"
            }`}
          />
          <div
            className={`w-[28px] h-[3px] bg-white ${
              selected ? "-mt-[1.5px] origin-center -rotate-45" : "mt-[4px]"
            } rounded`}
          />
        </div>
      </div>
      <ul
        className={`list-none pt-3 text-white ${
          selected ? "flex flex-col" : "hidden"
        }`}
      >
        {NAV_ITEMS.map((item, i) => (
          <li key={item} className="py-2">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
