import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IQuickPaymentDetails {
  id: string;
}
type QuickPaymentDetailsResponse = IApiDetailsResponse<IQuickPaymentDetails>;

const useQuickPaymentDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: QuickPaymentDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.quickPayment.update.replace(":id", id),
      tag: apiTags.quickPayment.details,
    },
    {
      skip: !id,
    }
  );
  return { quickPaymentDetails: data, isLoading };
};

export default useQuickPaymentDetails;
