import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Data } from "../data/data";
import NavItem from "../components/navbar/NavItem";

const Projects = () => {
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
      <motion.h2
        className="text-2xl text-center text-primary underline font-bold tracking-wider my-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        {Data[0].projects.title}
      </motion.h2>
      <div className="overflow-hidden">
        <motion.div
          className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:place-content-center p-5 mt-2 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {Data[0].projects.projectList.map((data, index) => {
            return (
              <motion.div
                key={index}
                className="bg-mainHeader shadow-secondaryShadow rounded-2xl flex flex-col gap-2 text-lg p-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <span className="text-2xl text-gray-600 text-center font-bold mb-2">
                  Project {index + 1}
                </span>
                <span className="text-center text-gray-600 font-bold text-xl mb-2">
                  {data.name}
                </span>
                <span className="mb-1">
                  <span className="text-xl text-gray-600 font-bold">
                    Description :{" "}
                  </span>
                  <span className="text-gray-600 font-semibold">
                    {data.description}
                  </span>
                </span>
                <span className="mb-1">
                  <span className="text-xl text-gray-600 font-bold">
                    Technologies :{" "}
                  </span>
                  <span className="text-gray-600 font-semibold">
                    {data.technologies}
                  </span>
                </span>
                <div className="flex justify-center items-center gap-4">
                  <a
                    href={data.link}
                    className="bg-btnColor text-primary text-lg font-bold hover:bg-btnHover hover:text-black transition ease-in-out duration-400 shadow-secondaryShadow p-2 rounded-2xl tracking-wider"
                  >
                    Live View
                  </a>
                  <NavLink
                    to="/path"
                    className="bg-btnHover text-black text-lg font-bold hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 shadow-secondaryShadow p-2 rounded-2xl tracking-wider"
                  >
                    Know More
                  </NavLink>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
