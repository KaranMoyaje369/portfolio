import React from "react";
import { motion } from "framer-motion";
import NavItem from "../components/navbar/NavItem";
import { Data } from "../data/data";

const Services = () => {
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
        className="text-2xl text-center text-primary underline font-bold tracking-wider my-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        {Data[0].services.title}
      </motion.h2>

      <motion.div
        className="container mx-auto h-auto mt-2 p-5 tracking-wider overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        <h4 className="text-center text-2xl text-primary font-bold">
          What I Offer ?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          {Data[0].services.offerings.map((data, index) => {
            return (
              <motion.div
                key={index}
                className="bg-mainHeader shadow-secondaryShadow rounded-2xl flex flex-col gap-4 p-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <span className="text-2xl text-gray-600 font-bold text-center mb-2">
                  {data.name}
                </span>
                <span className="text-lg">
                  <span className="text-xl text-gray-600 font-bold">
                    Description :{" "}
                  </span>
                  <span className="text-gray-600 font-semibold">
                    {data.description}
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
        <motion.h4
          className="text-center text-primary text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          {Data[0].services.callToAction}
        </motion.h4>
      </motion.div>
    </>
  );
};

export default Services;
