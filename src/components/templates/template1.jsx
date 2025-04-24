"use client";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Template1 = () => {
  // Available themes with unique colors
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
    }
  ];

  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    // Load theme from localStorage or default to teal
    const savedThemeId = localStorage.getItem('theme') || 'teal';
    const selectedTheme = themes.find((theme) => theme.id === savedThemeId) || themes[0];
    setCurrentTheme(selectedTheme);
  }, []);

  // Update localStorage and apply theme
  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
    localStorage.setItem('theme', theme.id);
  };

  // Smooth scroll for navigation
  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          targetElement?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} fixed w-full top-0 z-10 shadow-md`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-xl font-bold">My Portfolio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="hover:opacity-75">About Me</a>
              <a href="#projects" className="hover:opacity-75">Projects</a>
              <a href="#internships" className="hover:opacity-75">Internships</a>
              <a href="#academics" className="hover:opacity-75">Academics</a>
              <a href="#certificates" className="hover:opacity-75">Certificates</a>
              <a href="#tech-stack" className="hover:opacity-75">Tech Stack</a>
              {/* Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className={`${currentTheme.secondaryColor} ${currentTheme.textColor} px-3 py-1 rounded-md hover:opacity-80 flex items-center gap-2`}
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
      <main className="flex-grow px-4 pt-20 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section id="about" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>About Me</h2>
          <p className={`${currentTheme.cardTextColor}`}>
            Hi, Im [Your Name], a passionate developer with a strong interest in building innovative web applications. I specialize in full-stack development and enjoy tackling complex problems with clean, efficient code. In my free time, I explore new technologies and contribute to open-source projects.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>Project 1</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>A web app built with Next.js and Tailwind CSS for managing tasks efficiently.</p>
              <Link href="https://github.com/yourusername/project1" className={`${currentTheme.accentColor} hover:underline mt-2 inline-block`}>View on GitHub</Link>
            </div>
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>Project 2</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>An e-commerce platform with real-time payment integration using Stripe.</p>
              <Link href="https://github.com/yourusername/project2" className={`${currentTheme.accentColor} hover:underline mt-2 inline-block`}>View on GitHub</Link>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>Internships</h2>
          <div className="space-y-6">
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>Software Engineering Intern - [Company Name]</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>June 2023 - August 2023</p>
              <p className={`${currentTheme.cardTextColor} mt-2`}>Developed features for a customer-facing web app using React and Node.js.</p>
            </div>
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>Frontend Intern - [Company Name]</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>January 2023 - May 2023</p>
              <p className={`${currentTheme.cardTextColor} mt-2`}>Designed and implemented responsive UI components with Tailwind CSS.</p>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section id="academics" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>Academics</h2>
          <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
            <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>B.Tech in Computer Science</h3>
            <p className={`${currentTheme.cardTextColor} mt-2`}>[University Name], 2020 - 2024</p>
            <p className={`${currentTheme.cardTextColor} mt-2`}>CGPA: 8.5/10</p>
            <p className={`${currentTheme.cardTextColor} mt-2`}>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>Certificates</h2>
          <div className="space-y-6">
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>Full-Stack Web Development</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>[Issuing Organization], 2023</p>
              <Link href="https://certificate-link.com" className={`${currentTheme.accentColor} hover:underline mt-2 inline-block`}>View Certificate</Link>
            </div>
            <div className={`${currentTheme.cardBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className={`text-xl font-semibold ${currentTheme.cardTextColor}`}>AWS Certified Solutions Architect</h3>
              <p className={`${currentTheme.cardTextColor} mt-2`}>Amazon Web Services, 2022</p>
              <Link href="https://certificate-link.com" className={`${currentTheme.accentColor} hover:underline mt-2 inline-block`}>View Certificate</Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-10">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'].map((tech) => (
              <div key={tech} className={`${currentTheme.secondaryColor} ${currentTheme.textColor} text-center py-2 rounded-lg font-semibold`}>
                {tech}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
        <div className="px-4 py-6 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Template1;