import React, { useState, useCallback } from "react";
import { IoChevronDownOutline, IoChevronForward } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { mainMenuItems, MenuItem } from "./data/SidebarData";
import { SidebarProps } from "@/types";
import { IoIosMenu } from "react-icons/io";

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [hoveredParentId, setHoveredParentId] = useState<string | null>(null);
  const [_, setHoveredChildId] = useState<string | null>(null);

  // Toggle dropdown handler
  const toggleDropdown = useCallback((id: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  // Check if current path matches item link
  const isActiveLink = useCallback(
    (link?: string) => {
      if (!link || link === "#") return false;
      return location.pathname === link || location.pathname.startsWith(link);
    },
    [location.pathname]
  );

  // Check if any child is active
  const hasActiveChild = useCallback(
    (item: MenuItem): boolean => {
      if (isActiveLink(item.link)) return true;
      if (item.children) {
        return item.children.some((child) => hasActiveChild(child));
      }
      return false;
    },
    [isActiveLink]
  );

  // Flyout menu for collapsed sidebar
  const FlyoutMenu: React.FC<{ item: MenuItem }> = ({ item }) => {
    if (!item.children?.length) return null;

    return (
      <div className="absolute top-0 px-2 left-full min-w-45">
        <div className="bg-white shadow-lg px-2 py-2 rounded-lg">
          {item.children.map((child) => (
            <FlyoutMenuItem key={child.id} item={child} />
          ))}
        </div>
      </div>
    );
  };

  // Flyout menu item
  const FlyoutMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasChildren = Boolean(item.children?.length);
    const isActive = isActiveLink(item.link);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to={item.link ?? "#"}
          className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer transition-colors ${isActive
              ? "bg-secondary-400 text-white"
              : "text-text-400 hover:bg-secondary-50"
            }`}
        >
          <span className="text-sm">{item.label}</span>
          {hasChildren && <IoChevronForward size={14} className="opacity-70" />}
        </Link>

        {hasChildren && isHovered && <FlyoutMenu item={item} />}
      </div>
    );
  };

  // Regular menu item for expanded sidebar
  const MenuItemComponent = ({
    item,
    level,
  }: {
    item: MenuItem;
    level: number;
  }) => {
    const isOpen = openDropdowns.includes(item.id);
    const hasChildren = Boolean(item.children?.length);
    const isActive = isActiveLink(item.link);
    const isParentActive = hasActiveChild(item);
    const isHovered = hoveredParentId === item.id;

    const paddingLeft = level * 16 + 12;

    const handleClick = (e: React.MouseEvent) => {
      if (hasChildren && isSidebarOpen) {
        e.preventDefault();
        toggleDropdown(item.id);
      }
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => {
          if (!isSidebarOpen && hasChildren) {
            setHoveredParentId(item.id);
          }
        }}
        onMouseLeave={() => {
          if (!isSidebarOpen && hasChildren) {
            setHoveredParentId(null);
            setHoveredChildId(null);
          }
        }}
      >
        <Link
          to={hasChildren ? "#" : item.link ?? "#"}
          onClick={handleClick}
          style={{ paddingLeft: `${paddingLeft}px` }}
          className={`
            flex items-center justify-between px-3 rounded-xl cursor-pointer transition-colors
            ${level === 0 || level === 1 ? "py-3 mb-1" : "py-2"}
            ${isActive || (hasChildren && isParentActive && !isSidebarOpen)
              ? "bg-secondary-400 text-white"
              : "text-text-400 hover:bg-secondary-500 hover:text-white"
            }
          `}
        >
          <div className="flex items-center gap-3">
            {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
            {isSidebarOpen && (
              <span className="typo-mid-bd-light whitespace-nowrap">
                {item.label}
              </span>
            )}
          </div>

          {hasChildren && isSidebarOpen && (
            <span className="text-xs">
              {isOpen ? (
                <IoChevronDownOutline size={14} />
              ) : (
                <IoChevronForward size={14} />
              )}
            </span>
          )}
        </Link>

        {/* Expanded sidebar children */}
        {hasChildren && isSidebarOpen && isOpen && (
          <div className="space-y-1">
            {item.children!.map((child) => (
              <MenuItemComponent
                key={child.id}
                item={child}
                level={level + 1}
              />
            ))}
          </div>
        )}

        {/* Collapsed sidebar flyout */}
        {!isSidebarOpen && hasChildren && isHovered && (
          <FlyoutMenu item={item} />
        )}
      </div>
    );
  };

  return (
    <aside
      className={`
        relative p-4 pt-6 h-full font-medium transition-all duration-300 ease-in-out 
        border-r border-text-50
        ${isSidebarOpen ? "w-64 overflow-y-auto" : "w-20"}
      `}
    >
      {/* Header */}
      <div
        className={`flex items-center pb-4 ${isSidebarOpen ? "justify-between" : "justify-center"
          }`}
      >
        <button
          onClick={toggleSidebar}
          className="flex justify-center items-center w-8 h-8 rounded-lg hover:bg-secondary-500 transition-colors"
          aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <IoIosMenu size={24} className="text-text-400 hover:text-white" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {mainMenuItems.map((item) => (
          <MenuItemComponent key={item.id} item={item} level={0} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
