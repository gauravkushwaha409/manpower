"use client";

import { UserPlus, FileText, Globe, Languages } from "lucide-react";
import { useGetNotifications } from "../hooks/useGetNotifications";
const iconMap = {
  UserPlus: <UserPlus className="w-5 h-5 text-blue-500" />,
  FileText: <FileText className="w-5 h-5 text-blue-500" />,
  Globe: <Globe className="w-5 h-5 text-blue-500" />,
  Languages: <Languages className="w-5 h-5 text-blue-500" />,
};

export default function NotificationPage() {
  const {
    notifications,
    markAsRead,
    markAllAsRead,
    infiniteScrollRef,
    isLoading,
    hasMore,
  } = useGetNotifications({ pageSize: 10 });

  const sortedNotifications = [...notifications].sort((a, b) => {
    if (a.read === b.read) return 0;
    return a.read ? 1 : -1;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-end mb-4">
        <button
          onClick={markAllAsRead}
          className="text-sm text-blue-500 hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div
        className="border max-h-[70vh] overflow-y-auto"
        ref={infiniteScrollRef}
      >
        {sortedNotifications.map((item) => (
          <div
            key={item.id}
            onClick={() => markAsRead(item.id)}
            className={`flex items-start gap-3 p-4 border-b cursor-pointer hover:bg-gray-100 ${
              item.read ? "bg-white" : "bg-gray-50"
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

        {isLoading && (
          <div className="p-4 text-center text-gray-500">Loading...</div>
        )}

        {!hasMore && notifications.length > 0 && (
          <div className="p-4 text-center text-gray-400">
            No more notifications
          </div>
        )}

        {notifications.length === 0 && !isLoading && (
          <div className="p-4 text-center text-gray-400">
            No notifications found
          </div>
        )}
      </div>
    </div>
  );
}
