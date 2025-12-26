import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IDocumentListItem {
  id: string;
  country: string;
  document: string;
}
type DocumentListResponse = IPaginationResponse<IDocumentListItem>;

const useDocumentList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: DocumentListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.document.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.document.list,
  });

  return {
    documentListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useDocumentList;
