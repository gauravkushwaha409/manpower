"use client";

import { useGetNotifications } from "@/pages/notification/hooks/useGetNotifications";
import { NotificationList } from "./NotificationList";

export default function NotificationPage() {
  const { markAllAsRead } = useGetNotifications();

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

      <NotificationList layout="page" />
    </div>
  );
}
