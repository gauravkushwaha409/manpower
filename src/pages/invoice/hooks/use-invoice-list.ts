import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IInvoiceListItem {
  id: string;
  invoice_no: string;
  candidate_name: string;
  referance_no: string;
  invoice_date: string;
  due_date: string;
  currency: string;
  exchange_rate_to_nrp: string;
  products: {
    product: string;
    quantity: string;
    rate: string;
    discount: string;
    tax: string;
  }[];
}
type InvoiceListResponse = IPaginationResponse<IInvoiceListItem>;

const useInvoiceList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: InvoiceListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.invoice.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.invoice.list,
  });

  return {
    invoiceListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};

export default useInvoiceList;
