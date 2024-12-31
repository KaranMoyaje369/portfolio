import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NavLinkItem from "./NavLinkItem";

const ResponsiveNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Mobile hamburger menu section */}
      <div
        className="text-3xl lg:hidden hover:text-primary hover:bg-btnHover shadow-secondaryShadow p-2 rounded-full cursor-pointer"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>

      {/* Mobile sidebar section */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[6rem] left-0  z-50 bg-black bg-opacity-90"
          >
            <div className="flex flex-col justify-center items-center gap-6 text-[20px] font-bold  bg-mainHeader shadow-secondaryShadow text-gray-600 px-10 py-5 tracking-wider">
              <div>
                <FaWindowClose
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              </div>
              <div>
                <ul className=" flex flex-col justify-center items-center gap-3">
                  <NavLinkItem></NavLinkItem>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveNavbar;
