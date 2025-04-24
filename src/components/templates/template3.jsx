"use client";
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Template3 = () => {
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

return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} font-sans transition-colors duration-300`}>
        {/* Navigation Sidebar */}
        <nav className={`fixed top-0 left-0 h-full w-64 ${currentTheme.navBgColor} ${currentTheme.navTextColor} z-20 transform transition-transform duration-300 ${
            isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 shadow-lg`}>
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

            {/* Other sections remain unchanged */}
        </main>

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