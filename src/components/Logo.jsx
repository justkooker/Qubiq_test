import React from "react";

import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <a
      href=""
      className="flex items-center gap-2 bg-transparent xl:bg-[#EFEFF2] xl:border xl:border-[#31343912] rounded-full py-2 xl:px-3"
    >
      <div className="w-5 h-5  md:w-6 2xl:h-6">
        <img className="w-full h-full object-contain" src={logo} alt="logo" />
      </div>
      <span className="font-gilroy font-normal text-base text-[#333333F2]">
        Backyard
      </span>
    </a>
  );
};

export default Logo;
