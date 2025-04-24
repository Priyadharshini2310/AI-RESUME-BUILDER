"use client";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Template3 = () => {
  // Available themes
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

  // Theme state and initialization
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
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
          setIsNavOpen(false);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
      {/* Navigation Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 ${currentTheme.navBgColor} ${currentTheme.navTextColor} z-20 transform transition-transform duration-300 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 shadow-lg`}
      >
        <div className="p-6">
          <h1 className="mb-8 text-2xl font-bold">Template3</h1>
          <ul className="space-y-4">
            {['about', 'projects', 'internships', 'academics', 'certificates', 'tech-stack'].map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="block py-2 hover:opacity-75">
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </a>
              </li>
            ))}
            {/* Theme Switcher */}
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

      {/* Mobile Nav Toggle */}
      <button
        className={`fixed top-4 left-4 z-30 md:hidden ${currentTheme.navBgColor} ${currentTheme.navTextColor} p-2 rounded-md`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? '✕' : '☰'}
      </button>

      {/* Main Content */}
      <main className="flex-grow p-6 md:ml-64">
        {/* Hero Section */}
        <section id="hero" className="flex items-center justify-center min-h-screen">
          <div className={`${currentTheme.cardBgColor} p-8 rounded-xl shadow-xl text-center animate-fade-in max-w-md`}>
            <h1 className={`text-4xl font-bold ${currentTheme.cardTextColor}`}>[Your Name]</h1>
            <p className={`text-xl ${currentTheme.accentColor} mt-2`}>Full-Stack Developer</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/yourusername" className={`${currentTheme.accentColor} hover:opacity-75`}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className={`${currentTheme.accentColor} hover:opacity-75`}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className={`${currentTheme.accentColor} hover:opacity-75`}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${currentTheme.accentColor.replace('text-', '')}-200 transform -skew-y-6`}></div>
            <div className="relative flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl md:flex-row">
              <div className="md:w-1/2">
                <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="object-cover w-64 h-64 mx-auto rounded-full shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-4`}>About Me</h2>
                <p className={`${currentTheme.cardTextColor}`}>
                  Im a passionate developer specializing in full-stack web development. I thrive on creating innovative solutions and enjoy exploring new technologies. My goal is to build user-friendly applications that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
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
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Internships</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 left-1/2"></div>
            {[
              {
                title: 'Software Engineering Intern',
                company: '[Company Name]',
                duration: 'June 2023 - August 2023',
                description: 'Developed features for a web app using React and Node.js.',
              },
              {
                title: 'Frontend Intern',
                company: '[Company Name]',
                duration: 'January 2023 - May 2023',
                description: 'Designed responsive UI components with Tailwind CSS.',
              },
            ].map((internship, index) => (
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
        </section>

        {/* Academics Section */}
        <section id="academics" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Academics</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 left-1/2"></div>
            <div className="flex items-center mb-8">
              <div className="w-1/2 px-4">
                <div className={`${currentTheme.cardBgColor} p-4 rounded-lg shadow-md`}>
                  <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>B.Tech in Computer Science</h3>
                  <p className={`${currentTheme.cardTextColor}`}>[University Name]</p>
                  <p className={`${currentTheme.cardTextColor} text-sm`}>2020 - 2024</p>
                  <p className={`${currentTheme.cardTextColor} mt-2`}>CGPA: 8.5/10</p>
                </div>
              </div>
              <div className="w-1/2"></div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${currentTheme.accentColor.replace('text-', '')}-600 rounded-full`}></div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Certificates</h2>
          <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-3">
            {[
              {
                title: 'Full-Stack Web Development',
                issuer: '[Issuing Organization]',
                year: '2023',
                link: 'https://certificate-link.com',
              },
              {
                title: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                year: '2022',
                link: 'https://certificate-link.com',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className={`${currentTheme.cardBgColor} p-4 rounded-lg shadow-md hover:scale-105 transition-transform`}
              >
                <h3 className={`text-lg font-semibold ${currentTheme.cardTextColor}`}>{cert.title}</h3>
                <p className={`${currentTheme.cardTextColor} text-sm`}>{cert.issuer}, {cert.year}</p>
                <Link href={cert.link} className={`${currentTheme.accentColor} hover:underline mt-2 inline-block`}>
                  View Certificate
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-16">
          <h2 className={`text-3xl font-bold ${currentTheme.textColor} mb-8 text-center`}>Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'].map(
              (tech, index) => (
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
        </section>
      </main>

      {/* Footer */}
      <footer className={`${currentTheme.navBgColor} ${currentTheme.navTextColor} mt-auto`}>
        <div className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl md:flex-row">
          <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" className="hover:opacity-75">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:opacity-75">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:opacity-75">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Inline CSS for animations */}
      <style >{`
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