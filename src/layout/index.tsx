import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(() => {
    return localStorage.getItem("sidebar-expanded") === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", String(sidebarExpanded));
    document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  const toggleSidebarExpanded = useCallback(() => {
    setSidebarExpanded((prev) => !prev);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={toggleSidebarExpanded}
      />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
