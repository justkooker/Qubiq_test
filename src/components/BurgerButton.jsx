import React from "react";

import burgerIcon from "../assets/burger-icon.svg";
import closeIcon from "../assets/close-burger-icon.svg";

const BurgerButton = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 bg-[#F6F7F8] border border-[#DEDEE37345] rounded-xl cursor-pointer md:hidden"
      onClick={toggleMenu}
    >
      {isMenuOpen ? (
        <img src={closeIcon} alt="burger icon" />
      ) : (
        <img src={burgerIcon} alt="burger icon" />
      )}
    </button>
  );
};

export default BurgerButton;
