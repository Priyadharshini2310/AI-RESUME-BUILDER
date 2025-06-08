// "use client";
// import { useEffect, useState } from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// const Template3 = () => {
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

//   const [currentTheme, setCurrentTheme] = useState(themes[0]);
//   const [showThemeMenu, setShowThemeMenu] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const savedThemeId = localStorage.getItem('theme') || 'teal';
//     const selectedTheme = themes.find(theme => theme.id === savedThemeId) || themes[0];
//     setCurrentTheme(selectedTheme);
//   }, []);

//   const changeTheme = (theme) => {
//     setCurrentTheme(theme);
//     setShowThemeMenu(false);
//     localStorage.setItem('theme', theme.id);
//   };

//   useEffect(() => {
//     const links = document.querySelectorAll('nav a');
//     const handleClick = (e) => {
//       e.preventDefault();
//       const targetId = e.target.getAttribute('href')?.substring(1);
//       if (targetId) {
//         document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
//         setIsNavOpen(false);
//       }
//     };

//     links.forEach(link => link.addEventListener('click', handleClick));
//     return () => links.forEach(link => link.removeEventListener('click', handleClick));
//   }, []);

// return (
//     <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
//         {/* Navigation Sidebar */}
//         <nav className={`fixed top-0 left-0 h-full w-64 ${currentTheme.navBgColor} ${currentTheme.navTextColor} z-20 transform transition-transform duration-300 ${
//             isNavOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 shadow-lg`}>
//             <div className="p-6">
//                 <h1 className="mb-8 text-2xl font-bold">Template3</h1>
//                 <ul className="space-y-4">
//                     {['about', 'projects', 'internships', 'academics',  'tech-stack'].map((section) => (
//                         <li key={section}>
//                             <a href={`#${section}`} className="block py-2 hover:opacity-75">
//                                 {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
//                             </a>
//                         </li>
//                     ))}
//                     <li className="relative">
//                         <button
//                             onClick={() => setShowThemeMenu(!showThemeMenu)}
//                             className={`${currentTheme.secondaryColor} ${currentTheme.textColor} w-full text-left py-2 px-4 rounded-md hover:opacity-80 flex items-center gap-2`}
//                         >
//                             Theme
//                         </button>
//                         {showThemeMenu && (
//                             <div className={`absolute left-0 mt-2 w-48 ${currentTheme.cardBgColor} rounded-md shadow-lg z-30 py-2`}>
//                                 {themes.map((theme) => (
//                                     <button
//                                         key={theme.id}
//                                         onClick={() => changeTheme(theme)}
//                                         className={`flex items-center w-full text-left px-4 py-2 hover:opacity-80 ${
//                                             currentTheme.id === theme.id ? `${theme.accentColor} font-semibold` : ''
//                                         }`}
//                                     >
//                                         <div className={`w-4 h-4 mr-3 rounded-full ${theme.navBgColor}`}></div>
//                                         <span>{theme.name}</span>
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//         </nav>

//         {/* Mobile Nav Toggle */}
//         <button
//             className={`fixed top-4 left-4 z-30 md:hidden ${currentTheme.navBgColor} ${currentTheme.navTextColor} p-2 rounded-md`}
//             onClick={() => setIsNavOpen(!isNavOpen)}
//         >
//             {isNavOpen ? '✕' : '☰'}
//         </button>

//         {/* Main Content */}
//         <main className="flex-grow p-6 md:ml-64">
//             <section id="hero" className="flex items-center justify-center min-h-screen">
//                 <div className={`${currentTheme.cardBgColor} p-8 rounded-xl shadow-xl text-center animate-fade-in max-w-md`}>
//                     <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>[Your Name]</h1>
//                     <p className={`text-xl ${currentTheme.accentColor} mt-2`}>Full-Stack Developer</p>
//                     <div className="flex justify-center gap-4 mt-4">
//                         <a href="https://github.com/yourusername" className={`${currentTheme.accentColor} hover:opacity-75`}>
//                             <Github size={24} />
//                         </a>
//                         <a href="https://linkedin.com/in/yourusername" className={`${currentTheme.accentColor} hover:opacity-75`}>
//                             <Linkedin size={24} />
//                         </a>
//                         <a href="mailto:your.email@example.com" className={`${currentTheme.accentColor} hover:opacity-75`}>
//                             <Mail size={24} />
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Other sections remain unchanged */}
//         </main>

