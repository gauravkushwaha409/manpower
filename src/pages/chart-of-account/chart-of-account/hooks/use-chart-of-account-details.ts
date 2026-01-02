import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IChartOfAccountDetails {
  id: string;
  account_name: string;
}
type ChartOfAccountDetailsResponse =
  IApiDetailsResponse<IChartOfAccountDetails>;

const useChartOfAccountDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: ChartOfAccountDetailsResponse;
    isLoading: boolean;
  }>({
    url: endpoints.chartOfAccount.account.details.replace(":id", id),
    tag: apiTags.chartOfAccount.account.details,
  });
  return { chartOfAccountDetailResponse: data, isLoading };
};

export default useChartOfAccountDetails;
