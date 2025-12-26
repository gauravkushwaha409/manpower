import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface ICompanyDetails {
  id: string;
}
type CompanyDetailsType = IApiDetailsResponse<ICompanyDetails>;
const useCompanyDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: CompanyDetailsType;
    isLoading: boolean;
  }>(
    {
      url: endpoints.company.details.replace(":id", id),
      tag: apiTags.company.details,
    },
    {
      skip: !id,
    }
  );
  return { companyDetails: data, isLoading };
};

export default useCompanyDetails;
