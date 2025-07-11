import React, { useState, useEffect } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { achievements } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import styles from "../style";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (e) => setIsMediumScreen(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = isMediumScreen
    ? currentIndex === Math.floor((achievements.length - 1) / 3)
    : currentIndex === achievements.length - 1;

  return (
    <section
      className="relative z-[0] bg-primary overflow-hidden text-white mt-5 md:mt-10 relative"
      id="achievements"
    >
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}  sm:px-10`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className=" sm:px-4 flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
            Achievements
          </h1>
        </div>
      </div>
      <div className="absolute z-[0] w-[20%] h-[20%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} overflow-hidden`}>
          <div className="my-20">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex / achievements.length) * 100
                }%)`,
                width: `${achievements.length * 100}%`,
              }}
            >
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
            <div className="flex justify-end mb-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <div className="flex-shrink-0 flex flex-col md:w-[400px] w-[320px] justify-around px-6 py-4 rounded-[20px] md:mr-10 mr-6 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent">
      <img
        src={props.icon}
        alt={props.event}
        className="w-[45px] h-[45px] rounded-full mt-1 mb-1"
      />

      <div className="flex flex-col justify-end mt-4 mb-1">
        <p className="font-poppins font-normal text-xl text-white leading-[24px] mb-2">
          {props.event}
        </p>
        <p className="font-poppins italic font-normal text-lg text-gradient mb-3">
          {props.position}
        </p>
        {props.content1 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            🚀 {props.content1}
          </p>
        )}
        {props.content2 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            ⚡ {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-4">
            🔥 {props.content3}
          </p>
        )}
      </div>

      <div className="flex flex-row mb-2 font-poppins font-normal text-dimWhite">
        {props.article && (
          <a
            className="inline-flex items-center mr-2 hover:text-teal-200"
            href={props.article}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiNews size="1.5rem" className="inline" />
          </a>
        )}
        {props.youtube && (
          <a
            className="inline-flex items-center mr-2 hover:text-teal-200"
            href={props.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size="1.5rem" className="inline" />
          </a>
        )}
        {props.github && (
          <a
            className="inline-flex items-center mr-2 hover:text-teal-200"
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="1.5rem" className="inline" />
          </a>
        )}
        {props.project && (
          <a
            className=" inline-flex items-center hover:text-teal-200"
            href={props.project}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLink45Deg size="1.5rem" className="inline" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Achievements;
