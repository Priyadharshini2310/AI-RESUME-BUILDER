// import React from 'react';

// const TechStack = ({portfolioData} ) => {
//   return (
//     <div className="grid grid-cols-5 gap-1 mt-6">
//       <div className="px-6 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//         {portfolioData.skill1}
//       </div>
//       <div className="px-5 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill2}
//       </div>
//       <div className="py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill3}
//       </div>
//       <div className="py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill4}
//       </div>
//       <div className="px-5 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill5}
//       </div>
//       <div className="px-6 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill6}
//       </div>
//       <div className="px-6 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill7}
//       </div>
//       <div className="py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105">
//       {portfolioData.skill8}
//       </div>
//     </div>
//   );
// };

// export default TechStack;
import React from 'react';

const TechStack = ({ portfolioData }) => {
  const skills = portfolioData.attributes?.skills || [];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-6">
      {skills.map((skillObj, index) => (
        <div
          key={index}
          className="px-4 py-2 text-xs text-center text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105"
        >
          {skillObj.skillName}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
