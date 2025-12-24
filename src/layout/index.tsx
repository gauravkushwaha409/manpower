import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header/Header";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex u-max-w-app bg-white h-screen overflow-hidden font-outfit">
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="u-flex-parent">
        <Header />
        <main className="u-flex-parent p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
