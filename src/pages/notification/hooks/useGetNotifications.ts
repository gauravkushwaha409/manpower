"use client";

import { useState, useCallback } from "react";
import { initialNotifications } from "../../../data/notification";
import { useInfiniteScroll } from "@/utils/useInfiniteScroll";
import { INotification } from "../interface/INotification";

interface UseGetNotificationsProps {
  pageSize?: number;
}

export const useGetNotifications = ({
  pageSize = 10,
}: UseGetNotificationsProps = {}) => {
  const [notifications, setNotifications] =
    useState<INotification[]>(initialNotifications);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNext = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const start = (page - 1) * pageSize;
      const nextItems = initialNotifications.slice(start, start + pageSize);

      setNotifications((prev) => [...prev, ...nextItems]);
      setHasMore(start + pageSize < initialNotifications.length);
      setPage((prev) => prev + 1);
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
    setPage(1);
    setHasMore(true);
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
