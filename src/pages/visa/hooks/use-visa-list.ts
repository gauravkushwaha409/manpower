import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IVisaListItem {
  id: string;
  candidate: string;
  job: string;
  visa_type: string;
  application_date: string;
  approval_date: string;
  visa_expire: string;
  status: string;
  visa_file: string;
}
type VisaListResponse = IPaginationResponse<IVisaListItem>;

const useVisaList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: VisaListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.visa.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.visa.list,
  });

  return {
    visaListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useVisaList;
