import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <div className="bg-mainHeader text-black flex lg:flex-col items-center justify-center gap-6 lg:gap-4 lg:text-3xl text-2xl font-bold p-2 px-8 lg:px-2 lg:py-4 rounded-full shadow-secondaryShadow">
        <NavItem />
      </div>
    </>
  );
};

export default Navbar;