//         <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
//             <div className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl md:flex-row">
//                 <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
//                 <div className="flex gap-4 mt-4 md:mt-0">
//                     <a href="https://github.com/yourusername" className="hover:opacity-75">
//                         <Github size={20} />
//                     </a>
//                     <a href="https://linkedin.com/in/yourusername" className="hover:opacity-75">
//                         <Linkedin size={20} />
//                     </a>
//                     <a href="mailto:your.email@example.com" className="hover:opacity-75">
//                         <Mail size={20} />
//                     </a>
//                 </div>
//             </div>
//         </footer>

//         <style >{`
//             @keyframes fadeIn {
//                 from {
//                     opacity: 0;
//                     transform: translateY(20px);
//                 }
//                 to {
//                     opacity: 1;
//                     transform: translateY(0);
//                 }
//             }
//             .animate-fade-in {
//                 animation: fadeIn 1s ease-out;
//             }
//         `}</style>
//     </div>
// );
// };

// export default Template3;
// "use client";
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
// import GlobalApi from '../../../service/GlobalApi'; // adjust path as needed

// const Template3 = () => {
//   const { id } = useParams();
//   const [portfolioData, setPortfolioData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const themes = [
//     {
//               id: 'teal',
//               name: 'Teal Tide',
//               bgColor: 'bg-teal-50',
//               textColor: 'text-teal-800',
//               navBgColor: 'bg-teal-600',
//               navTextColor: 'text-white',
//               cardBgColor: 'bg-white',
//               cardTextColor: 'text-teal-900',
//               accentColor: 'text-teal-600',
//               secondaryColor: 'bg-teal-100',
//             },
//             {
//               id: 'coral',
//               name: 'Coral Reef',
//               bgColor: 'bg-rose-50',
//               textColor: 'text-rose-800',
//               navBgColor: 'bg-rose-500',
//               navTextColor: 'text-white',
//               cardBgColor: 'bg-white',
//               cardTextColor: 'text-rose-900',
//               accentColor: 'text-rose-600',
//               secondaryColor: 'bg-rose-100',
//             },
//             {
//               id: 'indigo',
//               name: 'Indigo Night',
//               bgColor: 'bg-indigo-50',
//               textColor: 'text-indigo-800',
//               navBgColor: 'bg-indigo-700',
//               navTextColor: 'text-white',
//               cardBgColor: 'bg-white',
//               cardTextColor: 'text-indigo-900',
//               accentColor: 'text-indigo-600',
//               secondaryColor: 'bg-indigo-100',
//             },
//             {
//               id: 'olive',
//               name: 'Olive Grove',
//               bgColor: 'bg-lime-50',
//               textColor: 'text-lime-800',
//               navBgColor: 'bg-lime-600',
//               navTextColor: 'text-white',
//               cardBgColor: 'bg-white',
//               cardTextColor: 'text-lime-900',
//               accentColor: 'text-lime-600',
//               secondaryColor: 'bg-lime-100',
//             },
//             {
//               id: 'slate',
//               name: 'Slate Storm',
//               bgColor: 'bg-gray-100',
//               textColor: 'text-gray-800',
//               navBgColor: 'bg-gray-700',
//               navTextColor: 'text-white',
//               cardBgColor: 'bg-white',
//               cardTextColor: 'text-gray-900',
//               accentColor: 'text-gray-600',
//               secondaryColor: 'bg-gray-200',
//             },
//   ];

