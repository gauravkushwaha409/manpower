import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OnChangeFn, PaginationState } from '@tanstack/react-table';

const PAGE = 'page';
const PAGE_SIZE = 'page-size';
export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize from URL
  const initialPage = Number(searchParams.get(PAGE) || 1);
  const initialPageSize = Number(searchParams.get(PAGE_SIZE) || 5);

  // Local state for React Table
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: initialPage,
    pageSize: initialPageSize,
  });

  // Sync state → URL
  const handlePaginationChange: OnChangeFn<PaginationState> = (updater) => {
    const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
    setPagination(newPagination);
    setSearchParams((prev) => {
      prev.set(PAGE, (newPagination.pageIndex + 1).toString());
      prev.set(PAGE_SIZE, newPagination.pageSize.toString());
      return prev;
    });
  };

  // Sync URL → state (when user manually edits query params)
  useEffect(() => {
    const page = Number(searchParams.get(PAGE) || 1);
    const pageSize = Number(searchParams.get(PAGE_SIZE) || 5);

    setPagination({
      pageIndex: page,
      pageSize,
    });
  }, [searchParams]);

  return { pagination, handlePaginationChange, setSearchParams };
};
