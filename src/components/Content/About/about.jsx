import React from "react";
import bgImage from "../../../assets/rocket.png";
import TechStack from '../teck-stack/teck-stack'; // Import the TechStack component

const About = ({portfolioData} ) => {
  return (
    <div
      className="relative w-full max-w-4xl p-6 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg bg-blue-100/10 backdrop-blur-sm md:p-12"
      style={{
        backgroundImage: `url(${bgImage})`, 
      }}
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
        
        <div className="flex items-center justify-center">
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="mb-10 text-white"> 
            <h1 className="mb-4 space-x-1 text-3xl ">
              About
            </h1>
            <p className="mb-6 text-lg">
              {portfolioData.attributes.About}
            </p>

            <TechStack portfolioData= {portfolioData} /> 

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
