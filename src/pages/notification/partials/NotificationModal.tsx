"use client";

import { Bell, UserPlus, FileText, Globe, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useClickOutside } from "@/hooks/useClickOutside";
import useDisclosure from "@/hooks/useDisclousre";
import { useNotifications } from "../hooks/useNotifications";

const iconMap = {
  UserPlus: <UserPlus className="w-5 h-5 text-blue-500" />,
  FileText: <FileText className="w-5 h-5 text-blue-500" />,
  Globe: <Globe className="w-5 h-5 text-blue-500" />,
  Languages: <Languages className="w-5 h-5 text-blue-500" />,
};

export default function NotificationModal() {
  const { isOpen, toggle, close } = useDisclosure(false);
  const { notifications, unreadCount, markAllAsRead, markAsRead } =
    useNotifications();

  const modalRef = useClickOutside<HTMLDivElement>(close);

  const sortedNotifications = [...notifications].sort((a, b) => {
    if (a.read === b.read) return 0;
    return a.read ? 1 : -1;
  });

  return (
    <div className="relative" ref={modalRef}>
      <button
        onClick={toggle}
        className="p-2 rounded-full hover:bg-gray-100 relative cursor-pointer"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 min-w-[18px] h-5 px-1.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-medium text-gray-800">Notifications</h2>
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-500 hover:underline"
            >
              Mark all as read
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {sortedNotifications.map((item) => (
              <div
                key={item.id}
                onClick={() => markAsRead(item.id)}
                className={`flex items-start gap-3 p-4 border-b hover:bg-gray-100 cursor-pointer ${
                  item.read ? "bg-white" : "bg-gray-100"
                }`}
              >
                <div className="p-2 rounded-full border-2">
                  {iconMap[item.iconType]}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      item.read ? "text-gray-600" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm ${
                      item.read ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 border-t text-center">
            <Link
              to="/notifications"
              className="text-sm text-blue-500 hover:underline"
            >
              See all notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
