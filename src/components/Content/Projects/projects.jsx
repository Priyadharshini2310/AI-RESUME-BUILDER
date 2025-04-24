// // // // // // import React, { useRef, useState } from 'react';
// // // // // // import '../../../components/styles/project.css'; // Import the CSS for scrolling animation


// // // // // // const Projects = ({portfolioData}) => {
// // // // // //   const ref = useRef(null);
// // // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="relative projects-container overflow-hidden w-full max-w-[900px] mx-auto"
// // // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // // //     >
// // // // // //       <ul
// // // // // //         ref={ref}
// // // // // //         className={`scrolling-container flex space-x-4 snap-x snap-mandatory ${
// // // // // //           isHovered ? 'paused' : ''
// // // // // //         }`}
// // // // // //       >
// // // // // //         {[`${portfolioData.project1}, ${portfolioData.project2}, ${portfolioData.project3}, ${portfolioData.project4}, ${portfolioData.project5}`].map(
// // // // // //           (project, index) => (
// // // // // //             <li
// // // // // //               key={index}
// // // // // //               className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //             >
// // // // // //               {project}
// // // // // //             </li>
// // // // // //           )
// // // // // //         )}
// // // // // //         {/* Duplicate content for seamless infinite scrolling */}
// // // // // //         {[`${portfolioData.project1}, ${portfolioData.project2}, ${portfolioData.project3}, ${portfolioData.project4}, ${portfolioData.project5}`].map(
// // // // // //           (project, index) => (
// // // // // //             <li
// // // // // //               key={index + 5}
// // // // // //               className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //             >
// // // // // //               {project}
// // // // // //             </li>
// // // // // //           )
// // // // // //         )}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // // import React, { useRef, useState } from 'react';
// // // // // // import '../../../components/styles/project.css'; // Your CSS for scrolling

// // // // // // const Projects = ({ portfolioData }) => {
// // // // // //   const ref = useRef(null);
// // // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // // //   // Collect valid project values into an array
// // // // // //   const projects = [
// // // // // //     portfolioData.project1,
// // // // // //     portfolioData.project2,
// // // // // //     portfolioData.project3,
// // // // // //     portfolioData.project4,
// // // // // //     portfolioData.project5,
// // // // // //   ].filter(Boolean); // remove undefined/empty projects

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="relative projects-container overflow-hidden w-full max-w-[900px] mx-auto"
// // // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // // //     >
// // // // // //       <ul
// // // // // //         ref={ref}
// // // // // //         className={`scrolling-container flex space-x-4 snap-x snap-mandatory ${
// // // // // //           isHovered ? 'paused' : ''
// // // // // //         }`}
// // // // // //       >
// // // // // //         {/* Original Project List */}
// // // // // //         {projects.map((project, index) => (
// // // // // //           <li
// // // // // //             key={index}
// // // // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //           >
// // // // // //             {project}
// // // // // //           </li>
// // // // // //         ))}

// // // // // //         {/* Duplicate Project List for seamless infinite scroll */}
// // // // // //         {projects.map((project, index) => (
// // // // // //           <li
// // // // // //             key={index + projects.length}
// // // // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //           >
// // // // // //             {project}
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // // import React, { useRef, useState } from 'react';
// // // // // // import '../../../components/styles/project.css'; // Assuming this handles scroll

// // // // // // const Projects = ({ portfolioData }) => {
// // // // // //   const ref = useRef(null);
// // // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // // //   const projects = portfolioData?.projects || [];
// // // // // //   console.log('Projects:', projects);

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="relative projects-container overflow-hidden w-full max-w-[900px] mx-auto"
// // // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // // //     >
// // // // // //       <ul
// // // // // //         ref={ref}
// // // // // //         className={`scrolling-container flex space-x-4 snap-x snap-mandatory ${
// // // // // //           isHovered ? 'paused' : ''
// // // // // //         }`}
// // // // // //       >
// // // // // //         {/* Render Projects */}
// // // // // //         {projects.map((project, index) => (
// // // // // //           <li
// // // // // //             key={index}
// // // // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //           >
// // // // // //             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // // // //             <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // // // //             <div className="text-sm text-gray-200 whitespace-pre-line">
// // // // // //               {typeof project.description === 'string'
// // // // // //                 ? project.description
// // // // // //                 : 'No description provided'}
// // // // // //             </div>
// // // // // //           </li>
// // // // // //         ))}

