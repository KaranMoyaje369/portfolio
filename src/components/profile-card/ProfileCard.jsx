import React from "react";
import { Data } from "../../data/data";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from "/assets/profileImage.webp";

const ProfileCard = () => {
  return (
    <>
      <div className="bg-mainHeader shadow-secondaryShadow flex flex-col items-center justify-center p-8 lg:p-4 rounded-2xl tracking-wider">
        {Data.map((profile, index) => {
          return (
            <div key={index}>
              <div>
                <img
                  src={profileImage}
                  className="rounded-full h-40 w-40 mx-auto mb-2"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  {profile.home.profile.name}
                </h1>
                <p className="text-center text-gray-600 font-semibold">
                  {profile.home.profile.message}
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center my-6 lg:my-4">
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
        <div>
          <button className="bg-btnColor text-primary text-lg font-bold hover:bg-btnHover hover:text-black transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
