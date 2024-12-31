import React from "react";
import { motion } from "framer-motion";
import NavItem from "../components/navbar/NavItem";
import { Data } from "../data/data";

const Education = () => {
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
        {Data[0].education[0].title}{" "}
      </motion.h2>
      <div className="overflow-hidden">
        {Data[0].education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <div className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 mt-2 tracking-wider">
              {edu.qualifications.map((qualification, qIndex) => (
                <motion.div
                  key={qIndex}
                  className=" bg-mainHeader shadow-secondaryShadow flex flex-col gap-2 p-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: qIndex * 0.3,
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-600">
                    {qualification.degree}
                  </h3>
                  <p>
                    <span className="font-bold text-lg text-gray-600">
                      Institution:
                    </span>{" "}
                    <span className="text-lg text-gray-600 font-semibold">
                      {qualification.institution}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-lg text-gray-600">
                      Year:
                    </span>{" "}
                    <span className="text-lg text-gray-600 font-semibold">
                      {qualification.year}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-lg text-gray-600">
                      Details:
                    </span>{" "}
                    <span className="text-lg text-gray-600 font-semibold">
                      {qualification.details}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-lg text-gray-600">
                      Percentage:
                    </span>{" "}
                    <span className="text-lg text-gray-600 font-semibold">
                      {qualification.percentage}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Education;
