import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IPreApprovalDofeListItem {
  id: string;
  country: string;
  company: string;
  pre_approval_date: string;
  lt_number: string;
  chalani_number: string;
}
type PreApprovalDofeListResponse =
  IPaginationResponse<IPreApprovalDofeListItem>;

const usePreApprovalDofeList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: PreApprovalDofeListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.preApprovalDofe.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.preApprovalDofe.list,
  });

  return {
    preApprovalDofeListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};

export default usePreApprovalDofeList;
