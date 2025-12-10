import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import TopBar from "../components/Dashboard/Navbar/TopBar";


const DashboardLayout = () => {
  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="relative min-h-screen md:flex bg-white">
      {/* TopBar receives toggle function */}
      <TopBar toggleSidebar={toggleSidebar} />

      {/* Sidebar receives state and close function */}
     <div className="mt-10">
       <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     </div>

      {/* Right Side: Dashboard Content */}
      <div className="flex-1 md:ml-64 mt-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
