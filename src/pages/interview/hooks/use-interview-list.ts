import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IInterviewListItem {
  id: string;
  candidate: string;
}
type InterviewListResponse = IPaginationResponse<IInterviewListItem>;

const useInterviewList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: InterviewListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.interview.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.interview.list,
  });

  return {
    interviewListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useInterviewList;
