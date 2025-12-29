import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IShramListItem {
  id: string;
  candidate_name: string;
  institute_name: string;
  orientation_date: string;
  status: "Attended" | "Not-Attended";
}
type ShramListResponse = IPaginationResponse<IShramListItem>;

const useShramList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: ShramListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.shram.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.shram.list,
  });

  return {
    shramListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useShramList;