// // // // // //         {/* Duplicate for seamless scroll */}
// // // // // //         {projects.map((project, index) => (
// // // // // //           <li
// // // // // //             key={`dup-${index}`}
// // // // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // // //           >
// // // // // //             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // // // //             <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // // // //             <div className="text-sm text-gray-200 whitespace-pre-line">
// // // // // //               {typeof project.description === 'string'
// // // // // //                 ? project.description
// // // // // //                 : 'No description provided'}
// // // // // //             </div>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // import React, { useRef, useState } from 'react';
// // // // // import '../../../components/styles/project.css'; // Make sure this handles animation + scroll

// // // // // const Projects = ({ portfolioData }) => {
// // // // //   const ref = useRef(null);
// // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // //   const projects = portfolioData?.projects || [];
// // // // //   const shouldLoop = projects.length > 4;

// // // // //   console.log('Projects:', projects);

// // // // //   return (
// // // // //     <div
// // // // //       className="relative projects-container overflow-hidden w-full max-w-[900px] mx-auto"
// // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // //     >
// // // // //       <ul
// // // // //         ref={ref}
// // // // //         className={`scrolling-container flex ${
// // // // //           shouldLoop ? 'space-x-4 snap-x snap-mandatory' : 'flex-wrap justify-center gap-4'
// // // // //         } ${isHovered ? 'paused' : ''}`}
// // // // //       >
// // // // //         {projects.map((project, index) => (
// // // // //           <li
// // // // //             key={index}
// // // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // //           >
// // // // //             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // // //             <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // // //             <div className="text-sm text-gray-200 whitespace-pre-line">
// // // // //               {typeof project.description === 'string'
// // // // //                 ? project.description
// // // // //                 : 'No description provided'}
// // // // //             </div>
// // // // //           </li>
// // // // //         ))}

// // // // //         {/* 👇 Only duplicate if looping */}
// // // // //         {shouldLoop &&
// // // // //           projects.map((project, index) => (
// // // // //             <li
// // // // //               key={`dup-${index}`}
// // // // //               className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // // //             >
// // // // //               <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // // //               <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // // //               <div className="text-sm text-gray-200 whitespace-pre-line">
// // // // //                 {typeof project.description === 'string'
// // // // //                   ? project.description
// // // // //                   : 'No description provided'}
// // // // //               </div>
// // // // //             </li>
// // // // //           ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Projects;
// // // // import React, { useRef, useState } from 'react';
// // // // import '../../../components/styles/project.css'; // Should contain your scroll animation styles

// // // // const Projects = ({ portfolioData }) => {
// // // //   const ref = useRef(null);
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   const projects = portfolioData?.projects || [];
// // // //   const shouldLoop = projects.length >= 5;

// // // //   console.log('Projects:', projects);

// // // //   return (
// // // //     <div
// // // //       className={`relative w-full max-w-[900px] mx-auto ${
// // // //         shouldLoop ? 'projects-container overflow-hidden' : ''
// // // //       }`}
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //     >
// // // //       <ul
// // // //         ref={ref}
// // // //         className={`flex ${
// // // //           shouldLoop
// // // //             ? `scrolling-container space-x-4 snap-x snap-mandatory ${
// // // //                 isHovered ? 'paused' : ''
// // // //               }`
// // // //             : 'flex-wrap justify-center gap-4'
// // // //         }`}
// // // //       >
// // // //         {projects.map((project, index) => (
// // // //           <li
// // // //             key={index}
// // // //             className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // //           >
// // // //             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // //             <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // //             <div className="text-sm text-gray-200 whitespace-pre-line">
// // // //               {typeof project.description === 'string'
// // // //                 ? project.description
// // // //                 : 'No description provided'}
// // // //             </div>
// // // //           </li>
// // // //         ))}

