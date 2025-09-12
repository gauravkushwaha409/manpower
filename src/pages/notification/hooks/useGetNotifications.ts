"use client";

import { useState, useCallback } from "react";
import { initialNotifications} from "../../../data/notification";
import { useInfiniteScroll } from "@/utils/useInfiniteScroll";
import { INotification } from "../interface/INotification";

interface UseNotificationsProps {
  pageSize?: number;
}

export const useGetNotifications = ({
  pageSize = 10,
}: UseNotificationsProps = {}) => {
  const [notifications, setNotifications] =
    useState<INotification[]>(initialNotifications.slice(0, pageSize)); 
  const [page, setPage] = useState(2); 
  const [hasMore, setHasMore] = useState(
    initialNotifications.length > pageSize
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNext = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); 

      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const nextItems = initialNotifications.slice(start, end);

      if (nextItems.length > 0) {
        setNotifications((prev) => [
          ...prev,
          ...nextItems.filter(
            (n) => !prev.some((existing) => existing.id === n.id) 
          ),
        ]);
        setPage((prev) => prev + 1);
        setHasMore(end < initialNotifications.length);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to load notifications:", err);
      setError("Failed to load notifications");
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading, pageSize]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const infiniteScrollRef = useInfiniteScroll(fetchNext, isLoading);

  const refresh = () => {
    setNotifications(initialNotifications.slice(0, pageSize));
    setPage(2);
    setHasMore(initialNotifications.length > pageSize);
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    fetchNext,
    infiniteScrollRef,
    isLoading,
    hasMore,
    error,
    refresh,
  };
};
