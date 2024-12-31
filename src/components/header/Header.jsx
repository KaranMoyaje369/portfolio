import React from "react";
import logo from "/assets/portfolio.png";
import ResponsiveNavbar from "../navbar/ResponsiveNavbar";

const Header = () => {
  return (
    <>
      <div className="relative pb-[6rem]">
        <div className="w-full flex justify-between items-center px-8 py-4 fixed top-0 shadow-secondaryShadow bg-mainHeader z-50">
          <div>
            <img src={logo} alt="" className="h-[50px] w-[50px]" />
          </div>
          <div className="md:flex gap-4 hidden">
            <a
              href="assets/resume.pdf"
              download
              className="bg-btnHover text-black text-lg font-bold hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider"
            >
              Download CV
            </a>
            <button className="bg-btnHover text-black text-lg font-bold hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider">
              Contact US
            </button>
          </div>
          <div className="md:hidden">
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
