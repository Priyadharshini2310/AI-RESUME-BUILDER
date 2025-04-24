import React, { useState } from "react";
import flying from "../../../assets/lookup.png";
import {ReactTyped} from "react-typed"; // Import react-typed

const Experience = ({portfolioData}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:scale-105 transition-transform duration-300 relative w-full max-w-4xl p-6 bg-blue-100/10 rounded-lg shadow-lg h-[30vh] backdrop-blur-sm md:p-12"
    >
      <h2 className="mb-6 -mt-4 text-2xl font-bold text-center text-transparent text-whitetext-xl bg-clip-text bg-gradient-to-r from-blue-100 to-gray-700 ">
        Experience
      </h2>

      {isHovered ? (
        <ReactTyped
          className="-mt-52 text-xs text-center text-white"
          strings={[`${portfolioData.attributes.experience}`]}
          typeSpeed={30}
          backSpeed={30}
          loop={false}
          showCursor={true}
        />
      ) : (
        <p className="text-lg -mt-2 font-bold text-center text-white">
          Hover Me!
        </p>
      )}

      <img
        src={flying}
        alt="Flying Icon"
        className="absolute w-20 h-20 -right-10 -bottom-12 md:w-56 md:h-56"
      />
    </div>
  );
};

export default Experience;
