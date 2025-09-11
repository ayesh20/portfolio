import { useState } from 'react'
import './App.css'
import { Download, Mail, Phone, MapPin, Github, Linkedin, Twitter,Facebook, ExternalLink, ChevronDown } from 'lucide-react';
import logo from './assets/ayesh1.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('home');

   const personalInfo = {
    name: "Ayesh Jayashan",
    title: "Full Stack Developer (MERN Stack)",
    email: "shalithaayesh200@gmail.com",
    phone: "+769660101",
    location: "112, kotaweheragalayaya, warunagama, wellawaya.",
    github: "https://github.com/ayesh20",
    linkedin: "https://lk.linkedin.com/in/shalitha-ayesh-619747255",
    twitter: "https://twitter.com/ayesh",
    Facebook: "https://www.facebook.com/share/176ZwKiRKv/",
    cvUrl: "/ayesh.pdf" // Replace with actual CV file path
  };

   const skills = [
    "React", "Node.js", "JavaScript", "TypeScript", "java", "MongoDB",
    "MySQL", "AWS", "Git", "HTML/CSS", "Express.js", "Tailwind CSS",
  ];

  const projects = [
    {
      title: "E-Commerce Platform (cosmetic products)",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express.js","Tailwind CSS"],
      liveUrl: "https://frontend-one-eta-49.vercel.app/",
      githubUrl1: "https://github.com/ayesh20/frontend.git",
      githubUrl2: "https://github.com/ayesh20/mern_project1.git"
    },
    {
      title: "E-Commerce Platform (Indor plants)",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express.js" ,"Html/CSS"],
      liveUrl: "https://plant-fontend1-szag.vercel.app/",
      githubUrl1: "https://github.com/ayesh20/plant-fontend1",
      githubUrl2: "https://github.com/ayesh20/plant-backend.git"
    },
    {
      title: "E-Learn Platform",
      description: "Full-stack e-education solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express.js","Html/CSS"],
      liveUrl: "#",
      githubUrl1: "https://github.com/ayesh20/e-learn.git",
      githubUrl2: "https://github.com/ayesh20/e-learn-backend.git"
    },
    {
      title: "SchoolManagementSystem",
      description: "The aim of the project is to develop a software solution to manage students andmanage teachers.",
      technologies: ["Java", "MySQL","Jframe-GUI"],
      liveUrl: "#",
      githubUrl1: "https://github.com/ayesh20/school-manage-system.git"
    },
    {
      title: "Pos system",
      description: "The aim of the project is to develop a system to manage stocks order items, check availability and billing.",
      technologies: ["C#","ASP.NET", "SQL Server","Html/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/ayesh20/Possystem.git"
    }
    
  ];

  const experience = [
    {
      company: "Fuchsius (PVT) Ltd",
      position: "Full Stack Developer-Intern ",
      period: "2025 - Present",
      description: "Led development of multiple web applications, mentored junior developers, and improved system performance by 40%."
    }
    
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleDownloadCV = () => {
   
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">{personalInfo.name}</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="w-42 h-42 rounded-full mx-auto mb-6" />
            
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">{personalInfo.title}</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate developer creating amazing digital experiences with modern technologies and clean code.
            </p>
            <div className="flex justify-center space-x-4">
              <a href={personalInfo.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={personalInfo.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Hello! I'm {personalInfo.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
               I am Passionate  full-stack developer and hardworking 3rd year undergraduate with a strong
 commitment to excellence and proven leadership skills and problem solving skills. Eager to
 contribute my skills and knowledge to a software Engineering team
 through an internship opportunity.
                </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <span className="text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <span className="text-gray-300">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-600 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl1}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.githubUrl2}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="flex mb-12">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-400 rounded-full mt-6 mr-8"></div>
                <div className="flex-grow">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white">{job.position}</h3>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">{job.company}</h4>
                    <p className="text-sm text-gray-400 mb-4">{job.period}</p>
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
           
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-3 border border-gray-300 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href={personalInfo.github} className="text-gray-400 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href={personalInfo.twitter} className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-5">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App