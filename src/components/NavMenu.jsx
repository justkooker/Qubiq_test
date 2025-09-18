import React, { useState } from "react";
import BurgerButton from "./BurgerButton";

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "How it works", label: "How it works" },
    { id: "Token design", label: "Token design" },
    { id: "YARD flywheel", label: "YARD flywheel" },
  ];

  return (
    <section className="relative flex justify-end md:justify-between w-full h-full">
      <BurgerButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div
        className={`flex flex-col gap-2 md:flex-row md:justify-between xl:justify-center md:flex-1  bg-[#E8E9ED] md:bg-transparent absolute top-12 md:static w-full md:h-full max-w-[176px] md:max-w-none md:w-auto h-auto border border-[#E1E1E246] md:border-none rounded-xl md:rounded-[100px] p-4 md:py-0 md:px-1 transitionS duration-500  ${
          isMenuOpen ? "right-0" : "right-[-120%]"
        }`}
      >
        <ul
          className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 h-full
             font-konnect text-sm md:text-[11px] xl:text-[13px] font-medium text-[#AEB0B1] md:bg-[#F3F4F6] border border-[#E1E1E246] rounded-xl md:rounded-full md:px-1"
        >
          {menuItems.map((item) => (
            <li className="h-full max-h-8 bg-transparent cursor-pointer" key={item.id}>
              <a
                className={`inline-flex items-center justify-center h-full md:px-3 rounded-[100px] transition-all duration-200 ${
                  active === item.id
                    ? " md:bg-[#303030] text-[#303030] md:text-[#FBFBFC]"
                    : "md:hover:text-[#5a5b5c] md:hover:bg-white"
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="font-konnect font-medium text-[13px] md:text-[11px] text-[#E8E9ED] py-3 px-11 md:px-4 bg-[#303030] border border-[#EBEBED] rounded-full xl:invisible">
          Connect
        </button>
      </div>
    </section>
  );
};

export default NavMenu;
