import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header/Header";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col bg-[#F3F4F6] h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarOpen={sidebarOpen} />
        <main className="relative flex-1 -mt-8 -ml-4 pt-8 overflow-hidden">
          <div className="flex flex-col bg-white shadow-xl w-full h-full min-h-0 overflow-auto">
            <div className="flex-1 bg-[#eef2f6] shadow-inner p-4 rounded-tl-xl">
              <div className="mx-auto w-full max-w-7xl">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
