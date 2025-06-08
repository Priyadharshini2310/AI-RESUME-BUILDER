// import { useEffect, useState } from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// const Template4 = () => {
//   // Available themes
//   const themes = [
//     {
//       id: 'teal',
//       name: 'Teal Tide',
//       bgColor: 'bg-teal-50',
//       textColor: 'text-teal-800',
//       navBgColor: 'bg-teal-600',
//       navTextColor: 'text-white',
//       cardBgColor: 'bg-white',
//       cardTextColor: 'text-teal-900',
//       accentColor: 'text-teal-600',
//       secondaryColor: 'bg-teal-100',
//     },
//     {
//       id: 'coral',
//       name: 'Coral Reef',
//       bgColor: 'bg-rose-50',
//       textColor: 'text-rose-800',
//       navBgColor: 'bg-rose-500',
//       navTextColor: 'text-white',
//       cardBgColor: 'bg-white',
//       cardTextColor: 'text-rose-900',
//       accentColor: 'text-rose-600',
//       secondaryColor: 'bg-rose-100',
//     },
//     {
//       id: 'indigo',
//       name: 'Indigo Night',
//       bgColor: 'bg-indigo-50',
//       textColor: 'text-indigo-800',
//       navBgColor: 'bg-indigo-700',
//       navTextColor: 'text-white',
//       cardBgColor: 'bg-white',
//       cardTextColor: 'text-indigo-900',
//       accentColor: 'text-indigo-600',
//       secondaryColor: 'bg-indigo-100',
//     },
//     {
//       id: 'olive',
//       name: 'Olive Grove',
//       bgColor: 'bg-lime-50',
//       textColor: 'text-lime-800',
//       navBgColor: 'bg-lime-600',
//       navTextColor: 'text-white',
//       cardBgColor: 'bg-white',
//       cardTextColor: 'text-lime-900',
//       accentColor: 'text-lime-600',
//       secondaryColor: 'bg-lime-100',
//     },
//     {
//       id: 'slate',
//       name: 'Slate Storm',
//       bgColor: 'bg-gray-100',
//       textColor: 'text-gray-800',
//       navBgColor: 'bg-gray-700',
//       navTextColor: 'text-white',
//       cardBgColor: 'bg-white',
//       cardTextColor: 'text-gray-900',
//       accentColor: 'text-gray-600',
//       secondaryColor: 'bg-gray-200',
//     },
//   ];

//   // Theme state and initialization
//   const [currentTheme, setCurrentTheme] = useState(themes[0]);
//   const [showThemeMenu, setShowThemeMenu] = useState(false);

//   useEffect(() => {
//     // Load theme from localStorage
//     const savedThemeId = localStorage.getItem('theme') || 'teal';
//     const selectedTheme = themes.find((theme) => theme.id === savedThemeId) || themes[0];
//     setCurrentTheme(selectedTheme);
//   }, []);

//   // Update localStorage and apply theme
//   const changeTheme = (theme) => {
//     setCurrentTheme(theme);
//     setShowThemeMenu(false);
//     localStorage.setItem('theme', theme.id);
//   };

//   // Smooth scroll for navigation
//   useEffect(() => {
//     const links = document.querySelectorAll('nav a');
//     links.forEach((link) => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href')?.substring(1);
//         if (targetId) {
//           const targetElement = document.getElementById(targetId);
//           targetElement?.scrollIntoView({ behavior: 'smooth' });
//         }
//       });
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener('click', () => {});
//       });
//     };
//   }, []);

