import React from "react";

import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="relative w-full md:max-w-[699px] xl:max-w-[1111px]  2xl:max-w-[1392px] h-screen mx-auto px-5 md:px-2 pt-4 md:pt-5 pb-7 z-10">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
