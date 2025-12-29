import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface ITicketDetails {
  id: string;
  candidate_name: string;
  airline_name: string;
  flight_no: string;
  depature_date: string;
  ticket_file: string;
}
type TicketDetailsResponse = IApiDetailsResponse<ITicketDetails>;

const useTicketDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: TicketDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.ticket.update.replace(":id", id ?? ""),
      tag: apiTags.ticket.details,
    },
    {
      skip: !id,
    }
  );

  return { ticketDetails: data, isLoading };
};
export default useTicketDetails;
