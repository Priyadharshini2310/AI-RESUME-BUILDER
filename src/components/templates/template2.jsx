import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Award, Briefcase, Code, User, GraduationCap, Palette } from 'lucide-react';

const Template2 = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState('about');
  
  // Available themes
  const themes = [
    {
      id: 'blue',
      name: 'Blue Ocean',
      primaryColor: 'bg-blue-600',
      secondaryColor: 'bg-blue-100',
      accentColor: 'text-blue-600',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      navActiveColor: 'bg-blue-100 text-blue-700',
      navHoverColor: 'hover:bg-blue-50',
      cardBgColor: 'bg-white',
      footerBgColor: 'bg-blue-800',
      footerTextColor: 'text-blue-100'
    },
    {
      id: 'purple',
      name: 'Purple Haze',
      primaryColor: 'bg-purple-600',
      secondaryColor: 'bg-purple-100',
      accentColor: 'text-purple-600',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      navActiveColor: 'bg-purple-100 text-purple-700',
      navHoverColor: 'hover:bg-purple-50',
      cardBgColor: 'bg-white',
      footerBgColor: 'bg-purple-800',
      footerTextColor: 'text-purple-100'
    },
    {
      id: 'green',
      name: 'Emerald',
      primaryColor: 'bg-emerald-600',
      secondaryColor: 'bg-emerald-100',
      accentColor: 'text-emerald-600',
      textColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      navActiveColor: 'bg-emerald-100 text-emerald-700',
      navHoverColor: 'hover:bg-emerald-50',
      cardBgColor: 'bg-white',
      footerBgColor: 'bg-emerald-800',
      footerTextColor: 'text-emerald-100'
    },
    {
      id: 'amber',
      name: 'Amber',
      primaryColor: 'bg-amber-600',
      secondaryColor: 'bg-amber-100',
      accentColor: 'text-amber-600',
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-50',
      navActiveColor: 'bg-amber-100 text-amber-700',
      navHoverColor: 'hover:bg-amber-50',
      cardBgColor: 'bg-white',
      footerBgColor: 'bg-amber-800',
      footerTextColor: 'text-amber-100'
    },
    {
      id: 'rose',
      name: 'Rose',
      primaryColor: 'bg-rose-600',
      secondaryColor: 'bg-rose-100',
      accentColor: 'text-rose-600',
      textColor: 'text-rose-700',
      bgColor: 'bg-rose-50',
      navActiveColor: 'bg-rose-100 text-rose-700',
      navHoverColor: 'hover:bg-rose-50',
      cardBgColor: 'bg-white',
      footerBgColor: 'bg-rose-800',
      footerTextColor: 'text-rose-100'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      primaryColor: 'bg-gray-700',
      secondaryColor: 'bg-gray-600',
      accentColor: 'text-gray-300',
      textColor: 'text-gray-300',
      bgColor: 'bg-gray-900',
      navActiveColor: 'bg-gray-700 text-white',
      navHoverColor: 'hover:bg-gray-700',
      cardBgColor: 'bg-gray-800',
      footerBgColor: 'bg-black',
      footerTextColor: 'text-gray-300'
    }
  ];
  
  // State to track current theme
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  
  // Toggle theme dropdown
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  // Sample data (replace with your own information)
  const aboutData = {
    name: "Your Name",
    title: "Software Developer",
    bio: "I'm a passionate software developer with expertise in web development. I love creating responsive and user-friendly applications using modern technologies.",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    profileImage: "/api/placeholder/300/300"
  };

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-site.com",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/yourusername/task-app",
      imageUrl: "/api/placeholder/400/250"
    }
  ];

  const internshipsData = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Frontend Developer Intern",
      duration: "May 2023 - August 2023",
      description: "Developed and maintained client-facing applications, collaborated with senior developers to implement new features.",
      technologies: ["React", "JavaScript", "CSS", "Git"]
    },
    {
      id: 2,
      company: "Digital Innovations",
      position: "Software Engineering Intern",
      duration: "January 2023 - April 2023",
      description: "Assisted in building RESTful APIs, performed code reviews, and participated in agile development processes.",
      technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
    }
  ];

  const academicsData = [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "2020 - 2024",
      gpa: "3.8/4.0"
    },
    {
      id: 2,
      institution: "Online Tech Academy",
      degree: "Diploma",
      field: "Web Development",
      duration: "2019 - 2020"
    }
  ];

  const certificatesData = [
    {
      id: 1,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "October 2023",
      url: "https://example.com/cert/react"
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      issuer: "Udemy",
      date: "May 2023",
      url: "https://example.com/cert/javascript"
    }
  ];

  const techStackData = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Docker"]
    }
  ];

  // Function to change theme
  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
  };

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="w-48 h-48 overflow-hidden rounded-full">
                <img src={aboutData.profileImage} alt={aboutData.name} className="object-cover w-full h-full" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{aboutData.name}</h1>
                <p className={`text-xl mt-2 ${currentTheme.accentColor}`}>{aboutData.title}</p>
                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                  <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className={`${currentTheme.accentColor} hover:opacity-75`}>
                    <Github size={20} />
                  </a>
                  <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer" className={`${currentTheme.accentColor} hover:opacity-75`}>
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${aboutData.email}`} className={`${currentTheme.accentColor} hover:opacity-75`}>
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className={`text-2xl font-semibold mb-4 ${currentTheme.textColor}`}>About Me</h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">{aboutData.bio}</p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${currentTheme.textColor}`}>My Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projectsData.map((project) => (
                <div key={project.id} className={`${currentTheme.cardBgColor} rounded-lg shadow-md overflow-hidden`}>
                  <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-48" />
                  <div className="p-4">
                    <h3 className={`text-xl font-semibold ${currentTheme.textColor}`}>{project.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className={`px-2 py-1 ${currentTheme.secondaryColor} ${currentTheme.textColor} text-sm rounded`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${currentTheme.accentColor} hover:opacity-75`}>
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${currentTheme.accentColor} hover:opacity-75`}>
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'internships':
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${currentTheme.textColor}`}>Internship Experience</h2>
            <div className="space-y-6">
              {internshipsData.map((internship) => (
                <div key={internship.id} className={`${currentTheme.cardBgColor} rounded-lg shadow-md p-6`}>
                  <h3 className={`text-xl font-semibold ${currentTheme.textColor}`}>{internship.position}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-300">
                    <Briefcase size={16} />
                    <span>{internship.company}</span>
                  </div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">{internship.duration}</div>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">{internship.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {internship.technologies.map((tech, index) => (
                      <span key={index} className={`px-2 py-1 ${currentTheme.secondaryColor} ${currentTheme.textColor} text-sm rounded`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'academics':
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${currentTheme.textColor}`}>Academic Background</h2>
            <div className="space-y-6">
              {academicsData.map((academic) => (
                <div key={academic.id} className={`${currentTheme.cardBgColor} rounded-lg shadow-md p-6`}>
                  <h3 className={`text-xl font-semibold ${currentTheme.textColor}`}>{academic.degree} in {academic.field}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-300">
                    <GraduationCap size={16} />
                    <span>{academic.institution}</span>
                  </div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">{academic.duration}</div>
                  {academic.gpa && <div className="mt-2 text-gray-700 dark:text-gray-300">GPA: {academic.gpa}</div>}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'certificates':
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${currentTheme.textColor}`}>Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certificatesData.map((certificate) => (
                <div key={certificate.id} className={`${currentTheme.cardBgColor} rounded-lg shadow-md p-6`}>
                  <h3 className={`text-xl font-semibold ${currentTheme.textColor}`}>{certificate.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-300">
                    <Award size={16} />
                    <span>{certificate.issuer}</span>
                  </div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">{certificate.date}</div>
                  {certificate.url && (
                    <a 
                      href={certificate.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center gap-1 ${currentTheme.accentColor} hover:opacity-75 mt-3`}
                    >
                      <ExternalLink size={16} /> View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'techstack':
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${currentTheme.textColor}`}>Technical Skills</h2>
            <div className="space-y-8">
              {techStackData.map((category, index) => (
                <div key={index}>
                  <h3 className={`text-xl font-semibold mb-3 ${currentTheme.textColor}`}>{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`px-4 py-2 ${currentTheme.secondaryColor} ${currentTheme.textColor} rounded-full`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Array of navigation items
  const navItems = [
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'internships', label: 'Internships', icon: <Briefcase size={18} /> },
    { id: 'academics', label: 'Academics', icon: <GraduationCap size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'techstack', label: 'Tech Stack', icon: <BookOpen size={18} /> },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme.bgColor}`}>
      {/* Header */}
      <header className={`${currentTheme.cardBgColor} shadow-sm`}>
        <div className="container flex items-center justify-between px-4 py-6 mx-auto">
          <h1 className={`text-2xl font-bold ${currentTheme.textColor}`}>{aboutData.name} | Portfolio</h1>
          
          {/* Theme Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className={`p-2 rounded-full ${currentTheme.secondaryColor} ${currentTheme.textColor} hover:opacity-80 flex items-center gap-2`}
            >
              <Palette size={18} />
              <span className="hidden md:inline">Theme</span>
            </button>
            
            {showThemeMenu && (
              <div className={`absolute right-0 mt-2 w-48 ${currentTheme.cardBgColor} rounded-md shadow-lg z-10 py-2`}>
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => changeTheme(theme)}
                    className={`flex items-center w-full text-left px-4 py-2 hover:opacity-80 ${
                      currentTheme.id === theme.id ? `${theme.primaryColor} text-white` : ''
                    }`}
                  >
                    <div className={`w-4 h-4 mr-3 rounded-full ${theme.primaryColor}`}></div>
                    <span>{theme.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container flex-grow px-4 py-8 mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Navigation sidebar */}
          <div className="flex-shrink-0 md:w-64">
            <nav className={`${currentTheme.cardBgColor} shadow-md rounded-lg p-4 sticky top-8`}>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? currentTheme.navActiveColor
                          : `text-gray-700 ${currentTheme.navHoverColor} dark:text-gray-300`
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content area */}
          <div className={`flex-1 ${currentTheme.cardBgColor} shadow-md rounded-lg p-6`}>
            {renderSection()}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${currentTheme.footerBgColor}`}>
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <p className={`text-lg font-semibold ${currentTheme.footerTextColor}`}>{aboutData.name}</p>
              <p className="text-gray-300">{aboutData.title}</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${aboutData.email}`} className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Template2;