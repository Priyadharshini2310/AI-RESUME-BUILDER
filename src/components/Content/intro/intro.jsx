/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { ReactTyped } from "react-typed"; // Import react-typed
import Astonot from "../../../assets/astroonmoon.png";

const Intro = ({portfolioData} ) => {
  console.log("Intro Data",portfolioData.About);
  return (
    <div className="relative w-full max-w-4xl p-6 bg-blue-100/10 rounded-lg shadow-lg h-[55vh] backdrop-blur-sm md:p-12">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-8 mb-4 text-4xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-gray-700 md:text-left">
            {portfolioData.name}
          </h1>
          <div className="p-6 mb-8 font-extrabold text-white">
            <ReactTyped
              className="text-lg font-bold text-center"
              strings={[
                portfolioData.keyline,
              ]}
              typeSpeed={30}
              backSpeed={30}
              loop={false}
              showCursor={true}
            />
          </div>
          {/* <p className="text-lg text-center text-white">
           {portfolioData.attributes.About}
          </p> */}
          <div className="absolute mt-6 -right-12 bottom-2">
            <img
              src={Astonot}
              alt="Astronaut image"
              className="w-36 animate-slowBounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
