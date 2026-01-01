import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IExpenseListItem {
  id: string;
  supplier: string;
  bill_no: string;
  reference_no: string;
  date: string;
  total: string;
}
type ExpenseListResponse = IPaginationResponse<IExpenseListItem>;
const useExpenseList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: ExpenseListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.expense.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.expense.list,
  });

  return {
    expenseListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useExpenseList;
