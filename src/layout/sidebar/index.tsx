import SidebarItem from "./partials/sidebar-item";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <aside
      className={`group relative min-h-screen overflow-hidden border-r border-secondary-200 bg-secondary-100 
      transition-[width] duration-300 ease-in-out
      ${sidebarExpanded ? "w-[240px] " : "w-[98px]"}`}
    >
      <div
        className={`transition-all duration-300 ease-in-out h-[90px]
              ${sidebarExpanded ? "px-4 py-7" : " px-4 py-4"}
        `}
      >
        <img
          src={""}
          alt="header-logo"
          onClick={setSidebarExpanded}
          className={`cursor-pointer transform transition-all duration-300 ease-in-out
            ${sidebarExpanded ? "h-[58px] w-[91px]" : "h-[38px] w-[59px]"}
          `}
        />
      </div>
      <SidebarItem sidebarExpanded={sidebarExpanded} />
    </aside>
  );
};

export default Sidebar;
