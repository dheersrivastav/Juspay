import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import { cn } from '../../utils/cn';

const OrdersPagination: React.FC = () => {
  const { 
    orders, 
    searchQuery, 
    currentPageNumber, 
    setCurrentPageNumber, 
    itemsPerPage 
  } = useDashboard();

  // Calculate total pages based on filtered orders
  const filteredOrders = orders.filter(order =>
    order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const hasNextPage = currentPageNumber < totalPages;
  const hasPreviousPage = currentPageNumber > 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPageNumber(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPageNumber - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPageNumber - 1)}
          disabled={!hasPreviousPage}
          className={cn(
            "p-2 rounded-lg transition-colors duration-200",
            hasPreviousPage
              ? "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        {getPageNumbers().map((page) => (
          <motion.button
            key={page}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(page)}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
              page === currentPageNumber
                ? "bg-primary-500 text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            )}
          >
            {page}
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPageNumber + 1)}
          disabled={!hasNextPage}
          className={cn(
            "p-2 rounded-lg transition-colors duration-200",
            hasNextPage
              ? "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
          )}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default OrdersPagination;
