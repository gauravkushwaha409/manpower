import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { PreApprovalDofeDetailsResponse } from "../interface/IPreApprovalDofe";

interface IDetailsProps {
  id: string;
}

export const useGetPreApprovalDofeDetails = ({ id }: IDetailsProps) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    refetch: refetchPreApprovalDofeDetails,
  } = useGetDataQuery<{
    data: PreApprovalDofeDetailsResponse;
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
