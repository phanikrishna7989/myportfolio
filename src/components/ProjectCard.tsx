import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Settings } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Cloud':
        return <Cloud size={32} />;
      case 'Database':
        return <Database size={32} />;
      case 'Settings':
        return <Settings size={32} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-100 dark:bg-zinc-800/50 p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;