import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 ${
        isDark ? 'bg-black/80' : 'bg-white/80'
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Wassup
          </motion.span>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                className="hover:text-gray-400 transition-colors"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </motion.button>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center gap-4">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                className="text-sm hover:text-gray-400 transition-colors"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </motion.button>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;