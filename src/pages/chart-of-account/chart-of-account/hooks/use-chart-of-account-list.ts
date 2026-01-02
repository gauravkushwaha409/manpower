import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IChartOfAccountListItem {
  id: string;
  account_code: string;
  account_name: string;
  account_type: string;
  parent_group: string;
}
type ChartOfAccountListResponse = IPaginationResponse<IChartOfAccountListItem>;

const useChartOfAccountList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: ChartOfAccountListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.chartOfAccount.account.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.chartOfAccount.account.list,
  });

  return {
    chartOfAccountListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useChartOfAccountList;
