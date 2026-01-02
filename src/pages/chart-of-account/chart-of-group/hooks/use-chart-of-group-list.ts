import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IChartOfGroupListItem {
  id: string;
  group_name: string;
  group_type: string;
  group_parent: string;
}
type ChartOfGroupListResponse = IPaginationResponse<IChartOfGroupListItem>;

const useChartOfGroupList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: ChartOfGroupListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.chartOfAccount.group.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.chartOfAccount.group.list,
  });

  return {
    chartOfGroupListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useChartOfGroupList;