//   return (
//     <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
//       {/* Navigation Bar */}
//       <nav className={`fixed top-0 w-full ${currentTheme.navBgColor} ${currentTheme.navTextColor} shadow-md z-10`}>
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <h1 className="text-xl font-bold">[Your Name]</h1>
//             <div className="flex items-center space-x-6">
//               <a href="#about" className="transition-opacity hover:opacity-75">About</a>
//               <a href="#projects" className="transition-opacity hover:opacity-75">Projects</a>
//               <a href="#internships" className="transition-opacity hover:opacity-75">Internships</a>
//               <a href="#academics" className="transition-opacity hover:opacity-75">Academics</a>
//               <a href="#certificates" className="transition-opacity hover:opacity-75">Certificates</a>
//               <a href="#tech-stack" className="transition-opacity hover:opacity-75">Tech Stack</a>
//               <div className="relative">
//                 <button
//                   onClick={() => setShowThemeMenu(!showThemeMenu)}
//                   className={`px-3 py-1 rounded-md ${currentTheme.secondaryColor} ${currentTheme.textColor} hover:opacity-80 transition-opacity`}
//                 >
//                   Theme
//                 </button>
//                 {showThemeMenu && (
//                   <div className={`absolute right-0 mt-2 w-48 ${currentTheme.cardBgColor} rounded-md shadow-lg z-20 py-2`}>
//                     {themes.map((theme) => (
//                       <button
//                         key={theme.id}
//                         onClick={() => changeTheme(theme)}
//                         className={`flex items-center w-full text-left px-4 py-2 hover:opacity-80 transition-opacity ${
//                           currentTheme.id === theme.id ? `${theme.accentColor} font-semibold` : ''
//                         }`}
//                       >
//                         <div className={`w-4 h-4 mr-3 rounded-full ${theme.navBgColor}`}></div>
//                         <span>{theme.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow pt-20 pb-10">
//         {/* Hero Section */}
//         <section id="hero" className={`py-16 ${currentTheme.secondaryColor} animate-fade-in`}>
//           <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
//             <div className={`${currentTheme.cardBgColor} p-8 rounded-lg shadow-md`}>
//               <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>[Your Name]</h1>
//               <p className={`text-xl ${currentTheme.accentColor} mt-2`}>Full-Stack Developer</p>
//               <div className="flex justify-center gap-4 mt-4">
//                 <a href="https://github.com/yourusername" className={`${currentTheme.accentColor} hover:opacity-75 transition-opacity`}>
//                   <Github size={24} />
//                 </a>
//                 <a href="https://linkedin.com/in/yourusername" className={`${currentTheme.accentColor} hover:opacity-75 transition-opacity`}>
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="mailto:your.email@example.com" className={`${currentTheme.accentColor} hover:opacity-75 transition-opacity`}>
//                   <Mail size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-16">
//           <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>About Me</h2>
//             <div className="flex flex-col gap-8 md:flex-row">
//               <div className="md:w-1/3">
//                 <img
//                   src="/api/placeholder/300/300"
//                   alt="Profile"
//                   className="object-cover w-full rounded-lg shadow-md"
//                 />
//               </div>
//               <div className="md:w-2/3">
//                 <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
//                   <p className={`${currentTheme.cardTextColor}`}>
//                     I’m a dedicated full-stack developer with a passion for building robust and user-friendly web applications. With expertise in both frontend and backend technologies, I strive to deliver high-quality solutions that meet user needs and business goals.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-16">
//           <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Projects</h2>
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               {[
//                 {
//                   title: 'Task Management App',
//                   description: 'A web app built with Next.js and Tailwind CSS for efficient task management.',
//                   github: 'https://github.com/yourusername/project1',
//                 },
//                 {
//                   title: 'E-commerce Platform',
//                   description: 'An online store with real-time payment integration using Stripe.',
//                   github: 'https://github.com/yourusername/project2',
//                 },
//               ].map((project, index) => (
//                 <div key={index} className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
//                   <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>{project.title}</h3>
//                   <p className={`${currentTheme.cardTextColor} mt-2`}>{project.description}</p>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${currentTheme.accentColor} hover:underline mt-4 inline-block transition-opacity hover:opacity-75`}
//                   >
//                     View on GitHub
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Internships Section */}
//         <section id="internships" className="py-16">
//           <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Internships</h2>
//             <div className="space-y-8">
//               {[
//                 {
//                   title: 'Software Engineering Intern',
//                   company: '[Company Name]',
//                   duration: 'June 2023 - August 2023',
//                   description: 'Developed features for a customer-facing web app using React and Node.js.',
//                 },
//                 {
//                   title: 'Frontend Intern',
//                   company: '[Company Name]',
//                   duration: 'January 2023 - May 2023',
//                   description: 'Designed and implemented responsive UI components with Tailwind CSS.',
//                 },
//               ].map((internship, index) => (
//                 <div key={index} className="flex">
//                   <div className="flex flex-col items-center w-8">
//                     <div className={`w-4 h-4 rounded-full ${currentTheme.accentColor.replace('text-', 'bg-')}-600`}></div>
//                     <div className="flex-1 w-1 bg-gray-300"></div>
//                   </div>
//                   <div className={`${currentTheme.cardBgColor} flex-1 p-6 rounded-lg shadow-md ml-4`}>
//                     <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{internship.title}</h3>
//                     <p className={`${currentTheme.cardTextColor}`}>{internship.company}</p>
//                     <p className={`${currentTheme.cardTextColor} text-sm`}>{internship.duration}</p>
//                     <p className={`${currentTheme.cardTextColor} mt-2`}>{internship.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Academics Section */}
//         <section id="academics" className="py-16">
//           <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Academics</h2>
//             <div className="flex">
//               <div className="flex flex-col items-center w-8">
//                 <div className={`w-4 h-4 rounded-full ${currentTheme.accentColor.replace('text-', 'bg-')}-600`}></div>
//                 <div className="flex-1 w-1 bg-gray-300"></div>
//               </div>
//               <div className={`${currentTheme.cardBgColor} flex-1 p-6 rounded-lg shadow-md ml-4`}>
//                 <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>B.Tech in Computer Science</h3>
//                 <p className={`${currentTheme.cardTextColor}`}>[University Name]</p>
//                 <p className={`${currentTheme.cardTextColor} text-sm`}>2020 - 2024</p>
//                 <p className={`${currentTheme.cardTextColor} mt-2`}>CGPA: 8.5/10</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Certificates Section */}
//         <section id="certificates" className="py-16">
//           <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Certificates</h2>
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//               {[
//                 {
//                   title: 'Full-Stack Web Development',
//                   issuer: '[Issuing Organization]',
//                   year: '2023',
//                   link: 'https://certificate-link.com',
//                 },
//                 {
//                   title: 'AWS Certified Solutions Architect',
//                   issuer: 'Amazon Web Services',
//                   year: '2022',
//                   link: 'https://certificate-link.com',
//                 },
//               ].map((cert, index) => (
//                 <div key={index} className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md hover:scale-105 transition-transform`}>
//                   <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{cert.title}</h3>
//                   <p className={`${currentTheme.cardTextColor} text-sm`}>{cert.issuer}, {cert.year}</p>
//                   <a
//                     href={cert.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${currentTheme.accentColor} hover:underline mt-2 inline-block transition-opacity hover:opacity-75`}
//                   >
//                     View Certificate
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Tech Stack Section */}
//         <section id="tech-stack" className="py-16">
//           <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//             <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Tech Stack</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//               {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'].map(
//                 (tech, index) => (
//                   <div
//                     key={index}
//                     className={`${currentTheme.secondaryColor} ${currentTheme.textColor} px-4 py-2 rounded-full font-semibold`}
//                   >
//                     {tech}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
//         {(() => {
//           const borderColor = currentTheme.accentColor.replace('text-', 'border-');
//           return (
//             <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center border-t ${borderColor}-600`}>
//               <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
//               <div className="flex gap-4 mt-4 md:mt-0">
//                 <a href="https://github.com/yourusername" className="transition-opacity hover:opacity-75">
//                   <Github size={20} />
//                 </a>
//                 <a href="https://linkedin.com/in/yourusername" className="transition-opacity hover:opacity-75">
//                   <Linkedin size={20} />
//                 </a>
//                 <a href="mailto:your.email@example.com" className="transition-opacity hover:opacity-75">
//                   <Mail size={20} />
//                 </a>
//               </div>
//             </div>
//           );
//         })()}
//       </footer>

