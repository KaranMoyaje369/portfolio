import React from "react";
import { motion } from "framer-motion";
import NavItem from "../components/navbar/NavItem";
import { Data } from "../data/data";
import aboutImage from "../assets/aboutImage.webp";

const AboutUs = () => {
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
        {Data[0].about[0].title}
      </motion.h2>

      <div className="overflow-hidden">
        {Data[0].about.map((data, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <div className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 tracking-wider">
                <motion.div
                  className="bg-mainHeader shadow-secondaryShadow h-full flex flex-col justify-center gap-4 p-5 lg:p-3 order-2 md:order-1 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <div className="text-gray-600 text-lg font-semibold">
                    {data.description}
                  </div>
                  <p className="text-lg">
                    <span className="text-gray-600 text-lg font-bold">
                      Interests :
                    </span>{" "}
                    {data.personalDetails.interests.map((interest, index) => {
                      return (
                        <ul key={index}>
                          <li className="text-gray-600 text-lg font-semibold">
                            {interest}
                          </li>
                        </ul>
                      );
                    })}
                  </p>
                </motion.div>
                <motion.div
                  className="bg-mainHeader shadow-secondaryShadow h-full flex flex-col justify-center items-center gap-2 p-5 lg:p-3 order-1 md:order-2 rounded-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  <div>
                    <img
                      src={aboutImage}
                      alt="about image"
                      className="h-[200px] w-[200px] mx-auto rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2 text-lg text-gray-600">
                    <i className="text-center font-bold">{data.quote}</i>
                    <p>
                      <span className="font-bold">Location :</span>{" "}
                      <span className="font-semibold">
                        {data.personalDetails.location}
                      </span>
                    </p>
                    <p>
                      <span className="font-bold">Education :</span>{" "}
                      <span className="font-semibold">
                        {data.personalDetails.education}
                      </span>
                    </p>
                    <p>
                      <span className="font-bold">Experience :</span>{" "}
                      <span className="font-semibold">
                        {data.personalDetails.experience}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
