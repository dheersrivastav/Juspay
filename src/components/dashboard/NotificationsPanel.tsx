import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const NotificationsPanel: React.FC = () => {
  const { theme } = useTheme();

  return (
 <div className={`p-4 rounded-lg transition-colors duration-300 ${
   theme === 'dark' 
     ? 'bg-gray-800 border border-gray-700' 
     : 'bg-white border border-gray-200'
 }`}>


 </div>
  );
};

export default NotificationsPanel;
