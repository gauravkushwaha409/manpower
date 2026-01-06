import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import Orientation from "@/types/orientation.types";

const useOrientationList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: Orientation.List;
    isLoading: boolean;
  }>({
    url: endpoints.orientation.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.orientation.list,
  });

  return {
    orientationListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useOrientationList;
