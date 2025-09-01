import React from "react";
import { SidebarData } from "../data";
import { NavLink, useLocation } from "react-router-dom";

const SidebarItem = ({ sidebarExpanded }: { sidebarExpanded: boolean }) => {
  const location = useLocation();

  return (
    <div className="relative transition-all duration-300 ease-in-out overflow-hidden py-7 px-3">
      {SidebarData.map((item) => (
        <NavLink
          to={item.path}
          key={item.id}
          className={({ isActive }) =>
            `relative flex items-center h-[50px] px-4 rounded-lg transition duration-300
            ${
              isActive
                ? "bg-primary-500 text-white"
                : "hover:bg-primary-500 hover:text-white"
            }
            ${!sidebarExpanded && "max-w-[60px]"}
            `
          }
        >
          {sidebarExpanded && (
            <span
              className={`absolute -left-3 top-0 h-full w-1 rounded-r-md transition-all duration-300
              ${
                item.path === location.pathname ? "bg-primary-500" : "opacity-0"
              }`}
            />
          )}

          <div className="flex items-center justify-center w-fit">
            {React.cloneElement(item.icon, {
              className: sidebarExpanded ? "h-5 w-5" : "h-6 w-6",
            })}
          </div>

          <span
            className={`
              text-sm font-medium ml-3 whitespace-nowrap 
              transition-all duration-300 ease-in-out
              ${
                sidebarExpanded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }
            `}
          >
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarItem;
