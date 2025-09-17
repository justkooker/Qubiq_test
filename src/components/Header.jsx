import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import BurgerButton from "./BurgerButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex justify-between items-stretch mb-4 md:mb-[64px] md:gap-[50px]">
      <Logo />
          <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
         

      {/* <div className="hidden md:block"></div> */}
    </header>
  );
};
export default Header;
