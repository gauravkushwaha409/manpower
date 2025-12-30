import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface ITicketListItem {
  id: string;
  candidate_name: string;
  candidate_job: string;
  employer_name: string;
  airline_name: string;
  flight_no: string;
  depature_date: string;
  ticket_document: string;
}
type TicketListResponse = IPaginationResponse<ITicketListItem>;

const useTicketList = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: TicketListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.ticket.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.ticket.list,
  });

  return {
    ticketListResponse: data,
    isLoading,
    rowSelection,
    setRowSelection,
  };
};
export default useTicketList;
