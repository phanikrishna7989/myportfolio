import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  status: 'Completed' | 'In Progress';
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, status }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-100 dark:bg-zinc-800/50 p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        {status === 'Completed' ? (
          <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
        ) : (
          <Clock className="text-blue-600 dark:text-blue-400" size={24} />
        )}
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className={`text-sm ${status === 'Completed' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
            {status}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;