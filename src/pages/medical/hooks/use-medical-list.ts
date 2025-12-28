import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IMedicalListItem {
  id: string;
  candidate: string;
}
type MedicalListResponse = IPaginationResponse<IMedicalListItem>;

const useMedicalList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: MedicalListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.medical.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.medical.list,
  });

  return {
    medicalListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useMedicalList;
