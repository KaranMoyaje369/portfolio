import React from "react";
import NavItem from "../components/navbar/NavItem";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <>
      <motion.div
        className="container mx-auto text-black md:flex hidden items-center justify-center gap-6 lg:gap-4 lg:text-3xl text-2xl font-bold p-2 bg-mainHeader rounded-full shadow-secondaryShadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <NavItem />
      </motion.div>
      <h2 className="text-2xl text-center text-primary underline font-bold tracking-wider my-4">
        404 Page Not Found
      </h2>
    </>
  );
};

export default PageNotFound;
