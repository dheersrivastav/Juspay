import React from 'react';
import { motion } from 'framer-motion';
import { useDashboard } from '../contexts/DashboardContext';
import OrdersTable from '../components/orders/OrdersTable';
import OrdersHeader from '../components/orders/OrdersHeader';
import OrdersPagination from '../components/orders/OrdersPagination';

const Orders: React.FC = () => {
  const { currentPage } = useDashboard();

  if (currentPage !== 'orders') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order List</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Dashboards / Default
          </p>
        </div>
      </div>

      {/* Orders Table Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <OrdersHeader />
        <OrdersTable />
        <OrdersPagination />
      </div>
    </motion.div>
  );
};

export default Orders;