//       {/* Inline CSS for minimal animations */}
//       <style >{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Template4;

"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import GlobalApi from '../../../service/GlobalApi'; // adjust path as needed
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
const Template4 = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const themes = [
        {
          id: 'teal',
          name: 'Teal Tide',
          bgColor: 'bg-teal-50',
          textColor: 'text-teal-800',
          navBgColor: 'bg-teal-600',
          navTextColor: 'text-white',
          cardBgColor: 'bg-white',
          cardTextColor: 'text-teal-900',
          accentColor: 'text-teal-600',
          secondaryColor: 'bg-teal-100',
        },
        {
          id: 'coral',
          name: 'Coral Reef',
          bgColor: 'bg-rose-50',
          textColor: 'text-rose-800',
          navBgColor: 'bg-rose-500',
          navTextColor: 'text-white',
          cardBgColor: 'bg-white',
          cardTextColor: 'text-rose-900',
          accentColor: 'text-rose-600',
          secondaryColor: 'bg-rose-100',
        },
        {
          id: 'indigo',
          name: 'Indigo Night',
          bgColor: 'bg-indigo-50',
          textColor: 'text-indigo-800',
          navBgColor: 'bg-indigo-700',
          navTextColor: 'text-white',
          cardBgColor: 'bg-white',
          cardTextColor: 'text-indigo-900',
          accentColor: 'text-indigo-600',
          secondaryColor: 'bg-indigo-100',
        },
        {
          id: 'olive',
          name: 'Olive Grove',
          bgColor: 'bg-lime-50',
          textColor: 'text-lime-800',
          navBgColor: 'bg-lime-600',
          navTextColor: 'text-white',
          cardBgColor: 'bg-white',
          cardTextColor: 'text-lime-900',
          accentColor: 'text-lime-600',
          secondaryColor: 'bg-lime-100',
        },
        {
          id: 'slate',
          name: 'Slate Storm',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          navBgColor: 'bg-gray-700',
          navTextColor: 'text-white',
          cardBgColor: 'bg-white',
          cardTextColor: 'text-gray-900',
          accentColor: 'text-gray-600',
          secondaryColor: 'bg-gray-200',
        },
      ];

  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('theme') || 'teal';
    const selectedTheme = themes.find((theme) => theme.id === savedThemeId) || themes[0];
    setCurrentTheme(selectedTheme);
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
    localStorage.setItem('theme', theme.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GlobalApi.GetPortfolioById(id);
        setData(res.data.data.attributes);
      } catch (error) {
        console.error("Failed to load portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    return () => {
      links.forEach((link) => link.removeEventListener('click', () => {}));
    };
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!data) return <div className="p-10 text-center">Portfolio not found.</div>;

  // Transform API data for local use
  const transformed = {
    name: data.name,
    title: data.keyline,
    email: data.contactEmail,
    github: data.contactGitHub || '',
    linkedin: data.contactLinkedIn || '',
    whatsapp: data.contactWhatsApp ? `https://wa.me/${data.contactWhatsApp}` : '',
    about: data.About,
    projects: data.Project?.map((proj) => ({
      title: proj.name,
      description: proj.description,
      year: proj.year,
      github: "", // You can map a real link if you have it in the API
    })) || []
  };

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full ${currentTheme.navBgColor} ${currentTheme.navTextColor} shadow-md z-10`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <Link to='/dashboard'>
              <HomeIcon/>
              </Link>
            <h1 className="text-xl font-bold">{data.name}</h1>
            <div className="flex items-center space-x-6">
              {['about', 'projects', 'internships', 'academics', 'tech-stack'].map((section) => (
                <a key={section} href={`/dashboard/template-portfolio5/${id}#${section}`} className="transition-opacity hover:opacity-75 capitalize">{section.replace('-', ' ')}</a>
              ))}
              <div className="relative">
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className={`px-3 py-1 rounded-md ${currentTheme.secondaryColor} ${currentTheme.textColor} hover:opacity-80 transition-opacity`}
                >
                  Theme
                </button>
                {showThemeMenu && (
                  <div className={`absolute right-0 mt-2 w-48 ${currentTheme.cardBgColor} rounded-md shadow-lg z-20 py-2`}>
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => changeTheme(theme)}
                        className={`flex items-center w-full text-left px-4 py-2 hover:opacity-80 ${
                          currentTheme.id === theme.id ? `${theme.accentColor} font-semibold` : ''
                        }`}
                      >
                        <div className={`w-4 h-4 mr-3 rounded-full ${theme.navBgColor}`}></div>
                        <span>{theme.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      {/* Main Content */}
      <main className="flex-grow pt-20 pb-10">
        {/* Hero */}
        <section id="hero" className={`py-16 ${currentTheme.secondaryColor}`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>{data.name}</h1>
            <p className={`text-xl ${currentTheme.accentColor} mt-2`}>{data.keyline}</p>
            <div className="flex justify-center gap-4 mt-4">
              {data.contactGitHub && (
                <a href={data.contactGitHub} target="_blank" className={`${currentTheme.accentColor}`}><Github size={24} /></a>
              )}
              {data.contactLinkedIn && (
                <a href={data.contactLinkedIn} target="_blank" className={`${currentTheme.accentColor}`}><Linkedin size={24} /></a>
              )}
              {data.contactEmail && (
                <a href={`mailto:${data.contactEmail}`} className={`${currentTheme.accentColor}`}><Mail size={24} /></a>
              )}
              {data.contactWhatsApp && (
                <a href={`https://wa.me/${data.contactWhatsApp}`} target="_blank" className={`${currentTheme.accentColor}`}><MessageCircle size={24} /></a>
              )}
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className={`${currentTheme.cardTextColor}`}>{data.About}</p>
          </div>
        </section>
  
        {/* Academics */}
        <section id="academics" className="py-16">
          <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Academics</h2>
            <div className="flex">
              <div className="flex flex-col items-center w-8">
                <div className={`w-4 h-4 rounded-full ${currentTheme.accentColor.replace('text-', 'bg-')}`}></div>
                <div className="flex-1 w-1 bg-gray-300"></div>
              </div>
              <div className={`${currentTheme.cardBgColor} flex-1 p-6 rounded-lg shadow-md ml-4`}>
                <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{data.educationDegreeName}</h3>
                <p className={`${currentTheme.cardTextColor} text-sm`}>YEAR: {data.educationYear}</p>
                <p className={`${currentTheme.cardTextColor} mt-2`}>CGPA: {data.educationCgpa}</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Projects */}
        <section id="projects" className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.Project?.map((proj, index) => (
                <div key={index} className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
                  <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>{proj.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">Year: {proj.year}</p>
                  <p className={`${currentTheme.cardTextColor} mt-1`}>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Tech Stack */}
        <section id="tech-stack" className="py-16">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.skills?.map((skill) => (
                <div
                  key={skill.id}
                  className={`${currentTheme.secondaryColor} ${currentTheme.textColor} px-4 py-2 rounded-full font-semibold`}
                >
                  {skill.skillName}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  
      {/* Footer */}
      <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} py-6`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {data.contactGitHub && (
              <a href={data.contactGitHub} className="hover:opacity-75"><Github size={20} /></a>
            )}
            {data.contactLinkedIn && (
              <a href={data.contactLinkedIn} className="hover:opacity-75"><Linkedin size={20} /></a>
            )}
            {data.contactEmail && (
              <a href={`mailto:${data.contactEmail}`} className="hover:opacity-75"><Mail size={20} /></a>
            )}
            {data.contactWhatsApp && (
              <a href={`https://wa.me/${data.contactWhatsApp}`} target="_blank" className="hover:opacity-75"><MessageCircle size={20} /></a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
  
};

export default Template4;
