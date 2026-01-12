import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IDetailsProps {
  id: string;
}

type PreApprovalDetailsResponse = IApiDetailsResponse<IDetailsProps>

export const useGetPreApprovalDofeDetails = ({ id }: IDetailsProps) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    refetch: refetchPreApprovalDofeDetails,
  } = useGetDataQuery<{
    data: PreApprovalDetailsResponse,
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }>({
    url: endpoints.preApprovalDofe.details.replace("id", id),
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    refetchPreApprovalDofeDetails,
  };
};
