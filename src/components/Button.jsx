import React from "react";

const Button = ({text}) => {
  return (
    <button className="bg-[#F28D35] uppercase px-[12px] py-[12px] mt-5 mb-[16px] w-[214px]  font-bold text-[14px] text-white">
      {text}
    </button>
  );
};

export default Button;