//   const [currentTheme, setCurrentTheme] = useState(themes[0]);
//   const [showThemeMenu, setShowThemeMenu] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const savedThemeId = localStorage.getItem('theme') || 'teal';
//     const selectedTheme = themes.find((theme) => theme.id === savedThemeId) || themes[0];
//     setCurrentTheme(selectedTheme);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await GlobalApi.GetPortfolioById(id);
//         setPortfolioData(res.data.data);
//       } catch (err) {
//         console.error("Failed to fetch portfolio", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchData();
//   }, [id]);

//   useEffect(() => {
//     const links = document.querySelectorAll('nav a');
//     const handleClick = (e) => {
//       e.preventDefault();
//       const targetId = e.target.getAttribute('href')?.substring(1);
//       if (targetId) {
//         document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
//         setIsNavOpen(false);
//       }
//     };
//     links.forEach((link) => link.addEventListener('click', handleClick));
//     return () => links.forEach((link) => link.removeEventListener('click', handleClick));
//   }, []);

//   if (loading) return <div className="p-10 text-center">Loading...</div>;
//   if (!portfolioData) return <div className="p-10 text-center">Portfolio not found.</div>;

//   const data = portfolioData.attributes;

//   return (
//     <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>

//       {/* Navigation Sidebar */}
//       {/* ... your existing sidebar and theme logic ... */}

