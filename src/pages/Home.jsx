import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero-section/HeroSection";
import ProfileCard from "../components/profile-card/ProfileCard";

const Home = () => {
  return (
    <>
      <motion.div
        className="h-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 lg:place-content-start justify-center items-center m-5 lg:mr-4">
          <motion.div
            className="lg:col-span-1 md:flex justify-center items-center hidden"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Navbar />
          </motion.div>
          <motion.div
            className="lg:col-span-7 order-3 lg:order-none"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <HeroSection />
          </motion.div>
          <motion.div
            className="lg:col-span-4 order-1 lg:order-none"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
