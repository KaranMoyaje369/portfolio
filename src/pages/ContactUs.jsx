import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import NavItem from "../components/navbar/NavItem";
import { Data } from "../data/data";
import ContactForm from "../components/contact/ContactForm";

const ContactUs = () => {
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
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        {Data[0].contact.title}
      </motion.h2>

      <motion.div
        className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 lg:p-3 mt-2 tracking-wider overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
      >
        <motion.div
          className="bg-mainHeader shadow-secondaryShadow rounded-2xl flex flex-col gap-6 p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <div>
            <span className="text-2xl text-gray-600 font-bold">
              {Data[0].contact.description}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span>
              <span className="text-xl text-gray-600 font-bold">Email : </span>
              <span className="text-gray-600 font-semibold">
                {Data[0].contact.contactDetails.email}
              </span>
            </span>
            <span>
              <span className="text-xl text-gray-600 font-bold">Phone : </span>
              <span className="text-gray-600 font-semibold">
                {Data[0].contact.contactDetails.phone}
              </span>
            </span>
            <span>
              <span className="text-xl text-gray-600 font-bold">
                Address :{" "}
              </span>
              <span className="text-gray-600 font-semibold">
                {Data[0].contact.contactDetails.location}
              </span>
            </span>
          </div>

          <div className="flex justify-start items-center gap-4 mt-4">
            <a
              href={Data[0].home.profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-3xl bg-btnHover shadow-primaryShadow rounded-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-secondaryShadow cursor-pointer p-2 text-blue-700 hover:text-blue-500"
            >
              <FaLinkedin className=" " />
            </a>
            <a
              href={Data[0].home.profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-3xl bg-btnHover shadow-primaryShadow rounded-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-secondaryShadow cursor-pointer p-2 text-gray-800 hover:text-gray-700 mx-4"
            >
              <FaGithub />
            </a>
            <a
              href={Data[0].home.profile.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-3xl bg-btnHover shadow-primaryShadow rounded-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-secondaryShadow cursor-pointer p-2 text-red-600 hover:text-red-500"
            >
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-mainHeader shadow-secondaryShadow rounded-2xl flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;
