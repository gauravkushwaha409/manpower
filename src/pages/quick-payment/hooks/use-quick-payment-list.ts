import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IQuickPaymentListItem {
  id: string;
  paid_to: string;
  paid_from: string;
  entry_no: string;
  reference: string;
  date: string;
  amount: string;
}
type QuickPaymentListResponse = IPaginationResponse<IQuickPaymentListItem>;

const useQuickPaymentList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: QuickPaymentListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.quickPayment.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.quickPayment.list,
  });
  return {
    quickPaymentListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};

export default useQuickPaymentList;
