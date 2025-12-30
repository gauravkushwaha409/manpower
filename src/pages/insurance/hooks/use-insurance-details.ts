import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IInsuranceDetails {
  id: string;
  candidate_name: string;
  insurance_company: string;
  policy_no: string;
  valid_from: string;
  valid_to: string;
  document: string;
}
type InsuranceDetailsResponse = IApiDetailsResponse<IInsuranceDetails>;

const useInsuranceDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: InsuranceDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.insurance.update.replace(":id", id ?? ""),
      tag: apiTags.insurance.details,
    },
    {
      skip: !id,
    }
  );

  return { insuranceDetails: data, isLoading };
};
export default useInsuranceDetails;
