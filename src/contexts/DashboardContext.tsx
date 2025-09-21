import React, { createContext, useContext, useState } from 'react';

export interface Order {
  id: string;
  orderId: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: 'in-progress' | 'complete' | 'pending' | 'approved' | 'rejected';
}

export interface DashboardMetrics {
  customers: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  orders: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  revenue: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  growth: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
}

interface DashboardContextType {
  currentPage: 'cover' | 'dashboard' | 'orders';
  setCurrentPage: (page: 'cover' | 'dashboard' | 'orders') => void;
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  selectedOrders: string[];
  setSelectedOrders: (orders: string[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  currentPageNumber: number;
  setCurrentPageNumber: (page: number) => void;
  itemsPerPage: number;
  metrics: DashboardMetrics;
  setMetrics: (metrics: DashboardMetrics) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<'cover' | 'dashboard' | 'orders'>('cover');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemsPerPage] = useState(10);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      orderId: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'in-progress'
    },
    {
      id: '2',
      orderId: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'complete'
    },
    {
      id: '3',
      orderId: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'pending'
    },
    {
      id: '4',
      orderId: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'approved'
    },
    {
      id: '5',
      orderId: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'rejected'
    },
    {
      id: '6',
      orderId: '#CM9806',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'E-commerce Site',
      address: 'Main Street Boston',
      date: 'Feb 1, 2023',
      status: 'in-progress'
    },
    {
      id: '7',
      orderId: '#CM9807',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'Portfolio Website',
      address: 'Oak Avenue Seattle',
      date: 'Jan 31, 2023',
      status: 'complete'
    },
    {
      id: '8',
      orderId: '#CM9808',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Blog Platform',
      address: 'Pine Street Denver',
      date: 'Jan 30, 2023',
      status: 'pending'
    },
    {
      id: '9',
      orderId: '#CM9809',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Mobile App',
      address: 'Cedar Lane Austin',
      date: 'Jan 29, 2023',
      status: 'approved'
    },
    {
      id: '10',
      orderId: '#CM9810',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'Analytics Dashboard',
      address: 'Nest Lane Olivette',
      date: 'Jan 28, 2023',
      status: 'rejected'
    }
  ]);

  const [metrics, setMetrics] = useState<DashboardMetrics>({
    customers: { value: 3781, change: 11.01, trend: 'up' },
    orders: { value: 1219, change: -0.03, trend: 'down' },
    revenue: { value: 695, change: 15.03, trend: 'up' },
    growth: { value: 30.1, change: 6.08, trend: 'up' }
  });

  const value = {
    currentPage,
    setCurrentPage,
    orders,
    setOrders,
    selectedOrders,
    setSelectedOrders,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    currentPageNumber,
    setCurrentPageNumber,
    itemsPerPage,
    metrics,
    setMetrics
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
