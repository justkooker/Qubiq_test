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
    <section className="relative flex justify-end md:justify-between w-full">
      <BurgerButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="flex md:justify-between xl:justify-center md:flex-1 bg-[#EFEFF2] md:bg-transparent">
        <ul
          className={`flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 absolute ${
            isMenuOpen ? "right-0" : "right-[-120%]"
          }  top-12 md:static w-full max-w-[176px] md:max-w-none md:w-auto h-auto font-konnect text-sm md:text-[11px] xl:text-[13px] font-medium text-[#AEB0B1] bg-[#F3F4F6] border border-[#E1E1E246] rounded-xl md:rounded-full p-4 md:p-1 transitionS duration-500`}
        >
          {menuItems.map((item) => (
            <li className="bg-transparent cursor-pointer" key={item.id}>
              <a
                className={`md:p-3 rounded-full transition-all duration-200 ${
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
        <button className="hidden md:block font-konnect font-medium text-[13px] md:text-[11px] text-[#E8E9ED] py-3 px-11 md:px-4 bg-[#303030] border border-[#EBEBED] rounded-full xl:invisible">
          Connect
        </button>
      </div>
    </section>
  );
};

export default NavMenu;
