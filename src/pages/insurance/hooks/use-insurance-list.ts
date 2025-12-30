import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IInsuranceListItem {
  id: string;
  candidate_name: string;
  insurance_company: string;
  policy_no: string;
  valid_from: string;
  valid_to: string;
  document: string;
}
type InsuranceListResponse = IPaginationResponse<IInsuranceListItem>;

const useInsuranceList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: InsuranceListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.insurance.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.insurance.list,
  });

  return {
    insuranceListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useInsuranceList;
