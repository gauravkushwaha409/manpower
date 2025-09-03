import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header/Header';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex bg-[#f9f9f9] w-screen h-screen overflow-hidden">
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 h-full">
        <Header />
        <main className="flex-1 p-4 overflow-auto">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
