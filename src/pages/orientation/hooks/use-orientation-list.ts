import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";
import { OrientationStatusType } from "../schema/orientation-schema";

export interface IOrientationListItem {
  id: string;
  candidate_name: string;
  candidate_job: string;
  employer_name: string;
  institute_name: string;
  orientation_date: string;
  orientation_location: string;
  status: OrientationStatusType;
}
type OrientationListResponse = IPaginationResponse<IOrientationListItem>;

const useOrientationList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: OrientationListResponse;
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
