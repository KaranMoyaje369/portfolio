import React from "react";
import { motion } from "framer-motion";
import NavItem from "../components/navbar/NavItem";
import { Data } from "../data/data";

const Skills = () => {
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
        {Data[0].skills.title}
      </motion.h2>

      <motion.div
        className="container mx-auto mb-5 h-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-10 tracking-wider text-center text-lg font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <div className="flex justify-center items-start">
            <div className="bg-mainHeader rounded-2xl shadow-secondaryShadow p-5 h-full w-full">
              <h3 className="text-center text-2xl text-gray-600 font-bold mb-4">
                Technical Skills
              </h3>
              {Data[0].skills.technicalSkills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="bg-btnHover text-gray-600 hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 rounded-full shadow-secondaryShadow px-4 py-2 m-2 inline-block"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        >
          <div className="bg-mainHeader rounded-2xl shadow-secondaryShadow flex flex-col p-5 h-full w-full">
            <h3 className="text-center text-2xl text-gray-600 font-bold mb-4">
              Soft Skills
            </h3>
            {Data[0].skills.softSkills.map((skill, i) => {
              return (
                <span
                  key={i}
                  className="bg-btnHover text-gray-600 hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 rounded-full shadow-secondaryShadow px-4 py-2 m-2 inline-block"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
