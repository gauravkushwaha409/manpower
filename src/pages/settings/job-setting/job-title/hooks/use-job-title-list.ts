import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IJobTitleListItem {
  id: string;
  industry: string;
  category: string;
  sub_category: string;
  job_title: string;
  icon: string;
}
type JobTitleListResponse = IPaginationResponse<IJobTitleListItem>;

const useJobTitleList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: JobTitleListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.jobTitle.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.jobTitle.list,
  });

  return {
    jobTitleListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};

export default useJobTitleList;
