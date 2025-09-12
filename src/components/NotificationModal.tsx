"use client";

import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useClickOutside } from "@/hooks/useClickOutside";
import useDisclosure from "@/hooks/useDisclousre";
import { useGetNotifications } from "@/pages/notification/hooks/useGetNotifications";
import { NotificationList } from "@/pages/notification/partials/NotificationList";

export default function NotificationModal() {
  const { isOpen, toggle, close } = useDisclosure(false);
  const { unreadCount, markAllAsRead } = useGetNotifications();
  const modalRef = useClickOutside<HTMLDivElement>(close);

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
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-medium text-gray-800">Notifications</h2>
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-500 hover:underline"
            >
              Mark all as read
            </button>
          </div>

          <NotificationList layout="modal" />

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