// // // //         {/* 🔁 Duplicate ONLY if should loop */}
// // // //         {shouldLoop &&
// // // //           projects.map((project, index) => (
// // // //             <li
// // // //               key={`dup-${index}`}
// // // //               className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
// // // //             >
// // // //               <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// // // //               <p className="text-sm text-gray-300 mb-2 italic">{project.year}</p>
// // // //               <div className="text-sm text-gray-200 whitespace-pre-line">
// // // //                 {typeof project.description === 'string'
// // // //                   ? project.description
// // // //                   : 'No description provided'}
// // // //               </div>
// // // //             </li>
// // // //           ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import React, { useRef, useState, useEffect } from 'react';

// // // const Projects = ({ portfolioData }) => {
// // //   const ref = useRef(null);
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   const projects = portfolioData?.projects || [];
// // //   const shouldLoop = projects.length >= 5;

// // //   // Animation setup
// // //   useEffect(() => {
// // //     if (!shouldLoop || !ref.current) return;

// // //     const scrollContainer = ref.current;
// // //     let animationFrameId;

// // //     const scroll = () => {
// // //       scrollContainer.scrollLeft += 1;
// // //       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
// // //         scrollContainer.scrollLeft = 0;
// // //       }
// // //       animationFrameId = requestAnimationFrame(scroll);
// // //     };

// // //     if (!isHovered) {
// // //       animationFrameId = requestAnimationFrame(scroll);
// // //     }

// // //     return () => cancelAnimationFrame(animationFrameId);
// // //   }, [isHovered, shouldLoop]);

// // //   return (
// // //     <div
// // //       className="relative w-full max-w-7xl mx-auto py-6"
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //     >
// // //       {/* Scrollable row for >= 5 projects */}
// // //       {shouldLoop ? (
// // //         <div
// // //           ref={ref}
// // //           className="flex overflow-x-scroll no-scrollbar space-x-4 snap-x snap-mandatory"
// // //         >
// // //           {[...projects, ...projects].map((project, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 w-[320px] min-h-[300px] shrink-0 snap-center text-white transition-transform duration-300"
// // //             >
// // //               <div className="flex justify-between items-center mb-2">
// // //                 <h3 className="text-lg font-semibold">{project.name}</h3>
// // //                 <span className="text-sm italic text-gray-300">{project.year}</span>
// // //               </div>
// // //               <p className="text-sm text-gray-200 whitespace-pre-line">
// // //                 {typeof project.description === 'string'
// // //                   ? project.description
// // //                   : 'No description provided'}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         // Static responsive grid for < 5 projects
// // //         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
// // //           {projects.map((project, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 min-h-[300px] text-white transition-transform duration-300"
// // //             >
// // //               <div className="flex justify-between items-center mb-2">
// // //                 <h3 className="text-lg font-semibold">{project.name}</h3>
// // //                 <span className="text-sm italic text-gray-300">{project.year}</span>
// // //               </div>
// // //               <p className="text-sm text-gray-200 whitespace-pre-line">
// // //                 {typeof project.description === 'string'
// // //                   ? project.description
// // //                   : 'No description provided'}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Projects;
// // import React, { useRef, useState, useEffect } from 'react';

// // const Projects = ({ portfolioData }) => {
// //   const ref = useRef(null);
// //   const [isHovered, setIsHovered] = useState(false);
// //   const projects = portfolioData.attributes?.Project || [];
// //   const shouldLoop = projects.length >= 5;
// //   const isSingle = projects.length === 1;

// //   // Auto-scrolling
// //   useEffect(() => {
// //     if (!shouldLoop || !ref.current) return;

// //     const scrollContainer = ref.current;
// //     let animationFrameId;

// //     const scroll = () => {
// //       scrollContainer.scrollLeft += 1;
// //       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
// //         scrollContainer.scrollLeft = 0;
// //       }
// //       animationFrameId = requestAnimationFrame(scroll);
// //     };

// //     if (!isHovered) {
// //       animationFrameId = requestAnimationFrame(scroll);
// //     }

// //     return () => cancelAnimationFrame(animationFrameId);
// //   }, [isHovered, shouldLoop]);

