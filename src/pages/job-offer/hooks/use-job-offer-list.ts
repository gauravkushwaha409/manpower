import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IJobOfferListItem {
  id: string;
  candidate: string;
  job: string;
  offer_letter_no: string;
  offer_date: string;
  joining_date: string;
  offer_document: string;
  employer_name: string;
  created_at: string;
}
type JobOfferListResponse = IPaginationResponse<IJobOfferListItem>;

const useJobOfferList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: JobOfferListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.jobOffer.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.jobOffer.list,
  });

  return {
    jobOfferListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useJobOfferList;
