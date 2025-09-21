import React from "react";
import { motion } from "framer-motion";
import { useDashboard } from "../contexts/DashboardContext";
import ProjectionsChart from "../components/dashboard/ProjectionsChart";
import NotificationsPanel from "../components/dashboard/NotificationsPanel";
import Activity from "../components/dashboard/Activity";
import Contact from "../components/dashboard/Contact";
import Notification from "../components/dashboard/Notification";
import Customer from "../components/dashboard/Customer";
import Revenue from "../components/dashboard/Revenue";
import RevenueLocation from "../components/dashboard/RevenueLocation";
import TotalSales from "../components/dashboard/TotalSales";
import TopSellingProducts from "../components/dashboard/TopSellingProducts";

const Dashboard: React.FC = () => {
  const { currentPage, metrics } = useDashboard();

  if (currentPage !== "dashboard") return null;



  return (
    <div className="relative">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                eCommerce
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Dashboards / Default
              </p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-1 sm:gap-4 lg:gap-5">
            <div className="flex flex-row gap-6">
              <Customer />
              <ProjectionsChart />
            </div>

            <div className="flex flex-row gap-6">
              <div>
                <Revenue />
              </div>

              <div>
                <RevenueLocation />
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div>
                <TopSellingProducts />
              </div>

              <div>
                <TotalSales />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Notifications, Activities, Contacts */}
        <div className="w-64 sm:w-72 space-y-2 sm:space-y-4 hidden 2xl:block">
          <div>
            {/* <NotificationsPanel /> */}
            <Notification />
            <Activity />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
