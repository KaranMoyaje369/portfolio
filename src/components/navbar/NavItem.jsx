import React from "react";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaServicestack } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavItem = () => {
  const isHomePage = window.location.pathname === "/portfolio/";

  return (
    <>
      {[
        { to: "/", icon: <IoHome />, label: "Home" },
        { to: "/about", icon: <FaInfoCircle />, label: "About" },
        { to: "/education", icon: <IoMdSchool />, label: "Education" },
        { to: "/skills", icon: <GiSkills />, label: "Skills" },
        { to: "/projects", icon: <GoProjectSymlink />, label: "Projects" },
        { to: "/services", icon: <FaServicestack />, label: "Services" },
        { to: "/contact", icon: <RiContactsFill />, label: "Contact" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-btnHover relative group shadow-primaryShadow p-2 rounded-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-secondaryShadow"
        >
          <NavLink to={item.to} className="cursor-pointer text-3xl">
            {item.icon}
          </NavLink>

          {/* Tooltip Code */}
          <div
            className={`absolute ${
              isHomePage
                ? "lg:top-1/2 lg:left-full lg:transform lg:-translate-y-1/2 lg:ml-2 md:top-full  md:left-0 md:mt-2"
                : "top-full left-1/2 transform -translate-x-1/2 mt-2"
            } hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md tracking-wider transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
          >
            {item.label}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavItem;