// //   return (
// //     <div
// //       className="relative w-full max-w-7xl mx-auto py-6"
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       {shouldLoop ? (
// //         <div
// //           ref={ref}
// //           className="flex overflow-x-scroll no-scrollbar space-x-4 snap-x snap-mandatory"
// //         >
// //           {[...projects, ...projects].map((project, index) => (
// //             <div
// //               key={index}
// //               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 w-[320px] min-h-[300px] shrink-0 snap-center text-white transition-transform duration-300"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-lg font-semibold">{project.name}</h3>
// //                 <span className="text-sm italic text-gray-300">{project.year}</span>
// //               </div>
// //               <p className="text-sm text-gray-200 whitespace-pre-line">
// //                 {typeof project.description === 'string'
// //                   ? project.description
// //                   : 'No description provided'}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : isSingle ? (
// //         <div className="flex justify-center px-4">
// //           <div className="w-full max-w-screen-lg bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-6 min-h-[300px] text-white transition-transform duration-300">
// //             <div className="flex justify-between items-center mb-2">
// //               <h3 className="text-xl font-semibold">{projects[0].name}</h3>
// //               <span className="text-sm italic text-gray-300">{projects[0].year}</span>
// //             </div>
// //             <p className="text-sm text-gray-200 whitespace-pre-line">
// //               {typeof projects[0].description === 'string'
// //                 ? projects[0].description
// //                 : 'No description provided'}
// //             </p>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
// //           {projects.map((project, index) => (
// //             <div
// //               key={index}
// //               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 min-h-[300px] text-white transition-transform duration-300"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-lg font-semibold">{project.name}</h3>
// //                 <span className="text-sm italic text-gray-300">{project.year}</span>
// //               </div>
// //               <p className="text-sm text-gray-200 whitespace-pre-line">
// //                 {typeof project.description === 'string'
// //                   ? project.description
// //                   : 'No description provided'}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Projects;


// import React, { useRef, useState, useEffect } from 'react';

// const Projects = ({ portfolioData }) => {
//   const ref = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const projects = portfolioData.attributes?.Project || [];
//   const shouldLoop = projects.length >= 3;
//   const isSingle = projects.length === 1;

//   // ✅ Helper to render Strapi rich text
//   // const renderDescription = (desc) => {
//   //   if (typeof desc === 'string') return <p>{desc}</p>;
//   //   if (!Array.isArray(desc)) return <p>No description provided</p>;

//   //   return desc.map((block, i) => {
//   //     switch (block.type) {
//   //       case 'paragraph':
//   //         return (
//   //           <p key={i} className="text-sm text-gray-200 mb-2">
//   //             {block.children.map((child, j) => (
//   //               <span key={j}>{child.text}</span>
//   //             ))}
//   //           </p>
//   //         );

//   //       case 'bulleted-list':
//   //         return (
//   //           <ul key={i} className="list-disc ml-5 text-sm text-gray-200 mb-2">
//   //             {block.children.map((item, j) => (
//   //               <li key={j}>
//   //                 {item.children.map((child, k) => (
//   //                   <span key={k}>{child.text}</span>
//   //                 ))}
//   //               </li>
//   //             ))}
//   //           </ul>
//   //         );

//   //       case 'numbered-list':
//   //         return (
//   //           <ol key={i} className="list-decimal ml-5 text-sm text-gray-200 mb-2">
//   //             {block.children.map((item, j) => (
//   //               <li key={j}>
//   //                 {item.children.map((child, k) => (
//   //                   <span key={k}>{child.text}</span>
//   //                 ))}
//   //               </li>
//   //             ))}
//   //           </ol>
//   //         );

//   //       case 'heading':
//   //         return (
//   //           <h4 key={i} className="text-md font-semibold text-white mb-2">
//   //             {block.children.map((child, j) => (
//   //               <span key={j}>{child.text}</span>
//   //             ))}
//   //           </h4>
//   //         );

//   //       default:
//   //         return null;
//   //     }
//   //   });
//   // };
//   const renderDescription = (desc) => {
//     if (typeof desc === 'string') return <p>{desc}</p>;
//     if (!Array.isArray(desc)) return <p>No description provided</p>;
  
//     const renderTextNode = (node, key) => {
//       let text = node.text || '';
  
//       let element = <span key={key}>{text}</span>;
  
//       if (node.bold) element = <strong key={key}>{element}</strong>;
//       if (node.italic) element = <em key={key}>{element}</em>;
//       if (node.underline) element = <u key={key}>{element}</u>;
  
//       return element;
//     };
  
//     const renderInline = (children) =>
//       children.map((child, index) => {
//         if (child.type === 'text') {
//           return renderTextNode(child, index);
//         }
  
//         if (child.type === 'link') {
//           return (
//             <a
//               key={index}
//               href={child.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 underline hover:text-blue-600"
//             >
//               {renderInline(child.children || [])}
//             </a>
//           );
//         }
  
//         return null;
//       });
  
//     const renderBlock = (block, index) => {
//       switch (block.type) {
//         case 'paragraph':
//           return (
//             <p key={index} className="text-sm text-gray-200 mb-2">
//               {renderInline(block.children || [])}
//             </p>
//           );
  
//         case 'heading':
//           return (
//             <h4 key={index} className="text-md font-semibold text-white mb-2">
//               {renderInline(block.children || [])}
//             </h4>
//           );
  
//         case 'list':
//           const isOrdered = block.format === 'ordered';
//           const ListTag = isOrdered ? 'ol' : 'ul';
//           const listClass = isOrdered ? 'list-decimal' : 'list-disc';
  
//           return (
//             <ListTag key={index} className={`${listClass} ml-5 text-sm text-gray-200 mb-2`}>
//               {(block.children || []).map((item, idx) => (
//                 <li key={idx}>
//                   {renderInline(item.children || [])}
//                 </li>
//               ))}
//             </ListTag>
//           );
  
//         case 'list-item': // Just in case (some formats might nest this directly)
//           return (
//             <li key={index} className="ml-5 text-sm text-gray-200 mb-2">
//               {renderInline(block.children || [])}
//             </li>
//           );
  
//         default:
//           return null;
//       }
//     };
  
//     return desc.map((block, index) => renderBlock(block, index));
//   };
  

//   // Auto-scroll
//   useEffect(() => {
//     if (!shouldLoop || !ref.current) return;

//     const scrollContainer = ref.current;
//     let animationFrameId;

//     const scroll = () => {
//       scrollContainer.scrollLeft += 1;
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     if (!isHovered) {
//       animationFrameId = requestAnimationFrame(scroll);
//     }

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [isHovered, shouldLoop]);

//   // return (
//   //   <div
//   //     className="relative w-full max-w-7xl mx-auto py-6"
//   //     onMouseEnter={() => setIsHovered(true)}
//   //     onMouseLeave={() => setIsHovered(false)}
//   //   >
//   //     {shouldLoop ? (
//   //       <div
//   //         ref={ref}
//   //         className="flex overflow-x-scroll no-scrollbar space-x-4 snap-x snap-mandatory"
//   //       >
//   //         {[...projects, ...projects].map((project, index) => (
//   //           <div
//   //             key={index}
//   //             className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 w-[320px] min-h-[300px] shrink-0 snap-center text-white transition-transform duration-300"
//   //           >
//   //             <div className="flex justify-between items-center mb-2">
//   //               <h3 className="text-lg font-semibold">{project.name}</h3>
//   //               <span className="text-sm italic text-gray-300">{project.year}</span>
//   //             </div>
//   //             <div>{renderDescription(project.description)}</div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     ) : isSingle ? (
//   //       <div className="flex justify-center px-4">
//   //         <div className="w-full max-w-screen-lg bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-6 min-h-[300px] text-white transition-transform duration-300">
//   //           <div className="flex justify-between items-center mb-2">
//   //             <h3 className="text-xl font-semibold">{projects[0].name}</h3>
//   //             <span className="text-sm italic text-gray-300">{projects[0].year}</span>
//   //           </div>
//   //           <div>{renderDescription(projects[0].description)}</div>
//   //         </div>
//   //       </div>
//   //     ) : (
//   //       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
//   //         {projects.map((project, index) => (
//   //           <div
//   //             key={index}
//   //             className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 min-h-[300px] text-white transition-transform duration-300"
//   //           >
//   //             <div className="flex justify-between items-center mb-2">
//   //               <h3 className="text-lg font-semibold">{project.name}</h3>
//   //               <span className="text-sm italic text-gray-300">{project.year}</span>
//   //             </div>
//   //             <div>{renderDescription(project.description)}</div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // );
//   return (
//     <div
//       className="relative w-full max-w-7xl mx-auto py-6"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {shouldLoop ? (
//         <div
//           ref={ref}
//           className="flex overflow-x-scroll no-scrollbar space-x-4 snap-x snap-mandatory px-4"
//         >
//           {[...projects, ...projects].map((project, index) => (
//             <div
//               key={index}
//               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 w-[320px] min-h-[300px] shrink-0 snap-center text-white transition-transform duration-300"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-lg font-semibold">{project.name}</h3>
//                 <span className="text-sm italic text-gray-300">{project.year}</span>
//               </div>
//               <div>{renderDescription(project.description)}</div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg p-4 min-h-[300px] text-white transition-transform duration-300"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-lg font-semibold">{project.name}</h3>
//                 <span className="text-sm italic text-gray-300">{project.year}</span>
//               </div>
//               <div>{renderDescription(project.description)}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
  
// };

// export default Projects;
import React, { useRef, useState, useEffect } from 'react';

const Projects = ({ portfolioData }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const projects = portfolioData.attributes?.Project || [];
  const shouldLoop = projects.length >= 3;
  const isSingle = projects.length === 1;

  const renderDescription = (desc) => {
    if (typeof desc === 'string') return <p>{desc}</p>;
    if (!Array.isArray(desc)) return <p>No description provided</p>;

    const renderTextNode = (node, key) => {
      let text = node.text || '';
      let element = <span key={key}>{text}</span>;
      if (node.bold) element = <strong key={key}>{element}</strong>;
      if (node.italic) element = <em key={key}>{element}</em>;
      if (node.underline) element = <u key={key}>{element}</u>;
      return element;
    };

    const renderInline = (children) =>
      children.map((child, index) => {
        if (child.type === 'text') return renderTextNode(child, index);
        if (child.type === 'link') {
          return (
            <a
              key={index}
              href={child.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-600"
            >
              {renderInline(child.children || [])}
            </a>
          );
        }
        return null;
      });

    const renderBlock = (block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="text-sm text-gray-200 mb-2">
              {renderInline(block.children || [])}
            </p>
          );
        case 'heading':
          return (
            <h4 key={index} className="text-md font-semibold text-white mb-2">
              {renderInline(block.children || [])}
            </h4>
          );
        case 'list':
          const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag
              key={index}
              className={`${
                block.format === 'ordered' ? 'list-decimal' : 'list-disc'
              } ml-5 text-sm text-gray-200 mb-2`}
            >
              {(block.children || []).map((item, idx) => (
                <li key={idx}>{renderInline(item.children || [])}</li>
              ))}
            </ListTag>
          );
        default:
          return null;
      }
    };

    return desc.map((block, index) => renderBlock(block, index));
  };

  // Auto-scroll
  useEffect(() => {
    if (!shouldLoop || !ref.current) return;
    const scrollContainer = ref.current;
    let animationFrameId;

    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    if (!isHovered) {
      animationFrameId = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, shouldLoop]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto py-10 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldLoop ? (
        <div
          ref={ref}
          className="flex overflow-x-scroll no-scrollbar space-x-6 snap-x snap-mandatory"
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="bg-gray-100/10 backdrop-blur-lg rounded-xl shadow-xl p-6 w-[320px] min-h-[300px] shrink-0 snap-center text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span className="text-sm italic text-gray-300">{project.year}</span>
              </div>
              <div className="text-gray-200">{renderDescription(project.description)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100/10 opacity-80 backdrop-blur-lg rounded-xl shadow-xl p-6 min-h-[300px] text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span className="text-sm italic text-gray-300">{project.year}</span>
              </div>
              <div className="text-gray-200">{renderDescription(project.description)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
