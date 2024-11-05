import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-100 dark:bg-zinc-800/50 p-6 rounded-xl backdrop-blur-sm"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;