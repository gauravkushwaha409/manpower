import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header/Header";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex u-max-w-app bg-[#f9f9f9] h-screen overflow-hidden">
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="u-flex-parent">
        <Header />
        <main className="u-flex-parent p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
