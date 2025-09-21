export interface User {
  id: string;
  name: string;
  avatar: string;
  email?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

export interface Activity {
  id: string;
  action: string;
  timestamp: string;
  user: string;
  type: 'create' | 'update' | 'delete' | 'login' | 'logout';
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
