import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { DashboardProvider, useDashboard } from './contexts/DashboardContext';
import Layout from './components/Layout';
import Cover from './pages/Cover';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

function AppContent() {
  const { currentPage } = useDashboard();

  if (currentPage === 'cover') {
    return <Cover />;
  }

  return (
    <Layout>
      <Dashboard />
      <Orders />
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <DashboardProvider>
        <AppContent />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
