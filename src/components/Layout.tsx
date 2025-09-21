import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDashboard } from '../contexts/DashboardContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentPage } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Page Content */}
          <main className="flex-1 overflow-auto" role="main" aria-label="Main content">
            <div className="p-2 sm:p-4 lg:p-6">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {children}
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