//       {/* Main Content */}
//       <main className="flex-grow p-6 md:ml-64">
//         <section id="hero" className="flex items-center justify-center min-h-screen">
//           <div className={`${currentTheme.cardBgColor} p-8 rounded-xl shadow-xl text-center animate-fade-in max-w-md`}>
//             <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>{data.name}</h1>
//             <p className={`text-xl ${currentTheme.accentColor} mt-2`}>{data.keyline}</p>
//             <div className="flex justify-center gap-4 mt-4">
//               {data.contactGitHub && (
//                 <a href={data.contactGitHub} className={`${currentTheme.accentColor} hover:opacity-75`}>
//                   <Github size={24} />
//                 </a>
//               )}
//               {data.contactLinkedIn && (
//                 <a href={data.contactLinkedIn} className={`${currentTheme.accentColor} hover:opacity-75`}>
//                   <Linkedin size={24} />
//                 </a>
//               )}
//               {data.contactEmail && (
//                 <a href={`mailto:${data.contactEmail}`} className={`${currentTheme.accentColor} hover:opacity-75`}>
//                   <Mail size={24} />
//                 </a>
//               )}
//               {data.contactWhatsApp && (
//                 <a href={`https://wa.me/${data.contactWhatsApp}`} className={`${currentTheme.accentColor} hover:opacity-75`}>
//                   <MessageCircle size={24} />
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
//         <div className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl md:flex-row">
//           <p>© {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             {data.contactGitHub && (
//               <a href={data.contactGitHub} className="hover:opacity-75">
//                 <Github size={20} />
//               </a>
//             )}
//             {data.contactLinkedIn && (
//               <a href={data.contactLinkedIn} className="hover:opacity-75">
//                 <Linkedin size={20} />
//               </a>
//             )}
//             {data.contactEmail && (
//               <a href={`mailto:${data.contactEmail}`} className="hover:opacity-75">
//                 <Mail size={20} />
//               </a>
//             )}
//             {data.contactWhatsApp && (
//               <a href={`https://wa.me/${data.contactWhatsApp}`} className="hover:opacity-75">
//                 <MessageCircle size={20} />
//               </a>
//             )}
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Template3;
"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Github,MessageCircle, Linkedin, Mail, HomeIcon } from 'lucide-react';
import GlobalApi from '../../../service/GlobalApi'; // update the path based on your project structure
import {Link} from 'react-router-dom';
const Template3 = () => {
  const { id } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);
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
    }
  ];

  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('theme') || 'teal';
    const selectedTheme = themes.find(theme => theme.id === savedThemeId) || themes[0];
    setCurrentTheme(selectedTheme);
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
    localStorage.setItem('theme', theme.id);
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await GlobalApi.GetPortfolioById(id);
        setPortfolioData(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPortfolio();
    }
  }, [id]);

  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href')?.substring(1);
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        setIsNavOpen(false);
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!portfolioData) return <div className="p-10 text-center">Portfolio not found.</div>;

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
     <nav className={`fixed top-0 left-0 h-full w-64 ${currentTheme.navBgColor} ${currentTheme.navTextColor} z-20 transform transition-transform duration-300 ${
            isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 shadow-lg`}>
            <div className="p-6">
              <Link to='/dashboard'>
              <HomeIcon/>
              </Link>
                <h1 className="mb-8 text-2xl font-bold">Template3</h1>
                <ul className="space-y-4">
                    {['about', 'projects', 'internships', 'academics', 'tech-stack'].map((section) => (
                        <li key={section}>
                            <a href={`/dashboard/template-portfolio4/${id}#${section}`} className="block py-2 hover:opacity-75">
                                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                            </a>
                        </li>
                    ))}
                    <li className="relative">
                        <button
                            onClick={() => setShowThemeMenu(!showThemeMenu)}
                            className={`${currentTheme.secondaryColor} ${currentTheme.textColor} w-full text-left py-2 px-4 rounded-md hover:opacity-80 flex items-center gap-2`}
                        >
                            Theme
                        </button>
                        {showThemeMenu && (
                            <div className={`absolute left-0 mt-2 w-48 ${currentTheme.cardBgColor} rounded-md shadow-lg z-30 py-2`}>
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
                    </li>
                </ul>
            </div>
        </nav>

      {/* Main Content */}
      <main className="flex-grow p-6 md:ml-64">
        <section id="hero" className="flex items-center justify-center min-h-screen">
          <div className={`${currentTheme.cardBgColor} p-8 rounded-xl shadow-xl text-center animate-fade-in max-w-md`}>
            <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>{portfolioData.name}</h1>
            <p className={`text-xl ${currentTheme.accentColor} mt-2`}>{portfolioData.keyline}</p>
            <div className="flex justify-center gap-4 mt-4">
              {portfolioData.contactWhatsApp && (
                <a href={`https://wa.me/${portfolioData.contactWhatsApp}`} className={`${currentTheme.accentColor} hover:opacity-75`} target="_blank">
                  <MessageCircle size={24} />
                </a>
              )}
              {portfolioData.contactLinkedIn && (
                <a href={portfolioData.contactLinkedIn} className={`${currentTheme.accentColor} hover:opacity-75`} target="_blank">
                  <Linkedin size={24} />
                </a>
              )}
              {portfolioData.contactEmail && (
                <a href={`mailto:${portfolioData.contactEmail}`} className={`${currentTheme.accentColor} hover:opacity-75`}>
                  <Mail size={24} />
                </a>
              )}
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${currentTheme.accentColor.replace('text-', '')}-200 transform -skew-y-6`}></div>
            <div className="relative flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl md:flex-row">
              <div className="md:w-1/2">
                {/* <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="object-cover w-64 h-64 mx-auto rounded-full shadow-lg"
                /> */}
              </div>
              <div className="md:w-1/2">
                <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>About Me</h2>
                <p className={`${currentTheme.cardTextColor}`}>
                  {portfolioData.About}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Projects</h2>
          <div className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory">
            {[
              {
                title: 'Project 1',
                description: 'A task management app built with Next.js and Tailwind CSS.',
                github: 'https://github.com/yourusername/project1',
              },
              {
                title: 'Project 2',
                description: 'An e-commerce platform with Stripe integration.',
                github: 'https://github.com/yourusername/project2',
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`${currentTheme.cardBgColor} flex-shrink-0 w-80 p-6 rounded-lg shadow-md snap-center hover:scale-105 transition-transform`}
              >
                <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>{project.title}</h3>
                <p className={`${currentTheme.cardTextColor} mt-2`}>{project.description}</p>
                <Link href={project.github} className={`${currentTheme.accentColor} hover:underline mt-4 inline-block`}>
                  View on GitHub
                </Link>
              </div>
            ))}
          </div>
        </section> */}
        <section id="projects" className="py-16">
  <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>
    Projects
  </h2>

  <div className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory">
    {portfolioData.Project?.map((project, index) => (
      <div
        key={index}
        className={`${currentTheme.cardBgColor} flex-shrink-0 w-80 p-6 flex-row items-center justify-between rounded-lg shadow-md snap-center hover:scale-105 transition-transform`}
      >
        <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>
          {project.name}
        </h3>
        <p className={`${currentTheme.cardTextColor} text-justify mt-2`}>
          {project.description}
        </p>
        {project.year && (
          <p className={`${currentTheme.cardTextColor} mt-2`}>
          {project.year}
        </p>
        )}
      </div>
    ))}
  </div>
</section>


         {/* Internships Section */}
         {/* <section id="internships" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Internships</h2>
          <div className="relative max-w-3xl mx-auto">
          {portfolioData.Project?.map((project, index) => (map((internship, index) => (
              <div
                key={index}
                className={`mb-8 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2 px-4">
                  <div className={`${currentTheme.cardBgColor} p-4 rounded-lg shadow-md`}>
                    <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{internship.title}</h3>
                    <p className={`${currentTheme.cardTextColor}`}>{internship.company}</p>
                    <p className={`${currentTheme.cardTextColor} text-sm`}>{internship.duration}</p>
                    <p className={`${currentTheme.cardTextColor} mt-2`}>{internship.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${currentTheme.accentColor.replace('text-', '')}-600 rounded-full`}></div>
              </div>
            ))}
          </div>
        </section> */}
        <section id="internships" className="py-16">
  <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>
    Experience
  </h2>
  <div className="max-w-3xl mx-auto px-6">
    <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
      <p className={`${currentTheme.cardTextColor} text-base leading-relaxed`}>
        {portfolioData.experience}
      </p>
    </div>
  </div>
</section>


        {/* Academics Section */}
        <section id="academics" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Academics</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 left-1/2"></div>
            <div className="flex items-center mb-8">
              <div className="w-1/2 px-4">
                <div className={`${currentTheme.cardBgColor} p-4 rounded-lg shadow-md`}>
                  <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{portfolioData.educationDegreeName}</h3>

                  <p className={`${currentTheme.cardTextColor} text-sm`}>{portfolioData.educationYear}</p>
                  <p className={`${currentTheme.cardTextColor} mt-2`}>CGPA: {portfolioData.educationCgpa}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${currentTheme.accentColor.replace('text-', '')}-600 rounded-full`}></div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        

        {/* Tech Stack Section */}
        {/* <section id="tech-stack" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl">
          {portfolioData.skills?.map((skill, index) => (
                <div
                  key={index}
                  className={`${currentTheme.secondaryColor} ${currentTheme.textColor} rounded-full px-4 py-2 font-semibold hover:rotate-12 transition-transform`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </section> */}
        <section id="tech-stack" className="py-16">
  <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>
    Tech Stack
  </h2>
  <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl">
    {portfolioData.skills?.map((skill, index) => (
      <div
        key={index}
        className={`${currentTheme.secondaryColor} ${currentTheme.textColor} rounded-full px-4 py-2 font-semibold hover:rotate-12 transition-transform`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {skill.skillName}
      </div>
    ))}
  </div>
</section>



      </main>

      {/* Footer */}
      <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
        <div className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl md:flex-row">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {portfolioData.contactGitHub && (
              <a href={portfolioData.contactGitHub} className="hover:opacity-75" target="_blank">
                <Github size={20} />
              </a>
            )}
            {portfolioData.contactLinkedIn && (
              <a href={portfolioData.contactLinkedIn} className="hover:opacity-75" target="_blank">
                <Linkedin size={20} />
              </a>
            )}
            {portfolioData.contactEmail && (
              <a href={`mailto:${portfolioData.contactEmail}`} className="hover:opacity-75">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Template3;
