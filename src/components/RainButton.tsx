import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain } from 'lucide-react';

interface RainButtonProps {
  isRaining: boolean;
  toggleRain: () => void;
  isDark: boolean;
}

const RainButton: React.FC<RainButtonProps> = ({ isRaining, toggleRain, isDark }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleRain}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm transition-colors ${
        isRaining 
          ? 'bg-green-500 text-black' 
          : isDark 
            ? 'bg-white/10 text-white hover:bg-white/20' 
            : 'bg-black/10 text-black hover:bg-black/20'
      }`}
      aria-label="Toggle Rain Effect"
    >
      <CloudRain size={24} />
    </motion.button>
  );
};

export default RainButton;