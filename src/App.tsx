import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import CertificationCard from './components/CertificationCard';
import RainEffect from './components/RainEffect';
import RainButton from './components/RainButton';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isRaining, setIsRaining] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [certRef, certInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-mode');
  };

  const toggleRain = () => {
    if (!isRaining) {
      setIsRaining(true);
      setTimeout(() => {
        setIsRaining(false);
      }, 4000);
    }
  };

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <RainEffect isActive={isRaining} />
      <RainButton isRaining={isRaining} toggleRain={toggleRain} isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <motion.header 
        id="hero"
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-32 pb-20 md:py-32"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Venkata Phani</h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
              .NET Full Stack Developer specializing in cloud-native applications, microservices, and scalable architecture. 
              Skilled in both front-end and back-end technologies within Agile environments.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/phanikrishna7989" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:text-gray-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/venkata-s-s-phani-krishna-sunkara-133b20293" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:text-gray-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:venkataphani.63@gmail.com"
                className="p-2 hover:text-gray-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
              <img 
                src="phaniprofile.jpg" 
                alt="Venkata Phani"
                className="w-full h-full object-cover"
              />
            </div>
            <a 
              href="/PhaniKrishnaResume.pdf" 
              target="_blank"
              className={`flex items-center gap-2 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} px-6 py-3 rounded-full transition-colors`}
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </motion.header>

      <motion.section
        id="skills"
        ref={skillsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`${isDark ? 'bg-zinc-900' : 'bg-gray-100'} py-20 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Languages" skills={["C#", ".NET 5/6/7", "JavaScript", "TypeScript"]} />
            <SkillCard title="Web Development" skills={["Angular 15+", "React", "RESTful APIs"]} />
            <SkillCard title="Cloud & DevOps" skills={["Microsoft Azure", "Docker", "Kubernetes"]} />
            <SkillCard title="Databases" skills={["SQL Server", "PostgreSQL", "MySQL"]} />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Cloud Migration & Microservices"
              description="Developed microservices architecture on Azure for modularity and scalability."
              icon="Cloud"
            />
            <ProjectCard 
              title="Real-Time Data Processing"
              description="Implemented Kafka for real-time, event-driven data streaming."
              icon="Database"
            />
            <ProjectCard 
              title="API & Database Optimization"
              description="Enhanced API performance and secured databases for faster response times."
              icon="Settings"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="certifications"
        ref={certRef}
        initial={{ opacity: 0, y: 20 }}
        animate={certInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`${isDark ? 'bg-zinc-900' : 'bg-gray-100'} py-20 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <CertificationCard 
              title="Microsoft Certified: Azure Fundamentals (AZ-900)"
              status="Completed"
            />
            <CertificationCard 
              title="Microsoft Certified: Azure Developer Associate"
              status="In Progress"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </motion.section>

      <footer className={`${isDark ? 'bg-zinc-900' : 'bg-gray-100'} py-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/phanikrishna7989" target="_blank" rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/venkata-s-s-phani-krishna-sunkara-133b20293" target="_blank" rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:venkataphani.63@gmail.com"
              className="hover:text-gray-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Venkata Phani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;