import React from "react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = [
    "Front-End Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);
  return (
    <>
      <div className="bg-mainHeader shadow-secondaryShadow flex flex-col justify-center gap-12 items-center p-5 h-full rounded-2xl tracking-wider">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 ">
            Hi, I'm Karan. – A Passionate{" "}
            <span className="text-blue-500">{displayedText}</span>
          </h2>
        </div>
        <div>
          <h4 className="text-gray-600 text-lg font-semibold">
            "A passionate front-end developer dedicated to designing and
            building user-friendly, modern, and responsive websites. I
            specialize in creating seamless digital experiences using React.js,
            Tailwind CSS, and other cutting-edge technologies. My mission is to
            bring ideas to life through code, combining creativity and
            functionality to deliver exceptional results. Let’s collaborate to
            turn your vision into reality!"
          </h4>
        </div>
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="bg-btnColor text-primary text-lg font-bold hover:bg-btnHover hover:text-black transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider">
            View My Work
          </button>
          <button className="bg-btnHover text-black text-lg font-bold hover:bg-btnColor hover:text-primary transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider">
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
