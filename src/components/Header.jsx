import React, { useState } from "react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex justify-between items-stretch mb-4 md:mb-[64px] md:gap-[50px]">
      <Logo />
      <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
export default Header;
