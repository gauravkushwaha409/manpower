import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface ICountryListItem {
  id: string;
  country: string;
  capital: string;
  currency: string;
  language: string;
}
type CountryListResponse = IPaginationResponse<ICountryListItem>;

const useCountryList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: CountryListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.country.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.country.list,
  });

  return {
    countryListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useCountryList;
