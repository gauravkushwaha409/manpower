import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface ISubCategoryListItem {
  id: string;
  industry: string;
  category: string;
  sub_category: string;
  icon: string;
}
type SubCategoryListResponse = IPaginationResponse<ISubCategoryListItem>;
const useSubCategoryList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: SubCategoryListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.subCategory.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.subCategory.list,
  });

  return {
    subCategoryListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};

export default useSubCategoryList;
