import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trash2, MoreHorizontal } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import { cn } from '../../utils/cn';

const OrdersTable: React.FC = () => {
  const { 
    orders, 
    selectedOrders, 
    setSelectedOrders, 
    searchQuery, 
    sortBy, 
    sortOrder, 
    currentPageNumber, 
    itemsPerPage 
  } = useDashboard();

  // Filter and sort orders
  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter(order =>
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof typeof a];
      let bValue: any = b[sortBy as keyof typeof b];

      if (sortBy === 'user') {
        aValue = a.user.name;
        bValue = b.user.name;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [orders, searchQuery, sortBy, sortOrder]);

  // Paginate orders
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPageNumber - 1) * itemsPerPage;
    return filteredAndSortedOrders.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedOrders, currentPageNumber, itemsPerPage]);

  const handleSelectAll = () => {
    if (selectedOrders.length === paginatedOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(paginatedOrders.map(order => order.id));
    }
  };

  const handleSelectOrder = (orderId: string) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const getStatusDot = (status: string) => {
    const statusClasses = {
      'in-progress': 'status-dot status-in-progress',
      'complete': 'status-dot status-complete',
      'pending': 'status-dot status-pending',
      'approved': 'status-dot status-approved',
      'rejected': 'status-dot status-rejected'
    };
    return statusClasses[status as keyof typeof statusClasses] || 'status-dot';
  };

  const getStatusText = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-3 sm:px-6 py-3 text-left">
              <input
                type="checkbox"
                checked={selectedOrders.length === paginatedOrders.length && paginatedOrders.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                aria-label="Select all orders"
              />
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              User
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Project
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Address
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {paginatedOrders.map((order, index) => (
            <motion.tr
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "table-row-hover",
                selectedOrders.includes(order.id) && "bg-blue-50 dark:bg-blue-900/20"
              )}
            >
              <td className="px-3 sm:px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedOrders.includes(order.id)}
                  onChange={() => handleSelectOrder(order.id)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  aria-label={`Select order ${order.orderId}`}
                />
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {order.orderId}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium mr-2 sm:mr-3">
                    {order.user.avatar}
                  </div>
                  <div className="text-sm text-gray-900 dark:text-white truncate">
                    {order.user.name}
                  </div>
                </div>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                <div className="truncate max-w-[120px] sm:max-w-none">
                  {order.project}
                </div>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                  <span className="truncate max-w-[100px] sm:max-w-none">
                    {order.address}
                  </span>
                  {order.address.includes('Nest Lane Olivette') && (
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 ml-1 sm:ml-2 flex-shrink-0" />
                  )}
                </div>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="truncate">
                    {order.date}
                  </span>
                </div>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={getStatusDot(order.status)}></div>
                  <span className="ml-1 sm:ml-2 text-sm text-gray-900 dark:text-white truncate">
                    {getStatusText(order.status)}
                  </span>
                </div>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.status === 'rejected' && (
                  <MoreHorizontal className="w-4 h-4" />
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
