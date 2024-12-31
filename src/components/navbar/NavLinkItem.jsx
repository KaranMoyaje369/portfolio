import React from "react";
import { NavLink } from "react-router-dom";
import { RiFolderDownloadFill } from "react-icons/ri";
import { Data } from "../../data/data";

const NavLinkItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black border-b-2 border-gray-400 pb-2"
              : " hover:text-orange-500 pb-2"
          }
        >
          Home
        </NavLink>
      </li>

      {Data[0].navbar.map((item, index) => {
        return (
          <li key={index} className="capitalize">
            <NavLink
              to={`/${item}`}
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-gray-400 pb-2"
                  : " hover:text-primary pb-2"
              }
            >
              {item}
            </NavLink>
          </li>
        );
      })}

      <div className="flex justify-center items-center gap-2 bg-btnHover hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 mt-2 shadow-secondaryShadow px-4 py-2 rounded-lg">
        <span className="font-bold">CV </span>
        <RiFolderDownloadFill className="text-2xl" />
      </div>
    </>
  );
};

export default NavLinkItem;
